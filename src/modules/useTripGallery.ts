import { db, auth, storage } from '../firebase'
import { collection, onSnapshot, addDoc, deleteDoc, updateDoc, doc, query, DocumentData, where } from "firebase/firestore";
import { ref as storeRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ref } from 'vue';
import useImageHandler from './useImageHandler';

const useTripGallery = () => {
    type TripImage = { id: string, tripId: string, imageUrl: string, author: string }
    const tripImage = ref({} as TripImage);
    const tripImages = ref([] as TripImage[]);
    const tripImagesDataRef = collection(db, "tripImages");
    const snackbar = ref({ show: false, text: '' });
    const { handleImageResizing } = useImageHandler();


    const getTripImagesData = (tripId: string) => {
        const q = query(tripImagesDataRef, where("tripId", "==", tripId));
        onSnapshot(q, (snapshot) => {
            tripImages.value = snapshot.docs.map((doc: DocumentData) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
        })
    }

    const addTripImage = async (imageUrl: string) => {
        if (!auth.currentUser) return alert('Please login to create a trip');
        console.log(tripImage.value)
        await addDoc(tripImagesDataRef, {
            tripId: tripImage.value.tripId,
            imageUrl: imageUrl,
            author: auth.currentUser.uid
        }).then(() => {
            console.log("Document successfully written!");
        })
    }

    const deleteTripImage = async (id: string) => {
        await deleteDoc(doc(tripImagesDataRef, id));
    }

    const editTripImage = async (trip: TripImage) => {
        await updateDoc(doc(tripImagesDataRef, tripImage.value.id), {
            title: tripImage.value.tripId,
            titleDescription: tripImage.value.imageUrl,
            tripImage: tripImage.value.author

        });
    };


    const uploadFile = async (e: Event) => {
        if (auth.currentUser) {
            const target = e.target as HTMLInputElement;
            const files = target.files;

            if (!files || !files[0])
                return;

            try {
                Array.from(files).forEach(file => {
                    if (file.size > 5000000) {
                        snackbar.value.show = true, snackbar.value.text = 'One or more files exceed maximum size of 5mb'
                        console.log(file.size)
                        throw new Error('File size too large')
                    }
                    if (file.type != 'image/png' && file.type != 'image/jpeg') {
                        snackbar.value.show = true, snackbar.value.text = 'File type not supported'
                        throw new Error('File type not supported')
                    }
                });
            }
            catch (error) {
                setTimeout(() => {
                    snackbar.value.show = false
                }, 10000);
                return;
            }

            Array.from(files).forEach(file => {

                const fileBlob = handleImageResizing(file, 300);
                const storageRef = storeRef(storage, 'tripGalleryImages/' + file.name);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            addTripImage(downloadURL);
                        })
                    }
                )
            });
        }
    }


    return {
        snackbar,
        tripImage,
        tripImages,
        getTripImagesData,
        addTripImage,
        deleteTripImage,
        editTripImage,
        uploadFile,

    }
}
export default useTripGallery
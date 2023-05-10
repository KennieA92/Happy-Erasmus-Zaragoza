import { db, auth, storage } from '../firebase'
import { collection, onSnapshot, addDoc, deleteDoc, updateDoc, doc, query, DocumentData } from "firebase/firestore";
import { ref as storeRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ref } from 'vue';

const useTrips = () => {
    type Trip = { id: string, title: string; titleDescription: string, tripImage: string, location: string, startDate: Date, endDate: Date, description: string, images: [string] }
    const trip = ref({} as Trip);
    const trips = ref([] as Trip[]);
    const tripsDataRef = collection(db, "trips");


    const getTripsData = () => {
        onSnapshot(tripsDataRef, (snapshot) => {
            trips.value = snapshot.docs.map((doc: DocumentData) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
        })
    }

    const addTrip = async () => {
        if (!auth.currentUser) return alert('Please login to create a trip');
        console.log(trip)
        await addDoc(tripsDataRef, {
            title: trip.value.title,
            titleDescription: trip.value.titleDescription,
            tripImage: trip.value.tripImage,
            location: trip.value.location,
            startDate: trip.value.startDate,
            endDate: trip.value.endDate,
            description: trip.value.description
        }).then(() => {
            console.log("Document successfully written!");
            trip.value = {} as Trip;
        })
    }

    const deleteTrip = async (id: string) => {
        await deleteDoc(doc(tripsDataRef, id));
    }

    const editTrip = async (trip: any) => {
        await updateDoc(doc(tripsDataRef, trip.value.id), {
            title: trip.value.title,
            titleDescription: trip.value.titleDescription,
            tripImage: trip.value.tripImage,
            location: trip.value.location,
            startDate: trip.value.startDate,
            endDate: trip.value.endDate,
            description: trip.value.description,
            images: trip.value.images,

        });
    };


    const uploadFile = async (e: Event) => {
        if (auth.currentUser) {
            const target = e.target as HTMLInputElement;
            const files = target.files;

            if (!files || !files[0])
                return;

            //if(files[0].size > 100) return alert('File size too large');
            const fileToUpload = files[0];

            const storageRef = storeRef(storage, 'tripImages/' + fileToUpload.name);
            const uploadTask = uploadBytesResumable(storageRef, fileToUpload);

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
                        trip.value.tripImage = downloadURL;
                    })
                }
            )
        }
    }


    return {
        trip,
        trips,
        getTripsData,
        addTrip,
        deleteTrip,
        editTrip,
        uploadFile

    }
}
export default useTrips
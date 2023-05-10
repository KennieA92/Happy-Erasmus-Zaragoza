import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import useTrips from "./useTrips";
import { auth, storage } from '../firebase'

const useImageStorage = () => {
    const { trip } = useTrips();

    const uploadFile = async (e: Event) => {
        if (auth.currentUser) {
            const target = e.target as HTMLInputElement;
            const files = target.files;

            if (!files || !files[0])
                return;

            const fileToUpload = files[0];

            const storageRef = ref(storage, 'tripImages/' + fileToUpload.name);
            const uploadTask = uploadBytesResumable(storageRef, fileToUpload);

            return uploadTask.on('state_changed',
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
                        return downloadURL;
                    })
                }
            )
        }
    }

    const deleteFile = async (tripImage: string) => {
        const fileRef = ref(storage, tripImage);
        deleteObject(fileRef).then(() => {
            console.log('File deleted successfully');
        }).catch(() => {
            console.log("No file to delete");
        });
    }

    return {
        uploadFile,
        deleteFile
    }
}
export default useImageStorage
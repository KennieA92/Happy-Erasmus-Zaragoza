import { auth } from '../firebase.js'
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const useUsers = () => {
    const name = ref('');
    const surname = ref('');
    const email = ref('');
    const password = ref('');
    const user = ref();
    const router = useRouter();

    const login = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                user.value = userCredential.user;
                router.push('/events');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
            });
    }

    const logout = () => {
        debugger;
        signOut(auth).then(() => {
            user.value = null;
        }).catch((error) => {
            console.log(error);
        });
    }

    const registerUser = () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                if (auth.currentUser) {
                    updateProfile(auth.currentUser, {
                        displayName: name.value + ' ' + surname.value,
                    }).then(() => {
                        router.push('/');
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password or email.');
                } else if (errorCode === 'auth/email-already-in-use') {
                    alert('Email already in use.');
                } else if (errorCode === 'auth/invalid-email') {
                    alert('Invalid email.');
                } else {
                    alert(errorMessage);
                }
            });
    }


    const isLoggedIn = ref(false);
    const isUserLoggedIn = async () => {
        user.value = auth.currentUser
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedIn.value = true;
            } else {
                isLoggedIn.value = false;
            }
        });
    }

    return {
        login,
        logout,
        registerUser,
        isLoggedIn,
        isUserLoggedIn,
        email,
        password,
        user,
        name,
        surname,
    }
}

export default useUsers
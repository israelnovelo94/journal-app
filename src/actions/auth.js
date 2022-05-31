import { firebase, GoogleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

import Swal from 'sweetalert2'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));

                dispatch(finishLoading());

            }).catch(err => {

                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
                // console.log(err);
                dispatch(finishLoading());

            });
    }
}

export const startRegisterWithEmailPasswordName = (name, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({user}) => {
                console.log(user);

                await user.updateProfile({
                    displayName: name
                });
                dispatch( login(user.uid, user.displayName) )
            }).catch( (err) => {
                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            });
        }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( GoogleAuthProvider )
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
    }
}

export const login = (uid, displayName) => (
    {
        type: types.Login,
        payload: {
            uid,
            displayName
        }
    }

)

export const startLogout = () => {
    
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
}

export const logout = () => {
    return {
        type: types.Logout
    }
}

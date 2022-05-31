import { firebase, GoogleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
            }).catch(err => {
                console.log(err);
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
                console.log(err);
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

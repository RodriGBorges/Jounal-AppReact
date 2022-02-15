import { signInWithPopup, getAuth } from "firebase/auth";
import { googleAuthProvider } from "../firebase/config";
import { types } from "../types";

export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => {

        setTimeout(() => {
            dispatch(login(123123, 'Patito'))
        }, 3000)
    }

}

//action que se dispara en loginscreen
export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(getAuth(), googleAuthProvider)
            .then(({user}) => {
                //console.log(userCredential);
                // nos trae las credenciales del usuario (todo)
                dispatch(login(user.uid, user.displayName))
            })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

/* 
export const login = (uid, displayName) => ({
    type: type.login,
    payload: {
        uid,
        displayName
    }
}) //con parentesis se aplica un return implícito

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}
*/
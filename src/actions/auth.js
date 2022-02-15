import { types } from "../types";

export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => {

        setTimeout(() => {
            dispatch(login(123123, 'Patito'))
        }, 3000)
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
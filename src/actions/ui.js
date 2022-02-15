import { types } from "../types";

export const setError = (error) => ({
    type: types.uiSetError,
    payload: error
})

export const removeError = () => ({
    type: types.uiRemoveError
})
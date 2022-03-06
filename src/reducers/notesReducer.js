import { types } from "../types";

//estado inicial que va a tener el listado de las notas
const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.noteAddNew:

            return state;
        case types.noteActive:

            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:

            return {
                ...state,
                notes: [...action.payload]
            }
        default:
            return state;
    }
}
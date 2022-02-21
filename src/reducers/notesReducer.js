import { types } from "../types";

//estado inicial que va a tener el listado de las notas
const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.types) {
        case types.noteAddNew:
            
            return state;
    
        default:
            return state;
    }
}
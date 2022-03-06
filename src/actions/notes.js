import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { types } from '../types';


export const activeNote = (id, note) => ({
    type: types.noteActive,
    payload: {
        id,
        ...note
    }

})

export const startNewNotes = () => {
    
    return async (dispatch, getState) => {

        try {
            const {uid} = getState().auth;

            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime()
            }
        
        
            const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote)
            // console.log(doc.id);
            dispatch(activeNote(doc.id, newNote))
            
        } catch (error) {
            console.log(error);
        }

    }
}

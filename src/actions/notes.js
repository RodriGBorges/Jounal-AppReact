import { addDoc, collection, getDocs } from 'firebase/firestore';
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

export const loadNotes = () => {
    return async (dispatch, getState) => {

        try {
            const { uid } = getState().auth;
            const notes = [];
    
            //pedido de todas las notas a la db de firestone
            let query = await getDocs(collection(db, `${uid}/journal/notes`));
    
            // console.log(query)
            query.forEach(doc => {
                // console.log(doc.data());
                notes.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            dispatch(setNotes(notes));
            
        } catch (error) {
            console.log(error);
        }

    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})
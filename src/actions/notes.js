import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';


export const startNewNotes = () => {
    
    return async (dispatch, getState) => {

        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote)
        console.log(doc);
    }
}
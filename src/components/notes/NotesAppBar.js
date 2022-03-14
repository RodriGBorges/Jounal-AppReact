import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveNote } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)

    const handleSave = () => {
        dispatch(saveNote(active))
    }

    return (
        <div className="notes__appbar">
            <span>9 de febrero 2022</span>

            <div>
                <button className="btn">
                    Imagen
                </button>

                <button 
                className="btn"
                onClick={handleSave}
                >
                    Guardar
                </button>
            </div>
        </div>
    )
}

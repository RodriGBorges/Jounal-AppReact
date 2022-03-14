import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note} = useSelector(state => state.notes);
    // console.log(note);

    const activeId = useRef(note.id);

    const [formValues, handleInputChange, reset] = useForm(note);

    const {title, body} = formValues;

    //Cuando la nota activa cambia resetea los datos del journal y setea la nota activa
    useEffect(() => {

        if(note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch(activeNote(note.id, {...formValues}))

    }, [formValues])
    
    

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    name='title'
                    placeholder="Escribe el título"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    name='body'
                    placeholder="¿Qué pasó hoy?"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                </div>


            </div>

        </div>
    )
}

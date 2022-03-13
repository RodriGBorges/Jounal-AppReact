import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const { active: note} = useSelector(state => state.notes);
    // console.log(note);

    const activeId = useRef(note.id);

    const [formValues, handleInputChange, reset] = useForm(note);

    const {title, body} = formValues;

    useEffect(() => {

        if(note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id
        }

    }, [note, reset])
    

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

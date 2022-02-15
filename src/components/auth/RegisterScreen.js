import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm({
        name: 'Pececito',
        email: 'prueba@gmail.com',
        password: '123123',
        password2: '123123'
    })

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault()
        // console.log(name, email, password, password2);
        if(isFormValid()) {
            console.log('Formulario correcto');
        }
    }

    const isFormValid = () => {

        if(name.trim().length === 0) {
            console.log('Nombre requerido');
            return false
        }

        if(!validator.isEmail(email)) {
            console.log('Email inválido');
            return false
        }

        if(password.length < 6) {
            console.log('La contraseña debe tener mínimo 6 caracteres');
            return false
        }

        if(password !== password2) {
            console.log('Las contraseñas no coinciden');
            return false
        }

        return true
    }

    return (
        <>
            <h3 className="auth__title">Registro</h3>
            

            <form onSubmit={handleRegister}>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Registrar
                </button>



                <Link 
                    to="/auth/login"
                    className="link"
                >
                    ¿Estás registrado/a?
                </Link>

            </form>
        </>
    )
}

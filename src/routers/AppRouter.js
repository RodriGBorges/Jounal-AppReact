import React, { useEffect } from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(getAuth(), user => {
            //console.log(user)
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName))
            }
        })
        
    }, [dispatch]);


    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route 
                        path="/auth/*"
                        element={ <AuthRouter/> }
                    />

                    <Route 
                        path="/"
                        element={ <JournalScreen/> }
                    />

                </Routes>
            </div>
        </BrowserRouter>
    )
}

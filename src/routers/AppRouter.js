import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
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

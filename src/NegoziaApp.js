import React from 'react';
import {AppRouter} from '../src/router/AppRouter';
import { ContextProvider } from './components/ContextProvider';


export const NegoziaApp = () => {
    return (
        <ContextProvider>
            <AppRouter/>
            
        </ContextProvider>
    )
}

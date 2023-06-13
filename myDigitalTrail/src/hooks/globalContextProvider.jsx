import React, { useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const GlobalContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("teste");


    return (
        <GlobalContext.Provider value={{

            theme,



        }}>
            {children}
        </GlobalContext.Provider>
    );
};

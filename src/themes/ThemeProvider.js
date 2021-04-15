import React,  { useState, createContext } from 'react'
import {Provider as PaperProvider } from 'react-native-paper'
import { Dark } from './Themes'

/* Contexto (context) disponibiliza uma forma de passar dados entre a árvore de componentes 
   sem precisar passar props manualmente em cada nível. */
export const AppContext = createContext(null)

export default ({children}) => {
    const [tema, setTema] = useState(Dark)

    return(
        <AppContext.Provider value={{tema: tema, setTema}}>
            <PaperProvider theme={tema}>
                {children}
            </PaperProvider>
        </AppContext.Provider>
    )
}
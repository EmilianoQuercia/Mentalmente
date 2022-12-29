import { createContext, useState } from "react";

const GlobalContext = createContext()

const GlobalContextProvider = (props) =>{
    const [puntos, setPuntos] = useState(0)
    const [input,setInput] = useState('')
    const [modoJuego, setModoJuego] = useState('')

    return(
        <GlobalContext.Provider value={{puntos, setPuntos, input, setInput, modoJuego,setModoJuego}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider, GlobalContext}
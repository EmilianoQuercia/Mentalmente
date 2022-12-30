import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext()

const GlobalContextProvider = (props) =>{
    const [puntos, setPuntos] = useState(0)
    const [input,setInput] = useState('')
    const [modoJuego, setModoJuego] = useState('')

    const musica = new Audio('./assets/sound/musicaPrincipal.mp3')
    const sonidoGanar = new Audio('./assets/sound/correcto.mp3')
    const sonidoPerder = new Audio('./assets/sound/incorrecto.wav')
    const sonidoRecord = new Audio('./assets/sound/ganador.mp3')
    
    const [music,setMusic] = useState(musica)
    const [soundGanar,setSoundGanar] = useState(sonidoGanar)
    const [soundPerder,setSoundPerder] = useState(sonidoPerder)
    const [soundRecord,setSoundRecord] = useState(sonidoRecord)
    
    
    return(
        <GlobalContext.Provider value={{
            puntos, setPuntos, input, setInput, 
            modoJuego, setModoJuego, music, soundGanar, soundPerder, soundRecord 
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider, GlobalContext}
import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import './ajustes.css'

const Ajustes = () => {

    const {music,soundGanar,soundPerder,soundRecord, inputM, setInputM,setInputS, inputS} = useContext(GlobalContext)
    
   
   

    const controlMusica = (e) =>{
        music.volume = e.target.value/100
        localStorage.setItem('volumenMusica', music.volume)
        let m = music.volume
        setInputM(m*100)
        
    }

    const controlSonidos = (e) =>{
        soundGanar.volume = e.target.value/100
        soundPerder.volume = e.target.value/100
        soundRecord.volume = e.target.value/100
        soundGanar.play()
        localStorage.setItem('volumenSonidos', soundGanar.volume)
        let s = soundGanar.volume
        setInputS(s*100)
    }


    
    return (
    <div className="pantallaAjustes">
        <h3>MUSICA 🎶</h3>
        <input type="range" name="inputMusica" className='controlInput' value={inputM} onChange={controlMusica}/>
        <h3>SONIDOS 🔊</h3>
        <input type="range" name="inputSonidos" className='controlInput' value={inputS} onChange={controlSonidos}/>
        <Link to={'/menu'}><button >VOLVER</button></Link>
    </div>
    );
}

export default Ajustes;

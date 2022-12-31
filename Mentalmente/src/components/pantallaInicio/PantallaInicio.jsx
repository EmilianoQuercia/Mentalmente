import React, { useContext} from 'react';
import './pantallaInicio.css'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
const PantallaInicio = () => {
    
    const {music,soundGanar,soundPerder,soundRecord, setInputM, setInputS} = useContext(GlobalContext)
    
  
  

    const comenzarJuego = () =>{
        if (localStorage.getItem('volumenMusica') || localStorage.getItem('volumenSonidos')){
            let vM = localStorage.getItem('volumenMusica')
            let vS = localStorage.getItem('volumenSonidos')
            music.volume = vM
            soundGanar.volume = vS
            soundPerder.volume = vS
            soundRecord.volume = vS
            setInputM(vM*100)
            setInputS(vS*100)
        }
        music.play()
    }

    return (
        
        <div className='inicio'>
            <img className='logoPrincipal' src="./assets/img/logoJuego-min.png" alt="logo_Mentalmente" />
            <Link to={'/menu'}><button onClick={comenzarJuego} className='btnComenzar'>JUGAR</button></Link>
        </div>
        
    );
}

export default PantallaInicio;

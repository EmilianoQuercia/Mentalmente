import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import './ajustes.css'

const Ajustes = () => {

    const {music,soundGanar,soundPerder,soundRecord} = useContext(GlobalContext)



    const controlMusica = (e) =>{
        music.volume = e.target.value/100
        localStorage.setItem('volumenMusica', music.volume)
    }

    const controlSonidos = (e) =>{
        soundGanar.volume = e.target.value/100
        soundPerder.volume = e.target.value/100
        soundRecord.volume = e.target.value/100
        soundGanar.play()
        localStorage.setItem('volumenSonidos', soundGanar.volume)
    }
    
    return (
    <div className="pantallaAjustes">
        <h3>MUSICA 🎶</h3>
        <input type="range" name="inputMusica" onChange={controlMusica}/>
        <h3>SONIDOS 🔊</h3>
        <input type="range" name="inputSonidos" id="inputSonido" onChange={controlSonidos}/>
        <Link to={'/menu'}><button id="btnVolver">VOLVER</button></Link>
    </div>
    );
}

export default Ajustes;

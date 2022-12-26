import React from 'react';
import { Link } from 'react-router-dom';
import './ajustes.css'

const Ajustes = () => {
    return (
    <div className="pantallaAjustes">
        <h3>MUSICA</h3>
        <input type="range" name="inputMusica" id="inputMusica"/>
        <h3>SONIDOS</h3>
        <input type="range" name="inputSonidos" id="inputSonido"/>
        <Link to={'/menu'}><button id="btnVolver">VOLVER</button></Link>
    </div>
    );
}

export default Ajustes;

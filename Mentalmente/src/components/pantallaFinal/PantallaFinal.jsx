import React from 'react';
import './pantallaFinal.css'
import { Link } from 'react-router-dom';

const PantallaFinal = ({puntos}) => {
    return (
        <div id="pantallaFinal" className="final">
            <h2 className="puntos">TABLA MEJORES PUNTAJES </h2>
            <p id="puntos" className="msj">Estos son los {puntos} </p>
            <div className="tablaPuntos">
                <p>JUGADOR</p>
                <p>PUNTAJE</p>
            </div>
            <div className="tablaPuntos">
                <p id="nombreGuardados" className="msjNombre"></p>
                <p id="puntosGuardados" className="msjPuntos"></p>
            </div>
            <Link to={'/'}><button className="reinicio" id="reiniciar">REINICIAR</button></Link>
        </div>
    );
}

export default PantallaFinal;

import React from 'react';
import './pantallaInicio.css'
import { Link } from 'react-router-dom';
const PantallaInicio = () => {
    return (
        <div className="contenedorPrincipal">
            <div className='inicio'>
                <img className='logoPrincipal' src="./assets/img/logoJuego-min.png" alt="logo_Mentalmente" />
                <Link to={'/menu'}><button className='btnComenzar'>JUGAR</button></Link>
            </div>
        </div>
    );
}

export default PantallaInicio;

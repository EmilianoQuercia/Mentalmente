import React from 'react';
import './pantallaMenu.css'

const MenuContrareloj = () => {
    return (
        <div className='modoJuego'>
            <h4 className="h4Registro">CONTRA RELOJ</h4>
            <p>- Tienes 60 seg para responder</p>
            <p>- Elija la respuesta correcta para sumar puntos</p>
            <p>- Por cada respuesta correcta se aumentara el tiempo 2 segundos</p>
            <p>- Por cada respuesta incorrecta perdera 2 segundos</p>
           
        </div>
    );
}

export default MenuContrareloj;

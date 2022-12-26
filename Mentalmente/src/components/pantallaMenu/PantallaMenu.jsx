import React from 'react';
import { useState } from 'react';
import './pantallaMenu.css'
import { Link } from 'react-router-dom';

const PantallaMenu = () => {
    const [input,setInput] = useState('')
    console.log(input)

    return (
        <div className='registro'>
            <div className="divAjustes">
                <Link to={'/ajustes'}><button className="btnAjustes" id="btnAjustes"><img src="./assets/img/ajuste.png" alt=""/></button></Link>
            </div>
            <div className="divRegistro">
                <h3 className="nombre">INGRESE SU NOMBRE</h3>
                <input type="text" name="usuario" className="inputUsuario" onChange={(e)=>{setInput(e.target.value)}}/>
            </div>
            <h4 className="h4Registro">INDICACIONES DEL JUEGO</h4>
            <p>- Tienes 60 seg para responder</p>
            <p>- Elija la respuesta correcta para sumar puntos</p>
            <p>- Por cada respuesta correcta se aumentara el tiempo 2 segundos</p>
            <p>- Por cada respuesta incorrecta perdera 2 segundos</p>
            <h4 className="h4Registro">BUENA SUERTE!!!!</h4>
            <Link to='/juego' style={{textAlign:'center'}}>{
                input === ''?
                 <button className="btnComenzar" disabled>Comenzar Juego</button>
                :<button className="btnComenzar">Comenzar Juego</button>
            }</Link>
        </div>
    );
}

export default PantallaMenu;

import React, { useContext } from 'react';
import { useState } from 'react';
import './pantallaMenu.css'
import { Link } from 'react-router-dom';
import MenuContrareloj from './MenuContrareloj';
import MenuSoloCorrectas from './MenuSoloCorrectas';
import { GlobalContext } from '../../context/GlobalContext';

const PantallaMenu = () => {
    const {input, setInput, modoJuego, setModoJuego} = useContext(GlobalContext)
    

    const modoReloj = (e) =>{
        const p = e.target.value
        setModoJuego(p)
        console.log(p)
    }
    const modoCorrectas = (e) =>{
        const p = e.target.value
        setModoJuego(p)
        console.log(p)
    }
    
    return (
        <div className='registro'>
            <div className="divAjustes">
                <Link to={'/ajustes'}><button className="btnAjustes" id="btnAjustes"><img src="./assets/img/ajuste.png" alt=""/></button></Link>
            </div>
            <div className="divRegistro">
                <h3 className="nombre">INGRESE SU NOMBRE</h3>
                <input type="text" name="usuario" className="inputUsuario" onChange={(e)=>{setInput(e.target.value)}}/>
            </div>
                <h3 style={{textAlign:'center'}}>ELIJA EL MODO DE JUEGO</h3>
            
            <div className="containerModoJuego">
                <input type='radio' name='modoJuego' className='inputSelect' id='1' value={'ContraReloj'} onChange={modoReloj} />
                <label htmlFor="1" className='selectorModoJuego'><MenuContrareloj/></label>
                <input type='radio' name='modoJuego' id='2' className='inputSelect' value={'SoloCorrectas'} onChange={modoCorrectas} />
                <label htmlFor="2" className='selectorModoJuego' ><MenuSoloCorrectas/></label>
            </div>

            <h4 className="h4Registro">BUENA SUERTE!!!!</h4>
            <Link to={`/${modoJuego}`} style={{textAlign:'center'}}>{
                input === '' || modoJuego === ''?
                 <button className="btnComenzar" disabled>Comenzar Juego</button>
                :<button className="btnComenzar">Comenzar Juego</button>
            }</Link>
        </div>
    );
}

export default PantallaMenu;

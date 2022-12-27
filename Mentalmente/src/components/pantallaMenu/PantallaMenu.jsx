import React from 'react';
import { useState } from 'react';
import './pantallaMenu.css'
import { Link } from 'react-router-dom';
import MenuContrareloj from './MenuContrareloj';
import MenuSoloCorrectas from './MenuSoloCorrectas';

const PantallaMenu = () => {
    const [input,setInput] = useState('')
   

    
    return (
        <div className='registro'>
            <div className="divAjustes">
                <Link to={'/ajustes'}><button className="btnAjustes" id="btnAjustes"><img src="./assets/img/ajuste.png" alt=""/></button></Link>
            </div>
            <div className="divRegistro">
                <h3 className="nombre">INGRESE SU NOMBRE</h3>
                <input type="text" name="usuario" className="inputUsuario" onChange={(e)=>{setInput(e.target.value)}}/>
            </div>
            
            <input type='radio' name='modoJuego' className='inputSelect' id='1' />
            <label htmlFor="1"><MenuContrareloj/></label>
        
            <input type='radio' name='modoJuego' id='2' className='inputSelect' />
            <label htmlFor="2" ><MenuSoloCorrectas/></label> 

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

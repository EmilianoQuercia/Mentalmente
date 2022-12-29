import React, { useContext, useEffect, useState } from 'react';
import './pantallaFinal.css'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

let tablaPuntos = []

const PantallaFinal = () => {
    const navigate = useNavigate()
    const {puntos, setPuntos, input, modoJuego} = useContext(GlobalContext)
    const [tablaJuego, setTablaJuego] = useState('')
 

    useEffect(() => {
        if (input === ''){
            return
        }else{

            guardarPuntos(puntos,input,modoJuego)
        }
    }, []);

    const guardarPuntos=(puntos,usuario, modoJuego)=>{

        let datosJugador = {puntaje:puntos, Jugador:usuario, Juego:modoJuego}
        //chequea que haya algo cargado en el storage
        if (JSON.parse(localStorage.getItem('tabla'))){
            tablaPuntos = JSON.parse(localStorage.getItem('tabla'))
    
            // si tenemos el puntaje mas alto nos tira un mensaje de alerta
            if(datosJugador.puntaje>tablaPuntos[0].puntaje){
                // sonidoRecord.play()
                Swal.fire({
                    icon: 'success',
                    iconColor: '#29bf12',
                    title: 'NUEVO RECORD',
                    text: `FELICITACION ${datosJugador.Jugador} Tenes el mejor Puntaje`,
                    color: '#000',
                    timer: '5000',
                    showConfirmButton: false,
                    background: '#ffaaaa'
                })  
            }
        }
        
        tablaPuntos.push(datosJugador)
    
        //acomodamos los puntajes de mayor a menor
        let mejorPuntaje = tablaPuntos.sort((a,b)=> b.puntaje-a.puntaje)
    
        //Cuando la tabla supera los 5 mejores puntajes va borrando el ultimo
        mejorPuntaje.length>5 && mejorPuntaje.pop()
        
        const enJSON = JSON.stringify(mejorPuntaje)
        localStorage.setItem('tabla',enJSON)

        pintarPuntos()
    }
    
    
    
    const pintarPuntos = () =>{

        const pintarTabla = JSON.parse(localStorage.getItem('tabla'))
        const tabla =  pintarTabla.map((p,i) => (
            <div key={i} className="tablaPuntos">
                <span  className="msjNombre">{p.Jugador}</span>
                <span  className="msjNombre">{p.Juego}</span>
                <span  className="msjPuntos">{p.puntaje}</span> 
            </div>
        ) )
       console.log(pintarTabla)
       console.log(tabla)
       setTablaJuego(tabla)
       
    }

    return (
        <div className="final">
            <h2 className="puntos">TABLA MEJORES PUNTAJES </h2>
            <p className="msj">JUGADOR: {input} -- PUNTOS: {puntos}</p>
            <div className="tablaPuntos">
                <p>JUGADOR</p>
                <p>MODO JUEGO</p>
                <p>PUNTAJE</p>
            </div>
                {tablaJuego}    
            <button onClick={()=>{setPuntos(0),navigate('/'), location.reload() }} className="reinicio">REINICIAR</button>
        </div>
    );
}

export default PantallaFinal;

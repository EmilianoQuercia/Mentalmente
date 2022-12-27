import React, { useState, useEffect } from 'react';
import './pantallaPreguntas.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'



let puntaje = 10

const PantallaPreguntas = () => {

    
    let navigate = useNavigate()
    const [pregunta, setPregunta] = useState()
    const [objPregunta, setObjPregunta] = useState()
    const [img, setImg] = useState()
    const [opcion1, setOpcion1] = useState([])
    const [opcion2, setOpcion2] = useState([])
    const [opcion3, setOpcion3] = useState([])
    const [opcion4, setOpcion4] = useState([])
    const [time,setTime] = useState(10)

    const timer = ()=>setTime(time -1)
    
    useEffect(() => {
        cargarPreguntas()
    }, []);
    
    useEffect(() => {
        
        if (time <= 0){
            
            navigate('/final')
            
            return;}
            const tiempo = setInterval(timer,1000)
            return ()=>clearInterval(tiempo)
            
        }, [time])
        
       
        const cargarPreguntas = async () =>{
            
            
            const response = await fetch('./assets/data/baseDato.json');
            const BD = await response.json()
            
            let indicePregunta = Math.round(Math.random()*BD.length)
            
            let objPregunta = BD[indicePregunta]
            let opciones = [...objPregunta.otrasOpciones]
            
            opciones.push(objPregunta.respuesta)
            setObjPregunta(objPregunta)
            opciones.sort(()=>Math.random()-0.5)
        setPregunta(objPregunta.pregunta)
        setImg(objPregunta.imagen)
        setOpcion1(opciones[0])
        setOpcion2(opciones[1])
        setOpcion3(opciones[2])
        setOpcion4(opciones[3])
        
    }
    
    const seleccionarOpcion=(index)=>{
        if (index === objPregunta.respuesta){
            Swal.fire({
                icon: 'success',
                iconColor: '#29bf12',
                color: '#000',
                title: 'CORRECTA',
                timer: '2000',
                showConfirmButton: false,
                background: '#ffaaaa'
            })   
            setTime(time + 4)
            puntaje++
            console.log(puntaje)
            setTimeout(cargarPreguntas,2000)
        } else{
            Swal.fire({
                icon: 'error',
                iconColor: '#f00',
                color: '#000',
                title: 'INCORRECTO',
                text: `La respuesta es ${objPregunta.respuesta}`,
                timer: '2000',
                showConfirmButton: false,
                background: '#ffaaaa'
            })  
            
            setTimeout(cargarPreguntas,2000)
            console.log('INCORRECTA')
            
        }
        
    }
    
    return (
        <div id="pantallaJuego" className="tablero">
            <div id="tiempo" className="reloj">{time}</div>
            <div className="cajaPregunta" id="cajaPregunta">
                <span id="pregunta">{pregunta}</span>
                <img id="imagen" src={img} alt="" />
                <span className="correcto" id="correcto">correcto</span>
            </div>
            <button className="opcion" onClick={()=>{seleccionarOpcion(opcion1)}}>{opcion1}</button>
            <button className="opcion"onClick={()=>{seleccionarOpcion(opcion2)}}>{opcion2}</button>
            <button className="opcion"onClick={()=>{seleccionarOpcion(opcion3)}}>{opcion3}</button>
            <button className="opcion"onClick={()=>{seleccionarOpcion(opcion4)}}>{opcion4}</button>
       
        </div>
    );
}

export default PantallaPreguntas;
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Ajustes from "../components/Ajustes/Ajustes";
import PantallaFinal from "../components/pantallaFinal/PantallaFinal";
import PantallaInicio from "../components/pantallaInicio/PantallaInicio";
import PantallaMenu from "../components/pantallaMenu/PantallaMenu";
import PantallaPreguntas from "../components/pantallaPreguntas/PantallaPreguntas";
import SoloCorrectas from "../components/pantallaPreguntas/SoloCorrectas";

const AppRoutes = () =>{
    // const [puntos, setPuntos] = useState(0)
    return(
        <>
         <Routes>
            <Route path='/' element={<PantallaInicio />}/>
            <Route path='/menu' element={<PantallaMenu/>}/> 
            <Route path='/Contra Reloj' element={<PantallaPreguntas />}/>
            <Route path='/Solo Correctas' element={<SoloCorrectas />}/>
            <Route path='/ajustes' element={<Ajustes/>}/>
            <Route path='/final' element= {<PantallaFinal />}/>
          </Routes>
        </>
    )
}

export default AppRoutes;
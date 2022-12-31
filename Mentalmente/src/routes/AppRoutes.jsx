
import { Routes, Route } from "react-router-dom";

import Ajustes from "../components/Ajustes/Ajustes";
import PantallaFinal from "../components/pantallaFinal/PantallaFinal";
import PantallaInicio from "../components/pantallaInicio/PantallaInicio";
import PantallaMenu from "../components/pantallaMenu/PantallaMenu";
import ContraReloj from "../components/pantallaPreguntas/ContraReloj";
import SoloCorrectas from "../components/pantallaPreguntas/SoloCorrectas";

const AppRoutes = () =>{
   
    return(
        <>
         <Routes>
            <Route path='/' element={<PantallaInicio />}/>
            <Route path='/menu' element={<PantallaMenu/>}/> 
            <Route path='/ContraReloj' element={<ContraReloj />}/>
            <Route path='/SoloCorrectas' element={<SoloCorrectas />}/>
            <Route path='/ajustes' element={<Ajustes/>}/>
            <Route path='/final' element= {<PantallaFinal />}/>
          </Routes>
        </>
    )
}

export default AppRoutes;
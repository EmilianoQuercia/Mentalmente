import './App.css'
import PantallaInicio from './components/pantallaInicio/PantallaInicio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PantallaMenu from './components/pantallaMenu/PantallaMenu'
import PantallaPreguntas from './components/pantallaPreguntas/PantallaPreguntas'
import Ajustes from './components/Ajustes/Ajustes'
import PantallaFinal from './components/pantallaFinal/PantallaFinal'
import SoloCorrectas from './components/pantallaPreguntas/SoloCorrectas'
function App() {
 

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PantallaInicio />}/>
            <Route path='/menu' element={<PantallaMenu/>}/> 
            <Route path='/reloj' element={<PantallaPreguntas/>}/>
            <Route path='/correctas' element={<SoloCorrectas/>}/>

            <Route path='/ajustes' element={<Ajustes/>}/>
            <Route path='/final' element= {<PantallaFinal/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App

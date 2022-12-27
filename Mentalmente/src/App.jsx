import './App.css'
import PantallaInicio from './components/pantallaInicio/PantallaInicio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PantallaMenu from './components/pantallaMenu/PantallaMenu'
import PantallaPreguntas from './components/pantallaPreguntas/PantallaPreguntas'
import Ajustes from './components/Ajustes/Ajustes'
import PantallaFinal from './components/pantallaFinal/PantallaFinal'
function App() {
 

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PantallaInicio />}/>
            <Route path='/menu' element={<PantallaMenu/>}/> 
            <Route path='/juego' element={<PantallaPreguntas/>}/>
            <Route path='/ajustes' element={<Ajustes/>}/>
            <Route path='/final' element= {<PantallaFinal/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App

import './App.css'
import PantallaInicio from './components/pantallaInicio/PantallaInicio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PantallaMenu from './components/pantallaMenu/PantallaMenu'
function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PantallaInicio />}/>
            <Route path='/menu' element={<PantallaMenu/>}/> 

          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App

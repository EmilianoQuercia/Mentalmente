import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { GlobalContextProvider } from './context/GlobalContext'

function App() {
  

  return (
      <div className="App">
        <BrowserRouter>
        <GlobalContextProvider>
          <AppRoutes/>
        </GlobalContextProvider>
        </BrowserRouter>
      </div>
  )
}

export default App

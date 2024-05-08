import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Inicio } from './routes/Inicio'
import { Nosotros } from './routes/Nosotros'
import { Cursos } from './routes/Cursos'
import { Talleres } from './routes/Talleres'
import { Biblioteca } from './routes/Biblioteca'
import { Photoshop } from './routes/Photoshop'

function App() {

  return (
    <>
      <Header/>
            
      <Routes>
        <Route path='/' element={ <Inicio/> }></Route>
        <Route path='/nosotros' element={ <Nosotros/> }></Route>
        <Route path='/cursos' element={ <Cursos/> }></Route>
        <Route path='/talleres' element={ <Talleres/> }></Route>
        <Route path='/biblioteca' element={ <Biblioteca/> }></Route>
        <Route path="/*" element={ <Navigate to='/'/> }></Route>
        <Route path='/cursos/photoshop' element={ <Photoshop/> }></Route>
      </Routes>
    </>
  )
}

export default App

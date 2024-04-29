import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { Body } from './Body'
import { Inicio } from './routes/Inicio'
import { Nosotros } from './routes/Nosotros'
import { Cursos } from './routes/Cursos'
import { Talleres } from './routes/Talleres'
import { Biblioteca } from './routes/Biblioteca'

function App() {

  return (
    <>
      <Header/>      
      {/*<Body/>*/}

      <Routes>
        <Route path='/' element={ <Inicio/> }></Route>
        <Route path='/nosotros' element={ <Nosotros/> }></Route>
        <Route path='/cursos' element={ <Cursos/> }></Route>
        <Route path='/talleres' element={ <Talleres/> }></Route>
        <Route path='/biblioteca' element={ <Biblioteca/> }></Route>
        <Route path="/*" element={ <Navigate to='/'/> }></Route>
      </Routes>
    </>
  )
}

export default App

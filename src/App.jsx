import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Inicio } from './routes/Inicio'
import { Nosotros } from './routes/Nosotros'
import { Cursos } from './routes/Cursos'
import { Talleres } from './routes/Talleres'
import { Biblioteca } from './routes/Biblioteca'
import { Photoshop } from './routes/CursoPhotoshop'
import { Ilustracion } from './routes/RutaIlustracion'
import { Especialidad } from './routes/RutaEspecialidad'
import { Software } from './routes/RutaSoftware'

function App() {

  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/' element={ <Inicio/> }></Route>
        <Route path='/nosotros' element={ <Nosotros/> }></Route>
        <Route path='/cursos' element={ <Cursos/> }></Route>
        <Route path='/cursos/ilustracion' element={ <Ilustracion/> }></Route>
        <Route path='/cursos/especialidades' element={ <Especialidad/> }></Route>
        <Route path='/cursos/software' element={ <Software/> }></Route>
        <Route path='/cursos/software/photoshop' element={ <Photoshop/> }></Route>
        <Route path='/talleres' element={ <Talleres/> }></Route>
        <Route path='/biblioteca' element={ <Biblioteca/> }></Route>
        <Route path="/*" element={ <Navigate to='/'/> }></Route>
      </Routes>
    </>
  )
}

export default App

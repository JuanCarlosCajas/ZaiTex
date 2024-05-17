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
import { PersonajeManga } from './routes/CursoPersonajeManga'
import { AutoCad } from './routes/CursoAutoCad'
import { Marketing } from './routes/CursoMarketing'
import { CorelDraw } from './routes/CursoCorelDraw'
import { Ilustrator } from './routes/CursoIlustrator'
import { TallerIlustracionDigital } from './routes/TallerIlustracionDigital'
import { TallerDibujoTradicional } from './routes/TallerDibujoTradicional'
import { Redes } from './components/Redes'


function App() {

  return (
    <>

      <Redes/>
      <Header/>
      <Routes>
        <Route path='/' element={ <Inicio/> }></Route>
        <Route path='/nosotros' element={ <Nosotros/> }></Route>
        <Route path='/cursos' element={ <Cursos/> }></Route>
        <Route path='/cursos/ilustracion' element={ <Ilustracion/> }></Route>
        <Route path='/cursos/ilustracion/personajes-de-manga' element={ <PersonajeManga/> }></Route>
        <Route path='/cursos/especialidades' element={ <Especialidad/> }></Route>
        <Route path='/cursos/especialidades/autocad' element={ <AutoCad/> }></Route>
        <Route path='/cursos/especialidades/marketing' element={ <Marketing/> }></Route>
        <Route path='/cursos/software' element={ <Software/> }></Route>
        <Route path='/cursos/software/photoshop' element={ <Photoshop/> }></Route>
        <Route path='/cursos/software/coreldraw' element={ <CorelDraw/> }></Route>
        <Route path='/cursos/software/illustrator' element={ <Ilustrator/> }></Route>
        <Route path='/talleres' element={ <Talleres/> }></Route>
        <Route path='/talleres/dibujo-tradicional' element={ <TallerDibujoTradicional/> }></Route>
        <Route path='/talleres/ilustracion-digital' element={ <TallerIlustracionDigital/> }></Route>
        <Route path='/biblioteca' element={ <Biblioteca/> }></Route>
        <Route path="/*" element={ <Navigate to='/'/> }></Route>
      </Routes>
    </>
  )
}

export default App

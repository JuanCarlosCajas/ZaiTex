import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { Body } from './Body'
import { Inicio } from './routes/Inicio'
import { Nosotros } from './routes/Nosotros'
import { Cursos } from './routes/Cursos'

function App() {

  return (
    <>
      <Header/>      
      {/*<Body/>*/}

      <Routes>
        <Route path='/Zaitex' element={ <Inicio/> }></Route>
        <Route path='/Zaitex/nosotros' element={ <Nosotros/> }></Route>
        <Route path='/Zaitex/cursos' element={ <Cursos/> }></Route>
        <Route path='/Zaitex/*' element={ <Navigate to='/Zaitex'/> }></Route>
      </Routes>
    </>
  )
}

export default App

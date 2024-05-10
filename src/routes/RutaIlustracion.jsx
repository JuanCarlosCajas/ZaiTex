import '../css/RutaIlustracion.css'

import { Footer } from '../components/Footer'
import { Formulario } from '../components/Formulario'
import { TipoCurso } from '../components/TipoCurso'
import cursoHeader from '../img/cursoHeader.png'

import personajeManga from '../img/Ilustracion/personajeManga.png'

export function Ilustracion(){
    return (
        <div className="Ilustracion-container">
            <img src={cursoHeader} alt="" className='cursoHeader'/>
            <h1 className='tituloCursos'>Cursos</h1>
            <section className='bodyHeader'>
                <main className='options-container'>
                    <p className='dibujoIlustracion'>Dibujo / Ilustración</p>
                    <div className='row-1'>
                        <TipoCurso 
                        imagen={personajeManga} 
                        nombre="Personajes de manga"
                        path="/cursos/ilustracion/personajes-de-manga"/>
                    </div>
                </main>
                <aside className='formulario-container'> 
                    <Formulario/>
                </aside>
            </section>
            <Footer modo="completo"/>
        </div>
    )
}
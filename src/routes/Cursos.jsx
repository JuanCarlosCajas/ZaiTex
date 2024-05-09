import cursoHeader from '../img/cursoHeader.png'

/* Logos de cada tipo de curso */ 
import especialidadesLogo from '../img/especialidades.svg'
import ilustracionLogo from '../img/ilustracionLogo.svg'
import softwareLogo from '../img/softwareLogo.svg'

import ilustraciones from '../img/ilustraciones.png'
import software from '../img/software.png'
import especialidades from '../img/especialidades.png'


import '../css/Cursos.css'
import { TipoCurso } from '../components/TipoCurso'
import { Formulario } from '../components/Formulario'
import { Footer } from '../components/Footer'

export function Cursos(){
    
    return(
        <>
            <div className="cursos-container">
                <img src={cursoHeader} alt="" className='cursoHeader'/>
                <h1 className='tituloCursos'>Cursos</h1>
                <section className='bodyHeader'>
                    <main className='options-container'>
                        <div className='row-1'>
                            <TipoCurso 
                            imagen={ilustraciones} 
                            logo={ilustracionLogo} 
                            nombre="Ilustración y dibujo"
                            path="/cursos/ilustracion"/>
                            <TipoCurso 
                            imagen={software} 
                            logo={softwareLogo} 
                            nombre="Software"
                            path="/cursos/software"/>
                        </div>
                        <div className='row-2'>
                            <TipoCurso 
                            imagen={especialidades} 
                            logo={especialidadesLogo} 
                            nombre="Especialidades"
                            path="/cursos/especialidades"/>
                        </div>
                    </main>
                    <aside className='formulario-container'>
                        <Formulario />
                    </aside>
                </section>
                <Footer modo="completo"/>
            </div>
        </>
    )
}
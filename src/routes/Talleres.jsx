import { TipoCurso } from '../components/TipoCurso'
import '../css/Talleres.css'

import IlustracionDigital from '../img/tallerIlustracionDigital/IlustracionDigital.jpg'
import DibujoTradicional from '../img/tallerDibujoTradicional/DibujoTradicional.jpg'
import headerTaller from '../img/Taller/headerTaller.png'
import { Formulario } from '../components/Formulario'
import { Footer } from '../components/Footer'

export function Talleres(){
    
    
    return(
        <>
            <div className='cursos-container'>
                <img src={headerTaller} alt="" className='cursoHeader' />
                <h1 className='tituloTaller'>Talleres</h1>
                <section className='bodyHeader'>
                    <main className='options-container'>
                        <div className='row-1'>
                            <TipoCurso
                            imagen={DibujoTradicional}
                            nombre="Dibujo Tradicional"
                            path="/talleres/dibujo-tradicional"
                            />
                            <TipoCurso
                            imagen={IlustracionDigital}
                            nombre="Ilustracion Digital"
                            path="/talleres/ilustracion-digital"
                            />
                        </div>
                    </main>
                    <aside className='formulario-container'>
                        <Formulario/>
                    </aside>
                </section>
                <Footer modo="completo"/>
            </div>
        </>
    )
}
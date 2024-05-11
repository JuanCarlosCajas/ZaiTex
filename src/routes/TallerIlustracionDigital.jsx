
import headerIlustracion from '../img/tallerIlustracionDigital/headerIlustracionDigital.jpg'
import DibujoTradicional from '../img/tallerDibujoTradicional/DibujoTradicional.jpg'

import { Formulario } from '../components/Formulario'
import { AboutCourse } from '../components/AboutCourse'
import { DurationDate } from '../components/DurationDate'
import { TipoCurso } from '../components/TipoCurso'
import { SemiFooter } from '../components/SemiFooter'
import { Footer } from '../components/Footer'

export function TallerIlustracionDigital(){
    return(
        <>
            <div className='Course-container'>
                <img src={headerIlustracion} alt="" className='headerCourse'/>
                <section className='titulo-container'>
                    <h1>Dibujo Tradicional</h1>
                </section>
                <section className='body-Course'>
                    <aside className='form-container'>
                        <Formulario/>
                    </aside>
                    <main className='Course'>
                        <div className='brochure-container'>
                            <button type="button" className='brochure-button'>Plan de Estudios</button>
                        </div>

                        <AboutCourse
                        pregunta1="Acerca del Taller"
                        descripcion="xploraremos cómo dar vida a tus creaciones con técnicas avanzadas de dibujo digital. Desde el diseño inicial hasta los toques finales, aprenderás a crear personajes memorables con estilo anime."
                        />

                        <div className='bodyCourse-container'>
                            <DurationDate
                            parrafo1="Adolecente a mas "
                            parrafo2="de 15 años a mas"
                            parrafo3="Sábados de"
                            parrafo4="6:45 pm a 8:00 pm"
                            parrafo5="2"
                            parrafo6="meses"
                            parrafo7="Próximamente"/>
                        </div>
                        

                        <div className='secondTitle'>
                            <strong>CONOCE</strong><span>NUESTROS OTROS TALLERES</span>
                        </div>

                        <div className='tipoCurso-container'>
                            <TipoCurso
                            path="/talleres/dibujo-tradicional"
                            nombre="Dibujo Tradicional"
                            imagen={DibujoTradicional}
                            />
                        </div>
                        <SemiFooter curso="Ilustración Digital"/>
                    </main>
                </section>
                <Footer modo="completo" />
            </div>
        </>
    )
}
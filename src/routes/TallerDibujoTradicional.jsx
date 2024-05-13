import headerTradicional from '../img/tallerDibujoTradicional/headerTradicional.jpg'
import IlustracionDigital from '../img/tallerIlustracionDigital/IlustracionDigital.jpg'

import '../css/Talleres.css'

import { Formulario } from '../components/Formulario'
import { AboutCourse } from '../components/AboutCourse'
import { DurationDate } from '../components/DurationDate'
import { TipoCurso } from '../components/TipoCurso'
import { SemiFooter } from '../components/SemiFooter'
import { Footer } from '../components/Footer'

export function TallerDibujoTradicional(){
    return(
        <>
            <div className='Course-container'>
                <img src={headerTradicional} alt="" className='headerCourse'/>
                <section className='titulo-container'>
                    <h1>Dibujo Tradicional</h1>
                </section>
                <section className='body-Course'>
                    <aside className='form-container'>
                        <Formulario/>
                    </aside>
                    <main className='Course'>
                        <div className='brochure-container'>
                            <a href='https://drive.google.com/file/d/1XiP2NHepH51e8ogT25zciHaspwzB6MDv/view' target='_blank' className='brochure-button'>Plan de Estudios</a>
                        </div>

                        <AboutCourse
                        pregunta1="Acerca del Taller"
                        descripcion="Sumérgete en la belleza atemporal del lápiz y el papel mientras exploras las técnicas clásicas de dibujo. Desde el trazo inicial hasta los detalles finales, este taller te guiará a través de los fundamentos del dibujo, permitiéndote desarrollar tu creatividad y habilidades artísticas"
                        />
                        <div className='duration-container'>
                            <DurationDate
                            parrafo1="Adolecente a mas "
                            parrafo2="de 15 años a mas"
                            parrafo3="Sábados de"
                            parrafo4="2:00 pm a 3:30 pm"
                            parrafo5="2"
                            parrafo6="meses"
                            parrafo7="Próximamente"
                            />
                        </div>

                        <div className='secondTitle'>
                            <strong>CONOCE</strong><span>NUESTROS OTROS TALLERES</span>
                        </div>

                        <div className='tipoCurso-container'>
                            <TipoCurso
                            path="/talleres/ilustracion-digital"
                            nombre="Ilustración Digital"
                            imagen={IlustracionDigital}
                            />
                        </div>
                        <SemiFooter tipo="Taller" curso="Dibujo Tradicional"/>
                    </main>
                </section>
                <Footer modo="completo" />
            </div>
        </>
    )
}
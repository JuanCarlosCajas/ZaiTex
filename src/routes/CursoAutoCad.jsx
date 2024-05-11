import headerAutoCad from '../img/cursoAutoCad/headerAutoCad.png'
import logoAutoCad from '../img/cursoAutoCad/logoAutoCad.svg'
import primeraFoto from '../img/cursoAutoCad/primeraFoto.svg'
import primerBeneficio from '../img/cursoAutoCad/Benefit_1.png'
import segundoBeneficio from '../img/cursoAutoCad/Benefit_2.png'
import tercerBeneficio from '../img/cursoAutoCad/Benefit_3.png'

import { Footer } from '../components/Footer'
import { Formulario } from '../components/Formulario'
import { AboutCourse } from '../components/AboutCourse'
import { BenefitItem } from '../components/BenefitItem'
import { DurationDate } from '../components/DurationDate'
import { Plan } from '../components/PlanEstudios'
import { SemiFooter } from '../components/SemiFooter'

export function AutoCad(){
    return(
        <>
            <div className='Course-container'>
                <img src={headerAutoCad} alt="" className='headerCourse'/>
                <section className='titulo-container'>
                    <img src={logoAutoCad} alt="" width={"80px"} />
                    <h1>AutoCAD para Interiores</h1>
                </section>
                <section className='body-Course'>
                    <aside className='form-container'>
                        <Formulario/>
                    </aside>
                    <main className='Course'>
                        <div className='brochure-container'>
                            <button type="button" className='brochure-button'>Brochure</button>
                        </div>

                        <AboutCourse 
                        pregunta1="En qué consiste el curso de Marketing Digital?"
                        descripcion="El curso de AutoCAD para interiores se centra en enseñar a los estudiantes cómo utilizar la plataforma de AutoCAD, un software de diseño asistido por computadora (CAD), específicamente para el diseño de interiores."
                        imagen={primeraFoto}
                        />
                        <div className='bodyCourse-container'>
                            <h1>¿Por qué estudiar AutoCAD para interiores en ZaiTex?</h1>
                            <div className='Benefit-container'>
                                <BenefitItem
                                imagen={primerBeneficio}
                                titulo="Domina AutoCAD"
                                descripcion="Puedes crear representaciones detalladas de tus diseños de interiores. Esto ayuda a los clientes a visualizar cómo se verá el espacio una vez completado, lo que puede facilitar la toma de decisiones y reducir malentendidos."
                                />
                                <BenefitItem
                                imagen={segundoBeneficio}
                                titulo="Eficiencia"
                                descripcion="Agiliza el proceso de diseño al permitirte crear y modificar dibujos de manera rápida y precisa. Esto puede ahorrar tiempo en comparación con los métodos de diseño tradicionales."
                                />
                                <BenefitItem
                                imagen={tercerBeneficio}
                                titulo="Compatibilidad"
                                descripcion="Es ampliamente utilizado en la industria de la arquitectura y el diseño de interiores. Dominar esta herramienta te permite trabajar de manera más efectiva con otros profesionales y empresas en el campo."
                                />
                            </div>
                            <DurationDate
                            titulo1="Duración"
                            descripcion1="40 horas académicas (1 mes aproximadamente)"
                            titulo2="Horarios"
                            descripcion2="Proximamente"
                            />
                            <h1>Plan de Estudios</h1>
                            <Plan
                            modo="AutoCad"
                            titulo1="Fundamentos de Autocad y Conceptos Básicos de Diseño Interiores."
                            beneficio1="Introducción a AutoCAD: Interfaz y herramientas básicas."
                            beneficio2="Dibujo y edición de líneas, arcos y círculo."
                            beneficio3="Manejo de capas y propiedadesde objetos."
                            beneficio4="Creación y edición de objetos 2D."
                            titulo2="Diseño Interior Básico"
                            beneficio5="Conceptos básicos de diseño de interiores."
                            beneficio6="Dibujo de planos de planta y distribución de espacios."
                            beneficio7="Representación de mobiliario y elementos decorativos."
                            beneficio8="Creación de planos de elevación y secciones."
                            beneficio9="Introducción a la iluminación y diseño de iluminación interior."
                            titulo3="Proyectos de Diseño Interior"
                            beneficio10="Desarrollo de proyectos de diseño interior."
                            beneficio11="Presentación de proyectos utilizando Autocad."
                            beneficio12="Análisis de casos de estudio y proyectos reales."
                            beneficio13="Preparación de portafolio de diseño interior."
                            titulo4="Aplicación Práctica en Proyectos de Diseño Interior"
                            beneficio14="Trabajo práctico en proyectos de diseño interior."
                            beneficio15="Asesoramiento individualizado para proyectos en curso."
                            beneficio16="Preparación de presentaciones finales."
                            />
                        </div>
                        <SemiFooter curso="AutoCAD para Interiores"/>
                    </main>
                </section>
                <Footer modo="completo"/>
            </div>
        </>
    )
}
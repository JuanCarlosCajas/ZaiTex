import headerMarketing from '../img/cursoMarketing/headerMarketing.png'
import logoPremiere from '../img/cursoMarketing/logoPremierPro.svg'
import primeraFoto from '../img/cursoMarketing/primeraFoto.svg'
import primerBeneficio from '../img/cursoMarketing/Benefit_1.png'
import segundoBeneficio from '../img/cursoMarketing/Benefit_2.png'
import tercerBeneficio from '../img/cursoMarketing/Benefit_3.png'

import { Footer } from '../components/Footer'
import { Formulario } from '../components/Formulario'
import { AboutCourse } from '../components/AboutCourse'
import { BenefitItem } from '../components/BenefitItem'
import { DurationDate } from '../components/DurationDate'
import { Plan } from '../components/PlanEstudios'
import { SemiFooter } from '../components/SemiFooter'

export function Marketing(){
    return(
        <>
            <div className='Course-container'>
                <img src={headerMarketing} alt="" className='headerCourse' />
                <section className='titulo-container'>
                    <img src={logoPremiere} alt="" width={"70px"} />
                    <h1>Marketing Digital</h1>
                </section>
                <section className='body-Course'>
                    <aside className='form-container'>
                        <Formulario/>
                    </aside>
                    <main className='Course'>
                        <div className='brochure-container'>
                            <a href='https://drive.google.com/file/d/1-YJD8aLcgr1QMKpY6ncplPwQCK4OgzVi/view' target='_blank' className='brochure-button'>Plan de Estudios</a>
                        </div>

                        <AboutCourse 
                        pregunta1="En qué consiste el curso de Marketing Digital?"
                        descripcion="El curso de Marketing Digital se centra en enseñar a los participantes estrategias y técnicas para promocionar productos, servicios o marcas a través de medios digitales."
                        imagen={primeraFoto}
                        />

                        <div className='bodyCourse-container'>
                            <h1>¿Por qué estudiar Marketing Digital en ZaiTex?</h1>
                            <div className='Benefit-container'>
                                <BenefitItem
                                imagen={primerBeneficio}
                                titulo="Domina Adobe Premier Pro"
                                descripcion="Adobe Premiere Pro es una herramienta poderosa para la edición de video. Aprender a usar Premiere Pro te permitirá crear contenido visualmente atractivo para tus estrategias de marketing digital."
                                />
                                <BenefitItem
                                imagen={segundoBeneficio}
                                titulo="Redes Sociales"
                                descripcion="Estrategias para promocionar productos o servicios en plataformas de redes sociales como Facebook, Instagram, Twitter, LinkedIn, etc."
                                />
                                <BenefitItem
                                imagen={tercerBeneficio}
                                titulo="SEO (Optimización para Motores de Búsqueda)"
                                descripcion="Estrategias y técnicas para mejorar la visibilidad y el ranking de un sitio web en los resultados de búsqueda orgánica de los motores de búsqueda como Google."
                                />
                            </div>

                            <DurationDate
                            parrafo1="Adolecente a mas "
                            parrafo2="de 18 años a mas"
                            parrafo3="Martes y Jueves de"
                            parrafo4="7:00 pm a 9:30 pm"
                            parrafo5="1"
                            parrafo6="mes"
                            parrafo7="Próximamente"
                            />

                            <h1>Plan de Estudios</h1>
                            <Plan
                            modo="marketingDigital"
                            titulo1="Introducción al Marketing Digital."
                            beneficio1="Principales plataformas y canales digitales:características y audiencias."
                            beneficio2="Estrategias de marketing en redes sociales."
                            beneficio3="Creación de un plan de marketing para una empresa."
                            beneficio4="Campañas exitosas en redes sociales."
                            titulo2="Optimización de Videos"
                            beneficio5="Creación y optimización de una página de empresa en Facebook. "
                            beneficio6="Estrategias de contenido en Facebook: publicaciones, anuncios y videos."
                            beneficio7="Análisis de métricas y seguimiento de resultados."
                            beneficio8="Práctica: Creación de contenido para Facebook utilizando Premier Pro."
                            beneficio9="Revisión de proyectos y retroalimentación."
                            titulo3="Facebook Marketing."
                            beneficio10="Estrategias efectivas de marketing en Twitter."
                            beneficio11="Creación de contenido viral en Twitter."
                            beneficio12="Introducción a TikTok y su potencial para el marketing."
                            beneficio13="Estrategias de contenido para TikTok."
                            beneficio14="Práctica: Creación de contenido para Twitter y TikTok utilizando Premier Pro."
                            beneficio15="Revisión de proyectos y retroalimentación."
                            titulo4="Cierre de Ventas y Estrategias de Conversión"
                            beneficio16="Fundamentos del proceso de ventas y técnicas de cierre."
                            beneficio17="Integración del marketing digital con el proceso de ventas."
                            beneficio18="Optimización de embudos de conversión."
                            beneficio19="Estrategias para aumentar la tasa de conversión."
                            beneficio20="Presentación de Proyectos Finales Implementación del plan de marketing digital creado."
                            />
                        </div>

                        <SemiFooter curso="Marketing digital" />
                    </main>
                </section>
                <Footer modo="completo" />
            </div>
        </>
    )
}
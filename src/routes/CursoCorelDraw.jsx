import { Formulario } from '../components/Formulario'
import { AboutCourse } from '../components/AboutCourse'
import { BenefitItem } from '../components/BenefitItem'
import { SemiFooter } from '../components/SemiFooter'

import headerCorelDrawBody from '../img/cursoCorelDraw/headerCorelDraw.png'
import logoCorelDraw from '../img/cursoCorelDraw/logoCorelDraw.svg'
import primeraFoto from '../img/cursoPhotoshop/primeraFoto.png'
import primerBeneficio from '../img/cursoIlustrator/Benefit_1.png'
import segundoBeneficio from '../img/cursoIlustrator/Benefit_2.png'
import tercerBeneficio from '../img/cursoIlustrator/Benefit_3.png'
import { DurationDate } from '../components/DurationDate'
import { Plan } from '../components/PlanEstudios'
import { Footer } from '../components/Footer'


export function CorelDraw(){
    return(
        <>
            <div className="Course-container">
                <img src={headerCorelDrawBody} alt="" className='headerCourse'/>
                <section className='titulo-container'>
                    <img src={logoCorelDraw} alt="" width={"70px"}/>
                    <h1>Corel Draw</h1>
                </section>
                <section className='body-Course'>
                    <aside className='form-container'>
                        <Formulario/>
                    </aside>
                    <main className='Course'>
                        <div className='brochure-container'>
                            <a href='https://drive.google.com/file/d/1ifSdegk0rUhngHVv6t-PE4cwPDhslQMX/view' target='_blank' className='brochure-button'>Plan de Estudios</a>
                        </div>

                        <AboutCourse 
                        pregunta1="En qué consiste el curso de Corel Draw?"
                        descripcion="El curso de Corel Draw proporciona las herramientas necesarias para desarrollar y plasmar conceptos gráficos mediante la exploración de gráficos vectoriales, lo cual es fundamental para el branding. Durante el curso, los estudiantes aprenden a crear piezas gráficas tanto digitales como impresas. Al finalizar el curso de Corel Draw, los estudiantes son capaces de crear una variedad de piezas gráficas, tales como logos en diferentes formatos, tarjetas de presentación, plantillas para redes sociales, y brochures o flyers. Utilizan el software Corel Draw para diseñar y desarrollar su propia marca personal."
                        imagen={primeraFoto}
                        />

                        <div className='bodyCourse-container'>
                            <h1>¿Por qué estudiar Corel Draw en ZaiTex?</h1>
                            <div className='Benefit-container'>
                                <BenefitItem
                                imagen={primerBeneficio}
                                titulo="Domina Corel Draw"
                                descripcion="Este curso enseña el uso efectivo de vectores, tipografías, composición, color y proporciones en la creación de material gráfico."
                                />
                                <BenefitItem
                                imagen={segundoBeneficio}
                                titulo="Crea piezas publicitarias"
                                descripcion="Para imprentas o agencias publicitarias y/o digitales."
                                />
                                <BenefitItem
                                imagen={tercerBeneficio}
                                titulo="Desarrolla contenido"
                                descripcion="Orientado a la creación de publicidad en redes sociales, medios y contenido digital utilizando las herramientas adquiridas."
                                />
                            </div>

                            <DurationDate
                            parrafo1="Adolecente a mas "
                            parrafo2="de 18 años a mas"
                            parrafo3="Martes y Jueves"
                            parrafo4="7:45 pm a 10:00 pm"
                            parrafo5="1"
                            parrafo6="mes"
                            parrafo7="Próximamente"
                            />

                            <h1>Plan de Estudios</h1>

                            <Plan
                            modo="corelDraw"
                            titulo1="Fundamentos de CorelDraw"
                            beneficio1="Introducción a CorelDRAW y suinterfaz."
                            beneficio2="Configuración del lienzo y herramientas de navegación."
                            beneficio3="Manipulación de formas y creación de formas complejas."
                            beneficio4="Trabajo con texto y formato de texto."
                            titulo2="Diseño grafico básico"
                            beneficio5="Principios de diseño de logotipos."
                            beneficio6="Creación de logotipos utilizando formas y texto."
                            beneficio7="Diseño de folletos utilizando plantillas predefinidas."
                            beneficio8="Conceptos básicos de gráficos vectoriales."
                            titulo3="Diseño Grafico Avanzado"
                            beneficio9="Diseño de carteles: principios y práctica."
                            beneficio10="Diseño de packaging y etiquetas."
                            beneficio11="Preparación de archivos para impresión."
                            titulo4="Proyecto Final"
                            beneficio12="Trabajo en un proyecto personal que integre todas las habilidades aprendidas."
                            beneficio13="Sesiones de tutoría y retroalimentación individualizada."
                            beneficio14="Revisión de proyectos personales."
                            beneficio15="Preparación y presentación de trabajos."
                            beneficio16="Evaluación y retroalimentación final."/>
                        </div>
                        <SemiFooter tipo="Curso" curso="Corel Draw"/>
                    </main>
                </section>
                <Footer modo="completo"/>
            </div>
        </>
    )
}
import photoshopBody from '../img/headerPhotoshop.png'
import logoIlustrator from '../img/cursoIlustrator/logoIlustrator.svg'
import primeraFoto from '../img/cursoPhotoshop/primeraFoto.png'

import primerBeneficio from '../img/cursoIlustrator/Benefit_1.png'
import segundoBeneficio from '../img/cursoIlustrator/Benefit_2.png'
import tercerBeneficio from '../img/cursoIlustrator/Benefit_3.png'

import { Formulario } from '../components/Formulario'
import { AboutCourse } from '../components/AboutCourse'
import { BenefitItem } from '../components/BenefitItem'
import { Footer } from '../components/Footer'
import { SemiFooter } from '../components/SemiFooter'
import { DurationDate } from '../components/DurationDate'
import { Plan } from '../components/PlanEstudios'


export function Ilustrator(){
    return(
        <>
            <div className="Course-container">
                <img src={photoshopBody} alt="" className='headerCourse' />
                <section className='titulo-container'>
                    <img src={logoIlustrator} alt="" width={"70px"} />
                    <h1>Adobe Illustrator</h1>
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
                        pregunta1="En qué consiste el curso de Adobe Illustrator?"
                        descripcion="El curso de Adobe Illustrator se centra en enseñar a los estudiantes cómo utilizar esta potente herramienta de diseño gráfico vectorial. A lo largo del curso, los participantes aprenderán los fundamentos esenciales y técnicas avanzadas para crear diseños gráficos de alta calidad y profesionalismo."
                        imagen={primeraFoto}
                        />

                        <div className='bodyCourse-container'>
                            <h1>¿Por qué estudiar Adobe Illustrador en ZaiTex?</h1>
                            <div className='Benefit-container'>
                                <BenefitItem
                                imagen={primerBeneficio}
                                titulo="Domina Adobe Illustrator"
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
                            parrafo3="Lun - Mie - Vie"
                            parrafo4="7:00pm a 9:30pm"
                            parrafo5="1"
                            parrafo6="mes"
                            parrafo7="Próximamente"
                            />
                            <h1>Plan de Estudios</h1>
                            <Plan
                            modo="simple"
                            titulo1="Introducción a Adobe Illustrator"
                            beneficio1="Introducción a Adobe Illustrator: interfaz y herramientas básicas."
                            beneficio2="Creación y manipulación de formas básicas y trazados."
                            beneficio3="Herramientas de selección y transformación."
                            beneficio4="Uso de capas y organización de documentos."
                            titulo2="Diseño grafico y composición"
                            beneficio5="Principios de diseño gráfico: color, tipografía y composición."
                            beneficio6="Uso de la paleta de colores y de las fuentes en Illustrator."
                            beneficio7="Creación y manipulación de formas complejas."
                            beneficio8="Aplicación de efectos y estilos a objetos."
                            titulo3="Ilustración y Vectorización"
                            beneficio9="Técnicas de dibujo a mano alzada con la herramienta Pluma."
                            beneficio10="Vectorización de imágenes rasterizadas."
                            beneficio11="Creación de ilustraciones vectoriales complejas."
                            beneficio12="Uso de pinceles y efectos de pintura en Illustrator."
                            titulo4="Diseño de Logotipos Branding"
                            beneficio13="Principios de diseño de logotipos."
                            beneficio14="Creación de logotipos y elementos de branding en Illustrator."
                            beneficio15="Preparación de archivos para impresión y web."
                            beneficio16="Exportación de proyectos y prácticas de flujo de trabajo."
                            />
                        </div>
                        <SemiFooter curso="Illustrator"/>
                    </main>
                </section>
                <Footer modo="completo"/>
            </div>
        </>
    )
}
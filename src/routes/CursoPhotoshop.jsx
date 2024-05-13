import { Footer } from '../components/Footer'
import { Formulario } from '../components/Formulario'
import { AboutCourse } from '../components/AboutCourse'

import '../css/cursoPhotoshop.css'
import photoshopBody from '../img/headerPhotoshop.png'
import tituloPhotoshop from '../img/tituloPhotoshop.png'
import primeraFoto from '../img/cursoPhotoshop/primeraFoto.png'
import primerBeneficio from '../img/cursoPhotoshop/Benefit_1.png'
import segundoBeneficio from '../img/cursoPhotoshop/Benefit_2.png'
import tercerBeneficio from '../img/cursoPhotoshop/Benefit_3.png'

import { BenefitItem } from '../components/BenefitItem'
import { DurationDate } from '../components/DurationDate'
import { Plan } from '../components/PlanEstudios'
import { SemiFooter } from '../components/SemiFooter'

export function Photoshop(){
    return (
        <>
            <div className='Course-container'>
                <img src={photoshopBody} alt="" className='headerCourse'/>
                <section className='titulo-container'>
                    <img src={tituloPhotoshop} alt="" width={"70px"} />
                    <h1>Adobe Photoshop</h1>
                </section>
                <section className='body-Course'>
                    <aside className='form-container'>
                        <Formulario/>
                    </aside>
                    <main className='Course'>
                        <div className='brochure-container'>
                            <a href='https://drive.google.com/file/d/1nvHQ9pRHZd1hx4G5u-cIY1qb0cuRqjit/view' target='_blank' className='brochure-button'>Plan de Estudios</a>
                        </div>

                        <AboutCourse 
                        pregunta1="En qué consiste el curso de Photoshop?"
                        descripcion="En este curso Photoshop te equipará con las habilidades necesarias para editar imágenes digitalmente, crear gráficos impresionantes y mejorar tus habilidades creativas en el mundo del diseño y la fotografía digital."
                        imagen={primeraFoto}
                        />

                        <div className='bodyCourse-container'>
                            <h1>¿Por qué estudiar Adobe Photoshop en ZaiTex?</h1>
                            <div className='Benefit-container'>
                                <BenefitItem
                                imagen={primerBeneficio}
                                titulo="Domina Adobe Photoshop"
                                descripcion="Aprenderás a ajustar el brillo, contraste, saturación, y otros aspectos de una imagen para mejorar su apariencia"
                                />
                                <BenefitItem
                                imagen={segundoBeneficio}
                                titulo="Manipulación de imágenes"
                                descripcion="Aprenderás a agregar efectos especiales a tus imágenes, como el efecto de desenfoque, efectos de luz y sombra, y otros efectos visuales impresionantes."
                                />
                                <BenefitItem
                                imagen={tercerBeneficio}
                                titulo="Desarrolla contenido"
                                descripcion="Photoshop también se utiliza ampliamente en el diseño gráfico, por lo que podrías aprender a crear logotipos, banners, carteles, y otros elementos gráficos."
                                />
                            </div>
                            <DurationDate
                            parrafo1="Jóvenes a mas "
                            parrafo2="de 18 años a mas"
                            parrafo3="Martes y Jueves de"
                            parrafo4="7:00 a 9:30pm"
                            parrafo5="1"
                            parrafo6="mes"
                            parrafo7="Próximamente"
                            />
                            <h1>Plan de Estudios</h1>
                            <Plan
                            modo="simple"
                            titulo1="Fundamentos de Photoshop"
                            beneficio1="Introducción a Photoshop: Interfaz y herramientas básicas."
                            beneficio2="Resolución, tamaño de lienzo y formatos de archivo."
                            beneficio3="Selección rectangular, lazo, mover y transformar."
                            beneficio4="Uso de capas y ajustes básicos."
                            titulo2="Diseño de Pósters y Montajes de Presentación"
                            beneficio5="Organización de elementos, uso de guías y cuadrículas."
                            beneficio6="Formato de texto, estilos de capa y efectos."
                            beneficio7="Recorte y colocación de imágenes en la composición."
                            beneficio8="Sombreado, degradado, y filtros creativos para mejorar el diseño."
                            titulo3="Creación de Mockups y Visualización de Diseños"
                            beneficio9="Qué son y cómo se utilizan en el diseño."
                            beneficio10="Integración de diseños en maquetas de productos básicos."
                            beneficio11="Integración en escenarios realistas, ajuste de perspectiva y luces."
                            beneficio12="Preparación de archivos para impresión y presentación digital."
                            titulo4="Proyectos Prácticos y Refinamiento de Habilidades"
                            beneficio13="Desarrollo de un proyecto de póster o montaje de presentación."
                            beneficio14="Asistencia individualizada para la realización de proyectos."
                            beneficio15="Revisión de proyectos y retroalimentación."
                            beneficio16="Consejos y técnicas avanzadas para mejorar la eficiencia en la creación de mockups y presentaciones."
                            />
                        </div>
                        <SemiFooter tipo="Curso" curso="Photoshop"/>
                    </main>
                </section>
                <Footer modo="completo"/>
            </div>
        </>
    )
}
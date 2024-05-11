import headerPersonajeManga from '../img/cursoPersonajeManga/headerPersonajeManga.png'
import logoIlustrator from '../img/cursoIlustrator/logoIlustrator.svg'
import primeraFoto from '../img/cursoPersonajeManga/primeraFoto.png'
import primerBeneficio from '../img/cursoPersonajeManga/Benefit_1.png'
import segundoBeneficio from '../img/cursoPersonajeManga/Benefit_2.png'
import tercerBeneficio from '../img/cursoPersonajeManga/Benefit_3.png'

import { Footer } from '../components/Footer'
import { Formulario } from '../components/Formulario'
import { AboutCourse } from '../components/AboutCourse'
import { BenefitItem } from '../components/BenefitItem'
import { DurationDate } from '../components/DurationDate'
import { Plan } from '../components/PlanEstudios'
import { SemiFooter } from '../components/SemiFooter'

export function PersonajeManga(){
    return(
        <>
            <div className='Course-container'>
                <img src={headerPersonajeManga} alt="" className='headerCourse' />
                <section className='titulo-container'>
                    <img src={logoIlustrator} alt="" width={"70px"} />
                    <h1>Personajes de Manga</h1>
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
                        pregunta1="En qué consiste el curso de Creación de personajes de Manga?"
                        descripcion="El curso de manga se enfoca en enseñar a los estudiantes a diseñar y dibujar personajes característicos del estilo japonés del cómic, manga. A lo largo del curso, los participantes aprenden sobre proporciones, expresiones, vestuario, poses, narrativa visual y técnicas de digitalización y coloración para crear ilustraciones manga auténticas."
                        imagen={primeraFoto}
                        />

                        <div className='bodyCourse-container'>
                        <h1>¿Por qué estudiar Adobe Photoshop en ZaiTex?</h1>
                            <div className='Benefit-container'>
                                <BenefitItem
                                imagen={primerBeneficio}
                                titulo="Adobe Illustrator para manga"
                                descripcion="Este curso enseña el uso efectivo de de este programa adaptado para mangas."
                                />
                                <BenefitItem
                                imagen={segundoBeneficio}
                                titulo="Crea tus propios personajes"
                                descripcion="Aprenderás a crear tu propio personaje de manga."
                                />
                                <BenefitItem
                                imagen={tercerBeneficio}
                                titulo="Desarrolla propio estilo manga"
                                descripcion="Desarrollaras y crearas tu propio estilo manga, adaptado a tus propios principios."
                                />
                            </div>
                            <DurationDate
                            parrafo1="Adolecente a mas "
                            parrafo2="de 15 años a mas"
                            parrafo3="Lun - Mie - Vie de"
                            parrafo4="7:00 pm a 9:30 pm"
                            parrafo5="1"
                            parrafo6="mes"
                            parrafo7="Próximamente"
                            />
                            <h1>Plan de Estudios</h1>
                            <Plan
                            modo="simple"
                            titulo1="Dibujo de Personajes Manga"
                            beneficio1="Dibujo de bocetos y diseño de personajes manga."
                            beneficio2="Práctica de proporciones, expresiones faciales y poses básicas."
                            beneficio3="Refinamiento de bocetos y diseño de personajes manga."
                            beneficio4="Ejercicios de expresiones faciales y gestos para transmitir emociones."
                            titulo2="Creación de Personajes Manga y Escenas"
                            beneficio5="Creación de poses dinámicas y composición de escenas manga."
                            beneficio6="Práctica de acción, movimiento y narrativa visual."
                            beneficio7="Integración de personajes en escenarios y fondos."
                            beneficio8="Ejercicios de diseño de escenas y secuencias de manga."
                            titulo3="Ilustración de Manga con Adobe Illustrator"
                            beneficio9="Adobe Illustrator para ilustración de manga."
                            beneficio10="Importación de bocetos de personajes manga y digitalización."
                            beneficio11="Uso de herramientas de dibujo y pintura en Illustrator para crear contornos y detalles de personajes manga."
                            beneficio12="Práctica de coloración básica de personajes manga."
                            titulo4="Desarrollo Avanzado en Illustrator y Presentación de Ilustraciones Manga"
                            beneficio13="Técnicas avanzadas de ilustración manga en Adobe Illustrator."
                            beneficio14="Creación de sombras, luces y efectos especiales."
                            beneficio15="Preparación de ilustraciones manga para la impresión y la presentación digital en Illustrator."
                            beneficio16="Creación de portafolio manga: Organización y presentación de las ilustraciones manga creadas durante el curso."
                            />
                        </div>

                        <SemiFooter curso="Creación de personajes estilo manga e ilustración con Adobe Illustrator" />
                    </main>
                </section>
                <Footer modo="completo" />
            </div>
        </>
    )
}
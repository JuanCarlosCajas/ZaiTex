import '../css/Body.css'
import persona from '/img/persona_1.png'
import cuerpo from '/img/body.png'
import { CartaBeneficios } from '../components/CartaBeneficios'
import primerBeneficio from '../img/primerBeneficio.png'
import segundoBeneficio from '../img/segundoBeneficio.png'
import tercerBeneficio from '../img/tercerBeneficio.png'
import cuartoBeneficio from '../img/cuartoBeneficio.png'
import { Ofrecemos } from '../components/Ofrecemos'
import { Footer } from '../components/Footer'

export function Body(){

    return(
        <>
            <img src={cuerpo} alt="body" className='cuerpo-contenedor'/>
            <div className='Z-logo'></div>
            <img src={persona} className='persona-1' width={"700px"} alt="persona" />
            <div className='despega-container'>
                <h1>DESPEGA</h1>
                <p>Crece profesionalmente</p>
            </div>
            <div className='beneficios-background'>
                <h1>Beneficios</h1>
                <section className='beneficios-container'>
                    <CartaBeneficios src={primerBeneficio} 
                    texto="Nuestra metodología de 
                    enseñanza está a la 
                    vanguardia de las tendencias 
                    del diseño." 
                    tipo="caballo"
                    />
                    <CartaBeneficios src={segundoBeneficio}
                    texto="Establecerás conexiones
                    valiosas con tus compañeros
                    de clase, profesores y
                    profesionales de la industria."
                    tipo="personas"
                    />
                    <CartaBeneficios src={tercerBeneficio}
                    texto="Estamos comprometidos con 
                    proporcionarte los recursos 
                    necesarios para que puedas 
                    desarrollar tus habilidades."
                    tipo="blue"
                    />
                    <CartaBeneficios src={cuartoBeneficio} 
                    texto="Contamos con un equipo de
                    instructores altamente
                    calificados y apasionados en
                    sus respectivos campos."
                    tipo="estudiante"
                    />
                </section>
                <h1>Que ofrecemos</h1>
            </div>
            <section className='list-ofre-container'>
                <Ofrecemos
                titulo="Cursos"
                texto="Un programa virtual especializado para
                ejecutivos, diseñado para desarrollar
                habilidades y conocimientos de manera
                eficiente en poco tiempo."
                color="#FFDEB8"
                />
                <Ofrecemos 
                titulo="Diplomados"
                texto="Sumérgete en cursos breves, diseñados
                para un aprendizaje práctico y rápido,
                impulsando tus habilidades para destacar
                en tu carrera."
                color="#D9D9D9"
                />
                <Ofrecemos 
                titulo="Programas"
                texto="Sumérgete en nuestro programa virtual
                especializado, diseñado para ejecutivos
                ambiciosos que desean dominar un área
                específica en tan solo 12 meses."
                color="#FFAEAE"
                />
            </section>
            <div className="proximamente">
                <h1 style={{color: 'white'}}>Eventos</h1>
            </div>
            <Footer modo="completo" />
        </>
    )
}
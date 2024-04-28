import '../css/Body.css'
import persona from '/img/persona_1.png'
import cuerpo from '/img/body.png'
import { CartaBeneficios } from '../components/CartaBeneficios'
import primerBeneficio from '../img/primerBeneficio.png'
import segundoBeneficio from '../img/segundoBeneficio.png'
import tercerBeneficio from '../img/tercerBeneficio.png'

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
                </section>
            </div>
        </>
    )
}
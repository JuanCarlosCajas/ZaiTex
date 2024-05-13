import '../css/SemiFooter.css'

import Clases from '../img/cursoPhotoshop/Clases.svg'
import Certificado from '../img/cursoPhotoshop/Certificado.svg'
import Casos from '../img/cursoPhotoshop/Casos.svg'
import Docentes from '../img/cursoPhotoshop/Docentes.svg'

export function SemiFooter(props){
    return(
        <div className="SemiFooter">
            <h1>ZaiTex Otorga</h1>
            <p className='paragraph'>Certificado virtual en el { props.tipo } de <span><strong>{props.curso}</strong></span></p>
            <h1>Beneficios ZaiTex</h1>
            <section className='SemiFooter-container'>
                <div className='SemiFooter-item'>
                    <img src={Clases} alt="" />
                    <h1>Clases en vivo</h1>
                    <p>Brindamos clases virtuales en tiempo real.</p>
                </div>
                <div className='SemiFooter-item'>
                    <img src={Certificado} alt="" />
                    <h1>Certificado</h1>
                    <p>Certificado Digital Sin costo adicional al finalizar el Curso.</p>
                </div>
                <div className='SemiFooter-item'>
                    <img src={Casos} alt="" />
                    <h1>Casos prácticos</h1>
                    <p>Podrás practicar con casos reales.</p>
                </div>
                <div className='SemiFooter-item'>
                    <img src={Docentes} alt="" />
                    <h1>Docentes</h1>
                    <p>Profesionales Especializados.</p>
                </div>
            </section>
        </div>
    )
}
import '../css/Nosotros.css'
import bodyNosotros from '../img/bodyNosotros.png'
import Nosotros_2 from '../img/Nosotros/Nosotros_2.jpg'
import Nosotros_3 from '../img/Nosotros/Nosotros_3.jpg'
import Nosotros_4 from '../img/Nosotros/Nosotros_4.jpg'

import { Footer } from '../components/Footer'
import { BeneficioNosotros } from '../components/BeneficioNosotros'

export function Nosotros(){
    return(
        <div className="nosotros-container">
            <div className='slide-box'>
                <li className='slide-item'><img src={bodyNosotros} alt="nosotros" className='bodyNosotros' /></li>
                <li className='slide-item'><img src={Nosotros_2} alt="nosotros" className='bodyNosotros' /></li>
                <li className='slide-item'><img src={Nosotros_3} alt="nosotros" className='bodyNosotros' /></li>
                <li className='slide-item'><img src={Nosotros_4} alt="nosotros" className='bodyNosotros' /></li>
            </div>
            <h1 className='tituloNosotros'>Nosotros</h1>
            <div className='explorandoZaitex'>
                <h1>Explorando ZAI TEX</h1>
                <p>Nuestro nacimiento está imbuido de la firme convicción de propulsar el crecimiento de aquellos profesionales que ansían forjar su camino en base a su
                pasión, aspirando a transformar realidades mediante la aportación de un valor sustancial. Nos dedicamos apasionadamente a cultivar el potencial de cada
                individuo, proporcionando las herramientas y recursos necesarios para catalizar su desarrollo y alcanzar nuevas alturas en su trayectoria profesional. En
                nuestra misión, no solo buscamos impulsar carreras, sino también inspirar la excelencia y fomentar comunidades de aprendizaje, donde la innovación y el
                éxito convergen en un camino compartido hacia el logro de metas extraordinarias.
                </p>
            </div>
            <h1 className='h1-Nosotros'>Por qué Zaitex es tu elección sobresaliente</h1>
            <h1 className='stroke-word'>para tu Experiencia de Estudio</h1>
            <div className='beneficios-nosotros'>
                <div className='row-1'>
                    <BeneficioNosotros 
                    titulo="Excelencia Educativa en el enterno virtual" 
                    parrafo="Ofrecemos una experiencia de educación
                    virtual de alta calidad mediante clases en
                    vivo con docentes comprometidos." />
                    <BeneficioNosotros
                    titulo="Plataformas Educativas de Clase Mundial"
                    parrafo="Aula Virtual Intuitiva: Comunicación
                    directa, pantallas compartidas, pizarras
                    interactivas y clases grabadas para
                    facilitar el aprendizaje"
                    />
                    <BeneficioNosotros 
                    titulo="Comprometidos con la Excelencia Docente"
                    parrafo="Todos nuestros docentes son expertos en
                    metodologías de enseñanza virtual al
                    100%"
                    />
                </div>
                <div className="row-2">
                    <BeneficioNosotros 
                    titulo="Becas y Beneficios para
                    Impulsar tu Educación"
                    parrafo="Facilidades por rendimiento destacado y
                    apoyo económico para superar
                    obstáculos."
                    />
                    <BeneficioNosotros 
                    titulo="Éxito Estudiantil"
                    parrafo="Calidad Validada: Un 90% de estudiantes
                    satisfechos con nuestras clases virtuales
                    y el desempeño docente."
                    />
                    <BeneficioNosotros 
                    titulo="Innovación Educativa"
                    parrafo="Fomentando la investigación y desarrollo
                    de proyectos de alto impacto en la
                    sociedad."
                    />
                </div>
            </div>
            <div className='semiFooter-container'>
                <h1 className='titulo'>Descubre el poder de dar vida a tus ideas y transforma</h1>
                <h1 className='stroke-word'>tu creatividad en Impacto Tangible</h1>
            </div>
            <Footer modo="medio"></Footer>
        </div>
    )
}
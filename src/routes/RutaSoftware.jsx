import { Footer } from '../components/Footer'
import { Formulario } from '../components/Formulario'
import { TipoCurso } from '../components/TipoCurso'
import cursoHeader from '../img/cursoHeader.png'

import CorelDraw from '../img/Software/CorelDraw.png'
import Ilustrator from '../img/Software/Ilustrator.png'
import Photshop from '../img/Software/Photshop.png'

export function Software(){
    return(
        <div className="Software-container">
            <img src={cursoHeader} alt="" className='cursoHeader'/>
            <h1 className='tituloCursos'>Curso</h1>
            <section className='bodyHeader'>
                <main className='options-container'>
                    <div className='row-1'>
                        <TipoCurso 
                        imagen={Photshop}
                        nombre="Photoshop"
                        path="/cursos/software/photoshop"
                        />
                        <TipoCurso 
                        imagen={Ilustrator}
                        nombre="Ilustrator"
                        path="/cursos/software/ilustrator"
                        />
                    </div>
                    <div className='row-2'>
                        <TipoCurso
                        imagen={CorelDraw}
                        nombre="Corel Draw"
                        path="/cursos/software/coreldraw"
                        />
                    </div>
                </main>
                <aside className='formulario-container'>
                    <Formulario/>
                </aside>
            </section>
            <Footer modo="completo"/>
        </div>
    )
}
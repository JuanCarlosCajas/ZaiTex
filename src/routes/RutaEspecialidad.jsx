import '../css/RutaEspecialidad.css'
import { Footer } from '../components/Footer'
import { Formulario } from '../components/Formulario'
import { TipoCurso } from '../components/TipoCurso'
import cursoHeader from '../img/cursoHeader.png'

import AutoCad from '../img/Especialidades/AutoCad.png'
import Marketing from '../img/Especialidades/Marketing.png'

export function Especialidad(){
    return(
        <div className="Especialidad-container">
            <img src={cursoHeader} alt="" className='cursoHeader'/>
            <h1 className='tituloCursos'>Cursos</h1>
            <section className='bodyHeader'>
                <main className='options-container'>
                    <p className='tituloArquitectura'>Arquitecura / Interiores</p>
                    <div className='row-1'>
                        <TipoCurso
                        imagen={AutoCad}
                        nombre="AutoCad para interiores"
                        path="/cursos/especialidades/autocad"
                        />
                    </div>
                    <p className='tituloEmpresarial'>Empresarial / Marketing</p>
                    <div className='row-2'>
                        <TipoCurso
                        imagen={Marketing}
                        nombre="Marketing"
                        path="/cursos/especialidades/marketing"
                        />
                    </div>
                </main>
                <aside className='formulario-container'>
                    <Formulario/>
                </aside>
            </section>
            <Footer modo="completo" />
        </div>
    )
}
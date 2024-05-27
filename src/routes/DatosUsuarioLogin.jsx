
import { Perfil } from '../components/Perfil'
import '../css/Login/DatosUsuarioLogin.css'
import { InformacionPersonal } from '../components/InformacionPersonal'


export const DatosUsuarioLogin = () => {

    return(
        <section className="DatosUsuarioLogin-container">
            <aside className='Perfil-container'>
                <Perfil/>
            </aside>
            <main className='DatosPersonales-container'>
                <InformacionPersonal/>
            </main>
        </section>
    )
}
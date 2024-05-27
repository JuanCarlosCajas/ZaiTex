import { useSelector } from 'react-redux'
import '../css/Login/DatosUsuarioLogin.css'


export const InformacionPersonal = () => {

    const user = useSelector(state => state.user)

    return(
        <>
            <section className='InfoPersonal-container'>
                <header className='InfoPersonal-header'>Datos Personales</header>
                <p className='InfoPersonal-parrafo'>Estos serán los datos que aparecerán en tu certificado y documentos que se emitan.</p>
                <section className='AlumnoInfo-container'>
                    <ul className='AlumnoInfo'>
                        <li className='AlumnoItem'>
                            <label htmlFor="nombre">Nombres Completos: </label>
                            <input type="text" name="nombre" id="nombre" value={user.nombre_alumno +" "+ user.apellido_alumno} readOnly='true'/>
                        </li>
                        <li className='AlumnoItem'>
                            <label htmlFor="sexo">Sexo: </label>
                            <input type="text" name="sexo" id="sexo"  value={user.sexo}/>
                        </li>
                        <li className='AlumnoItem'>
                            <label htmlFor="dni">DNI: </label>
                            <input type="text" name="dni" id="dni" value={user.codigo_alumno}/>
                        </li>
                        <li className='AlumnoItem'>
                            <label htmlFor="fecha-nacimiento">Fecha de Nacimiento: </label>
                            <input type="text" name="fecha-nacimiento" id="" value={user.fecha_registro}/>
                        </li>
                        <li className='AlumnoItem'>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" value={user.gmail_recuperacion} />
                        </li>
                        <li className='AlumnoItem'>
                            <label htmlFor="contacto">Contacto: </label>
                            <input type="text" name="contacto" id="contacto" value={user.contacto} />
                        </li>
                    </ul>
                </section>
            </section>
        </>
    )
}
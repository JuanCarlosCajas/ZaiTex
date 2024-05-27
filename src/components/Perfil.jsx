import '../css/HeaderUsuario.css'

import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

import { useEffect } from "react"

import fotoBanner from '../img/Login/fotoBanner.svg'
import miCuenta from '../img/Login/miCuenta.svg'
import cerrarSesion from '../img/Login/cerrarSesion.svg'
import zaitexBannerLogo from '../img/Login/zaitexBanner-logo.svg'

export const Perfil = () => {
    
    const user = useSelector(state => state.user)

    console.log(user.foto_alumno)
    const estiloFotoPerfil = {
        backgroundImage : "url(data:image/jpeg;charset=utf-8;base64,"+ user.foto_alumno+")"
    }

    return(
        <div className='mostrarPerfil-container'>
            <div className='banner-perfil'>
                <img src={zaitexBannerLogo} alt="" className='zaitexBannerLogo'/>
                <img src={fotoBanner} alt="" className='fotoBanner'/>
            </div>
            <div id='img-perfil' className='foto-perfil' style={estiloFotoPerfil}></div>
            <section className='informacion-alumno'>
                <p className='nombre'>{user.nombre_alumno}</p>
                <p className='gmail'>{user.gmail_recuperacion}</p>
            </section>
            <footer className='footer-perfil'>
                <Link to='/login/datos-personales'  className='info-privada'>
                    <img src={miCuenta} alt="" />
                    <p>Mi cuenta</p>
                </Link>
                <button type='button' className='boton-footerPerfil'>
                    <img src={cerrarSesion} alt="" />
                    <p>Cerrar Sesión</p>
                </button>
            </footer>
        </div>
    )
}
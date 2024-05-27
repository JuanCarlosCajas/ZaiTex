import '../css/HeaderInformacion.css'

import logoZaitex from '../img/Login/logoZaitex.svg'
import logoZaitexSeleccionado from '../img/Login/logoZaitexSeleccionado.svg'

import extender from '../img/Login/extender.svg'

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import abajo from '../img/Login/abajo.svg'
import abajoSeleccionado from '../img/Login/abajoSeleccionado.svg'

import curso from '../img/Login/curso.svg'
import cursoSeleccionado from '../img/Login/cursoSeleccionado.svg'

import biblioteca from '../img/Login/biblioteca.svg'
import bibliotecaSeleccionado from '../img/Login/bibliotecaSeleccionado.svg'

import pagos from '../img/Login/pagos.svg'
import pagosSeleccionado from '../img/Login/pagosSeleccionado.svg'



export function HeaderInformacion(){

    const [palanca, setPalanca] = useState(false)
    const location = useLocation()
    const [opcion, setOpcion] = useState("inicio")
    
    const activarTexto = {
        color: "#1962EC", 
        fontWeight: "700"
    }

    useEffect(() =>{

        if(location.pathname.includes('inicio')){
            switchParaActivarInicio()
            setOpcion("inicio")
        }
        else if(location.pathname.includes('biblioteca')){
            switchParaActivarBiblioteca()
            setOpcion("biblioteca")
        }
        else if(location.pathname.includes('pagos')){
            switchParaActivarPagos()
            setOpcion("pagos")
        }
    },[location])

    /* Zona de activacion de un boton */ 
    const switchParaActivarInicio = () => {
        const $cubridor = document.querySelector(".cubridor")
        $cubridor.classList.remove("biblioteca")
        $cubridor.classList.remove("pagos")
        $cubridor.classList.add("inicio")
    }   

    const switchParaActivarBiblioteca = () => {
        const $cubridor = document.querySelector(".cubridor")
        $cubridor.classList.remove("pagos")
        $cubridor.classList.remove("inicio")
        $cubridor.classList.add("biblioteca")
    }  

    const switchParaActivarPagos = () => {
        const $cubridor = document.querySelector(".cubridor")
        $cubridor.classList.remove("inicio")
        $cubridor.classList.remove("biblioteca")
        $cubridor.classList.add("pagos")
    }  

    const extenderButton = () => {
        setPalanca(!palanca)
    }

    

    return(
        <div className={palanca ? "headerInformacion-container palanca" : "headerInformacion-container"}>
            <img src={palanca ? logoZaitexSeleccionado : logoZaitex } alt="" className={palanca ? 'headerInformacion-logo palanca' : 'headerInformacion-logo'}/>
            <nav>
                <ul className='headerInformacion-options'>
                    <div className={palanca ? 'cubridor apretar ' + opcion : 'cubridor ' + opcion}></div>
                    <Link to='/login/inicio' className={palanca ? 'option-item encoger' : 'option-item'} onClick={switchParaActivarInicio}>
                        <img src={opcion == "inicio" ? cursoSeleccionado : curso} alt="" />
                        <p className={palanca ? "guardarParrafo" : ""} style={opcion == "inicio" ? activarTexto : {}}>Mis cursos</p>
                        <img src={opcion == "inicio" && !palanca? abajoSeleccionado : abajo} alt="" className='abajoLogo'/>
                    </Link>
                    <Link to='/login/biblioteca' className={palanca ? 'option-item encoger' : 'option-item'} onClick={switchParaActivarBiblioteca}>
                        <img src={opcion == "biblioteca" ? bibliotecaSeleccionado : biblioteca} alt="" />
                        <p className={palanca ? "guardarParrafo" : ""} style={opcion == "biblioteca" ? activarTexto : {}}>Biblioteca</p>
                    </Link>
                    <Link to='/login/pagos' className={palanca ? 'option-item encoger' : 'option-item'} onClick={switchParaActivarPagos}>
                        <img src={opcion == "pagos" ? pagosSeleccionado : pagos} alt="" />
                        <p className={palanca ? "guardarParrafo" : ""} style={opcion == "pagos" ? activarTexto : {}}>Pagos</p>
                    </Link>
                </ul>
            </nav>
            <img src={extender} alt="" className={palanca ? 'extender' :'extender rotate'} onClick={extenderButton}/>
        </div>
    )
}
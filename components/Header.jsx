import { useEffect, useState } from "react"
import '../css/Header.css'
import logo from '/img/zaitex-logo.png'

import casaActivo from '/img/home-activo.svg'
import casaDesactivado from '/img/home-desactivado.svg'

import nosotrosActivo from '/img/nosotros-activo.svg'
import nosotrosDesactivado from '/img/nosotros-desactivado.svg'

import cursoActivo from '/img/cursos-activo.svg'
import cursoDesactivado from '/img/cursos-desactivado.svg'

import tallerActivo from '/img/talleres-activo.svg'
import tallerDesactivado from '/img/talleres-desactivado.svg'

import bibliotecaActivo from '/img/biblioteca-activo.svg'
import bibliotecaDesactivado from '/img/biblioteca-desactivado.svg'

export function Header(){
    var activo = "activo"
    /*
    const $about = document.querySelector('.about-btn')
    console.log($about)
    $about.classList.remove("desactivado")
    $about.classList.add("activo")
    */
    return (
        
        <header className="header-container">
            <div className="right-wall"></div>
            <div className="left-wall"></div>
            { /* Aqui va el logo de la pagina */ }
            <div className="logo-container">
                <img src={logo} alt="zaitex-logo" className="logo-zaitex"/>
            </div>
            <nav>
                {/* Lista de iconos */}
                <ul className="nav-container">
                    
                    <li className="home-btn activo">
                        <img src={casaActivo} alt="home" />
                        <span className="txtInicio">Inicio</span>
                    </li>
                    
                    <li className="about-btn desactivado">
                        <img src={nosotrosDesactivado} alt="nosotros" />
                        <span>Nosotros</span>
                    </li>
                    <li className="courses-btn desactivado">
                        <img src={cursoDesactivado} alt="cursos" />
                        <span>Cursos</span>
                    </li>
                    <li className="talleres-btn desactivado">
                        <img src={tallerDesactivado} alt="talleres"/>
                        <span>Talleres</span>
                    </li>
                    <li className="biblioteca-btn desactivado">
                        <img src={bibliotecaDesactivado} alt="bilbioteca" />
                        <span>Bilioteca</span>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

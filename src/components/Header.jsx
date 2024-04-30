import '../css/Header.css'
import logo from '../img/zaitex-logo.png'

import casaActivo from '../img/home-activo.svg'
import casaDesactivado from '../img/home-desactivado.svg'

import nosotrosActivo from '../img/nosotros-activo.svg'
import nosotrosDesactivado from '../img/nosotros-desactivado.svg'

import cursoActivo from '../img/cursos-activo.svg'
import cursoDesactivado from '../img/cursos-desactivado.svg'

import tallerActivo from '../img/talleres-activo.svg'
import tallerDesactivado from '../img/talleres-desactivado.svg'

import bibliotecaActivo from '../img/biblioteca-activo.svg'
import bibliotecaDesactivado from '../img/biblioteca-desactivado.svg'
import { Link, NavLink } from "react-router-dom"

export function Header(){
    
    const $homeBtn = document.getElementsByClassName('home-btn')
    const $nosotrosBtn = document.getElementsByClassName('about-btn')
    const $coursesBtn = document.querySelector('.courses-btn')
    const $talleresBtn = document.querySelector('.talleres-btn')
    const $bibliotecaBtn = document.querySelector('.biblioteca-btn')
    var path;

    console.log($nosotrosBtn)
    if(window.location.pathname == "/nosotros"){
        path = "nosotros"
        $nosotrosBtn.classList.remove('desactivado')
    }
    /*
    const $about = document.querySelector('.about-btn')
    console.log($about)
    $about.classList.remove("desactivado")
    $about.classList.add("activo")
    */
    return (
        
        <header className="header-container">
            <div className='cubridor-header'></div>
            <div className="right-wall"></div>
            <div className="left-wall"></div>
            { /* Aqui va el logo de la pagina */ }
            <Link to='/' className="logo-container">
                <img src={logo} alt="zaitex-logo" className="logo-zaitex"/>
            </Link>
            <nav>
                {/* Lista de iconos */}
                <ul className="nav-container">
                    
                    <NavLink to='/' className="home-btn activo seleccionado">
                        <img src={casaActivo} alt="home" />
                        <span className="txtInicio">Inicio</span>
                    </NavLink>
                    
                    <NavLink to='/nosotros' className="about-btn desactivado">
                        <img src={path == "nosotros" ? nosotrosActivo : nosotrosDesactivado} className="logo-nosotros" alt="nosotros" />
                        <span className="txtNosotros">Nosotros</span>
                    </NavLink>
                    <NavLink to='/cursos' className="courses-btn desactivado">
                        <img src={cursoDesactivado} alt="cursos" />
                        <span className="txtCursos">Cursos</span>
                    </NavLink>
                    <NavLink to='/talleres' className="talleres-btn desactivado">
                        <img src={tallerDesactivado} alt="talleres"/>
                        <span className="txtTalleres">Talleres</span>
                    </NavLink>
                    <NavLink to='/biblioteca' className="biblioteca-btn desactivado">
                        <img src={bibliotecaDesactivado} alt="bilbioteca" />
                        <span className="txtBiblioteca">Bilioteca</span>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )

}

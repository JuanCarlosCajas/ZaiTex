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
import { Link, NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'

export function Header(){

    const location = useLocation();
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        console.log(location)
        // Actualiza el src de la imagen cuando la ubicación cambia
        if(location.pathname == '/nosotros'){
            setImageUrl('nosotros')
            console.log(location)
        }
        else if (location.pathname == '/'){
            setImageUrl('inicio')
        }
        else if (location.pathname == '/cursos' 
            || location.pathname == '/cursos/software'
            || location.pathname == '/cursos/software/photoshop'
            || location.pathname == '/cursos/especialidades'
            || location.pathname == '/cursos/ilustracion'){
            setImageUrl('cursos')
        }
        else if (location.pathname == '/talleres'){
            setImageUrl('talleres')
        }
        else if (location.pathname == '/biblioteca'){
            setImageUrl('biblioteca')
        }
    },[location]);

    
    /*
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getComputedStyle($circulo, '::before' ).style.background = "green";
        } else {
            document.querySelector(".header-container").style.background = "red";
        }
    }
    */
    window.addEventListener('DOMContentLoaded', function(){

        const list = document.querySelectorAll('.list')

        function activarLink(){
            list.forEach((item) => {
                item.classList.remove("active")
                this.classList.add("active")
            })
        }

        list.forEach((item)=>{
            item.addEventListener('click', activarLink())
        })

    })


    var parte = "ala";
    return (
        
        <header className="header-container" id='header'>
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
                    
                    <NavLink to='/' className="home-btn list">
                        <img src={imageUrl == 'inicio' ? casaActivo : casaDesactivado} alt="home" />
                        <span className="txtInicio">Inicio</span>
                    </NavLink>
                    
                    <NavLink to='/nosotros' className="about-btn list">
                        <img src={imageUrl == 'nosotros' ? nosotrosActivo : nosotrosDesactivado} className="logo-nosotros" alt="nosotros" />
                        <span className="txtNosotros">Nosotros</span>
                    </NavLink>
                    <NavLink to='/cursos' className="courses-btn list">
                        <img src={imageUrl == 'cursos' ? cursoActivo : cursoDesactivado} alt="cursos" />
                        <span className="txtCursos">Cursos</span>
                    </NavLink>
                    <NavLink to='/talleres' className="talleres-btn list">
                        <img src={imageUrl == 'talleres' ? tallerActivo : tallerDesactivado} alt="talleres"/>
                        <span className="txtTalleres">Talleres</span>
                    </NavLink>
                    <NavLink to='/biblioteca' className="biblioteca-btn list">
                        <img src={imageUrl == 'biblioteca' ? bibliotecaActivo : bibliotecaDesactivado} alt="bilbioteca" />
                        <span className="txtBiblioteca">Biblioteca</span>
                    </NavLink>

                    <div className='circulo'></div>
                    <div className='luna'></div>
                </ul>
            </nav>
        </header>
    )

}

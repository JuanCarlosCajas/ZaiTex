import { useEffect, useState } from "react"
import "./Header.css"
import logo from '/img/zaitex-logo.png'

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
                        <img src="img/home-activo.svg" alt="home" />
                        <span className="txtInicio">Inicio</span>
                    </li>
                    
                    <li className="about-btn desactivado">
                        <img src="img/nosotros-desactivado.svg" alt="nosotros" />
                        <span>Nosotros</span>
                    </li>
                    <li className="courses-btn desactivado">
                        <img src="img/cursos-desactivado.svg" alt="cursos" />
                        <span>Cursos</span>
                    </li>
                    <li className="talleres-btn desactivado">
                        <img src="img/talleres-desactivado.svg" alt="talleres"/>
                        <span>Talleres</span>
                    </li>
                    <li className="biblioteca-btn desactivado">
                        {/*
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="19.000000pt" height="30.000000pt" viewBox="0 0 79.000000 65.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)"
                        fill="#1962EC" stroke="none">
                        <path d="M261 585 c-172 -37 -197 -45 -218 -69 -27 -32 -31 -100 -8 -133 13
                        -18 13 -22 0 -33 -19 -16 -20 -89 -1 -116 12 -17 12 -22 0 -39 -18 -24 -18
                        -95 -1 -119 14 -19 251 -76 317 -76 20 0 119 18 219 40 100 22 184 40 186 40
                        14 0 25 42 15 60 -15 27 -32 26 -240 -20 l-182 -40 -119 27 -119 26 0 32 0 33
                        120 -26 121 -25 177 37 c213 45 239 52 246 72 7 18 -8 50 -27 57 -7 3 -92 -13
                        -188 -34 -95 -21 -190 -38 -209 -38 -19 0 -80 10 -135 22 l-100 22 -3 33 c-2
                        7 -1 32 3 32 3 0 57 -12 120 -26 l114 -25 198 42 c207 44 241 58 229 97 -4
                        12 -15 24 -25 27 -10 3 -105 -13 -210 -36 l-192 -41 -102 22 c-142 30 -137 28
                        -137 57 0 22 3 25 28 20 15 -3 74 -13 132 -23 l105 -17 199 47 c207 48 241 64
                        204 93 -15 11 -236 44 -288 42 -19 -1 -122 -20 -229 -44z"/>
                        </g>
                        </svg>
                        */}
                        <img src="img/biblioteca-desactivado.svg" alt="bilbioteca" />
                        <span>Bilioteca</span>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

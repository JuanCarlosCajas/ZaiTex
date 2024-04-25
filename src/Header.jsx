import "./Header.css"

export function Header(){
    
    /*
    const botonHome = document.querySelector(".home-btn")
    const home = document.querySelector('.home')
    botonHome.addEventListener('mouseover', function(){
        home.setAttribute("fill", "white")
        home.setAttribute("stroke", "white")
    })
    botonHome.addEventListener('mouseout', function(){
        home.setAttribute("fill", "#1962EC")
        home.setAttribute("stroke", "#1962EC")
    })
    */
    return (
        
        <header className="header-container">
            <div className="right-wall"></div>
            <div className="left-wall"></div>
            { /* Aqui va el logo de la pagina */ }
            <div className="logo-container">
                <img src="img/zaitex-logo.png" alt="zaitex-logo" className="logo-zaitex"/>
            </div>
            <nav>
                {/* Lista de iconos */}
                <ul className="nav-container">
                    <li className="home-btn">
                                    
                        <svg className="home" fill="#1962EC" width="32px" height="40px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#1962EC" strokeWidth="1.5">

                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.064"/>

                            <g id="SVGRepo_iconCarrier"> <path d="M31.772 16.043l-15.012-15.724c-0.189-0.197-0.449-0.307-0.721-0.307s-0.533 0.111-0.722 0.307l-15.089 15.724c-0.383 0.398-0.369 1.031 0.029 1.414 0.399 0.382 1.031 0.371 1.414-0.029l1.344-1.401v14.963c0 0.552 0.448 1 1 1h6.986c0.551 0 0.998-0.445 1-0.997l0.031-9.989h7.969v9.986c0 0.552 0.448 1 1 1h6.983c0.552 0 1-0.448 1-1v-14.968l1.343 1.407c0.197 0.204 0.459 0.308 0.722 0.308 0.249 0 0.499-0.092 0.692-0.279 0.398-0.382 0.411-1.015 0.029-1.413zM26.985 14.213v15.776h-4.983v-9.986c0-0.552-0.448-1-1-1h-9.965c-0.551 0-0.998 0.445-1 0.997l-0.031 9.989h-4.989v-15.777c0-0.082-0.013-0.162-0.032-0.239l11.055-11.52 10.982 11.507c-0.021 0.081-0.036 0.165-0.036 0.252z"/> </g>

                        </svg>

                        <span>Inicio</span>
                    </li>
                    <li className="about-btn">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="20.000000pt" height="30.000000pt" viewBox="0 0 71.000000 86.000000"
                        preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,86.000000) scale(0.100000,-0.100000)"
                            fill="#1962EC" stroke="none">
                            <path d="M175 833 c-46 -24 -66 -45 -86 -88 -31 -67 -19 -155 29 -208 44 -49
143 -71 208 -47 23 9 29 7 42 -11 20 -28 88 -59 133 -59 124 -1 209 145 146
254 -37 65 -67 81 -152 81 -69 0 -75 2 -89 27 -35 59 -163 87 -231 51z m151
-97 c26 -26 34 -42 34 -71 0 -46 -53 -105 -94 -105 -107 0 -151 137 -62 191
47 29 82 25 122 -15z m229 -79 c52 -44 27 -137 -40 -149 -30 -6 -80 15 -88 37
-8 19 21 116 37 127 22 15 65 8 91 -15z"/>
                            <path d="M165 396 c-46 -20 -94 -64 -118 -110 -18 -34 -22 -62 -25 -164 l-4
-122 346 0 346 0 0 105 c0 113 -12 160 -53 203 -49 53 -138 81 -203 63 -35 -9
-46 -7 -88 14 -56 28 -150 34 -201 11z m153 -80 c15 -8 40 -28 57 -46 26 -28
30 -39 33 -105 l4 -75 -156 0 -156 0 0 50 c0 53 19 112 48 144 39 43 119 58
170 32z m243 -41 c44 -23 69 -71 69 -132 l0 -53 -65 0 -65 0 0 48 c0 46 -10
99 -25 135 -6 14 -2 17 24 17 18 0 45 -7 62 -15z"/>
                            </g>
                        </svg>

                        <span>Nosotros</span>
                    </li>
                    <li className="courses-btn">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="19.000000pt" height="30.000000pt" viewBox="0 0 91.000000 92.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,92.000000) scale(0.100000,-0.100000)"
                        fill="#1962EC" stroke="none">
                        <path d="M58 884 c-15 -8 -32 -23 -38 -34 -5 -10 -10 -82 -10 -160 l0 -142 29
                        -29 29 -29 146 0 c139 0 146 1 173 24 28 24 28 25 31 161 5 215 -4 225 -205
                        225 -93 -1 -135 -5 -155 -16z m276 -90 c9 -23 7 -197 -2 -212 -6 -9 -38 -12
                        -123 -10 l-114 3 -3 104 c-1 58 0 111 2 118 4 10 34 13 120 13 95 0 115 -3
                        120 -16z"/>
                        <path d="M555 891 c-50 -21 -60 -46 -63 -168 -5 -141 1 -173 35 -207 25 -26
                        28 -26 173 -26 141 0 148 1 173 24 33 31 40 68 35 211 l-3 117 -33 29 -32 29
                        -133 -1 c-72 0 -141 -4 -152 -8z m263 -198 l-3 -118 -115 0 -115 0 -3 118 -3
                        117 121 0 121 0 -3 -117z"/>
                        <path d="M39 381 l-29 -29 0 -146 c0 -139 1 -146 24 -173 24 -28 25 -28 161
                        -31 214 -5 225 4 225 203 0 133 -10 174 -49 195 -11 5 -83 10 -161 10 l-142 0
                        -29 -29z m289 -63 c8 -8 12 -48 12 -115 0 -91 -2 -103 -19 -113 -21 -11 -189
                        -14 -215 -4 -13 5 -16 25 -16 118 0 62 3 116 7 119 12 13 218 8 231 -5z"/>
                        <path d="M543 398 c-40 -19 -53 -66 -53 -193 0 -124 10 -160 52 -189 18 -13
                        52 -16 160 -16 l138 0 32 29 33 29 3 130 c4 145 -8 189 -54 211 -32 14 -281
                        14 -311 -1z m275 -190 c3 -139 12 -131 -138 -126 l-95 3 -3 109 c-1 61 0 116
                        2 123 4 11 31 13 118 11 l113 -3 3 -117z"/>
                        </g>
                        </svg>

                        <span>Cursos</span>
                    </li>
                    <li className="talleres-btn">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="19.000000pt" height="30.000000pt" viewBox="0 0 73.000000 73.000000"
                        preserveAspectRatio="xMidYMid meet">

                            <g className="talleres" transform="translate(0.000000,73.000000) scale(0.100000,-0.100000)"
                            fill="#1962EC" stroke="none">
                            <path d="M26 707 c-24 -18 -17 -59 12 -72 21 -10 22 -13 22 -168 0 -170 9
                            -211 51 -241 13 -9 43 -16 66 -16 24 0 43 -3 43 -6 0 -4 -20 -39 -45 -78 -25
                            -40 -45 -80 -45 -89 0 -20 33 -39 53 -31 8 3 45 50 81 105 62 93 68 99 100 99
                            31 0 37 -6 96 -95 72 -109 82 -119 109 -110 40 12 35 42 -18 123 l-51 77 56 5
                            c45 4 61 11 80 33 23 27 24 33 24 205 l0 178 30 11 c36 13 42 56 11 73 -31 16
                            -652 14 -675 -3z m554 -242 l0 -165 -215 0 -215 0 0 165 0 165 215 0 215 0 0
                            -165z"/>
                            </g>
                        </svg>

                        <span>Talleres</span>
                    </li>
                    <li className="bibliotecary-btn">
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

                        <span>Bilioteca</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
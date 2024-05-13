
import { useState } from 'react'
import '../css/CartaBeneficios.css'

export function CartaBeneficios(parametros){

    const[imagen, setImagen] = useState(parametros.src)

    function activarImagen(){
        setImagen(parametros.activo)
    }

    function desactivarImagen(){
        setImagen(parametros.src)
    }

    if(parametros.tipo == "personas"){

        const estiloImagen = {
            paddingLeft: '3px',
            marginTop: '0px',
        }
        const estiloTexto = {
            paddingTop: '26px'
        }

        return(
            <div className='beneficio' onMouseOver={activarImagen} onMouseOut={desactivarImagen}>
                <img src={imagen} width={"65px"} style={estiloImagen} alt="beneficio" className='imagen-beneficio'/>
                <p style={estiloTexto}>{parametros.texto}</p>
            </div>    
        )
    }
    else if(parametros.tipo == "caballo"){

        const estiloTexto = {
            paddingTop: '2px',
        }

        return(
            <div className='beneficio' onMouseOut={desactivarImagen} onMouseOver={activarImagen}>
                <img src={imagen} width={"45px"} alt="beneficio" className='imagen-beneficio'/>
                <p style={estiloTexto}>{parametros.texto}</p>
            </div>
        )
    }
    else if(parametros.tipo == "blue"){
        const estiloImagen = {
            paddingLeft: '5px',
            paddingTop: '3px'
        }

        const estiloTexto = {
            paddingTop: '15px'
        }
        return(
            <div className='beneficio' onMouseOut={desactivarImagen} onMouseOver={activarImagen} >
                <img src={imagen}  width={"55px"} style={estiloImagen} alt="beneficio" className='imagen-beneficio'/>
                <p style={estiloTexto}>{parametros.texto}</p>
            </div>   
        )
    }
    else if(parametros.tipo == "estudiante"){
        const estiloImagen = {
            paddingLeft: '0px',
            marginLeft: '-2px',
            paddingTop: '0px'
        }

        const estiloTexto = {
            paddingTop: '33px'
        }
        return(
            <div className='beneficio' onMouseOut={desactivarImagen} onMouseOver={activarImagen} >
                <img src={imagen} width={"75px"} style={estiloImagen} alt="beneficio" className='imagen-beneficio'/>
                <p style={estiloTexto}>{parametros.texto}</p>
            </div>   
        )
    }
}


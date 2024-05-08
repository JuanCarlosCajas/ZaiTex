
import '../css/CartaBeneficios.css'

export function CartaBeneficios(parametros){
    if(parametros.tipo == "personas"){

        const estiloImagen = {
            paddingLeft: '5px',
            marginTop: '0px',
        }
        const estiloTexto = {
            paddingTop: '26px'
        }

        return(
            <div className='beneficio'>
                <img src={parametros.src} width={"65px"} style={estiloImagen} alt="beneficio" className='imagen-beneficio'/>
                <p style={estiloTexto}>{parametros.texto}</p>
            </div>    
        )
    }
    else if(parametros.tipo == "caballo"){

        const estiloTexto = {
            paddingTop: '2px',
        }

        return(
            <div className='beneficio'>
                <img src={parametros.src} width={"45px"} alt="beneficio" className='imagen-beneficio'/>
                <p style={estiloTexto}>{parametros.texto}</p>
            </div>
        )
    }
    else if(parametros.tipo == "blue"){
        const estiloImagen = {
            paddingLeft: '5px',
            paddingTop: '10px'
        }

        const estiloTexto = {
            paddingTop: '15px'
        }
        return(
            <div className='beneficio'>
                <img src={parametros.src} width={"55px"} style={estiloImagen} alt="beneficio" className='imagen-beneficio'/>
                <p style={estiloTexto}>{parametros.texto}</p>
            </div>   
        )
    }
    else if(parametros.tipo == "estudiante"){
        const estiloImagen = {
            paddingLeft: '0px',
            paddingTop: '0px'
        }

        const estiloTexto = {
            paddingTop: '33px'
        }
        return(
            <div className='beneficio'>
                <img src={parametros.src} width={"75px"} style={estiloImagen} alt="beneficio" className='imagen-beneficio'/>
                <p style={estiloTexto}>{parametros.texto}</p>
            </div>   
        )
    }
}


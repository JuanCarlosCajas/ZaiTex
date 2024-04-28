import '../css/CartaBeneficios.css'

export function CartaBeneficios(parametros){
    console.log(parametros.tipo)
    if(parametros.tipo == "personas"){
        const estiloImagen = {
            paddingLeft: '28px',
            marginTop: '5px',
        }
        const estiloTexto = {
            paddingTop: '38px'
        }

        return(
            <div className='beneficio'>
                <img src={parametros.src} width={"75px"} style={estiloImagen} alt="beneficio" className='imagen-beneficio'/>
                <p style={estiloTexto}>{parametros.texto}</p>
            </div>    
        )
    }
    else if(parametros.tipo == "caballo"){

        const estiloTexto = {
            paddingTop: '20px'
        }

        return(
            <div className='beneficio'>
                <img src={parametros.src} width={"50px"} alt="beneficio" className='imagen-beneficio'/>
                <p style={estiloTexto}>{parametros.texto}</p>
            </div>
        )
    }
    else if(parametros.tipo == "blue"){
        const estiloImagen = {
            paddingTop: '10px'
        }

        const estiloTexto = {
            paddingTop: '10px'
        }
        return(
            <div className='beneficio'>
                <img src={parametros.src} width={"75px"} style={estiloImagen} alt="beneficio" className='imagen-beneficio'/>
                <p style={estiloTexto}>{parametros.texto}</p>
            </div>   
        )
    }
}
import './Body.css'
import persona from '/img/persona_1.png'
import cuerpo from '/img/body.png'

export function Body(){
    
    return(
        <>
            <img src={cuerpo} alt="body" className='cuerpo-contenedor'/>
            <div className='Z-logo'></div>
            <img src={persona} className='persona-1' width={"700px"} alt="persona" />
            <div className='beneficios-contenedor'>

            </div>
        </>
    )
}
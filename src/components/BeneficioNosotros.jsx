
import '../css/BeneficioNosotros.css'

export function BeneficioNosotros(props){
    return(
        <div className="beneficio-container">
            <h1>{props.titulo}</h1>
            <p>{props.parrafo}</p>
        </div>  
    )
}
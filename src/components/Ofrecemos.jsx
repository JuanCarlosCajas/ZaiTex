import { useState } from 'react'
import '../css/Ofrecemos.css'

export function Ofrecemos(props){

    const [color, setColor] = useState(props.color)
    
    const ColorInicial = () => {
        setColor(props.color)
    }

    const cambioColor = (event) => {
        setColor(props.contrast)
    }

    return(
        <div 
        style={{backgroundColor : color}} 
        onMouseOver={cambioColor}
        onMouseOut={ColorInicial} 
        id="ofre" 
        className="ofre-container">
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </div>
    )
}
import '../css/DurationDate.css'

export function DurationDate(props){
    return(
        <div className='Duration-container'>
            <li className='Duration-item'>
                <h2>Edad</h2>
                <p className='firstPara'>{props.parrafo1}</p>
                <p className='negrita'><strong>{props.parrafo2}</strong></p>
            </li>
            <li className='Duration-item'>
                <h2>Horario</h2>
                <p className='firstPara'>{props.parrafo3}</p>
                <p className='negrita'>{props.parrafo4}</p>
            </li>
            <li className='Duration-item'>
                <h2>Duración</h2>
                <h1 className='numero'>{props.parrafo5}</h1>
                <p className='negrita'>{props.parrafo6}</p>
            </li>
            <li className='Duration-item'>
                <h2>Inicio</h2>
                <p className='negrita proxima'><strong>{props.parrafo7}</strong></p>
            </li>
        </div>
    )
}
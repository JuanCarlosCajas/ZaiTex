import '../css/DurationDate.css'

export function DurationDate(props){
    return(
        <div className='Duration-container'>
            <h1>{props.titulo1}</h1>
            <p>{props.descripcion1}</p>
            <h1>{props.titulo2}</h1>
            <div className="horario-container">
                <p>{props.descripcion2}</p>
            </div>
        </div>
    )
}
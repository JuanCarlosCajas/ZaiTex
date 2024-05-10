import '../css/AboutCourse.css'

export function AboutCourse(props){
    return(
        <div className="aboutCourse-container">
            <h1>{props.pregunta1}</h1>
            <p>{props.descripcion}</p>
            <img src={props.imagen} alt="" className='photo-about'/>
        </div>
    )
}
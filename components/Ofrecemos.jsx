import '../css/Ofrecemos.css'

export function Ofrecemos(props){
    const styleOfrecemos = {
        backgroundColor: props.color
    }

    return(
        <div style={styleOfrecemos} className="ofre-container">
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </div>
    )
}
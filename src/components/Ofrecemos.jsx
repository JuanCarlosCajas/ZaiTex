import '../css/Ofrecemos.css'

export function Ofrecemos(props){
    const styleOfrecemos = {
        backgroundColor: props.color
    }
    
    window.addEventListener('DOMContentLoaded', () => {
        const $ofre = document.querySelector('.ofre-container')

        $ofre.addEventListener('mouseover', function(){
            console.log("Hola")
            $ofre.style.backgroundColor = props.contrast
        })
    })

    return(
        <div style={styleOfrecemos} className="ofre-container">
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </div>
    )
}
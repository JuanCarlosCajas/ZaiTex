import { Link } from "react-router-dom";
import '../css/TipoCurso.css'

export function TipoCurso(props){
    return (
        <Link to={props.path} className="tipo-container">
            <img src={props.imagen} alt="" className="logoTipo-container"/>
            <div className="capa-oscura"></div>
            <div className="footerTipo-container">
                <img src={props.logo} alt="" className="logoTipo"/>
                <span className="nombreTipo">{props.nombre}</span>
            </div>
        </Link>
    )
}
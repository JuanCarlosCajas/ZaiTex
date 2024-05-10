import '../css/BenefitItem.css'
export function BenefitItem(props){
    return(
        <div className="BeneItem-container">
            <img src={props.imagen} alt="" className='BeneItem-header'/>
            <div className='BeneItem-body'>
                <h1>{props.titulo}</h1>
                <p>{props.descripcion}</p>
            </div>
        </div>
    )
}
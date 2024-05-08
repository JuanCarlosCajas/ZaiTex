import '../css/Formulario.css'

export function Formulario(){
    return (
        <form action="" className='form'>
            <div className='header-form'>
                <h1>¡MATRICULA GRATIS !</h1>
            </div>
            <div className='body-form'>
                <h2>Solicita más información</h2>
                <input type="text" placeholder='Nombre' required/>
                <input type="text" placeholder='Apellidos' required/>
                <input type="tel" placeholder='Celular' required/>
                <input type="email" placeholder='Email' required/>
                <p>
                    <input type="checkbox" id='checkbox-form' required/><label htmlFor="checkbox-form">Acepto haber leído las políticas de privacidad y los
                    términos y condiciones.</label>
                </p>
            </div>
            <input type="submit" value="Solicitar"/>
        </form>
    )
}
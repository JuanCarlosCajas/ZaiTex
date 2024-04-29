import '../css/Footer.css'
import footerZaitex from '../img/footer-zaitex.png'

export function Footer(props){
    
    if(props.modo == "completo"){
        return(
            <>
                <footer className='footer-container'>
                    <section className='atencion-container'>
                        <img src={footerZaitex} className='footer-zaitex-logo' alt="zaitex-footer" />
                        <div className="atencion-alumno">
                            <h1>Atención al Alumno</h1>
                            <p>Lunes - Sabado : 8:00 am - 8:00 pm</p>
                            <p>WhatsApp : 980 417 642</p>
                            <p>E-mail : admi@zai-tex.com</p>
                        </div>
                        <div className="atencion-academica">
                            <h1>Secretaría Académica</h1>
                            <p>Lunes - Sabado : 8:00 am - 8:00 pm</p>
                            <p>WhatsApp : 945 908 269</p>
                            <p>E-mail : info@zai-tex.com</p>
                        </div>
                    </section>
                    <section className='copyright'>
                        <p>Copyright © ZAI-TEX 2022 Todos los Derechos Reservados</p>
                    </section>
                </footer>
            </>
        )
    }
}
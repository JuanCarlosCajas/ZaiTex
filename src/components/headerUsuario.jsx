import { useEffect, useState } from 'react'
import { buscarAlumno } from '../backend/buscarAlumno'
import '../css/HeaderUsuario.css'
import { PerfilAlumno } from './PerfilAlumno'

import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/slice'

export function HeaderUsuario(){

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);

    const[datos, setDatos] = useState(null)

    useEffect(() => {
        buscarAlumno(localStorage.getItem('tokenCorreo'), localStorage.getItem('tokenContrasena'))
        .then(data => {
            setDatos(data)
            dispatch(addUser(data))
            console.log(user)
        })
    },[])

    return(
        <>
            <header className="HeaderUsuario-container">
                {datos != null ? 
                <PerfilAlumno
                /> : ""}
            </header>
        </>
    )
}
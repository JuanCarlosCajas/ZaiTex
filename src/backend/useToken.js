import { redirect, useLocation } from "react-router-dom"

import { Api } from "./token"

export function useFetch(codigo, contrasena){

    $.ajax({
        type: "POST",
        url: Api.apiUrl + "mostrar_alumnos.php",
        success: function (response) {
            response.map((item) => {
                if(item.codigo_alumno == codigo && item.contrasena == contrasena){
                    localStorage.setItem('tokenCorreo', item.codigo_alumno)
                    localStorage.setItem('tokenContrasena', item.contrasena)
                    window.location.pathname = "/login/inicio"
                }
            })
        }
    }) 
}

export function actualizarDatos(codigo, gmail_recuperacion, sexo, contacto){

    const datosActualizados = {
        codigo_alumno : codigo,
        gmail_recuperacion : gmail_recuperacion,
        sexo : sexo,
        contacto : contacto    
    }

    $.ajax({
        type: "POST",
        url: Api.apiUrl + "actualizar_alumno.php",
        data: datosActualizados,
        success: function (response) {
            console.log("Datos actualizados")
        },
        error: function (err) {
            console.log("Error")
        }

    });
}




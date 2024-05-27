import { useLocation } from "react-router-dom";

import { Api } from "./token";


export function useFetch(codigo, contrasena){


    $.ajax({
        type: "POST",
        url: Api.apiUrl + "mostrar_alumnos.php",
        success: function (response) {
            response.map((item) => {
                if(item.codigo_alumno == codigo && item.contrasena == contrasena){
                    console.log(item.codigo_alumno)
                    localStorage.setItem('tokenCorreo', item.codigo_alumno)
                    localStorage.setItem('tokenContrasena', item.contrasena)
                    window.location.href = "/login/inicio"
                }
            })
        }
    }); 
}




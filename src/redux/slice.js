import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    codigo_alumno : "",
    nombre_alumno : "",
    apellido_alumno: "",
    foto_alumno : "",
    dni_alumno : "",
    fecha_registro : "",
    gmail_recuperacion : "",
    contrasena : ""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { codigo_alumno, nombre_alumno , apellido_alumno, foto_alumno, dni_alumno, fecha_registro, gmail_recuperacion, contrasena } = action.payload;
            state.codigo_alumno = codigo_alumno;
            state.nombre_alumno = nombre_alumno;
            state.apellido_alumno = apellido_alumno;
            state.foto_alumno = foto_alumno;
            state.dni_alumno = dni_alumno;
            state.fecha_registro = fecha_registro;
            state.gmail_recuperacion = gmail_recuperacion;
            state.contrasena = contrasena;
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
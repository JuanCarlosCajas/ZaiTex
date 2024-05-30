import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modoEdicion : false
}

export const edicionSlice = createSlice({
    name: "edicion",
    initialState,
    reducers: {
        actualizarEdicion: (state, action) => {
            const { nuevaEdicion } = action.payload;
            state.modoEdicion = nuevaEdicion
        },
    }
})

export const { actualizarEdicion } = edicionSlice.actions;
export default edicionSlice.reducer; 
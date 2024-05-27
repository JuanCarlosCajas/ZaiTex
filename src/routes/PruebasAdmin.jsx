

export const PruebasAdmin = () => {


    const estilos = {
        position: 'absolute',
        top: '300px'
    }

    const estilosH2 = {
        position: 'absolute',
        top: '240px'
    }

    return(
        <>
            <h2 className="aea" style={estilosH2}>Subir archivo PNG</h2>
            <form action="http://localhost/ZaiTex/src/backend/insertar_alumno.php" style={estilos} method="POST" encType="multipart/form-data">
                <label for="archivo">Selecciona un archivo PNG:</label><br />
                <input type="file" id="imagen" name="imagen[]" multiple /><br /><br />
                <input type="submit" value="Subir archivo" />
            </form>
            
        </>
    )
}
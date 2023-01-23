

const formularioLogin = (req, res) => {
    //funcion para representar las vistas
    res.render('auth/login', {
    })
}

const formularioRegistro = (req, res) => {
    //funcion para representar las vistas

    res.render('auth/registro', {//informacion para pasar a esa vista
        pagina: 'Crear cuenta'
    })
}

//export nombrado para multiples exportaciones.
export {
    formularioLogin, formularioRegistro
}
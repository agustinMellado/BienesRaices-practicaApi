

const formularioLogin = (req, res) => {
    //funcion para representar las vistas
    res.render('auth/login', {
    })
}

const formularioRegistro = (req, res) => {
    //funcion para representar las vistas

    res.render('auth/registro', {

    })
}

//export nombrado para multiples exportaciones.
export {
    formularioLogin, formularioRegistro
}
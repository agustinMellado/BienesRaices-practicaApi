

const formularioLogin = (req, res) => {
    //funcion para representar las vistas
    res.render('auth/login', {//informacion para pasar a esa vista
        pagina: 'Iniciar Sesión'

    })
}

const formularioRegistro = (req, res) => {
    //funcion para representar las vistas

    res.render('auth/registro', {//informacion para pasar a esa vista
        pagina: 'Crear Cuenta'
    })
}

const registrar=(req, res) => {
    //para leer la informacion de un form 'req.body'
    console.log(req.body)
}

const formularioRecuperarPassword = (req, res) => {
    //funcion para representar las vistas

    res.render('auth/recuperar-password', {//informacion para pasar a esa vista
        pagina: 'Recuperar contraseña'
    })
}


//export nombrado para multiples exportaciones.
export {
    formularioLogin, formularioRegistro, registrar,formularioRecuperarPassword
}
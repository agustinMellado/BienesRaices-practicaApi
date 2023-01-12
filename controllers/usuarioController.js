

const formularioLogin = (req, res) => {
    res.render('auth/login', {
        autenticado: false
    })
}

//export nombrado para multiples exportaciones.
export {
    formularioLogin
}
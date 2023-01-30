import { check, validationResult } from 'express-validator'
import Usuario from '../models/Usuario.js'

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

const registrar= async (req, res) => {
    //validacion
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req)//para que los campos no esten vacios.
    
    let resultado =validationResult(req)

    res.json(resultado.array());
    //para leer la informacion de un form 'req.body'.
    const usuario= await Usuario.create(req.body)//Crea un nuevo usuario con la informacion dada
    res.json(usuario)// retorna con informacion bd
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
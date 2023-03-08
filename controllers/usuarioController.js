import { check, validationResult } from 'express-validator'
import Usuario from '../models/Usuario.js'
import { generarId } from '../helpers/tokens.js'
import { emailRegistro } from '../helpers/emails.js'

const formularioLogin = (req, res) => {
    //funcion para representar las vistas
    res.render('auth/login', {//informacion para pasar a esa vista
        pagina: 'Iniciar Sesión'

    })
}

const formularioRegistro = (req, res) => {
    //funcion para representar las vistas

    res.render('auth/registro', {//informacion para pasar a esa vista
        pagina: 'Crear Cuenta',
        csrfToken: req.csrfToken()//cada vez que se visite el formulario se genera un token.
    })
}

const registrar = async (req, res) => {
    //validacion
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req)//para que los campos no esten vacios.
    await check('email').isEmail().withMessage('Ingrese un email valido').run(req)//que sean emails validos.
    await check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').run(req)//un minimo necesario de contrasenias
    await check('repetir_password').equals(req.body.password).withMessage('Las contraseñas no coinciden').run(req)// verifica que las contrasenias coincidan.

    let resultado = validationResult(req)

    //verifica que el resultado este vacio
    if (!resultado.isEmpty()) {

        //errores
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            csrfToken: req.csrfToken(),//cada vez que se visite el formulario se genera un token.
            errores: resultado.array(),//muestra errores
            //autocompletado de los campos
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            },


        })
    }
    //extraer los datos
    const { nombre, email, password } = req.body
    //verifica que el usuario no este duplicado.
    const existeUsuario = await Usuario.findOne({ where: { email: email } })
    if (existeUsuario) {
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            csrfToken: req.csrfToken(),//cada vez que se visite el formulario se genera un token.
            errores: [{ msg: 'EL USUARIO YA ESTA REGISTRADO.' }],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }
    //Almacenar un usuario
    const usuario = await Usuario.create({
        nombre,
        email,
        password,
        token: generarId() //llamoa a la funcion al generador creado en tokens./
    })
    //envia email de confirmacion
    emailRegistro({
        nombre: usuario.nombre,
        email: usuario.email,
        token: usuario.token
    })

    //Mostrar mensaje de confirmacion
    res.render('template/mensaje', {
        pagina: 'Crear Cuenta',
        mensaje: 'Hemos enviado un email de confirmacion, presiona en el enlace.'
    })



}
//Funcion que comprueba una cuenta 
const confirmar = async (req, res) => {
    const { token } = req.params;
    console.log(token)
    //verificar si el token es valido.
    const usuario = await Usuario.findOne({ where: { token } })
    //si no existe el usuario
    if (!usuario) {
        return res.render('auth/confirmar-cuenta', {
            pagina: 'Error al confirmar tu cuenta',
            mensaje: 'Hubo un error al confirmar tu cuenta, intenta de nuevo.',
            error: true
        })

    }

    //confirmar la cuenta.
    usuario.token = null;
    usuario.confirmado = true;
    await usuario.save();
    res.render('auth/confirmar-cuenta', {
        pagina: 'Cuenta Confimada',
        mensaje: 'La cuenta se registro con exito!'
    })
}
const formularioRecuperarPassword = (req, res) => {
    //funcion para representar las vistas
    res.render('auth/recuperar-password', {//informacion para pasar a esa vista
        pagina: 'Recuperar contraseña',
        csrfToken: req.csrfToken()//cada vez que se visite el formulario se genera un token.

    })
}
const resetPassword = async (req, res) => {//solamente va a validar el email, Para identificar al usuario determinado.
    //validacion
    await check('email').isEmail().withMessage('Ingrese un email valido').run(req)//que sean emails validos.

    let resultado = validationResult(req)

    //verifica que el resultado este vacio
    if (!resultado.isEmpty()) {

        //errores
        return res.render('auth/recuperar-password', {
            pagina: 'Recuperar Acceso a BienesRaices',
            csrfToken: req.csrfToken(),//cada vez que se visite el formulario se genera un token.
            errores: resultado.array(),//muestra errores 
        })
    }
    // Buscar el usuario
    const {email}= req.body
    //buscamos en la lista el email.
    const usuario= await Usuario.findOne({where:{email}})
    if (!usuario) {

        //errores
        return res.render('auth/recuperar-password', {
            pagina: 'Recuperar Acceso a BienesRaices',
            csrfToken: req.csrfToken(),//cada vez que se visite el formulario se genera un token.
            errores: [{msg: 'El Email no pertenece a ningun usuario.'}],//muestra errores 
        })
    }
    
}


//export nombrado para multiples exportaciones.
export {
    formularioLogin, formularioRegistro, registrar, confirmar, formularioRecuperarPassword, resetPassword
}
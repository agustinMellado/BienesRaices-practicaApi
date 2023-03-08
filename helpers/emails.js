import nodemailer from 'nodemailer'


const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    const { email,nombre,token}=datos;

    //enviar el email.
    await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Confirma tu cuenta en BienesRaices.com ',
        text: 'Confirma tu cuenta en BienesRaices.com',
        html:` 
        <p> Hola ${nombre}, comprueba tu cuenta en BienesRaices.com</p>

        <p>Tu cuenta ya esta lista, solo debes confirmar en el siguiente enlace:
        <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}">Confirmar Cuenta</a></p>
        <p>Si tu no creaste esta cuenta puedes ignorar este mensaje.<p>`

    })
}


const emailRecuperarPassword = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    //funsion que toma todos los datos y luego se utilizan.
    const { email,nombre,token}=datos;

    //enviar el email.
    await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Restablece tu password en BienesRaices.com ',
        text: 'Restablece tu password en BienesRaices.com',
        html:` 
        <p> Hola ${nombre}, has solicitado restablecer tu contraseña en BienesRaices.com</p>

        <p>Sigue en siguiente enlace para generar una contraseña nueva: </p>
        <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/recuperar-password/${token}">Restablecer Contraseña</a></p>
        <p>Si tu no solicitaste el cambio de contraseña, puedes ignorar este mensaje.</p>`

    })
}

export {
    emailRegistro, emailRecuperarPassword
}
const nodemailer = require('nodemailer')

enviarMail = async () => {
    const Configuracion = {
        host:'smtp.office365.com',
        port: 587,
        secure : false,
        auth: {
            user:'gustavo.rivas1270@hotmail.com',
            pass: 'aqui va la contraseña del correo'
        }
    }
    const Mensaje = {
        from : 'gustavo.rivas1270@hotmail.com',
        to : 'j.william03@hotmail.com',
        subject : 'lo logre',
        text : 'Envio exitoso inge'
    }

    const transport = nodemailer.createTransport(Configuracion);
    const informacion = await transport.sendMail(Mensaje);

    console.log(informacion);
}

enviarMail();
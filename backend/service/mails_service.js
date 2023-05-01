const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper

// reuniao é um objeto 

async function main(meet) {
    // create reusable transporter object using the default SMTP transport

    if(meet == null || meet == ""){
        return;
    }

    let reuniao = JSON.parse(meet);

    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'reunioes.ronan@outlook.com', // generated ethereal user
            pass: 'K12k112023', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'reunioes.ronan@outlook.com', // sender address
        to: reuniao.email, // list of receivers
        subject: reuniao.titulo, // Subject line
        text: reuniao.titulo + "\n" + "Data: " + reuniao.data + "\n" + "Hora: " + reuniao.hora
            + "\n" + "Local: " + reuniao.local + "\n" + "Observacao: " + reuniao.observacao,  // plain text body
    }); 

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


main().catch(console.error);

// exporta a main numa chave valor main:main
module.exports = {
    main: main
}
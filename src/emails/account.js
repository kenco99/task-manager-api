const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'kenancollaco7@gmail.com',
        subject:'Welcome to the app',
        text: `welcome to the app, ${name}. let me know how you get along with the app.` //note use of backticks
    })
}

const sendCancellationEmail = (email, name )=>{
    sgMail.send({
        to: email,
        from:'kenancollaco7@gmail.com',
        subject:'We are sad to let you go',
        text:`Hey ${name}, we are sad to see you go is there anything we could do to improve.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
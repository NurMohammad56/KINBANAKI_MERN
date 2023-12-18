const nodeMailer = require("nodemailer");

const emailSend = async (emailTo, emailText, emailSubject)=>{
    let transport = nodeMailer.createTransport({
        host:"mail.teamrabbil.com",
        post:25,
        secure:false,
        auth:{user:"info@teamrabbil.com", pass:"~sR4[bhaC[Qs"},
        tls:{rejectUnauthorized:false}
    })

    let mailOption = {
        from:"From Mern E-commerce <info@teamrabbil.com>",
        to:emailTo,
        subject:emailSubject,
        text:emailText
    }
    return await transport.sendMail(mailOption);
}
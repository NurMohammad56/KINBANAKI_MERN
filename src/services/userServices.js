const userModel = require("../model/UserModel")
const {emailSend} = require("../Helpers/emailHelper") ;


const otpService = async (req)=>{
    try{
        let email = req.params.email;
        let code = Math.floor(100000 + Math.random() * 900000);
        let emailText = `Your Otp Code Is ${code}`;
        let emailSubject = "Email Verification";

        await emailSend(email, emailText, emailSubject);
        await userModel.updateOne({email:email}, {$set:{otp:code}}, {upsert:true} );
        return {status:"Success", message:"6 Digit Otp Code Was Sent"};
    }catch (e) {
        return {status:"Failed", message:"Something Went Wrong"};
    }
}

const verifyOtpService = async (req)=>{

}

const logoutServices = async (req)=>{

}

const createProfileService = async (req)=>{

}

const updateProfileService = async (req)=>{

}

const readProfileService = async (req)=>{

}

module.exports = {
    otpService,
    verifyOtpService,
    logoutServices,
    createProfileService,
    updateProfileService,
    readProfileService
}
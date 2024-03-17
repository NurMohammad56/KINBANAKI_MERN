const userModel = require("../model/UserModel");
const profileModel = require("../model/ProfileModel");
const {emailSend} = require("../Helpers/emailHelper") ;
const {encodeToken} = require("../Helpers/tokenHelper");


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
    try{
        let email = req.params.email;
        let otp = req.params.otp;
        let total =await userModel.find({email:email, otp:otp}).count('total')
        if (total === 1){
            // Read id
            let user_id = await userModel.find({email:email, otp:otp}).select('_id');
            // User token create
            let token = encodeToken(email, user_id[0]['_id'].toString());

            // OTP Update to 0
            await userModel.updateOne({email:email}, {$set:{otp:'0'}});
            return {status:"Success", message:"Done", token:token};
        }else{
            return {status:"Success", message:"Invalid otp"};
        }

    }catch (e) {
        return {status:"Failed", message:"Something Went Wrong"};
    }
}


const saveProfileService = async (req)=>{
    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = user_id;

        await profileModel.updateOne({userID : user_id}, {$set : reqBody}, {upsert:true});
        return {status: "Success", message: "Profile save successful"};
    }
    catch (e) {
        return {e};
    }
}


const readProfileService = async (req)=>{

}

module.exports = {
    otpService,
    verifyOtpService,
    saveProfileService,
    readProfileService
}
const userModel = require("../model/UserModel");
const profileModel = require("../model/ProfileModel");
const {emailSend} = require("../Helpers/emailHelper") ;
const {encodeToken, EncodeToken} = require("../Helpers/tokenHelper");


const otpService = async (req)=> {
    try {
        let email = req.params.email;
        let code = Math.floor(100000+Math.random()*900000);
        let emailText = `Your verification code is = ${code}`;
        let emailSub = "Email verification";
        await emailSend(email, emailText, emailSub);

        await userModel.updateOne({email:email}, {$set:{otp:code}}, {upsert:true});
        return {status: "Success", message:"Otp has been send"}
    }catch (e) {
        return {status: "Failed", message:"Something wrong"}
    }
}
const verifyOtpService = async (req)=> {
    try {
        let email = req.params.email;
        let otp = req.params.otp;
        // User count
        let total = await userModel.find({email:email, otp:otp}).count('total');

        if (total === 1){
            // User id read
            let user_id = await userModel.find({email: email, otp: otp}).select('_id');
            // User token create
            let token = EncodeToken(email, user_id[0]['_id'].toString());

            // Otp update to 0
            await userModel.updateOne({email:email}, {$set:{otp:'0'}}) ;
            return {status: "Success", message:"Valid otp", token:token};

        }else{
            return {status: "Failed", message:"invalid otp"};
        }
    }catch (e) {
        return {status: "Failed", message:"invalid otp"};
    }

}

const createProfileService = async (req)=>{
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    await profileModel.updateOne({userID : user_id}, {$set : reqBody}, {upsert:true});
    return {status: "Success", message: "Profile save success"}
}

const updateProfileService = async (req)=>{

}

const readProfileService = async (req)=>{

}

module.exports = {
    otpService,
    verifyOtpService,
    createProfileService,
    updateProfileService,
    readProfileService
}
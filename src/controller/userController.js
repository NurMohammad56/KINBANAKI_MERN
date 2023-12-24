const {otpService, verifyOtpService, logoutServices, updateProfileService, createProfileService, readProfileService} = require("../services/userServices")

exports.userOtp = async (req, res)=>{
        let result = await otpService(req);
        return res.status(200).json(result);
}

exports.verifyLogin = async (req, res)=>{

}

exports.userLogout = async (req, res)=>{

}

exports.createProfile = async (req, res)=>{

}

exports.updateProfile = async (req, res)=>{

}

exports.readProfile = async (req, res)=>{

}

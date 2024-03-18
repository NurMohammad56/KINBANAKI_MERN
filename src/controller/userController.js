const {otpService, verifyOtpService, saveProfileService, readProfileService} = require("../services/userServices")

exports.userOtp = async (req, res)=>{
        let result = await otpService(req);
        return res.status(200).json(result);
}

exports.verifyLogin = async (req, res)=> {
        let result = await verifyOtpService(req);

        if (result['status'] === 'Success'){
                // Cookies set
                let cookieOption={
                        expires: new Date(Date.now()+24*6060*1000),
                        httpOnly: false
                }
                // Set cookie with res
                res.cookie('token', result['token'],cookieOption)
                return res.status(200).json(result);
        }else{
                return res.status(200).json(result);
        }

}
exports.userLogout = async (req, res)=>{
        let cookieOption={expires: new Date(Date.now()-24*6060*1000), httpOnly: false}
        res.cookie('token', "",cookieOption)
        return res.status(200).json({status: "Success"});
}

exports.createProfile = async (req, res)=>{
        let result = await saveProfileService();
        return res.status(200).json(result);
}

exports.updateProfile = async (req, res)=>{
        let result = await saveProfileService();
        return res.status(200).json(result);
}

exports.readProfile = async (req, res)=>{

}

const {otpService, verifyOtpService, logoutServices, saveProfileService, readProfileService} = require("../services/userServices")

exports.userOtp = async (req, res)=>{
        let result = await otpService(req);
        return res.status(200).json(result);
}

exports.verifyLogin = async (req, res)=>{
        let result = await verifyOtpService(req);
        if (result['status']==='Success'){
                let setCookies ={
                        expires:new Date(Date.now()+24*6060*1000),
                        httpOnly:false,
                }
                res.cookie('Token', result['token'], setCookies);
                return res.status(200).json(result);
        }else{

        }
        return res.status(200).json({message:"Not found"});
}

exports.userLogout = async (req, res)=>{
        let setCookies ={expires:new Date(Date.now()-24*6060*1000), httponly:false,}
        res.cookie('Token', '', setCookies);
        return res.status(200).json({status:"Success"});
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

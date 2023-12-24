import {decodeToken} from "../Helpers/tokenHelper";

module.exports = (req, res, next)=>{
    let token = req.headers['token'];
    if (!token){
        token = req.cookies['token'];
    }

    let decodedToken = decodeToken(token);

    if (decodedToken===null){
        return res.status(401).json({status:"Failed", message:"Unauthorized"});
    }else{
        let email = decodedToken['email'];
        let user_id = decodedToken['user_id'];
        req.headers.email = email;
        req.headers.user_id = user_id;

        next();
    }
}
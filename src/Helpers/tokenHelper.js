const jwt = require("jsonwebtoken");

exports.EncodeToken = (email, user_id)=>{
    let key = "123-ABC-XYZ";
    let expire = {expiresIn: "24h"};
    let payload = {email:email, user_id:user_id};
    return jwt.sign(payload, key, expire);

}

exports.DecodeToken=(token)=>{
    try{
        let key = "123-ABC-XYZ";
        return jwt.verify(token, key)
    }catch (e) {
        return null
    }
}
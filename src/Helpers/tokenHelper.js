const JWT = require("jsonwebtoken");

exports.encodeToken = (email, user_ID)=>{
    let key = "123-ABC-XYZ";
    let expire = {expiresIn: '24h'};
    let payLoad ={email:email, user_ID:user_ID};
    return JWT.sign(payLoad, key, expire);
}

exports.decodeToken= (token)=>{
    try{
        let key = "123-ABC-XYZ";
        return JWT.verify(token, key);
    }catch (e){
        return null
    }
}
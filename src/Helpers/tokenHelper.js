const JWT = require("jsonwebtoken");

exports.encodeToken = (email, user_id)=>{
    let key = "123-ABC-XYZ";
    let expire = {expiresIn: '24h'};
    let payLoad ={email:email, user_id:user_id};
    return JWT.sign(payLoad, key, expire);
}

exports.decodeToken= (token)=>{
    try{
        console.log(token);
        let key = "123-ABC-XYZ";
        return JWT.verify(token, key);
    }catch (e){
        return console.log(e.message)
    }
}
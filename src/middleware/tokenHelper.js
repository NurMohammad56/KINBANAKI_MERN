
const {decodeToken} = require("../Helpers/tokenHelper");




module.exports = (req, res, next) => {
    let token = req.headers['token'];
    if (!token) {
        token = req.cookies['token'];
    }

    try {
        let decoded = decodeToken(token);

        if (!decoded) {
            return res.status(401).json({ status: "Failed", message: "Invalid or expired token" });
        } else {
            let { email, user_id } = decoded;
            req.headers.email = email;
            req.headers.user_id = user_id;

            next();
        }
    } catch (error) {
        console.error("Error decoding token:", error);
        return res.status(500).json({ status: "Failed", message: "Internal server error" });
    }
}
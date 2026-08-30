import jwt from  "jsonwebtoken";
import User from "../model/User.js";    
const checkAuth = async (req, res, next) => {
    const token = req.cookies.jwt;
    if(!token) return res.status(401).send({error: "Access denied"});
    try {
        const { _id } = jwt.verify(token, 'mySecretKey');
        const user = await User.findById(_id);
        req.user = {
            fullname: user.fullname,
            email: user.email,
            isAdmin: user.isAdmin,
        }
    } catch (error) {
        res.status(400).send({error: "Invalid token"});
    }
    console.log(token);
    next();
}
export default checkAuth;
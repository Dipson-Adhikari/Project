import jwt from  "jsonwebtoken";
import User from "../model/User.js";    
const checkAuth = async (req, res, next) => {
    const token = req.cookies.jwt;
    if(!token) return res.status(401).send({error: "Access denied"});
    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(_id);
        req.user = {
            _id: user._id,
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
const checkAdmin = (req, res, next) => {
    if(req.user.isAdmin) {
        next();
    }
    else {
        res.status(403).send({error: "you are not authorized to perform this action"});
    }
}
export { checkAuth, checkAdmin };
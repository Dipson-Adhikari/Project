import User from '../model/User.js';
import createToken from '../utils/createtoken.js';

//signup function
const signup = async (req, res) => {
    const { fullname, email, password, isAdmin } = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(400).send({ error: "User already exists" });
    const newUser = new User({ fullname, email, password, isAdmin });
    await newUser.save();
    res.send({ message: "User created successfully", user: {
        fullname: newUser.fullname,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
    },
 });
};

//Login function
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email});
    if (!user) return res.status(400).send({ error: "User does not exist" });
    if(await user.comparePassword(password)) {
        createToken(user._id, res);
        res.send({ message: "Login successful", user: {
            fullname: user.fullname,
            email: user.email,
            isAdmin: user.isAdmin,
        },
     });
    } else {
        res.status(400).send({ error: "password invalid" });
    }
};

const logout = (req, res) => {
    res.clearCookie("jwt");
    res.send({ message: "Logout successful" });
}

export { signup, login, logout };
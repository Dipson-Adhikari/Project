import User from '../model/User.js';

const signup = async (req, res) => {
    const { fullname, email, password, isAdmin } = req.body;
    const user = await User.find({ email });
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

export { signup };
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema(
    {
        fullname:
        {
            type: String,
            required: true, 
        },
        email:
        {
            type: String,
            required: true,
            unique: [true, "Email already exists"],
        },
        password:
        {
            type: String,
            minLength: [6, "Password must be at least 6 characters long"],
            required: true,
        },
        isAdmin:
        {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) 
    {return ;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);
export default User;
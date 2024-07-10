import bcrypt from "bcrypt";
import User from "../models/User.js";
import userSchema from "../validations/signupValidation.js";
import jwt from "jsonwebtoken";
import { SECRET_KEY_EXPIRE } from "../envhandler.js";

export const signUp = async (req, res) => {
    
    const { name, email, password, mobile, status } = req.body;
    const data = { name, email, password, mobile };
    
    // Validate data
    const { error, value } = userSchema.validate(data);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const userData = {
            name: name,
            email: email,
            password: hashedPassword,
            mobile: mobile,
            status: status
        };

        const user = await User.create(userData);

        res.status(201).json({
            message: "User created successfully",
            user: user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const signIn = async (req, res) =>{
    const {email, password} = req.body;
    
   
    try {
           const user = await User.findOne({email}); 
           if(!user)
           {
             return res.status(404).json({message:"User not found!"});
           }
           
           const isMatch = await bcrypt.compare(password, user.password);
           
           if(!isMatch)
           {
             return res.status(401).json({message:"Your password is not matched!"});
           }
           else{
            return res.status(401).json({message:"Your password is not matched!"});
           }

           console.log(123);
           const token = jwt.sign({ email }, secretKey, { expiresIn: SECRET_KEY_EXPIRE });
           console.log(token);
    } catch (error) {
        
    }

}

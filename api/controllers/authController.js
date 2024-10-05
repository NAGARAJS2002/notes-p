import bcryptjs from 'bcryptjs';
import User from '../models/userModel.js'; 
import jwt from "jsonwebtoken"
import {errorHandler} from "../utils/error.js"

export const register = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields (username, email, password) are required" });
    }

    try {
        const hashedPassword = bcryptjs.hashSync(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
      await newUser.save();
        res.status(201).json('User created successfully!');
    } catch (error) {
        next(error); 
    }
};




export const login = async (req,res,next)=>{
    const {email,password} = req.body;
    try {
        const validUser = await User.findOne({email})
        if (!validUser) return next(errorHandler(404,`user not found `));

        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword) return next(errorHandler(401,'wrong credential!'));

        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
        const {password: pass, ...rest} = validUser._doc;
        res.cookie('access_token',token,{http:true}).status(202)
.json(rest) 
 } 
catch (error) {
        next(error )
    }
};


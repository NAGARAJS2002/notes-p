import bcryptjs from 'bcryptjs';
import User from '../models/userModel.js'; 


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


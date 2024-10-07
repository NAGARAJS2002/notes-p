import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs/dist/bcrypt.js";
import User from "../models/userModel.js";


export const updateUser = async (req,res,next) => {
  if(req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only update your own account!'));
 try {
    if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }

      const updatedUser = await  User.findByIdAndUpdate(
        req.params.id,
        {
            $set:{
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
            },

        },
        {new:true}
 );

 const {password:pass, ...rest} = updatedUser._doc;
 res.status(201).json(rest)

 } catch (error) {
    next(error);
 }
}
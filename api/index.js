import express from "express"
import env from "dotenv"
import mongoose from "mongoose";
import authRouter from "./routes/authRoute.js"
env.config();
const app = express();
const port = 3000;

app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log(`database connected`);
    
})

 

app.listen(port ,()=>{
    console.log(`server is running on port ${port}`);
    
});


app.use('/api/auth/',authRouter);




app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({

        success: false,
        statusCode,
        message,
    }
      
    )
})

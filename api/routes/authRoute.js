import express from "express"
import { register, login ,google, signOut} from "../controllers/authController.js";

const router = express.Router();

router.post('/register',register)
router.post('/login',login)
router.post('/google',google)
router.get('/signout',signOut)


export default router;
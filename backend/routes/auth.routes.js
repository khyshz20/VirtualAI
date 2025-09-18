import express from "express"
import { signUp, logIn, logOut } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/signup", signUp)
authRouter.post("/signin", logIn)
authRouter.get("/logout", logOut)
export default authRouter

// External Dependencies
import express, {  Request, Response } from "express";
import User from "../models/user";
const bcrypt=require('bcrypt')


// Global Config
export const login = express.Router();

login.use(express.json());
// GET

// POST
login.post("/", async (_req: Request, res: Response) => {

    try {
        const { username, password } = _req.body;
        const user=await User.findOne({username});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ 'message': Error });
        }
        // Login successful
        res.status(200).json({ message: "Login successful" });

    }
    catch(error)
    {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// PUT

// DELETE

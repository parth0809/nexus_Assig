
// External Dependencies
import express, {  Request, Response } from "express";
import User from "../models/user"
import Instituion from "../models/institution";

// Global Config
export const signup = express.Router();

signup.use(express.json());
// GET

// POST
signup.post("/", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const password=await _req.body.password;
        const user=new User({
            username:username,
            password:password
        }); 
        await user.save();
        const instituion=new Instituion({
            Username:username,
            Locations:[],
            Specialists:[],
            Doctors:[],
            Reviews:[],
            Testing_facilities:[],
            availabilities:[],
            InsuranceAccepted:[]
        });
        await instituion.save();
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

// PUT

// DELETE

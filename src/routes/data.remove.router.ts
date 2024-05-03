// External Dependencies
import express, {  Request, Response } from "express";
import Institution from "../models/institution"
import User from "../models/user";
const bcrypt=require('bcrypt')


// Global Config
export const institute = express.Router();

institute.use(express.json());
// GET

institute.post("/location", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const location=await _req.body.location;
        await Institution.findOneAndUpdate({Username:username},
            {
                $pull:{
                    "Locations":location
                }
            }
        );
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

institute.post("/specialist", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const specialist=await _req.body.specialist;
        await Institution.findOneAndUpdate({Username:username},
            {
                $pull:{
                    "Specialists":specialist
                }
            }
        );
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});


institute.post("/doctors", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const doctors=await _req.body.doctors;
        await Institution.findOneAndUpdate({Username:username},
            {
                $pull:{
                    "Doctors":doctors
                }
            }
        );
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

institute.post("/reviews", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const reviews=await _req.body.reviews;
        await Institution.findOneAndUpdate({Username:username},
            {
                $pull:{
                    "Reviews":reviews
                }
            }
        );
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

institute.post("/testing", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const testing=await _req.body.testing;
        await Institution.findOneAndUpdate({Username:username},
            {
                $pull:{
                    "Testing_facilities":testing
                }
            }
        );
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

institute.post("/availability", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const availability=await _req.body.availability;
        await Institution.findOneAndUpdate({Username:username},
            {
                $pull:{
                    "availabilities":availability
                }
            }
        );
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

institute.post("/insurance", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const insurance=await _req.body.insurance;
        await Institution.findOneAndUpdate({Username:username},
            {
                $pull:{
                    "InsuranceAccepted":insurance
                }
            }
        );
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

institute.post("/profile", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const password=await _req.body.password;
        const user=await User.findOne({username});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ 'message': Error });
        }
        await User.findOneAndDelete({username});
        await Institution.findOneAndDelete({Username:username});
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});
// PUT

// DELETE

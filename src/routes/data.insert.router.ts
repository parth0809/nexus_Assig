// External Dependencies
import express, {  Request, Response } from "express";
import Institution from "../models/institution"


// Global Config
export const instituion = express.Router();

instituion.use(express.json());
// GET

instituion.post("/location", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const location=await _req.body.location;
        await Institution.findOneAndUpdate({Username:username},
            {
                $addToSet:{
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

instituion.post("/specialist", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const specialist=await _req.body.specialist;
        await Institution.findOneAndUpdate({Username:username},
            {
                $addToSet:{
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

instituion.post("/doctors", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const doctors=await _req.body.doctors;
        await Institution.findOneAndUpdate({Username:username},
            {
                $addToSet:{
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

instituion.post("/reviews", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const reviews=await _req.body.reviews;
 
        await Institution.findOneAndUpdate({Username:username},
            {
                $addToSet:{
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

instituion.post("/testing", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const testing=await _req.body.testing;
        await Institution.findOneAndUpdate({Username:username},
            {
                $addToSet:{
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

instituion.post("/availability", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const availability=await _req.body.availability;
        await Institution.findOneAndUpdate({Username:username},
            {
                $addToSet:{
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

instituion.post("/insurance", async (_req: Request, res: Response) => {
    try {
        const username=await _req.body.username;
        const insurance=await _req.body.insurance;
        await Institution.findOneAndUpdate({Username:username},
            {
                $addToSet:{
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
// PUT

// DELETE

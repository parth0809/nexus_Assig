// External Dependencies
import express, {  Request, Response } from "express";
import Patient from "../models/patients";

// Global Config
export const add_patients = express.Router();

add_patients.use(express.json());
// GET

add_patients.post("/profile", async (_req: Request, res: Response) => {
    try {
        const patient_Name=await _req.body.patient_Name;
        const hospital_name=await _req.body.hospital_name;
        const age=await _req.body.age;
        const patient=new Patient({
            name_of_patient:patient_Name,
            hospital_name:hospital_name,
            age:age,
            doctors:[],
            specialists:[],
            insurance:[]
        });
        await patient.save();
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

add_patients.post("/doctors", async (_req: Request, res: Response) => {
    try {
        const patient_Name=await _req.body.patient_Name;
        const doctor=await _req.body.doctor_Name;
        await Patient.findOneAndUpdate({name_of_patient:patient_Name},
            {
            $addToSet:{
                doctors:doctor
            }
        })
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

add_patients.post("/specialists", async (_req: Request, res: Response) => {
    try {
        const patient_Name=await _req.body.patient_Name;
        const specialist=await _req.body.specialist;
        await Patient.findOneAndUpdate({name_of_patient:patient_Name},
            {
            $addToSet:{
                specialists:specialist
            }
        })
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

add_patients.post("/insurance", async (_req: Request, res: Response) => {
    try {
        const patient_Name=await _req.body.patient_Name;
        const insurance=await _req.body.insurance;
        await Patient.findOneAndUpdate({name_of_patient:patient_Name},
            {
            $addToSet:{
                insurance:insurance
            }
        })
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

add_patients.post("/review", async (_req: Request, res: Response) => {
    try {
        const patient_Name=await _req.body.patient_Name;
        const review=await _req.body.reviews;
        await Patient.findOneAndUpdate({name_of_patient:patient_Name},
            {
            $push:{
                reviews:review
            }
        })
        res.status(200).json({'Success':true})
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});
// PUT

// DELETE

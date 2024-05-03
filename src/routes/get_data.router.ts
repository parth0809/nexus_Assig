// External Dependencies
import express, {  Request, Response } from "express";
import Patient from "../models/patients";
import Instituion from "../models/institution";

// Global Config
export const data = express.Router();

data.use(express.json());
// GET

data.get("/institution/profile", async (_req: Request, res: Response) => {
    try {
        const Username=await _req.body.username;
        const institution=await Instituion.findOne({
            Username:Username
        });
        if(!institution)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'Hospital_name':institution?.Username,
        'Locations':institution?.Locations,
        'Specialists':institution?.Specialists,
        'Doctors':institution?.Doctors,
        'Reviews':institution?.Reviews,
        'Testing_facilities':institution?.Testing_facilities,
        'availabilities':institution?.availabilities,
        'InsuranceAccepted':institution?.InsuranceAccepted
    })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});
data.get("/institution/Hospital_Name", async (_req: Request, res: Response) => {
    try {
        const Username=await _req.body.username;
        const institution=await Instituion.findOne({
            Username:Username
        });
        if(!institution)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'Hospital_name':institution?.Username,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});
data.get("/institution/Locations", async (_req: Request, res: Response) => {
    try {
        const Username=await _req.body.username;
        const institution=await Instituion.findOne({
            Username:Username
        });
        if(!institution)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'Locations':institution?.Locations,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

data.get("/institution/Specialists", async (_req: Request, res: Response) => {
    try {
        const Username=await _req.body.username;
        const institution=await Instituion.findOne({
            Username:Username
        });
        if(!institution)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'Specialists':institution?.Specialists,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

data.get("/institution/Doctors", async (_req: Request, res: Response) => {
    try {
        const Username=await _req.body.username;
        const institution=await Instituion.findOne({
            Username:Username
        });
        if(!institution)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'Doctors':institution?.Doctors,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

data.get("/institution/Reviews", async (_req: Request, res: Response) => {
    try {
        const Username=await _req.body.username;
        const institution=await Instituion.findOne({
            Username:Username
        });
        if(!institution)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'Reviews':institution?.Reviews,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

data.get("/institution/Testing_facilities", async (_req: Request, res: Response) => {
    try {
        const Username=await _req.body.username;
        const institution=await Instituion.findOne({
            Username:Username
        });
        if(!institution)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'Testing_facilities':institution?.Testing_facilities,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

data.get("/institution/availability", async (_req: Request, res: Response) => {
    try {
        const Username=await _req.body.username;
        const institution=await Instituion.findOne({
            Username:Username
        });
        if(!institution)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'availabilities':institution?.availabilities,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

data.get("/institution/InsuranceAccepted", async (_req: Request, res: Response) => {
    try {
        const Username=await _req.body.username;
        const institution=await Instituion.findOne({
            Username:Username
        });
        if(!institution)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'InsuranceAccepted':institution?.InsuranceAccepted,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});



data.get("/patient/profile", async (_req: Request, res: Response) => {
    try {
        const name=await _req.body.username;
        const patient=await Patient.findOne({
            name_of_patient:name
        });
        if(!patient)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'name_of_patient':patient?.name_of_patient,
        'hospital_name':patient?.hospital_name,
        'age':patient?.age,
        'Doctors':patient?.doctors,
        'Insurance':patient?.insurance,
        'Specialists':patient?.specialists,
        'reviews':patient?.reviews,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

data.get("/patient/hospital_name", async (_req: Request, res: Response) => {
    try {
        const name=await _req.body.username;
        const patient=await Patient.findOne({
            name_of_patient:name
        });
        if(!patient)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'hospital_name':patient?.hospital_name,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

data.get("/patient/age", async (_req: Request, res: Response) => {
    try {
        const name=await _req.body.username;
        const patient=await Patient.findOne({
            name_of_patient:name
        });
        if(!patient)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'age':patient?.age,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

data.get("/patient/doctors", async (_req: Request, res: Response) => {
    try {
        const name=await _req.body.username;
        const patient=await Patient.findOne({
            name_of_patient:name
        });
        if(!patient)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'Doctors':patient?.doctors,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

data.get("/patient/specialists", async (_req: Request, res: Response) => {
    try {
        const name=await _req.body.username;
        const patient=await Patient.findOne({
            name_of_patient:name
        });
        if(!patient)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'Specialists':patient?.specialists,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});

data.get("/patient/reviews", async (_req: Request, res: Response) => {
    try {
        const name=await _req.body.username;
        const patient=await Patient.findOne({
            name_of_patient:name
        });
        if(!patient)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'reviews':patient?.reviews,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});


data.get("/patient/insurance", async (_req: Request, res: Response) => {
    try {
        const name=await _req.body.username;
        const patient=await Patient.findOne({
            name_of_patient:name
        });
        if(!patient)
            res.status(401).json({"Success":false})
        res.status(200).json({"Success":true,
        'insurance':patient?.insurance,
        })
        } 
    catch (error) {
        res.status(500)
        .json({'Success':false});
    }
});


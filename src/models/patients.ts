// External dependencies
import { Schema, model } from 'mongoose';
const uniqueValidator=require('mongoose-unique-validator')


// Class Implementation

interface IPatient {
    name_of_patient: string;
    hospital_name:String;
    age:String;
    doctors:String[];
    specialists:String[];
    insurance:String[];
    reviews:String[];
  }

  const patientSchema=new Schema<IPatient>({
    name_of_patient:{
        type:String,
        unique:true,
        required:true
    },
    hospital_name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    doctors:[{
        unique:true,
        type:String
    }],
    specialists:[{
        type:String,
        unique:true,
    }],
    insurance:[{
        type:String,
        unique:true,
    }],
    reviews:[{
        type:String
    }]
  });
patientSchema.plugin(uniqueValidator);
const Patient=model<IPatient>('Patient',patientSchema,'Patient');
export default Patient

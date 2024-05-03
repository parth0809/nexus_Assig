
// External dependencies
import { Schema, model } from 'mongoose';
const uniqueValidator=require('mongoose-unique-validator')
const bcrypt=require('bcrypt')


// Class Implementation
interface IInstitution  {
    Username: string;
    Locations: string[];
    Specialists: string[];
    Doctors: string[];
    Reviews: string[];
    Testing_facilities: string[];
    availabilities: string[];
    InsuranceAccepted: string[];
}

  const instituionSchema=new Schema<IInstitution>({
    Username: {
        type:String,
        required:true,
        unique:true
    },
    Locations: [{
        type:String
    }],
    Specialists: [{
        type:String
    }],
    Doctors: [{
        type:String
    }],
    Reviews:[{
        type:String
    }],
    Testing_facilities:[{
        type:String
    }],
    availabilities:[{
        type:String
    }],
    InsuranceAccepted:[{
        type:String
    }],
  });
  instituionSchema.plugin(uniqueValidator);
const Instituion=model<IInstitution>('Institute',instituionSchema,'Institute');
export default Instituion

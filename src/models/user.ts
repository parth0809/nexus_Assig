// External dependencies
import { Schema, model } from 'mongoose';
const uniqueValidator=require('mongoose-unique-validator')
const bcrypt=require('bcrypt')

// Class Implementation

interface IUser {
    password: string;
    username: string;
  }

  const userSchema=new Schema<IUser>({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
  });
userSchema.plugin(uniqueValidator);
userSchema.pre<IUser>('save', async function (next) {
  try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
  } catch (error) {
      next();
  }
}); 
const User=model<IUser>('User',userSchema,'User');
export default User

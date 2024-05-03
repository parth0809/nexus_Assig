// External Dependencies
import { connect } from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config();
// Global Variables
// Initialize Connection
export async function connectToDatabase () {
  const db_url:string=await process.env.DB_URI!;
  const db_name:string=await process.env.DB_NAME!;
  await connect(db_url,{
    dbName:db_name,
  }).then((data: any)=>{}).catch((err: any)=>{
    });
  }

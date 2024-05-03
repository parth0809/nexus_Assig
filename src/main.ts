const express=require('express')
import { connectToDatabase } from "./services/database.services"
import {signup} from './routes/signup.router'
import {login} from './routes/login.router'
import {instituion} from "./routes/data.insert.router"
import {institute } from "./routes/data.remove.router"
import {add_patients} from "./routes/add.patient.router"
import {data} from './routes/get_data.router'

const app = express();
const PORT = process.env.PORT;

connectToDatabase()
    .then(() => {
         app.use("/authentication/signup",signup);
         app.use("/authentication/login",login);
         app.use("/insert",instituion);
         app.use("/remove",institute);
         app.use("/addPatient",add_patients);
         app.use("/getData",data)
         app.listen(PORT, () => {        });
    })
    .catch((error: Error) => {
        process.exit()
    });

export default app;
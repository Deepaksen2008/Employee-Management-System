import express from "express";
import cors from 'cors';
import { adminRouter } from "./Routes/AdminRoutes/Routes.js";
import { empRouter } from "./Routes/EmpRoutes/empRoutes.js";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
dotenv.config()
// import user from "./cron.js";
// import {adminRouter} from "./Routes/AdminRoute.js"
const PORT=process.env.PORT
const app = express()
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
}))

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', adminRouter)
app.use('/', empRouter)
  
// console.log(user());

app.listen(PORT,()=>{
    console.log(`Server is running`)
})

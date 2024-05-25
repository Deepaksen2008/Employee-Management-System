import express from "express";
import { empApplyforLeave } from "../../Controller/EmpContoller/EmpLeave/applyforleave.js";
import { empApplyLeaveStatus } from "../../Controller/EmpContoller/EmpLeave/empappliedleavestatus.js";
import { empprofile } from "../../Controller/EmpContoller/empprofile.js";
import { empappleave } from "../../Controller/EmpContoller/EmpLeave/empappleave.js";
import { emprejleave } from "../../Controller/EmpContoller/EmpLeave/emprejleave.js";
import { empattendance } from "../../Controller/EmpContoller/empattendance.js";
import { empviewattendancedetail } from "../../Controller/EmpContoller/empviewattendancedetails.js";


const router = express.Router()

router.post("/empapplyforleave", empApplyforLeave)
router.get("/empapplyleavestatus", empApplyLeaveStatus)
router.get("/empprofile", empprofile)
router.get("/empattendance", empattendance)
router.get("/empappleave/s", empappleave) 
router.get("/emprejleave/s", emprejleave) 
router.get("/empviewattendancedetail", empviewattendancedetail)


export { router as empRouter }
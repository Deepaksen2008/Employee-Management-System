import express from "express";
import { getEmployee } from "../../Controller/AdminController/employeeView.js";
import { deleteEmp } from "../../Controller/AdminController/employeeDelete.js";
import { adminLogin } from "../../Controller/AdminController/adminLogin.js";
import { addEmployee } from "../../Controller/AdminController/employeeAdd.js";
import { updateEmployee } from "../../Controller/AdminController/employeeUpdate.js";
import { employeeDataView } from "../../Controller/AdminController/employeeDataView.js";
import { employeeSalary } from "../../Controller/AdminController/EmployeeSalary/employeeSalary.js";
import { getEmployeeEdit } from "../../Controller/AdminController/EmployeeEditDataView/empeditview.js";
import { getAllEmpData } from "../../Controller/AdminController/getAllEmpData.js";
import { deptData } from "../../Controller/Department/departmentdata.js";
import { getdeptemp } from "../../Controller/Department/departmentDeptEmp.js";
import { adddept } from "../../Controller/Department/adddepartment.js";
import { attendanceEmp } from "../../Controller/AdminController/AttendanceEmp/attendanceEmp.js";
import { attendanceEmpOut } from "../../Controller/AdminController/AttendanceEmp/attendanceOut.js";
import { attendanceView } from "../../Controller/AdminController/AttendanceEmp/attendanceView.js";
import { attendanceUpdate } from "../../Controller/AdminController/AttendanceEmp/attendanceUpdate.js";
import { listData } from "../../Controller/AdminController/Listed/listData.js";
import { leaveType } from "../../Controller/AdminController/LeaveType/leaveType.js";
import { addleave } from "../../Controller/AdminController/LeaveType/addLeave.js";
import { empPendingReq } from "../../Controller/AdminController/LeaveType/empPendingReq.js";
import { leaveReqdetail } from "../../Controller/AdminController/LeaveType/leavereqdetail.js";
import { getleaveReqdetail } from "../../Controller/AdminController/LeaveType/getleaveReqdetail.js";
import { empapprovedreq } from "../../Controller/AdminController/LeaveType/empApprovedReq.js";
import { emprejectedreq } from "../../Controller/AdminController/LeaveType/empRejectedReq.js";
import { getdeptsalary } from "../../Controller/AdminController/AttendanceEmp/Salary/getdept.js";
import { getempfromdept } from "../../Controller/AdminController/AttendanceEmp/Salary/getempfromdept.js";
import { empSalaryDetail } from "../../Controller/AdminController/EmployeeSalary/empsalarydetail.js";
import { leavereq } from "../../Controller/AdminController/LeaveType/leavereq.js";
import { viewattendancedetail } from "../../Controller/AdminController/AttendanceEmp/Salary/viewattendancedetail.js";
import { empattendanceview } from "../../Controller/EmpContoller/empattendanceView.js";
import { sendMail} from "../../Controller/AdminController/SendMail/sendMail.js";
import { sendSMS } from "../../Controller/AdminController/SendSMS/sendsms.js";
import { upload } from "../../Controller/AdminController/file.js";


const router = express.Router()

router.post('/adminlogin', adminLogin);
router.get("/employees", getEmployee);
router.post("/edit_employee", addEmployee);
router.delete("/employees", deleteEmp);
router.put("/employees", updateEmployee);
router.post('/adddept', adddept)
router.get("/employee/s", employeeDataView)    //http://localhost:4000/employee/s?q=

router.get("/empsalary", employeeSalary);
router.get("/empdataview", getEmployeeEdit);
router.get("/getallempdata", getAllEmpData);
router.get("/deptdata", deptData);
router.get("/getdeptemp", getdeptemp);
router.post("/attendanceemp", attendanceEmp);
router.put("/attendanceempout", attendanceEmpOut);
router.get("/attendanceView", attendanceView);
router.put("/attendanceupdate", attendanceUpdate)
router.get("/listdata", listData)
router.get("/leavetype", leaveType)
router.post("/addleave", addleave)
router.get("/emppendingreq", empPendingReq)
router.get("/empapprovedreq", empapprovedreq)
router.get("/emprejectedreq", emprejectedreq)
router.get("/getleavereqdetail", getleaveReqdetail)
router.put("/leavereqdetail", leaveReqdetail)
router.get("/viewattendancedetail", viewattendancedetail)
router.get("/getdeptsalary", getdeptsalary)
router.get("/getempfromdept", getempfromdept)
router.get("/empsalarydetail", empSalaryDetail)
router.get("/leavereq", leavereq)
router.get("/empattendanceview", empattendanceview)

router.post("/sendmail", upload, sendMail) 
router.post("/sendsms", sendSMS)

// router.post("/upload",upload, uploadimage)

export { router as adminRouter }
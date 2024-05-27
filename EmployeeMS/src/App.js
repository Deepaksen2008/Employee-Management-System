import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Auth from './Components/Auth';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Department from './Components/Department';
import Employees from './Components/Employees';
import EditEmployee from './Components/EditEmployee';
import LeaveReq from './Components/LeaveReq';
import LeaveType from './Components/LeaveType';
import Salary from './Components/Salary';
import Home from './Components/Home';
import AddDepartment from './Components/AddDepartment';
import UpdateDepartment from './Components/UpdateDepartment';
import View from './Components/ViewDept';
import PendingReq from './Components/PendingReq';
import LeaveReqDetails from './Components/LeaveReqDetails';
import ApprovedReq from './Components/ApprovedReq';
import RejectedReq from './Components/RejectedReq';
import SalaryEdit from './Components/SalaryEdit';
import EmpSalary from './Components/EmpSalary';
import EmpDetails from './Components/EmpDetails';
import EmpDashboard from './Components/EmpDashboard';
import EmpAttendance from './Components/EmpAttendance';
import EmpHome from './Components/EmpHome';
import EmpProfile from './Components/EmpProfile';
import EmpLeave from './Components/EmpLeave';
import Payroll from './Components/Payroll';
import ApplyForLeave from './Components/ApplyForLeave';
import ApplyLeaveStatus from './Components/ApplyLeaveStatus';
import EdiEmpData from './Components/EdiEmpData';
import ViewDept from './Components/ViewDept';
import Attendance from './Components/Attendance';
import AddLeaveType from './Components/AddLeaveType';
import PayOut from './Components/PayOut';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/auth/adminlogin' element={<Login />}></Route>
        <Route path='/empdashboard' element={<EmpDashboard />}>
          <Route path='/empdashboard/emphome' element={<EmpHome />}></Route>
          <Route path='/empdashboard/profile' element={<EmpProfile />}></Route>
          <Route path='/empdashboard/empleave' element={<EmpLeave />}></Route>
          <Route path='/empdashboard/payroll' element={<Payroll />}>
            <Route path='/empdashboard/payroll/payout' element={<PayOut />}></Route></Route>
          <Route path='/empdashboard/empleave/applyforleave' element={<ApplyForLeave />}></Route>
          <Route path='/empdashboard/empleave/appliedleavestatus' element={<ApplyLeaveStatus />}></Route>
          <Route path='/empdashboard/attendance' element={<EmpAttendance />}></Route></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/home' element={<Home />}></Route>
          <Route path='/dashboard/attendance' element={<Attendance />}></Route>
          <Route path='/dashboard/department' exact element={<Department />}></Route>
          <Route path='/dashboard/department/view_dept' exact element={<ViewDept />}></Route>
          <Route path='/dashboard/department/add_department' element={<AddDepartment />}></Route>
          <Route path='/dashboard/employees' element={<Employees />}></Route>
          <Route path='/dashboard/employees/edit_employee' element={<EditEmployee />}></Route>
          <Route path='/dashboard/employees/editempdata' element={<EdiEmpData />}></Route>
          <Route path='/dashboard/employees/empsalary' element={<EmpSalary />}></Route>
          <Route path='/dashboard/employees/empdetails' element={<EmpDetails />}></Route>
          <Route path='/dashboard/leavereq' element={<LeaveReq />}></Route>
          <Route path='/dashboard/leavereq/pendingReq' element={<PendingReq />}></Route>
          <Route path='/dashboard/leavereq/approvedReq' element={<ApprovedReq />}></Route>
          <Route path='/dashboard/leavereq/rejectedReq' element={<RejectedReq />}></Route>
          <Route path='/dashboard/leavereq/pendingReq/leaveReqDetails' element={<LeaveReqDetails />}></Route>
          <Route path='/dashboard/leavetype' element={<LeaveType />}></Route>
          <Route path='/dashboard/leavetype/addleavetype' element={<AddLeaveType />}></Route>
          <Route path='/dashboard/update_department' element={<UpdateDepartment />}></Route>
          <Route path='/dashboard/View_dept' element={<View />}></Route>
          <Route path='/dashboard/salary' element={<Salary />}>
            <Route path='/dashboard/salary/salaryEdit' element={<SalaryEdit />}></Route></Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

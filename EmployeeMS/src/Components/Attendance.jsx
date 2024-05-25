import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AttendanceStatus from './AttendanceStatus';

function EmpAttendance() {

    let Sn = 1;
    const navigate = useNavigate()

    const [value, setValue] = useState({ emp_id: '' });
    const [data, setData] = useState([]);
    const location = useLocation();
    const empId = location.state.id;

    const handleSubmit = async (event) => {
        event.preventDefault();
        await empData();
    };

    async function empData() {
        let apiURL = `http://localhost:4000/empattendanceview?empid=${value.emp_id}`;
        let res = await axios.get(apiURL);
        setData(res.data);
        console.log(res.data);
    }

    function formatDate2(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', options);
    }

    
    function viewattendancedetail(date){
        const tdata = { value, date }
        console.log(date);
        navigate('/dashboard/attendance/viewattendancedetail', { state: tdata })
    }

    return (
        <>
            <div>
                <div class="signup-form shadow mt-2">
                    <form onSubmit={handleSubmit}>
                        <p><h2>Attendance Details</h2></p>
                        <div class="form-group d-flex gap-1" >
                            <label>Employee Id</label>
                            <input type="text" class="form-control" onChange={(e) => setValue({ ...value, emp_id: e.target.value })} />
                            <button class="btn btn-primary btn-sm m-0 p-0">Search</button>
                        </div>
                    </form>
                </div>
                <div className='adminattendance'>
                <div className='mt-1 m-4'>
                    <table class="table table-striped shadow ">
                        <thead>
                            <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                <th scope="col">S no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Day</th>
                                <th scope="col">Login Hours</th>
                                <th scope="col">Attendance Status</th>
                                <th scope="col">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                    <th scope="row">{Sn++}</th>
                                    <td >{item.emp_name}</td>
                                    <td >{formatDate(item.date)}</td>
                                    <td >{item.day}</td>
                                    <td >{item.total_login_hours}</td>
                                    <td><AttendanceStatus color={item.attendance_status} /></td>
                                    <td><button type="button" class="btn btn-primary" onClick={()=>viewattendancedetail(formatDate2(item.date))}>View Details</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </>
    )
}

export default EmpAttendance
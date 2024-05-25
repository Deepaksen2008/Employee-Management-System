import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";


function LeaveReqDetails() {

    let navigate = useNavigate();
    let [data, setData] = useState();
    let location = useLocation();
    const emp = location.state.id;

    const [value, setValue] = useState({
        Admin_remark: '',
        is_proved: ''
    })

    const handleSubmit = (event) => {
        console.log(emp);
        event.preventDefault()
        axios.put(`http://localhost:4000/leavereqdetail?empname=${emp}`, value).then(result => {
            console.log(result.data.loginStatus)
            // showAlert("Request send sucessfully", "success");
            navigate('/dashboard/leaveReq',{ state: { id: emp } })
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/getleavereqdetail?empname=${emp}`);
                setData(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, [emp]);
      
    
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', options);
      }

    return (
        <>
            <div className='example'>
                    {data && data.map((item, index) => (              
                        <div class="signup-form shadow mt-3" >
                            <form  onSubmit={handleSubmit}>
                                <p>{item.emp_id}<h2>{item.emp_name}</h2></p>
                                <hr />
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label>First name</label>
                                        <text type="text" class="form-control" >{item.emp_name.split(" ")[0]}</text>
                                    </div>
                                    <div class="form-group w-50">
                                        <label>Last name</label>
                                        <div class="-prepend">
                                        </div>
                                        <text type="email" class="form-control"  >{item.emp_name.split(" ")[1]}</text>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Department</label>
                                    <text class="form-control" aria-label="Default select example">{item.dept_name}</text>
                                </div>
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label>Contact number</label>
                                        <text type="number" class="form-control"  >{item.emp_mob}</text>
                                    </div>
                                    <div class="form-group w-50">
                                        <label>Email</label>
                                        <text type="email" class="form-control"  >{item.emp_email}</text>
                                    </div>
                                </div>
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label>Date of Birth</label>
                                        <text type="date" class="form-control">{formatDate(item.emp_dob)}</text>
                                    </div>
                                    <div class="form-group w-50">
                                        <label>Date of Joining</label>
                                        <text type="date" class="form-control">{formatDate(item.emp_doj)}</text>
                                    </div>
                                </div>
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label>Address</label>
                                        <text type="text" class="form-control">{item.emp_add}</text>
                                    </div>
                                    <div class="form-group w-50">
                                        <label>City</label>
                                        <text type="text" class="form-control">{item.emp_city}</text>
                                    </div>
                                </div>
                                <hr />
                                <h2>Leave Related Infomation</h2><br />
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label>Leave type</label>
                                        <text type="text" class="form-control">{item.leave_type}</text>
                                    </div>
                                    <div class="form-group w-50">
                                        <label>Status</label>
                                        <text type="text" class="form-control">{item.is_proved}</text>
                                    </div>
                                </div>
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label>Leave from date</label>
                                        <text type="date" class="form-control">{formatDate(item.leave_from)}</text>
                                    </div>
                                    <div class="form-group w-50">
                                        <label>Leave to date</label>
                                        <text type="date" class="form-control">{formatDate(item.leave_to)}</text>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Leave dicription</label>
                                    <text type="text" class="form-control"  >{item.leave_remark}</text>
                                </div>
                                <div class="form-group">
                                    <label>Admin Remark</label>
                                    <textarea type="text" class="form-control"  placeholder="Add Remark" onChange={(e) => setValue({ ...value, Admin_remark: e.target.value })} />
                                </div>
                                <div class="form-group">
                                    <select class="form-select" aria-label="Default select example" onChange={(e) => setValue({ ...value, is_proved: e.target.value })}>
                                        <option selected> Pending</option>
                                        <option>Approved</option>
                                        <option>Rejected</option>
                                    </select>
                                </div>
                                <div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-success btn-lg">Submit</button>
                                </div>
                            </form>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default LeaveReqDetails
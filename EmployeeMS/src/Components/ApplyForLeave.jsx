import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from './Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ApplyForLeave() {

    let navigate = useNavigate();
    let location = useLocation();
    const empmail = location.state.id;

    const [value, setValue] = useState({
        leave_from: '',
        leave_to: '',
        leave_type: '',
        leave_remark: '',
        empemail: ''
    })


    const [alert, setAlert] = useState({ msg: '', type: '' });
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:4000/empApplyforLeave?email=${empmail}`, value)
        .then(result => {
            console.log(result.data.loginStatus)
            showAlert("Request send sucessfully", "success");
            setTimeout(() => {
                navigate('/empdashboard/empleave', { state: { id: empmail } });
              }, 5000);
            // navigate('/dashboard/employees')
        }).catch(err => console.log(err))
    }
    const notify = () => toast("Wow so easy!");

    return (
        <>
            <div class="signup-form shadow mt-5" id='dept-form'>
                <form onSubmit={handleSubmit}>
                    <Alert alert={alert} />
                    <ToastContainer />
                    <p>Department  <h2>Apply for leave</h2></p>
                    <hr />
                    <div className='d-flex gap-3'>
                        <div className="form-group w-50">
                            <label>Total Annual leave</label>
                            <span type="" className="form-control">12</span>
                        </div>
                        <div className="form-group w-50">
                            <label>Remaining leave</label>
                            <span type="" className="form-control">06</span>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className="form-group w-50">
                            <label>Date</label>
                            <input type="date" className="form-control" onChange={(e) => setValue({ ...value, leave_from: e.target.value })} />
                        </div>
                        <div className="form-group w-50">
                            <label>Date</label>
                            <input type="date" className="form-control" onChange={(e) => setValue({ ...value, leave_to: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="leaveType">Type of leave</label>
                        <select id="leaveType" className="form-select" onChange={(e) => setValue({ ...value, leave_type: e.target.value })}>
                            <option value="" selected>-</option>
                            <option value="CL">CL</option>
                            <option value="SL">SL</option>
                            <option value="PL">PL</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Reason</label>
                        <textarea type="text" className="form-control" placeholder="-" onChange={(e) => setValue({ ...value, leave_remark: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg" onClick={notify}>Apply</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ApplyForLeave
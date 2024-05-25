import axios from 'axios';
import { React, useState } from 'react';
import { Alert } from './Alert';
import { useLocation } from 'react-router-dom';

function AddLeaveType() {

    let location = useLocation();
    const empId = location.state.id;

    const [value, setValue] = useState( )
    const [alert, setAlert] = useState({ msg: '', type: '' });
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:4000/addleave`, value).then(result => {
            console.log(result)
            showAlert("Data has been added sucessfully", "success");
        }).catch(err => console.log(err))
    }

  return (
    <>
            <div class="signup-form shadow mt-5" id='dept-form'>
                <form onSubmit={handleSubmit}>
                    <Alert alert={alert} />
                    <p>Leave Type  <h2>Add Leave</h2></p>
                    <hr />
                    <div class="form-group">
                        <label>Leave</label>
                        <input type="text" class="form-control" onChange={(e) => setValue({ ...value, leave_type: e.target.value })} placeholder="Enter leave name" />
                    </div>
                    <div class="form-group">
                        <button showAlert={showAlert} type="submit" class="btn btn-success btn-lg">Add Data</button>
                    </div>
                </form>
            </div>
        </>
  )
}

export default AddLeaveType
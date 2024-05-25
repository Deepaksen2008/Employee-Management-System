import axios from 'axios';
import { React, useState } from 'react';
import { Alert } from './Alert';
import { useLocation } from 'react-router-dom';

function AddDepartment() {


    let location = useLocation();

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
        axios.post(`http://localhost:4000/adddept`, value).then(result => {
            console.log(result.data.loginStatus)
            showAlert("Data has been added sucessfully", "success");
        }).catch(err => console.log(err))
    }
    const empmail = location.state.id;
     console.log(empmail)
     
    return (
        <>
            <div class="signup-form shadow mt-5" id='dept-form'>
                <form onSubmit={handleSubmit}>
                    <Alert alert={alert} />
                    <p>Department  <h2>Add Department</h2></p>
                    <hr />
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" onChange={(e) => setValue({ ...value, dept_name: e.target.value })} placeholder="Enter department name" />
                    </div>
                    <div class="form-group">
                        <button showAlert={showAlert} type="submit" class="btn btn-success btn-lg">Add Data</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddDepartment
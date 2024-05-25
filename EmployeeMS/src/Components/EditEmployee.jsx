import axios from 'axios';
import { React, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Alert } from './Alert';

function EditEmployee() {
    const [value, setValue] = useState({
        emp_id: '',
        emp_name: '',
        emp_dept: '',
        emp_mob: '',
        emp_email: '',
        emp_dob: '',
        emp_doj: '',
        emp_add: '',
        emp_city: ''
    })

    const [alert, setAlert] = useState({ msg: '', type: '' });
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
    };
    // const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:4000/edit_employee', value).then(result => {
            console.log(result.data.loginStatus)
            showAlert("Data has been added sucessfully", "success");
            // navigate('/dashboard/employees')
        }).catch(err => console.log(err))
    }
    return (
        <>
            <div class="signup-form shadow mt-3">
                <form onSubmit={handleSubmit}>
                    <Alert alert={alert} />
                    <p>Employee ID  <h2>{}</h2></p>
                    <hr />
                    <div className='d-flex gap-4'>
                        <div class="form-group w-50">
                            <label for="birthday">Emp ID</label>
                            <input type="text" class="form-control" onChange={(e) => setValue({ ...value, emp_id: e.target.value })} placeholder="-" required="required" />
                        </div>
                        <div class="form-group w-50">
                            <label for="birthday">Name</label>
                            <div class="-prepend">
                            </div>
                            <input type="text" class="form-control" onChange={(e) => setValue({ ...value, emp_name: e.target.value })} placeholder="-" required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Department</label>
                        <input type="text" class="form-control" onChange={(e) => setValue({ ...value, emp_dept: e.target.value })} placeholder="-" required="required" />
                    </div>
                    <div className='d-flex gap-4'>
                        <div class="form-group w-50">
                            <label for="birthday">Mobile</label>
                            <input type="number" class="form-control" onChange={(e) => setValue({ ...value, emp_mob: e.target.value })} placeholder="Contact number" required="required" />
                        </div>
                        <div class="form-group w-50">
                            <label for="birthday">Email</label>
                            <input type="email" class="form-control" onChange={(e) => setValue({ ...value, emp_email: e.target.value })} placeholder="Email" required="required" />
                        </div>
                    </div>
                    <div className='d-flex gap-4'>
                        <div class="form-group w-50">
                            <label for="birthday">DOB</label>
                            <input type="date" class="form-control" onChange={(e) => setValue({ ...value, emp_dob: e.target.value })} placeholder="Date of birth" required="required" />
                        </div>
                        <div class="form-group w-50">
                            <label for="birthday">DOJ</label>
                            <input type="date" class="form-control" onChange={(e) => setValue({ ...value, emp_doj: e.target.value })} placeholder="Date of joining" required="required" />
                        </div>
                    </div>
                    <div className='d-flex gap-4'>
                        <div class="form-group w-50">
                            <label for="birthday">Address</label>
                            <input type="text" class="form-control" onChange={(e) => setValue({ ...value, emp_add: e.target.value })} placeholder="Address" required="required" />
                        </div>
                        <div class="form-group w-50">
                            <label for="birthday">City</label>
                            <input type="text" class="form-control" onChange={(e) => setValue({ ...value, emp_city: e.target.value })} placeholder="Landmark" required="required" />
                        </div>
                    </div>
                    <div class="form-group">
                        <button showAlert={showAlert} type="submit" class="btn btn-success btn-lg">Add Data</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditEmployee
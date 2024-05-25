import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { Alert } from './Alert';
import { useLocation } from 'react-router-dom';

function EdiEmpData() {

    const [value, setValue] = useState({
        emp_id: '',
        emp_name: '',
        emp_mob: '',
        emp_email: '',
        emp_dob: '',
        emp_doj: '',
        emp_add: '',
        emp_city: ''
    })

    let location = useLocation();
    const empId = location.state.id;

    const [alert, setAlert] = useState({ msg: '', type: '' });
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
    };

    const [data, setData] = useState([]);

    const apiURL = `http://localhost:4000/empdataview?emp_id=${empId}`;

    async function fetchData() {
        try {
            const response = await axios.get(apiURL);
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:4000/employees?emp_id=${empId}`, value).then(result => {
            console.log(result.data.loginStatus)
            showAlert("Data has been added sucessfully", "success");
            // navigate('/dashboard/employees')
        }).catch(err => console.log(err))
    }
    return (
        <>
            <div class="signup-form shadow mt-3">

                {
                    data.map((item, index) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <Alert alert={alert} />
                                <p>Employee Name  <h2>{item.emp_name}</h2></p>
                                <hr />
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label>Emp ID</label>
                                        <input type="text" class="form-control" onChange={(e) => setValue({ ...value, emp_id: e.target.value })} placeholder={item.emp_id} />
                                    </div>
                                    <div class="form-group w-50">
                                        <label>Name</label>
                                        <div class="-prepend">
                                        </div>
                                        <input type="text" class="form-control" onChange={(e) => setValue({ ...value, emp_name: e.target.value })} placeholder={item.emp_name} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Department</label>
                                    <input type="text" class="form-control" onChange={(e) => setValue({ ...value, emp_dept: e.target.value })} placeholder={item.dept_name} />
                                </div>
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label>Mobile</label>
                                        <input type="number" class="form-control" onChange={(e) => setValue({ ...value, emp_mob: e.target.value })} placeholder={item.emp_mob} />
                                    </div>
                                    <div class="form-group w-50">
                                        <label>Email</label>
                                        <input type="email" class="form-control" onChange={(e) => setValue({ ...value, emp_email: e.target.value })} placeholder={item.emp_email} />
                                    </div>
                                </div>
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label>DOB</label>
                                        <input type="date" class="form-control" onChange={(e) => setValue({ ...value, emp_dob: e.target.value })} placeholder={item.emp_dob} />
                                    </div>
                                    <div class="form-group w-50">
                                        <label>DOJ</label>
                                        <input type="date" class="form-control" onChange={(e) => setValue({ ...value, emp_doj: e.target.value })} placeholder={item.emp_doj} />
                                    </div>
                                </div>
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label>Address</label>
                                        <input type="text" class="form-control" onChange={(e) => setValue({ ...value, emp_add: e.target.value })} placeholder={item.emp_add} />
                                    </div>
                                    <div class="form-group w-50">
                                        <label>City</label>
                                        <input type="text" class="form-control" onChange={(e) => setValue({ ...value, emp_city: e.target.value })} placeholder={item.emp_city} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button showAlert={showAlert} type="submit" class="btn btn-success btn-lg">Update Data</button>
                                </div>
                            </form>
                        )
                    })}
            </div>
        </>
    )
}

export default EdiEmpData
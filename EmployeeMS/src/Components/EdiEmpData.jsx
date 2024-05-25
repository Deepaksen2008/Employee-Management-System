import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { Alert } from './Alert';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EdiEmpData() {

    let location = useLocation();
    const empmail = location.state.id;
    // console.log(empmail);
    const [data, setData] = useState([]);
    const [emp_name, setEmpName] = useState('');
    const [emp_id, setEmpId] = useState('');
    const [emp_mob, setEmpMob] = useState('');
    const [emp_email, setEmpEmail] = useState('');
    const [emp_dob, setEmpDob] = useState('');
    const [emp_doj, setEmpDoj] = useState('');
    const [emp_add, setEmpAdd] = useState('');
    const [emp_city, setEmpCity] = useState('');

    const [alert, setAlert] = useState({ msg: '', type: '' });
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
    };


    useEffect(() => {
        async function fetchData() {
            let apiURL = `http://localhost:4000/empprofile?empmail=${empmail}`;
            let res = await axios.get(apiURL);
            setData(res.data);

            const { emp_id, emp_name, emp_mob, emp_email, emp_dob, emp_doj, emp_add, emp_city } = res.data[0];

            setEmpId(emp_id);
            setEmpName(emp_name);
            setEmpMob(emp_mob);
            setEmpEmail(emp_email);
            setEmpDob(formatDate(emp_dob));
            setEmpDoj(formatDate(emp_doj));
            setEmpAdd(emp_add);
            setEmpCity(emp_city);
        }
        fetchData();
    }, [empmail]);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = `0${month}`;
        }
        if (day < 10) {
            day = `0${day}`;
        }
        return `${year}-${month}-${day}`;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedData = { emp_doj, emp_name, emp_mob, emp_email, emp_dob, emp_add, emp_city };
        try {
            await axios.put(`http://localhost:4000/employees?emp_mail=${empmail}`, updatedData)
                .then(result => {
                    console.log(result.data);
                })
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        } catch (error) {
            console.log(error)
        }
    };

    const notify = () => toast.success("Profile has been updated");

    return (
        <>
        <div className='editempdata'>
            <div class="signup-form shadow mt-3">
                <form onSubmit={handleSubmit}>
                    <p>Employee Name  <h2>{emp_id}</h2></p>
                    <hr />
                    <ToastContainer />
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control" 
                            value={emp_name}
                            onChange={(e) => setEmpName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mobile</label>
                        <input
                            type="number"
                            className="form-control"
                            value={emp_mob}
                            onChange={(e) => setEmpMob(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={emp_email}
                            onChange={(e) => setEmpEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>DOB</label>
                        <input
                            type="date"
                            className="form-control"
                            value={emp_dob}
                            onChange={(e) => setEmpDob(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>DOJ</label>
                        <input
                            type="date"
                            className="form-control"
                            value={emp_doj}
                            onChange={(e) => setEmpDoj(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            value={emp_add}
                            onChange={(e) => setEmpAdd(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input
                            type="text"
                            className="form-control"
                            value={emp_city}
                            onChange={(e) => setEmpCity(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg" onClick={notify}>Update Data</button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default EdiEmpData
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const empId = location.state?.id; // Ensure to safely access state.id

    axios.defaults.withCredentials = true;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const loginResponse = await axios.post('http://localhost:4000/adminlogin', values);
    
            console.log(loginResponse.data);
            if (loginResponse.status === 200) {

                const RecordResponse = await axios.post('http://localhost:4000/attendanceemp', values);

                if (loginResponse.data.loginStatus) {
                    if (loginResponse.data.role === "employee") {
                        navigate('/empdashboard/emphome', { state: { id: values.email } });
                        console.log("Employee Login successful");
                        console.log(RecordResponse.data);

                    } else {
                        navigate('/dashboard/home', { state: { id: values.email } });
                        console.log("Admin Login successful");
                        console.log(RecordResponse.data);
                    }
                } else {
                    setError("Please enter valid email or password");
                }
            } else {
                setError(loginResponse.data.Error || "Error logging in");
                console.error("Error logging in:", loginResponse.data.Error || "Unknown error");
            }
        } catch (error) {
            setError(error.message || "Unknown error");
            console.error("An error occurred:", error.message || "Unknown error");
        }
    };

    return (
        <section className="vh-100 gradient-custom">
            <form onSubmit={handleSubmit}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card1 bg-dark text-white">
                                <div className='text-danger'>
                                    {error && <p>{error}</p>} {/* Proper rendering of error messages */}
                                </div>
                                <div className="card1-body p-5 text-center">
                                    <div className="mb-md-">
                                        <h2 className="fw-bold mb-2 text-uppercase">{empId}</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                        <div className="form-outline mb-4">
                                            <input type="email" onChange={(e) => setValues({ ...values, email: e.target.value })} value={values.email} id="form2Example1" className="form-control" placeholder='Email address' />
                                            <label className="form-label" htmlFor="form2Example1"></label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="password" onChange={(e) => setValues({ ...values, password: e.target.value })} value={values.password} id="typePasswordX" className="form-control form-control-lg" placeholder='Password' />
                                            <label className="form-label" htmlFor="typePasswordX"></label>
                                        </div>
                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Login;

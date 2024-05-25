import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmpProfile() {
  const navigate = useNavigate();
  let location = useLocation();
  const empmail = location.state.id;
  console.log(empmail);

  const [data, setData] = useState([]);
  const [emp_name, setEmpName] = useState('');
  const [emp_mob, setEmpMob] = useState('');
  const [emp_email, setEmpEmail] = useState('');
  const [emp_dob, setEmpDob] = useState('');
  const [emp_add, setEmpAdd] = useState('');
  const [emp_city, setEmpCity] = useState('');

  useEffect(() => {
    async function fetchData() {
      let apiURL = `http://localhost:4000/empprofile?empmail=${empmail}`;
      let res = await axios.get(apiURL);
      setData(res.data);

      const { emp_name, emp_mob, emp_email, emp_dob, emp_add, emp_city } = res.data[0];

      setEmpName(emp_name);
      setEmpMob(emp_mob);
      setEmpEmail(emp_email);
      setEmpDob(formatDate(emp_dob));
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
    const updatedData = { emp_name, emp_mob, emp_email, emp_dob, emp_add, emp_city };
    try {
      await axios.put(`http://localhost:4000/employees?emp_mail=${empmail}`, updatedData)
        .then(result => {
          console.log(result.data);
        })
        setTimeout(() => {
          // navigate('/empdashboard/emphome', { state: { id: empmail } });
          window.location.reload();
        }, 5000);
    } catch (error) {
      console.log(error)
    }
  };

  const notify = () => toast.success("Profile has been updated");

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div className='example2'>
            <div className="signup-form shadow mt-3">
              <form>
                <p>Employee ID <h2>{item.emp_id}</h2></p>
                <hr />
                <div className='d-flex gap-4'>
                  <div className="form-group w-50">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" value={emp_name.split(" ")[0]} readOnly />
                  </div>
                  <div className="form-group w-50">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" className="form-control" value={emp_name.split(" ")[1]} readOnly />
                  </div>
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <input type="text" className="form-control" value={item.dept_name} readOnly />
                </div>
                <div className='d-flex gap-4'>
                  <div class="form-group w-50">
                    <label for="birthday">Email</label>
                    <text type="text" class="form-control" > {item.emp_email}</text>
                  </div>
                  <div class="form-group w-50">
                    <label for="birthday">Contact number</label>
                    <div class="-prepend">
                    </div>
                    <text type="number" class="form-control" name="email" placeholder="Last name" required="required" > {item.emp_mob}</text>
                  </div>
                </div>
                <div className='d-flex gap-4'>
                  <div class="form-group w-50">
                    <label for="birthday">DOB</label>
                    <text type="date" class="form-control" name="password" placeholder="Date of birth" required="required">{formatDate(item.emp_dob)}</text>
                  </div>
                  <div class="form-group w-50">
                    <label for="birthday">DOJ</label>
                    <text type="date" class="form-control" name="password" placeholder="Date of birth" required="required">{formatDate(item.emp_doj)}</text>
                  </div>
                </div>
                <div className='d-flex gap-4'>
                  <div class="form-group w-50">
                    <label for="birthday">Address</label>
                    <text type="date" class="form-control" name="password" placeholder="Date of birth" required="required">{item.emp_add}</text>
                  </div>
                  <div class="form-group w-50">
                    <label for="birthday">City</label>
                    <text type="date" class="form-control" name="password" placeholder="Date of birth" required="required">{item.emp_city}</text>
                  </div>
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ))}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
            </div>
            <div className="modal-body">
              <div className="signup-form">
                <form onSubmit={handleSubmit}>
                <p>Employee Name  <h2>{emp_name}</h2></p>
                <hr/>   
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
                    <div className="-prepend"></div>
                    <input
                      type="date"
                      className="form-control"
                      value={emp_dob}
                      onChange={(e) => setEmpDob(e.target.value)}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default EmpProfile;

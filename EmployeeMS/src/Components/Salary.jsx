import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

function Salary() {
  let location = useLocation();
  const empId = location.state.id;


  const [data, setData] = useState([]);
  const apiURL = 'http://localhost:4000/getdeptsalary';

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(apiURL);
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const [dept, setDept] = useState('');
  const handleSelectChange = (event) => {
    setDept(event.target.value)
  }

  const [data1, setData1] = useState([]);

  useEffect(() => {
    const empfromdept = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/getempfromdept?deptname=${dept}`);
        setData1(res.data);
      } catch (error) {
        console.error("Error fetching second data:", error);
      }
    };
    empfromdept();
  }, [dept]);

  const [emp, setEmp] = useState('');
  const handleSelectChangeEmpName = (event) => {
    setEmp(event.target.value)
  }

  const navigate = useNavigate();
  const salaryedit = (empId, emp) => {
    // navigate('/dashboard/salary/salaryedit', { state: { empId, emp } })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(empId, emp);
    navigate('/dashboard/salary/salaryedit', { state: { empId, emp } })
  }

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <>
      <div class="signup-form shadow mt-3">
        <form onSubmit={handleSubmit}>
          <div>
            <p><h2>Salary Details</h2></p>
            <div className='d-flex gap-4'>
              <div class="form-group w-50">
                <label>Department</label>
                <select class="form-select" aria-label="Default select example" onChange={handleSelectChange}>
                  <option value="">Select Department</option>
                  {data.map((item, index) => (
                    <option key={index} value={item.dept_name}>{item.dept_name}</option>
                  ))}
                </select>
              </div>
              <div class="form-group w-50">
                <label>Employee name</label>
                <select class="form-select" aria-label="Default select example" onChange={handleSelectChangeEmpName}>
                  <option value="">Select Employee</option>
                  {data1.map((item, index) => (
                    <option key={index} value={item.emp_name}>{item.emp_name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='d-flex gap-4'>
              <div class="form-group w-50">
                <label>Year</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>2024</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                </select>
              </div>
              <div class="form-group w-50">
                <label>Month</label>
                <select class="form-select" aria-label="Default select example">
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
            </div>
            <div class="form-group" id="myDIV">
              <button onClick={() => { myFunction(); salaryedit(empId, emp) }} class="btn btn-success btn-sm">Check</button>
            </div>
          </div>
        </form>
      </div>
      <div className='col p-0 m-0'>
        <Outlet />
      </div>
    </>
  )
}

export default Salary 
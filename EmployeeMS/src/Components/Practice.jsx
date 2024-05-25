import AttendanceStatus from './AttendanceStatus';
import axios from 'axios';
import React from 'react'
import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { IoMdRefresh } from "react-icons/io";



function Attendance() {
  // const navigate = useNavigate();

  // let Sn = 1;
  let [data, setData] = useState([])
  let apiURL = 'http://localhost:4000/attendanceView';
  async function getData() {
    let res = await axios.get(apiURL);
    console.log(res.data);
    setData(res.data);
  }
  let fn = () => {
    getData()
  }
  useEffect(fn, [])

  function UpdateAtt() {
    axios.put('http://localhost:4000/attendanceupdate').then(response => {
      window.location.reload();
      console.log("Response data:", response.data);
    }).catch(error => {
      window.location.reload();
      console.error("Error occurred during Update:", error);
    });
  }

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', options);
  }

  const [page, setPage] = useState(1);
  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <>
      <div className='col m-0 p-0'>
        <div className='p-2 d-flex justify-content-center shadow'>
          <h4>Employees</h4>
        </div>
      </div>
      <div className='m-3'>
        <table className="table table-striped shadow ">
          <thead>
            <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
              <th scope="col">Sr No.</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Date</th>
              <th scope="col">Login</th>
              <th scope="col">Logout</th>
              <th scope="col">Effective Hour</th>
              <th scope="col">Status<IoMdRefresh onClick={() => { UpdateAtt(); getData() }} style={{ cursor: 'pointer' }} /></th>
            </tr>
          </thead>
          <tbody>
            {data.slice(page * 7 - 7, page * 7).map((item, index) => {
              return (
                <tr key={index} style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                  <td>{(page - 1) * 7 + index + 1}</td>
                  <td>{item.emp_name}</td>
                  <td>{formatDate(item.date)}</td>
                  <td>{item.in_time}</td>
                  <td>{item.out_time}</td>
                  <td>{item.total_login_hr}</td>
                  <td><AttendanceStatus color={item.attendance_status} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        <div>
          <ul className="pagination justify-content-center">
            <Button className="page-item btn-sm p-1" onClick={() => selectPageHandler(1)} tabIndex="-1" aria-disabled="true">{'<<'}</Button>
            <Button className="page-item btn-sm p-1" onClick={() => selectPageHandler(page - 1)} disabled={page === 1}>{'<'}</Button>
            <Button className="page-item btn-sm p-1" active={true}>{page}</Button>
            <Button className="page-item btn-sm p-1" onClick={() => selectPageHandler(page + 1)} disabled={page === Math.ceil(data.length / 7)}>{'>'}</Button>
            <Button className="page-item btn-sm p-1" onClick={() => selectPageHandler(Math.ceil(data.length / 7))}>{'>>'}</Button>
          </ul>
        </div>
        {/* <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack> */}
    
    </>
  );

}

export default Attendance
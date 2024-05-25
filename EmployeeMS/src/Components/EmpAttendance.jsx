import AttendanceStatus from './AttendanceStatus';
import axios from 'axios';
import React from 'react'
import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { IoMdRefresh } from "react-icons/io";
import { useLocation,useNavigate } from 'react-router-dom';


function Attendance() {
  const navigate = useNavigate();
  const location = useLocation();
  let id= location.state.id;
  console.log(id);

  // let Sn = 1;
  let [data, setData] = useState([])
  let apiURL = `http://localhost:4000/empattendance?q=${id}`;
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

  function formatDate2(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

  function viewattendancedetail(date){
    const tdata = { id, date }
    console.log(date);
    navigate('/empdashboard/attendance/empviewattendancedetail', { state: tdata })
}

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
              <th scope="col">Day</th>
              <th scope="col">Login Hours</th>
              <th scope="col">Attendance Status</th>
              <th scope="col">Details</th>
              {/* <th scope="col">Status<IoMdRefresh onClick={() => { UpdateAtt(); getData() }} style={{ cursor: 'pointer' }} /></th> */}
            </tr>
          </thead>
          <tbody>
            {data.slice(page * 7 - 7, page * 7).map((item, index) => {
              return (
                <tr key={index} style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                  <td>{(page - 1) * 7 + index + 1}</td>
                  <td>{item.emp_name}</td>
                  <td>{formatDate(item.date)}</td>
                  <td>{item.day}</td>
                  <td>{item.total_login_hours}</td>
                  <td><AttendanceStatus color={item.attendance_status} /></td>
                  <td><button type="button" class="btn btn-primary" onClick={()=>viewattendancedetail(formatDate2(item.date))}>View Details</button></td>
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
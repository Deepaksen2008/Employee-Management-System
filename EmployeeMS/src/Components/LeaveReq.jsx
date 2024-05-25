import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function LeaveReq() {
  const navigate = useNavigate();
  let location = useLocation();
  const empId = location.state.id;

  let [data, setData] = useState([]);
  async function empData() {
    let apiURL = `http://localhost:4000/leavereq`;
    let res = await axios.get(apiURL)
    setData(res.data);
    console.log(res.data);

  }
  useEffect(() => {
    empData()
  }, [])

  const dashboard = () => {
    navigate('/dashboard/leaveReq/pendingReq', { state: { id: empId } });
  }
  const approved = () => {
    navigate('/dashboard/leaveReq/approvedReq', { state: { id: empId } });
  }
  const rejected = () => {
    navigate('/dashboard/leaveReq/rejectedReq', { state: { id: empId } });
  }
  return (
    <>
      {data.map((item, index) => (
        <div>
          <div className='col m-0 p-0'>
            <div className='p-2 d-flex justify-content-center shadow'>
              <h4>Leave Request</h4>
            </div>
          </div>
          <div>
            <div class="container mt-5">
              <div class="row justify-content-center">
                <div class="col-md-3" onClick={dashboard} style={{ cursor: 'pointer' }}>
                  <div class="card p-3 mb-2 shadow">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="fa-brands fa-bootstrap"></i></div>
                        <div class="ms-2 c-details">
                          <h6 class="mb-0">Pending</h6> <span>1 days ago</span>
                        </div>
                      </div>
                      <div class="badge"> <span>Design</span> </div>
                    </div>
                    <div class="mt-5">
                      <h3 class="heading">{item.pending_row_count} <br />Request</h3>
                      <div class="mt-5">
                        <div class="progress">
                          <div class="progress-bar" role="progressbar" style={{ width: `${item.pending_row_count}0%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">15 Request <span class="text2">in last week</span></span> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3" onClick={approved} style={{ cursor: 'pointer' }}>
                  <div class="card p-3 mb-2 shadow">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="fa-brands fa-superpowers"></i> </div>
                        <div class="ms-2 c-details">
                          <h6 class="mb-0">Approved</h6> <span>4 days ago</span>
                        </div>
                      </div>
                      <div class="badge"> <span>Product</span> </div>
                    </div>
                    <div class="mt-5">
                      <h3 class="heading">{item.approved_row_count}<br />Approved</h3>
                      <div class="mt-5">
                        <div class="progress">
                          <div class="progress-bar" role="progressbar" style={{ width: `${item.approved_row_count}0%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">12 Approved <span class="text2">out of 28</span></span> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3" onClick={rejected} style={{ cursor: 'pointer' }}>
                  <div class="card p-3 mb-2 shadow">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div class="icon"><i class="fa-brands fa-superpowers"></i></div>
                        <div class="ms-2 c-details">
                          <h6 class="mb-0">Rejected</h6> <span>2 days ago</span>
                        </div>
                      </div>
                      <div class="badge"> <span>Design</span> </div>
                    </div>
                    <div class="mt-5">
                      <h3 class="heading">{item.reject_row_count} <br />Rejected</h3>
                      <div class="mt-5">
                        <div class="progress">
                          <div class="progress-bar" role="progressbar" style={{ width: `${item.reject_row_count}0%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="mt-3"> <span class="text1">10 Rejected <span class="text2">out of 28</span></span> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default LeaveReq
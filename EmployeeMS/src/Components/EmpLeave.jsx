import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function EmpLeave() {

  const navigate = useNavigate();
  let location = useLocation();
  const empmail = location.state.id;

  const ApplyForLeave = () => {
    navigate('/empdashboard/empleave/applyforleave', { state: { id: empmail } });
  }
  const ApplyLeaveStatus = () => {
    navigate('/empdashboard/empleave/appliedleavestatus', { state: { id: empmail } });
  }

  return (
    <>
      <div className='col m-0 p-0'>
        <div className='p-2 d-flex justify-content-center shadow'>
          <h4>Leave Request</h4>
        </div>
      </div>
      <div>
        <div class="container mt-5 mb-3">
          <div class="row m-5">
            <div class="col-md-6 " onClick={ApplyForLeave} style={{ cursor: 'pointer' }}>
              <div class="card p-3 bg-danger mb-2 shadow">
                <div class="d-flex  justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <div class="icon"> <i class="fa-brands fa-bootstrap"></i></div>
                    <div class="ms-2 c-details">
                      <h6 class="mb-0">Pending</h6> <span>1 days ago</span>
                    </div>
                  </div>
                </div>
                <div class="mt-5">
                  <h3 class="heading">Appy for leave</h3>
                  <div class="mt-5">
                    <div class="mt-3"> <span class="text1">15 Request <span class="text2">in last week</span></span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6" onClick={ApplyLeaveStatus} style={{ cursor: 'pointer' }}>
              <div class="card p-3 bg-success mb-2 shadow">
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <div class="icon"><i class="fa-brands fa-superpowers"></i></div>
                    <div class="ms-2 c-details">
                      <h6 class="mb-0">Rejected</h6> <span>2 days ago</span>
                    </div>
                  </div>
                </div>
                <div class="mt-5">
                  <h3 class="heading">Applied leave status</h3>
                  <div class="mt-5">
                    <div class="mt-3"> <span class="text1">10 Rejected <span class="text2">out of 28</span></span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmpLeave
import React from 'react'
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faUser, faCheckCircle, faTimesCircle, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

// import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

function EmpHome() {
  let location = useLocation();
  const empId = location.state.id;
  console.log(empId);
  const navigate = useNavigate();
  const Applyforleave = () => {
    navigate('/empdashboard/empleave/applyforleave', { state: { id: empId } });
  }
  const Approvedleave = () => {
    navigate('/empdashboard/empappleave', { state: { id: empId } });
  }
  const Rejectleave = () => {
    navigate('/empdashboard/emprejleave', { state: { id: empId } });
  }
  const Payroll = () => {
    navigate('/empdashboard/payroll', { state: { id: empId } });
  }
  const Viewattendance = () => {
    navigate('/empdashboard/attendance', { state: { id: empId } });
  }
  const Myprofile = () => {
    navigate('/empdashboard/profile', { state: { id: empId } });
  }

  return (
    <>
      <div>
        <div className='p-2 d-flex justify-content-center shadow'>
          <h4>​🇪​​🇲​​🇵​​🇱​​🇴​​🇾​​🇪​​🇪​ ​🇲​​🇦​​🇳​​🇦​​🇬​​🇪​​🇲​​🇪​​🇳​​🇹​ ​🇸​​🇾​​🇸​​🇹​​🇪​​🇲​</h4>
        </div>
        <div className='d-flex gap-4 mt-4 justify-content-center'>
          <Card
            style={{
              width: '12rem',
              backgroundImage: 'linear-gradient(to right, #007bff, #17a2b8)'
            }}
            className="mb-2"
            onClick={Applyforleave}
          >
            <Card.Header><h5>ᴀᴘᴘʟʏ ꜰᴏʀ ʟᴇᴀᴠᴇ</h5></Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: '2.5em' }}><FontAwesomeIcon icon={faCalendarAlt} color='#00b3ff' size='2x' /></Card.Title>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: '12rem',
              backgroundImage: 'linear-gradient(to right, #00b894, #00cec9)'
            }}
            className="mb-2"
            onClick={Approvedleave}
          >
            <Card.Header><h5>ᴀᴘᴘʀᴏᴠᴇᴅ ʟᴇᴀᴠᴇ</h5></Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: '2.5em' }}> <FontAwesomeIcon icon={faCheckCircle} color='#00b380' size='2x' /></Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: '12rem',
              backgroundImage: 'linear-gradient(to right, #FFD700, #FFA500, #FF6347)'
            }}
            className="mb-2"
            onClick={Rejectleave}
          >
            <Card.Header><h5>ʀᴇᴊᴇᴄᴛᴇᴅ ʟᴇᴀᴠᴇ</h5></Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: '2.5em' }}><FontAwesomeIcon icon={faTimesCircle} color='#F8772D' size='2x' /></Card.Title>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: '12rem',
              backgroundImage: 'linear-gradient(to right, #ff69b4, #ffdab9)'
            }}
            className="mb-2"
            onClick={Payroll}
          >
            <Card.Header><h5>ᴘᴀʏʀᴏʟʟ</h5></Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: '2.5em' }}><FontAwesomeIcon icon={faMoneyBill} color='#ffb8b8' size='2x' /></Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      <hr></hr>
      <div className='d-flex justify-content-center'>
        <h4>ꜱᴛᴀᴛᴜꜱ</h4>
      </div>
      <hr></hr>
      <div>
        <div class="container mt-5 mb-3">
          <div className='d-flex gap-5 mt-4 justify-content-center'>
            <Card
              style={{
                width: '24rem',
                height: '14rem',
                backgroundImage: 'linear-gradient(to right, #ff9999, #ff6666, #ff3333)', // Light multicolor red gradient
              }}
              className="mb-2"
              onClick={Viewattendance}
            >
              <Card.Header><h5>ᴠɪᴇᴡ ᴀᴛᴛᴇɴᴅᴀɴᴄᴇ </h5></Card.Header>
              <Card.Body>
                <Card.Title style={{ fontSize: '2.5em' }}>
                  <FontAwesomeIcon icon={faUsers} color='#ffb8b8' size='3x' /> {/* Replaced icon with employee attendance icon */}
                </Card.Title>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '24rem',
                height: '14rem',
                backgroundImage: 'linear-gradient(to right,  #af7ac5, #9775b8, #8151a4, #6f3d96, #5c3182)' // Purple multicolor gradient
              }}
              className="mb-2"
              onClick={Myprofile}
            >
              <Card.Header><h5>ᴍʏ ᴘʀᴏꜰɪʟᴇ</h5></Card.Header>
              <Card.Body>
                <Card.Title style={{ fontSize: '2.5em' }}>
                  <FontAwesomeIcon icon={faUser} color='#5c3182' size='3x' /> {/* Replaced icon with employee profile icon */}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmpHome
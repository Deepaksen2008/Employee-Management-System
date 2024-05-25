import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSignOutAlt, faCalendarAlt, faClipboardList, faUserShield, faMoneyCheckAlt, faTh, faBuilding, faUsers, faUserClock } from '@fortawesome/free-solid-svg-icons';



function Dashboard() {

  let location = useLocation();
  const empId = location.state.id;

  const navigate = useNavigate();
  const MailBox = () => {
    navigate('/dashboard/mailbox', { state: { id: empId } });
  }
  const dashboard = () => {
    navigate('/dashboard/home', { state: { id: empId } });
  }
  const department = () => {
    navigate('/dashboard/department', { state: { id: empId } });
  }
  const employee = () => {
    navigate('/dashboard/employees', { state: { id: empId } });
  }
  const leavetype = () => {
    navigate('/dashboard/leavetype', { state: { id: empId } });
  }
  const salary = () => {
    console.log(empId);
    navigate('/dashboard/salary', { state: { id: empId } });
  }
  const attendance = () => {
    navigate('/dashboard/attendance', { state: { id: empId } });
  }
  const leavereq = () => {
    navigate('/dashboard/leaveReq', { state: { id: empId } });
  }

  const SignOut = (e) => {
    e.preventDefault();
    axios.put('http://localhost:4000/attendanceempout')
      .then(response => {
        console.log("Response data:", response.data);
        if (response.data) {
          console.log("Success");
        } else {
          console.log("error")
        }
      })
      .catch(error => {
        console.error("Error occurred during sign out:", error);
      });

    alert("Press OK for Sign Out")
    navigate('/auth');
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [activeTime, setActiveTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isLoggedIn) {
      intervalId = setInterval(() => {
        setActiveTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isLoggedIn]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    if (hours > 0) {
      return `${hours} hrs${hours > 1 ? 's' : ''} ${minutes} min${minutes > 1 ? 's' : ''} ${seconds} sec${seconds > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
      return `${minutes} min${minutes > 1 ? 's' : ''} ${seconds} sec${seconds > 1 ? 's' : ''}`;
    } else {
      return `${seconds} sec${seconds > 1 ? 's' : ''}`;
    }
  };

  const handleLogin = () => {
    localStorage.setItem('loginTime', new Date().getTime());
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    const loginTime = localStorage.getItem('loginTime');
    const logoutTime = new Date().getTime();
    const durationInSeconds = (logoutTime - parseInt(loginTime)) / 1000;
    console.log(loginTime, logoutTime);
    setSessionDuration(durationInSeconds);
    console.log(durationInSeconds, sessionDuration);
    localStorage.removeItem('loginTime');

    setIsLoggedIn(false);
    // setActiveTime(0); 
  };


  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
          <CDBSidebar textColor="#fff" backgroundColor="#333" >
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <h6><strong><FontAwesomeIcon icon={faUserShield} className="me-2" />Admin</strong></h6>
              <h6 className="small">{formatTime(activeTime)}</h6>

              <Button
                onClick={isLoggedIn ? handleLogout : handleLogin}
                className={`btn ${isLoggedIn ? 'awayButton' : 'activeButton'} btn-sm`}              >
                {isLoggedIn ? 'Away' : 'Active'}
              </Button>

            </CDBSidebarHeader>
            {/* <CDBSidebarContent classname="sidebar-content"> */}
              <CDBSidebarMenu >
                <NavLink className="activeClicked" to="/dashboard/employees"></NavLink>
                <CDBSidebarMenuItem onClick={dashboard}>
                  <FontAwesomeIcon icon={faTh} className="me-2" /> 𝖣𝖺𝗌𝗁𝖻𝗈𝖺𝗋𝖽
                </CDBSidebarMenuItem>

                <NavLink className="activeClicked" to="/dashboard/employees"></NavLink>
                <CDBSidebarMenuItem onClick={MailBox}>
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" /> 𝖬𝖺𝗂𝗅
                </CDBSidebarMenuItem>

                <NavLink className="activeClicked" to="/dashboard/department"></NavLink>
                <CDBSidebarMenuItem onClick={department}>
                  <FontAwesomeIcon icon={faBuilding} className="me-2" /> 𝖣𝖾𝗉𝖺𝗋𝗍𝗆𝖾𝗇𝗍
                </CDBSidebarMenuItem>

                <NavLink className="activeClicked" to="/dashboard/leaveType"></NavLink>
                <CDBSidebarMenuItem onClick={leavetype}>
                  <FontAwesomeIcon icon={faUserClock} className="me-2" /> 𝖫𝖾𝖺𝗏𝖾𝗌
                </CDBSidebarMenuItem>

                <NavLink className="activeClicked" to="/dashboard/employees"></NavLink>
                <CDBSidebarMenuItem onClick={employee}>
                  <FontAwesomeIcon icon={faUsers} className="me-2" /> 𝖤𝗆𝗉𝗅𝗈𝗒𝖾𝖾𝗌
                </CDBSidebarMenuItem>

                <NavLink className="activeClicked" to="/dashboard/salary"></NavLink>
                <CDBSidebarMenuItem onClick={salary}>
                  <FontAwesomeIcon icon={faMoneyCheckAlt} className="me-2" /> 𝖲𝖺𝗅𝖺𝗋𝗒
                </CDBSidebarMenuItem>
                <NavLink className="activeClicked" to="/dashboard/salary"></NavLink>
                <CDBSidebarMenuItem onClick={attendance}>
                  <FontAwesomeIcon icon={faClipboardList} className="me-2" /> 𝖠𝗍𝗍𝖾𝗇𝖽𝖺𝗇𝖼𝖾
                </CDBSidebarMenuItem>
                <NavLink className="activeClicked" to="/dashboard/leaveReq"></NavLink>
                <CDBSidebarMenuItem onClick={leavereq}><FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> 𝖫𝖾𝖺𝗏𝖾 𝖱𝖾𝗊𝗎𝖾𝗌𝗍</CDBSidebarMenuItem>
              </CDBSidebarMenu>
              {/* </CDBSidebarContent> */}
            <CDBSidebarMenuItem onClick={SignOut}><FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> 𝖲𝗂𝗀𝗇𝖮𝗎𝗍 </CDBSidebarMenuItem>
          </CDBSidebar>
        </div>
        <div className='col p-0 m-0'>
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
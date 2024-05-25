import React from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faClipboardList, faMoneyCheckAlt,faUserShield, faTh, faUser, faUserClock } from '@fortawesome/free-solid-svg-icons';



function EmpDashboard() {
  const navigate = useNavigate();
  let location = useLocation();
  const empmail = location.state.id;

  const EmpHome = () => {
    navigate('/empdashboard/emphome', { state: { id: empmail } });
  }
  const attendance = () => {
    navigate('/empdashboard/attendance', { state: { id: empmail } });
  }
  const empleave = () => {
    navigate('/empdashboard/empleave', { state: { id: empmail } });
  }
  const payroll = () => {
    navigate('/empdashboard/payroll', { state: { id: empmail } });
  }
  const empprofile = () => {
    navigate('/empdashboard/profile', { state: { id: empmail } });
  }
  const SignOut = (e) => {
    e.preventDefault();
    axios.put('http://localhost:4000/attendanceempout')
      .then(response => {
        console.log("Response data:", response.data);
        if (response.data.loginStatus) {
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
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
          <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <h6><strong><FontAwesomeIcon icon={faUserShield} className="me-2" />𝖤𝗆𝗉𝗅𝗈𝗒𝖾𝖾</strong></h6>

            </CDBSidebarHeader>
            <CDBSidebarContent classname="sidebar-content">
              <CDBSidebarMenu>
                <NavLink activeClassName="activeClicked" to="/dashboard/employees"></NavLink>
                <CDBSidebarMenuItem onClick={EmpHome}>
                  <FontAwesomeIcon icon={faTh} className="me-2" /> 𝖣𝖺𝗌𝗁𝖻𝗈𝖺𝗋𝖽
                </CDBSidebarMenuItem>
                <NavLink exact activeClassName="activeClicked" to="/dashboard/department"></NavLink>
                <CDBSidebarMenuItem onClick={attendance}>
                  <FontAwesomeIcon icon={faClipboardList} className="me-2" /> 𝖠𝗍𝗍𝖾𝗇𝖽𝖺𝗇𝖼𝖾
                </CDBSidebarMenuItem>
                <NavLink exact activeClassName="activeClicked" to="/dashboard/leaveType"></NavLink>
                <CDBSidebarMenuItem onClick={empleave}>
                  <FontAwesomeIcon icon={faUserClock} className="me-2" /> 𝖫𝖾𝖺𝗏𝖾𝗌
                </CDBSidebarMenuItem>
                <NavLink activeClassName="activeClicked" to="/dashboard/employees"></NavLink>
                <CDBSidebarMenuItem onClick={payroll}>
                  <FontAwesomeIcon icon={faMoneyCheckAlt} className="me-2" /> 𝖲𝖺𝗅𝖺𝗋𝗒
                </CDBSidebarMenuItem>

                <NavLink exact activeClassName="activeClicked" to="/dashboard/leaveReq"></NavLink>
                <CDBSidebarMenuItem onClick={empprofile}>
                  <FontAwesomeIcon icon={faUser} className="me-2" /> 𝖯𝗋𝗈𝖿𝗂𝗅𝖾
                </CDBSidebarMenuItem>
              </CDBSidebarMenu>
            </CDBSidebarContent>
            <NavLink exact activeClassName="activeClicked"></NavLink>
            <CDBSidebarMenuItem onClick={SignOut}><FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> 𝖲𝗂𝗀𝗇𝖮𝗎𝗍 </CDBSidebarMenuItem>
          </CDBSidebar>
        </div>
        <div className='col p-0 m-0'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default EmpDashboard;
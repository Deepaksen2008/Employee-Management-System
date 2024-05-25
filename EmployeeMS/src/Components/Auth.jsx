import { useNavigate } from 'react-router-dom';
import React from 'react';

function Auth() {
  let admin = "Admin";
  let emp = "Employee";
  const navigate = useNavigate();

  const LoginAdmin = () => {
    navigate('/auth/adminlogin', { state: { id: admin } });
  }

  const LoginEmp = () => {
    navigate('/auth/adminlogin', { state: { id: emp } });
  }

  return (
    <>
    <div className='col m-0 p-0'>
      <div className="context">
        <h1>𝙴𝚖𝚙𝚕𝚘𝚢𝚎𝚎 𝙼𝚊𝚗𝚊𝚐𝚎𝚖𝚎𝚗𝚝 𝚂𝚢𝚜𝚝𝚎𝚖</h1>
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button" className="btn btn-success btn-lg m-2" onClick={LoginAdmin}>𝐀𝐝𝐦𝐢𝐧</button>
          <button type="button" className="btn btn-success btn-lg" onClick={LoginEmp}>𝐄𝐦𝐩𝐥𝐨𝐲𝐞𝐞</button>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          {[...Array(12)].map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
}

export default Auth;

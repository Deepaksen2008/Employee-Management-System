import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'; // Importing from Recharts
import { faEnvelope, faUsers, faBuilding, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; // Import relevant icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Home() {

  let location = useLocation();
  const empId = location.state.id;

  let [data, setData] = useState([]);
  async function empData() {
    let apiURL = `http://localhost:4000/listdata`;
    let res = await axios.get(apiURL)
    setData(res.data);
    console.log(res.data);
  }
  useEffect(() => {
    empData()
  }, [])

  const navigate = useNavigate();
  const MailBox = () => {
    navigate('/dashboard/mailbox', { state: { id: empId } });
  }
  const Listemp = () => {
    navigate('/dashboard/employees', { state: { id: empId } });
  }
  const Listdept = () => {
    navigate('/dashboard/department', { state: { id: empId } });
  }
  const Lreq = () => {
    navigate('/dashboard/leavetype', { state: { id: empId } });
  }
  const PendingReq1 = () => {
    navigate('/dashboard/leaveReq/pendingReq', { state: { id: empId } });
  }
  const ApprovedReq = () => {
    navigate('/dashboard/leavereq/approvedReq', { state: { id: empId } });
  }

  // Example data for the pie chart
  const pieChartData = [
    { name: 'Monday', value: 12 },
    { name: 'Tuesday', value: 13 },
    { name: 'Wednesday', value: 9 },
    { name: 'Thursday', value: 10 },
    { name: 'Friday', value: 8 },
    { name: 'Saturday', value: 9 },
    { name: 'Sunday', value: 0 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];



  return (
    <>
      {data.map((item, index) => {
        return (
          <div>
            <div className='p-2 d-flex justify-content-center shadow'>
              <h4>​🇪​​🇲​​🇵​​🇱​​🇴​​🇾​​🇪​​🇪​ ​🇲​​🇦​​🇳​​🇦​​🇬​​🇪​​🇲​​🇪​​🇳​​🇹​ ​🇸​​🇾​​🇸​​🇹​​🇪​​🇲​</h4>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem' }}>
              <Card
                style={{ width: '13rem', backgroundImage: 'linear-gradient(to right, #00ff9d, #00f8ff)' }}
                className="mb-2"
                onClick={MailBox}
              >
                <Card.Header style={{ background: '#009688', color: 'white', textAlign: 'center' }}>
                  <h6> 𝐌𝐚𝐢𝐥 𝐁𝐨𝐱</h6>
                </Card.Header>
                <Card.Body style={{ display: 'flex', background: '#80cbc4' }}>
                  <Card.Title style={{ fontSize: '2.5em', margin: '0.1em', color: '#009688' }}><FontAwesomeIcon size='2x' icon={faEnvelope} /></Card.Title>
                  <Card.Title style={{ fontSize: '2em', margin: '0.1em' }}></Card.Title>
                </Card.Body>
              </Card>


              {/* Listemp Card */}
              <Card
                style={{ width: '13rem', backgroundImage: 'linear-gradient(to right, #ff9a9e, #fad0c4)' }}
                className="mb-2"
                onClick={Listemp}
              >
                <Card.Header style={{ background: '#E91E63', color: 'white', textAlign: 'center' }}>
                  <h6>𝐋𝐢𝐬𝐭𝐞𝐝 𝐄𝐦𝐩𝐥𝐨𝐲𝐞𝐞</h6>
                </Card.Header>
                <Card.Body style={{ display: 'flex', background: '#f8bbd0' }}>
                  <Card.Title style={{ fontSize: '2em', margin: '0.1em', color: '#E91E63' }}><FontAwesomeIcon size='2x' icon={faUsers} /></Card.Title>
                  <Card.Title style={{ fontSize: '2em', marginLeft: '0.8em' }}>{item.emp_row_count}</Card.Title>
                </Card.Body>
              </Card>

              {/* Listdept Card */}
              <Card
                style={{ width: '13rem', backgroundImage: 'linear-gradient(to right, #FFD700, #FFA500)' }}
                className="mb-2"
                onClick={Listdept}
              >
                <Card.Header style={{ background: '#FFC107', color: 'white', textAlign: 'center' }}>
                  <h6>𝐋𝐢𝐬𝐭𝐞𝐝 𝐃𝐞𝐩𝐚𝐫𝐭𝐦𝐞𝐧𝐭</h6>
                </Card.Header>
                <Card.Body style={{ display: 'flex' }}>
                  <Card.Title style={{ fontSize: '2em', margin: '0.1em', color: '#FFA500' }}><FontAwesomeIcon size='2x' icon={faBuilding} /></Card.Title>
                  <Card.Title style={{ fontSize: '2em', marginLeft: '0.8em' }}>{item.dept_row_count}</Card.Title>
                </Card.Body>
              </Card>

              {/* Lreq Card */}
              <Card
                style={{ width: '13rem', backgroundImage: 'linear-gradient(to left, #4CAF50, #8BC34A, #CDDC39, #FFEB3B)' }}
                className="mb-2"
                onClick={Lreq}
              >
                <Card.Header style={{ background: '#4CAF50', color: 'white', textAlign: 'center' }}>
                  <h6>𝐋𝐞𝐚𝐯𝐞 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐬</h6>
                </Card.Header>
                <Card.Body style={{ display: 'flex' }}>
                  <Card.Title style={{ fontSize: '2em', marginTop: '0.1em', color: '#4CAF50' }}><FontAwesomeIcon size='2x' icon={faCalendarAlt} /></Card.Title>
                  <Card.Title style={{ fontSize: '2em', marginLeft: '0.8em' }}>{item.leave_row_count}</Card.Title>
                </Card.Body>
              </Card>
            </div>

            <hr></hr>
            <div className='p-0.5 d-flex justify-content-center'>
              <h4>ꜱᴛᴀᴛᴜꜱ</h4>
            </div>
            <hr></hr>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ margin: "1rem" }}>
                <Card
                  style={{
                    width: '14rem',
                    backgroundImage: 'linear-gradient(to right, #64B5F6, #42A5F5, #2196F3, #1E88E5)', // Multi-color gradient of blue
                  }}
                  className="mb-2 bg-info"
                  onClick={PendingReq1}
                >
                  <Card.Header>𝙿𝚎𝚗𝚍𝚒𝚗𝚐 𝚁𝚎𝚚𝚞𝚎𝚜𝚝</Card.Header>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '2em' }}>{item.pending_row_count}</Card.Title>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    width: '14rem',
                    backgroundImage: 'linear-gradient(to right, #FFD180, #FFAB40, #FF9100, #FF6D00)', // Multi-color gradient of orange
                    animation: 'animateBackground 10s linear infinite', // Animation for the background
                  }}
                  className="mb-2"
                  onClick={ApprovedReq}
                >
                  <Card.Header>𝙰𝚙𝚙𝚛𝚘𝚟𝚎𝚍 𝙻𝚎𝚊𝚟𝚎</Card.Header>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '2em' }}>{item.approved_row_count}</Card.Title>
                  </Card.Body>
                </Card>

              </div>
              <div style={{}}>
                <PieChart width={700} height={250}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={pieChartData}
                    cx={350}
                    cy={100}
                    outerRadius={70}
                    fill="#8884d8"
                    label
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
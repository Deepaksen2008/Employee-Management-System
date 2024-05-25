import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import LeaveStatus from './LeaveStatus';

function EmpApproveLeave() {
  const navigate = useNavigate();
  let location = useLocation();
  const empId = location.state.id;

  console.log(empId);
  const [data, setData] = useState([]);
  let Sn = 1;
  const apiURL = `http://localhost:4000/empappleave/s?q=${empId}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(apiURL);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', options);
  }

  return (
    <>
      <div className='col m-0 p-0'>
        <div className='p-2 d-flex justify-content-center shadow'>
          <h4>Approved Leave Request</h4>
        </div>

        <div style={{ float: 'right' }}>
          <Container className="mt-4 mb-3">
            <Row>
              <Col sm={12}>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button>Search</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className='m-4'>
        <table className="table table-striped shadow">
          <thead>
            <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
              <th scope="col">Sr No.</th>
              <th scope="col">Employee ID</th>
              <th scope="col">Leave type</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Posting date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                <th scope="row">{Sn++}</th>
                <td>{item.emp_name}</td>
                <td>{item.leave_type}</td>
                <td>{formatDate(item.leave_from)}</td>
                <td>{formatDate(item.leave_to)}</td>
                <td>{item.leave_remark}</td>
                <td><LeaveStatus color={item.is_proved} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EmpApproveLeave;

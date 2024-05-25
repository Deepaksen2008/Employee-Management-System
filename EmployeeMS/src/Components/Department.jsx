import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from 'axios';

function Department() {

  const navigate = useNavigate();
  const location = useLocation();
  const empmail = location.state.id;
console.log(empmail);
  let Sn = 1;
  let [data, setData] = useState([])
  
  let apiURL = 'http://localhost:4000/deptdata';
  async function getData() {
    let res = await axios.get(apiURL);
    console.log(res.data);
    setData(res.data);
  }
  useEffect(() => {
    getData()
  }, [])

  function viewdept(id) {
    navigate('/dashboard/department/view_dept', { state: { id: id } })
  }

  function adddept() {
    navigate('/dashboard/department/add_department', { state: { id: empmail } })
  }

  return (
    <>

      <div className='col m-0 p-0'>
        <div className='p-2 d-flex justify-content-center shadow'>
          <h4>Manage Department</h4>
        </div>
        <Button className='btn btn-success btn-sm mt-3 m-2 mb-1 p-2 ' onClick={()=>adddept()}>Add Department</Button>
        <div style={{ float: 'right' }}>
          <Container className="mt-4">
            <Row >
              <Col sm={12}>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-1"
                    aria-label="Search"
                  />
                  <Button >
                    Search
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <hr></hr>
      </div>
      <div className='example5'>
      <div className='m-3'>
        <table class="table table-striped ">
          <thead>
            <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
              <th scope="col">S no.</th>
              <th scope="col">Department</th>
              <th scope='col'>Strength</th>
              
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) => {
                return (
                  <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                    <th scope="row">{Sn++}</th>
                    <td>{item.dept_name}</td>
                    <td>{item.duplicate_count}</td>
                    
                    <td><button onClick={() => { viewdept(item.dept_id) }} type="button" class="btn btn-primary m-1">View</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      </div>
    </>
  )
}

export default Department;
import  {React, useState, useEffect}  from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link , useNavigate, useLocation} from "react-router-dom"
import axios from 'axios';

function LeaveType() {
  const navigate = useNavigate();
  let location = useLocation();
  const empId = location.state.id;

  let Sn = 1;
  let [data, setData] = useState([])
  let apiURL = 'http://localhost:4000/leavetype';
  async function getData() {
    let res = await axios.get(apiURL);
    console.log(res.data);
    setData(res.data);
  }
  let fn = () => {
    getData()
  }
  useEffect(fn, [])

  const addLeave = () =>{
      navigate('/dashboard/leavetype/addleavetype', {state:{id:empId}})
  }


  return (
    <>
      <div>
        <div className='col m-0 p-0'>
          <div className='p-2 d-flex justify-content-center shadow'>
            <h4>Manage Leave </h4>
          </div>
          <Button  className='btn btn-success btn-sm mt-3 m-2 mb-1 p-2 ' onClick={addLeave}>Add Leave</Button>
          <div style={{ float: 'right' }}>
            <Container className="mt-4">
              <Row >
                <Col sm={12}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button>
                      Search
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
          <hr></hr>
        </div>
        <div className='m-4'>
          <table class="table table-striped ">
            <thead>
              <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                <th scope="col">S No.</th>
                <th scope="col">Leave Type</th>
                <th scope="col">Edit</th>
                {/* <th scope="col">Remove</th> */}
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => {
                  return (
                    <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                      <th scope="row">{Sn++}</th>
                      <td >{item.leave_type}</td>
                      <td><Link to="/dashboard/update_department" type="button" class="btn btn-success">Edit</Link></td>
                      {/* <td><button type="button" class="btn btn-primary">View</button></td> */}
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

export default LeaveType
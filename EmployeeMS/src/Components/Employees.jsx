import Pagination from 'react-bootstrap/Pagination';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom"
import { Alert } from './Alert';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faMoneyBillWave, faEye } from '@fortawesome/free-solid-svg-icons';
import DeleteConfirmationModal from './DeleteConfirmationModal';

function Employees() {
  const navigate = useNavigate();
  let location = useLocation();
  const empId = location.state.id;

  let [data, setData] = useState([])

  let apiURL = 'http://localhost:4000/employees';
  async function getData() {
    let res = await axios.get(apiURL);
    console.log(res.data);
    setData(res.data);
  }
  let fn = () => {
    getData()
  }
  useEffect(fn, [])


  const [alert, setAlert] = useState({ msg: '', type: '' });
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  async function deleteData(eid) {
    // let dltURL = await axios.delete(`${apiURL}?emp_id=${eid}`);
    // showAlert(`Employee ID ${eid} has been successfully deleted`, "danger");
    // console.log(dltURL.data)
  }

  function salarydet(id) {
    navigate('/dashboard/employees/empsalary', { state: { id: id } })
  }

  function upempdata(id) {
    navigate('/dashboard/employees/editempdata', { state: { id: id } })
  }
  console.log(empId);
  function addemp(empId) {
    navigate('/dashboard/employees/edit_employee', { state: { id: empId } })
  }

  const [page, setPage] = useState(1)
  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage)
  }

  /*--------------------------------------------------------------*/
  let [value, setValue] = useState([]);
  async function dashboard(id) {
    console.log(id);
    let apiURL1 = `http://localhost:4000/employee/s?q=${id}`;
    let res = await axios.get(apiURL1)
    setValue(res.data); // Changed res.value to res.data
    console.log(res.data);
  }
  useEffect(() => {
    dashboard()
  }, [])


  function formatIndianRupee(amount) {
    let [integerPart, decimalPart] = amount.toString().split(".");
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return '₹' + integerPart + (decimalPart ? "." + decimalPart : "");
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    return `${year}-${month}-${day}`;
  }

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    // Implement your delete logic here
    console.log('Delete action performed');
  };
  return (
    <>
      <div>
        <div className='col m-0 p-0'>
          <div className='p-2 d-flex justify-content-center shadow'>
            <h4>Employees</h4>
          </div>
          <Button className='btn btn-success btn-sm mt-3 m-2 mb-1 p-2' onClick={() => addemp(empId)}>Add Employees</Button>
          <div style={{ float: 'right' }}>
            <Container className="mt-4">
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
          <hr />
        </div>
        <div className='m-2 p-2'>
          <Alert alert={alert} />
          <table className="table table-striped shadow">
            <thead>
              <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                <th>Sr no.</th>
                <th>Emp ID</th>
                <th>Full Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(page * 6 - 6, page * 6).map((item, index) => (
                <tr key={index} style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                  <td>{(page - 1) * 6 + index + 1}</td>
                  <td>{item.emp_id}</td>
                  <td>{item.emp_name}</td>
                  <td>{item.emp_mob}</td>
                  <td>{item.emp_email}</td>
                  <td>
                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button> */}

                    <button onClick={() => upempdata(item.emp_email)} type="button" className="btn btn-success m-1"  >
                      <FontAwesomeIcon icon={faEdit} color="white" />
                    </button>
                    <button type="button" className="btn btn-danger m-1" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => { deleteData(item.emp_id); getData(); }}>
                      <FontAwesomeIcon icon={faTrash} color="white" />
                    </button>
                    <button onClick={() => salarydet(item.emp_id)} type="button" className="btn btn-warning m-1">
                      <FontAwesomeIcon icon={faMoneyBillWave} color="white" />
                    </button>

                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button> */}


                    <button onClick={() => dashboard(item.emp_id)} type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <FontAwesomeIcon icon={faEye} color="white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ position: "", bottom: "0" }}>
          <Pagination className='justify-content-center'>
            <Pagination.First onClick={() => selectPageHandler(1)} />
            <Pagination.Prev onClick={() => selectPageHandler(page - 1)} disabled={page === 1} />
            <Pagination.Item active={true}>
              {page}
            </Pagination.Item>
            <Pagination.Next onClick={() => selectPageHandler(page + 1)} disabled={page === Math.ceil(data.length / 6)} />
            <Pagination.Last onClick={() => selectPageHandler(Math.ceil(data.length / 6))} />
          </Pagination>
        </div>

      </div>

      <div>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            {Array.isArray(value) && value.map((item, index) => {
              return (
                <div class="modal-content" key={index}>
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div class="modal-body">
                    <div class="signup-form ">
                      <form>
                        <p>Employee ID  <h2>{item.emp_id}</h2></p>
                        <hr />
                        <div className='d-flex gap-4'>
                          <div class="form-group w-50">
                            <label for="birthday">Name</label>
                            <text type="text" class="form-control" >{item.emp_name}</text>
                          </div>
                          <div class="form-group w-50">
                            <label for="birthday">Employee ID</label>
                            <div class="-prepend">
                            </div>
                            <text type="text" class="form-control" >{item.emp_id}</text>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="birthday">Department</label>
                          <text type="text" class="form-control" >{item.dept_name}</text>
                        </div>
                        <div className='d-flex gap-4'>
                          <div class="form-group w-50">
                            <label for="birthday">Mobile</label>
                            <text type="text" class="form-control" >{item.emp_mob}</text>
                          </div>
                          <div class="form-group w-50">
                            <label for="birthday">Email</label>
                            <text type="text" class="form-control" >{item.emp_email}</text>
                          </div>
                        </div>
                        <div className='d-flex gap-4'>
                          <div class="form-group w-50">
                            <label for="birthday">DOB</label>
                            <date type="text" class="form-control" >{formatDate(item.emp_dob)}</date>
                          </div>
                          <div class="form-group w-50">
                            <label for="birthday">DOJ</label>
                            <date type="text" class="form-control" >{formatDate(item.emp_doj)}</date>
                          </div>
                        </div>
                        <div className='d-flex gap-4'>
                          <div class="form-group w-50">
                            <label for="birthday">Address</label>
                            <text type="text" class="form-control" >{item.emp_add}</text>
                          </div>
                          <div class="form-group w-50">
                            <label for="birthday">City</label>
                            <text type="text" class="form-control" >{item.emp_city}</text>
                          </div>
                        </div>
                        <hr />
                        <p>Yearly <h2>CTC</h2></p>
                        <hr />
                        <div className='d-flex gap-4'>
                          <div class="form-group w-50">
                            <label for="birthday">CTC Annual</label>
                            <text type="number" class="form-control" >{formatIndianRupee(Math.round(item.sal_ctc))}<span>&#8377;</span></text>
                          </div>
                          <div class="form-group w-50">
                            <label for="birthday">Bones Deduction</label>
                            <text type="number" class="form-control" >{formatIndianRupee((item.sal_ctc) * 0.05)}</text>
                          </div>
                        </div>
                        <div className='d-flex gap-4'>
                          <div class="form-group w-50">
                            <label for="birthday">Medical Allowance Deduction</label>
                            <text type="number" class="form-control" >{formatIndianRupee((item.sal_ctc) * 0.05)}</text>
                          </div>
                          <div class="form-group w-50">
                            <label for="birthday">Provident Fund</label>
                            <text type="number" class="form-control" >{formatIndianRupee((item.sal_ctc) * 0.12)}</text>
                          </div>
                        </div>
                        <div className='d-flex gap-4'>
                          <div class="form-group w-50">
                            <label for="birthday">Canteen charges</label>
                            <text type="number" class="form-control" >{formatIndianRupee((item.sal_ctc) * 0.08)}</text>
                          </div>
                          <div class="form-group w-50">
                            <label for="birthday">Total Deduction</label>
                            <text type="number" class="form-control" >{formatIndianRupee((item.sal_ctc) * 0.30)}</text>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="birthday">Net Salary</label>
                          <text type="number" class="form-control" >{formatIndianRupee(Math.round((item.sal_ctc) * 0.70))}</text>
                        </div>
                        <hr />
                        <p>Monthly <h2>CTC</h2></p>
                        <hr />
                        <div className='d-flex gap-4'>
                          <div class="form-group w-50">
                            <label for="birthday">CTC Monthly</label>
                            <text type="number" class="form-control" >{formatIndianRupee(Math.round(item.sal_ctc / 12))}</text>
                          </div>
                          <div class="form-group w-50">
                            <label for="birthday">Bones Deduction</label>
                            <text type="number" class="form-control" >{formatIndianRupee(Math.round(((item.sal_ctc) * 0.05) / 12))}</text>
                          </div>
                        </div>
                        <div className='d-flex gap-4'>
                          <div class="form-group w-50">
                            <label for="birthday">Medical Allowance Deduction</label>
                            <text type="number" class="form-control" >{formatIndianRupee(Math.round(((item.sal_ctc) * 0.05) / 12))}</text>
                          </div>
                          <div class="form-group w-50">
                            <label for="birthday">Provident Fund</label>
                            <text type="number" class="form-control" >{formatIndianRupee(Math.round(((item.sal_ctc) * 0.12) / 12))}</text>
                          </div>
                        </div>
                        <div className='d-flex gap-4'>
                          <div class="form-group w-50">
                            <label for="birthday">Canteen charge</label>
                            <text type="number" class="form-control" >{formatIndianRupee(Math.round(((item.sal_ctc) * 0.08) / 12))}</text>
                          </div>
                          <div class="form-group w-50">
                            <label for="birthday">Total Deduction</label>
                            <text type="number" class="form-control" >{formatIndianRupee(Math.round(((item.sal_ctc) * 0.30) / 12))}</text>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="birthday">Net Salary</label>
                          <text type="number" class="form-control" >{formatIndianRupee(Math.round(((item.sal_ctc) * 0.70) / 12))}</text>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New message</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Recipient:</label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Message:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>

      <div id="myModal" class="modal fade">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Are you sure?</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Do you really want to delete these records? This process cannot be undone.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-info" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Employees;

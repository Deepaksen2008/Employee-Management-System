import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function EmpDetails() {
    let location = useLocation();
    let [data, setData] = useState([]);
    const empId = location.state.id;
    async function empData() {
        let apiURL = `http://localhost:4000/employee/s?q=${empId}`;
        let res = await axios.get(apiURL)
        setData(res.data);
        console.log(res.data);

    }
    useEffect(() => {
        empData()
    }, [])

    function formatIndianRupee(amount) {
        let [integerPart, decimalPart] = amount.toString().split(".");
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return '₹' + integerPart + (decimalPart ? "." + decimalPart : "");
    }

    return (
        <>
        <div className='example6'>
            <div class="signup-form shadow mt-3">
                {data.map((item, index) => {
                    return (
                        
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
                                    <date type="text" class="form-control" >{item.emp_dob}</date>
                                </div>
                                <div class="form-group w-50">
                                    <label for="birthday">DOJ</label>
                                    <date type="text" class="form-control" >{item.emp_doj}</date>
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
                                <text type="number" class="form-control" >{formatIndianRupee((item.sal_ctc) * 0.70)}</text>
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
                            <div class="form-group">
                                <button type="submit" class="btn btn-success btn-lg">Update</button>
                            </div>
                        </form>
                    )
                })}
            </div>
            </div>
        </>
    )
}

export default EmpDetails
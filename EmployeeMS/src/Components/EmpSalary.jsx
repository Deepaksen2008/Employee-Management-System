import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


function EmpSalary() {
    let location = useLocation();
    let [data, setData] = useState([])
    console.log(data);
    const empId = location.state.id;
    useEffect(() => {
        let apiURL = "http://localhost:4000/empsalary"
        axios.get(`${apiURL}?q=${empId}`)
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data)
                } else {
                    alert('error')
                }
            })
            .catch((err) => console.log(err))
    }, [empId])

    function formatIndianRupee(amount) {
        let [integerPart, decimalPart] = amount.toString().split(".");
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return '₹' + integerPart + (decimalPart ? "." + decimalPart : "");
    }


    return (
        <>
            <div className='example-Empsal'>
                <div class="signup-form shadow mt-3">
                    {data.map((item, index) => {
                        return (

                            <form>
                                <p>Employee ID  <h2>{empId}</h2></p>
                                <hr />
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label for="birthday">Name</label>
                                        <text type="text" class="form-control" >{item.emp_name}</text>
                                    </div>
                                    <div class="form-group w-50">
                                        <label for="birthday">Department:</label>
                                        <text type="text" class="form-control" >{item.dept_name}</text>
                                    </div>
                                </div>
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label for="birthday">Email ID:</label>
                                        <text type="text" class="form-control" >{item.emp_email}</text>
                                    </div>
                                    <div class="form-group w-50">
                                        <label for="birthday">Phone</label>
                                        <text type="text" class="form-control" >{item.emp_mob}</text>
                                    </div>
                                </div>
                                <hr />
                                <p>Yearly <h2>CTC</h2></p>
                                <hr />
                                <div className='d-flex gap-4'>
                                    <div class="form-group w-50">
                                        <label for="birthday">CTC Annual</label>
                                        <text type="number" class="form-control" >{formatIndianRupee(Math.round(item.sal_ctc))}</text>
                                    </div>
                                    <div class="form-group w-50">
                                        <label for="birthday">Bones Deduction</label>
                                        <text type="number" class="form-control" >{formatIndianRupee(Math.round((item.sal_ctc) * 0.05))}</text>
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
                                    <text type="number" class="form-control" >{formatIndianRupee(Math.round(item.sal_ctc) * 0.70)}</text>
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
                                        <text type="number" class="form-control" >{formatIndianRupee(Math.round(((item.sal_ctc) * 0.05) / 12)   )}</text>
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

export default EmpSalary
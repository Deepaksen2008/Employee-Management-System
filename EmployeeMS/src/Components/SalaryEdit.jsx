import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { usePDF } from 'react-to-pdf';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


function SalaryEdit() {

    const location = useLocation();
    const emp = location.state.emp;
    const empId = location.state.empId;

    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

    let [data, setData] = useState([]);
    async function empData() {
        let apiURL = `http://localhost:4000/empsalarydetail?q=${emp}`;
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
            <div className='example3'>
                {data.map((item, index) => (
                    <div class="signup-form shadow mt-2">
                        <div style={{ float: 'right', padding: '2%', cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faFilePdf} onClick={() => toPDF()} />
                        </div>
                        <div ref={targetRef}>
                            <form>
                                <div class="container mt-5 mb-5">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="text-center lh-1 mb-2">
                                                <h2 class="fw-bold">Payslip</h2> <span class="fw-normal">Payment slip for the month of March 2024</span>
                                            </div>
                                            <div class="d-flex justify-content-end"> <span>Working Branch:Kolar</span> </div>
                                            <div class="row">
                                                <div class="col-md-10">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div> <span class="fw-bolder">Employee Code :</span> <small class="ms-3">{item.emp_id}</small> </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div> <span class="fw-bolder">Employee Name :</span> <small class="ms-3">{item.emp_name}</small> </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div> <span class="fw-bolder">Department Code :</span> <small class="ms-3">{item.dept_id}</small> </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div> <span class="fw-bolder">Department :</span> <small class="ms-3">{item.dept_name}</small> </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div> <span class="fw-bolder">Bank :</span> <small class="ms-3">Punjab National Bank</small> </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div> <span class="fw-bolder">Branch :</span> <small class="ms-3">Shahapura</small> </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div> <span class="fw-bolder">Designation :</span> <small class="ms-3">{item.dept_name} Executive</small> </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div> <span class="fw-bolder">Account No. :</span> <small class="ms-3">*******0701</small> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table class="mt-4 table table-bordered">
                                                    <thead class="bg-dark text-white" >
                                                        <tr>
                                                            <th scope="col">Earnings</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Deductions</th>
                                                            <th scope="col">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Basic</th>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.45) / 12))}</td>
                                                            <td>PF</td>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.12) / 12))}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">DA</th>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.02) / 12))}</td>
                                                            <td>ESI</td>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.05) / 12))}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">HRA</th>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.02) / 12))}</td>
                                                            <td>TDS</td>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.03) / 12))}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">WA</th>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.04) / 12))}</td>
                                                            <td>LOP</td>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.05) / 12))}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">CA</th>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.03) / 12))}</td>
                                                            <td>PT</td>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.02) / 12))}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">CCA</th>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.04) / 12))} </td>
                                                            <td>SPL. Deduction</td>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.01) / 12))}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">MA</th>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.02) / 12))}</td>
                                                            <td>EWF</td>
                                                            <td>{formatIndianRupee(0)}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Sales Incentive</th>
                                                            <td>{formatIndianRupee(0)}</td>
                                                            <td>CD</td>
                                                            <td>{formatIndianRupee(0)}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Leave Encashment</th>
                                                            <td>{formatIndianRupee(0)}</td>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Holiday Wages</th>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.02) / 12))}</td>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Special Allowance</th>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.05) / 12))}</td>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Bonus</th>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.04) / 12))}</td>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Individual Incentive</th>
                                                            <td>{formatIndianRupee(0)}</td>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                        <tr class="border-top">
                                                            <th scope="row">Total Earning</th>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc)) / 12))}</td>
                                                            <td>Total Deductions</td>
                                                            <td>{formatIndianRupee(Math.round(((item.sal_ctc) * 0.30) / 12))}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4"> <br /> <span class="fw-bold">Net Pay : {formatIndianRupee(Math.round(((item.sal_ctc) * 0.70) / 12))}</span> </div>
                                            </div>
                                            <div class="d-flex justify-content-end">
                                                <div class="d-flex flex-column mt-2"> <span class="fw-bolder">For HR head</span> <span class="mt-4">Authorised Signatory</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SalaryEdit
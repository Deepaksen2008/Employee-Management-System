import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ViewDept() {

    let Sn = 1;
    let location = useLocation();
    let [data, setData] = useState([]);
    async function empData() {
        const deptId = location.state.id;
        let apiURL = `http://localhost:4000/getdeptemp?dept_id=${deptId}`;
        let res = await axios.get(apiURL)
        setData(res.data);
        console.log(res.data);

    }
    useEffect(() => {
        empData()
    }, [])


    return (
        <>
            <div class="signup-form shadow mt-3">
                <form>
                    <p>Department  <h2>{ }</h2></p>
                    <hr />
                    <div className='example4'>
                        <div className='m-4' >
                            <table class="table table-striped justify-content-center ">
                                <thead>
                                    <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                        <th scope="col">Sr no.</th>
                                        <th scope="col">Emp ID</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Mobile Number</th>
                                        <th scope="col">Department</th>
                                    </tr>
                                </thead>
                                <tbody className='justify-content-center'>
                                    {
                                        data.map((item, index) => {
                                            return (
                                                <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                                    <th scope="row">{Sn++}</th>
                                                    <td>{item.emp_id}</td>
                                                    <td>{item.emp_name}</td>
                                                    <td>{item.emp_mob}</td>
                                                    <td>{item.dept_name}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ViewDept
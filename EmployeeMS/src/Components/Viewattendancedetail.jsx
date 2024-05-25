import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Viewattendancedetail() {

    let Sn = 1;
    let location = useLocation();
    let [data, setData] = useState([]);
    let tdata = location.state;
    const empid = tdata.value.emp_id;
    const date1 = tdata.date;
    console.log(tdata.date);
    async function empData() {
        let apiURL = `http://localhost:4000/viewattendancedetail?d=${date1}&id=${empid}`;
        let res = await axios.get(apiURL)
        setData(res.data);
        console.log(res.data);

    }
    useEffect(() => {
        empData()
    }, [])

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', options);
    }


    return (
        <>
            <div class="signup-form shadow mt-3">
                <form>
                    <p>Employee ID <h2>{empid}</h2></p>
                    <hr />
                    <div className='example4'>
                        <div className='m-4' >
                            <table class="table table-striped justify-content-center ">
                                <thead>
                                    <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                        <th scope="col">Sr no.</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Login</th>
                                        <th scope="col">Logout</th>
                                        <th scope="col">Effective Hour</th>
                                        <th scope="col">Final Login</th>
                                    </tr>
                                </thead>
                                <tbody className='justify-content-center'>
                                    {
                                        data.map((item, index) => {
                                            return (
                                                <tr style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                                                    <th scope="row">{Sn++}</th>
                                                    <td>{formatDate(item.date)}</td>
                                                    <td>{item.in_time}</td>
                                                    <td>{item.out_time}</td>
                                                    <td>{item.total_login_hr}</td>
                                                    <td>{item.total_login}</td>
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

export default Viewattendancedetail 
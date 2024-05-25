import con from "../../Model/db.js";

const getAllEmpData = (req, res) => {

    let emp_id = req.query.emp_id;
    let sqlQuery = "select * from employee e join dept d on e.emp_id=d.emp_id join empleave l on e.emp_id = l.emp_id join salary_emp s on e.emp_id=s.emp_id join leavereq r on e.emp_id=r.emp_id;";
    con.query(sqlQuery, [emp_id], function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { getAllEmpData }
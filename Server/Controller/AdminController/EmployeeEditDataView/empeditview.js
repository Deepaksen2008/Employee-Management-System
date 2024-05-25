import con from "../../../Model/db.js";

const getEmployeeEdit = (req, res) => {

    let emp_id = req.query.emp_id;
    let sqlQuery = "select * from employee join dept on employee.emp_id=dept.emp_id where employee.emp_id=?";
    con.query(sqlQuery, [emp_id], function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { getEmployeeEdit }
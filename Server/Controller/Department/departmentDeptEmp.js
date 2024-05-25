import con from "../../Model/db.js";

const getdeptemp = (req, res) => {

    let dept_id = req.query.dept_id;
    let sqlQuery = "select * from employee join departments on employee.emp_dept=departments.dept_id where dept_id=?";
    con.query(sqlQuery, [dept_id] , function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { getdeptemp }
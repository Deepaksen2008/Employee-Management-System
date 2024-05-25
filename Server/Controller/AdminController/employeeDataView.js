import con from "../../Model/db.js";

const employeeDataView = (req, res) => {
    let search = req.query.q;
    let sqlQuery = "select * from employee join salary_emp on employee.emp_id = salary_emp.emp_id join departments on employee.emp_dept=departments.dept_id where employee.emp_id=?";
    con.query(sqlQuery, [search] , function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { employeeDataView }
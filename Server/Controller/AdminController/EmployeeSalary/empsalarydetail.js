import con from "../../../Model/db.js";

const empSalaryDetail = (req, res) => {
    let search = req.query.q;
    let sqlQuery = "select * from employee, departments, salary_emp where employee.emp_dept=departments.dept_id and employee.emp_id=salary_emp.emp_id and employee.emp_name=?";
    con.query(sqlQuery, [search], function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { empSalaryDetail }
import con from "../../Model/db.js";

const deptData = (req, res) => {

    let emp_id = req.query.emp_id;
    let sqlQuery = "SELECT departments.dept_id, departments.dept_name, COALESCE(COUNT(employee.emp_dept), 0) AS duplicate_count FROM departments LEFT JOIN employee ON employee.emp_dept = departments.dept_id GROUP BY departments.dept_name HAVING COUNT(employee.emp_dept) >= 0;";
    con.query(sqlQuery, [emp_id], function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { deptData }
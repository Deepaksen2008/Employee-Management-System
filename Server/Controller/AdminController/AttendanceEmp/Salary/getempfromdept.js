import con from "../../../../Model/db.js";

const getempfromdept = (req, res) => {
    
    let deptname = req.query.deptname
    let sqlQuery = "select emp_name from employee, departments where employee.emp_dept=departments.dept_id and dept_name=?";
    con.query(sqlQuery,[deptname], (error, result) => {
        if (error) {
            console.log("Error", error.sqlMessage);
        }
        else {
            res.send(result)
        }
        console.log(res);
    })
}

export { getempfromdept }
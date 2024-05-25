import con from "../../Model/db.js";


const empprofile = (req, res) => {
    
    const empmail = req.query.empmail
    let sqlQuery = "select * from employee, departments where employee.emp_dept=departments.dept_id and emp_email=?";
    con.query(sqlQuery,[empmail], (error, result) => {
        if (error) {
            console.log("Error", error.sqlMessage);
        }
        else {
            res.send(result)
        }
        console.log(res);
    })
}

export { empprofile }


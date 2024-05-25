import con from "../../../Model/db.js";

const getleaveReqdetail = (req, res) => {
    
    let empname = req.query.empname
    let sqlQuery = "select * from leaves ,employee, departments where employee.emp_email=leaves.empemail and departments.dept_id=employee.emp_dept and leaves.is_proved='Pending' and employee.emp_name=?";
    con.query(sqlQuery,[empname], (error, result) => {
        if (error) {
            console.log("Error", error.sqlMessage);
        }
        else {
            res.send(result)
        }
        console.log(res);
    })
}

export { getleaveReqdetail }
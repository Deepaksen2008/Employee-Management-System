import con from "../../../Model/db.js";

const empPendingReq = (req, res) => {

    let sqlQuery = "select emp_id, emp_name, leave_from, leave_to,leave_type ,is_proved, leave_remark from leaves ,employee where employee.emp_email=leaves.empemail and leaves.is_proved='Pending'";
    con.query(sqlQuery, function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { empPendingReq }
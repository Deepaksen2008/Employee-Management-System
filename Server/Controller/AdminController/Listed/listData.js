import con from "../../../Model/db.js";

const listData = (req, res) => {
    let sqlQuery = "select ( select count(*) from employee) emp_row_count,( select count(*) from departments) dept_row_count,( select count(*) from empleave) leave_row_count , (SELECT COUNT(*) FROM leaves where is_proved='Pending') AS pending_row_count, (SELECT COUNT(*) FROM leaves where is_proved='Approved') AS approved_row_count, (SELECT COUNT(*) FROM leaves where is_proved='Rejected') AS reject_row_count";
    con.query(sqlQuery, function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { listData }
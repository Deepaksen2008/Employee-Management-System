import con from "../../../Model/db.js";
const empApplyLeaveStatus = (req, res) => {
   
    const empemail = req.query.empemail
    const sqlQuery = "select emp_id, leave_from, leave_to,leave_type ,is_proved, leave_remark, admin_remark from leaves ,employee where employee.emp_email=leaves.empemail and employee.emp_email=?";

    con.query(sqlQuery,[empemail], (error, result) => {
        if (error) {
            console.log("Error:", error.sqlMessage);
            res.status(500).json({ success: false, message: "Error occurred while inserting data" });
        } else {
            console.log("Data inserted successfully");
            res.status(200).json(result );
        }
    });
}

export { empApplyLeaveStatus }

import con from "../../../Model/db.js";

const leaveReqdetail = (req, res) => {
    const { is_proved, Admin_remark } = req.body;
    const empname = req.query.empname;

    let sqlQuery = "UPDATE leaves AS l JOIN employee AS e ON e.emp_email = l.empemail JOIN departments AS d ON d.dept_id = e.emp_dept SET l.is_proved = ?, l.Admin_remark = ? WHERE l.is_proved = 'Pending' AND e.emp_name = ?";
    
    con.query(sqlQuery, [is_proved, Admin_remark, empname], (error, result) => {
        if (error) {
            console.log("Error", error.sqlMessage);
            res.status(500).send("Error updating leave request");
        } else {
            console.log("Leave request updated successfully");
            res.status(200).send("Leave request updated successfully");
        }
    });
};

export { leaveReqdetail };


//UPDATE leaves AS l JOIN employee AS e ON e.emp_email = l.empemail JOIN departments AS d ON d.dept_id = e.emp_dept SET l.is_proved = ? , l.Admin_remark = ? WHERE l.is_proved = 'Pending' AND e.emp_name = ?;
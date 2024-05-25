import con from "../../../Model/db.js";

const empApplyforLeave = (req, res) => {
    const { leave_from, leave_to, leave_type, leave_remark } = req.body;
    const empemail = req.query.email;

    const sqlQuery = "INSERT INTO leaves (leave_from, leave_to, leave_type, leave_remark, empemail) VALUES (?, ?, ?, ?, ?)";

    con.query(sqlQuery, [leave_from, leave_to, leave_type, leave_remark, empemail], (error, result) => {
        if (error) {
            console.log("Error:", error.sqlMessage);
            res.status(500).json({ success: false, message: "Error occurred while inserting data" });
        } else {
            console.log("Data inserted successfully");
            res.status(200).json({ success: true, message: "Data inserted successfully", result });
        }
    });
}

export { empApplyforLeave }

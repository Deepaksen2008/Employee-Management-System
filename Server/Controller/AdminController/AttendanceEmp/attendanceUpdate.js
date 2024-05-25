import con from "../../../Model/db.js";

const attendanceUpdate = (req, res) => {

    let sqlQuery = "update attendance set attendance_status = case when time_to_sec(timediff(created_out, created_at))>=480 then 'Present' when time_to_sec(timediff(created_out, created_at))>=240 then 'Half day' when null then 'Absent' else 'Absent' end";
    con.query(sqlQuery,(error, result) => {
        if (error) {
            console.log("Error", error.sqlMessage);
        }
        else {
            res.send(result)
        }
        console.log(res);
    })
}

export { attendanceUpdate }

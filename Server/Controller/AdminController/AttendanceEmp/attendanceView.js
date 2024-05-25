import con from "../../../Model/db.js";

const attendanceView = (req, res) => {
    
    
    let sqlQuery = "select id, emp_name,date(created_at) as date, time(created_at) as in_time, time(created_out) as out_time, total_login_hr, attendance_status from employee, attendance where employee.emp_email=attendance.emp_id and is_fixed=1 order by id asc";
    con.query(sqlQuery, (error, result) => {
        if (error) {
            console.log("Error", error.sqlMessage);
        }
        else {
            res.send(result)
        }
        console.log(res);
    })
}

export { attendanceView }


//select id, emp_name,date(created_at) as date, time(created_at) as in_time, time(created_out) as out_time, total_login_hr, attendance_status from employee, attendance where employee.emp_email=attendance.emp_id and is_fixed=1 order by id asc;

//select id, emp_name,date(created_at) as date, time(created_at) as in_time, time(created_out) as out_time, total_login_hr, attendance_status from employee, attendance where employee.emp_email=attendance.emp_id and is_fixed=1 order by id asc;
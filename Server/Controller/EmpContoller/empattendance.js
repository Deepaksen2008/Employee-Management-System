import con from "../../Model/db.js"

const empattendance = (req, res) => {
    
    const empid = req.query.q
    let sqlQuery = "SELECT  dates.date,  DAYNAME(dates.date) AS day, employee.emp_id, employee.emp_name, IFNULL(SEC_TO_TIME(SUM(TIME_TO_SEC(attendance.total_login_hr))), '00:00:00') AS total_login_hours, CASE WHEN SEC_TO_TIME(SUM(TIME_TO_SEC(attendance.total_login_hr))) >= '08:00:00' THEN 'Present'  WHEN SEC_TO_TIME(SUM(TIME_TO_SEC(attendance.total_login_hr))) >= '04:00:00' THEN 'Half day'  ELSE 'Absent'  END AS attendance_status FROM  (SELECT DISTINCT DATE(created_at) AS date FROM attendance WHERE is_fixed = 1 AND DATE(created_at) >= '2024-03-19') AS dates CROSS JOIN    employee LEFT JOIN  attendance ON employee.emp_email = attendance.emp_id AND DATE(attendance.created_at) = dates.date WHERE employee.emp_email = ? GROUP BY dates.date, employee.emp_name ORDER BY dates.date ASC, employee.emp_name ASC";
    con.query(sqlQuery,[empid], (error, result) => {
        if (error) {
            console.log("Error", error.sqlMessage);
        }
        else {
            res.send(result)
        }
        console.log(res);
    })
}

export { empattendance }



//select id, emp_name,date(created_at) as date, time(created_at) as in_time, time(created_out) as out_time, total_login_hr, attendance_status from employee, attendance where employee.emp_email=attendance.emp_id and is_fixed=1 and employee.emp_id=? order by id asc;

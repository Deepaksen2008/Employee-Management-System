import con from "../../../../Model/db.js";

const viewattendancedetail = (req, res) => {
    let data = {
        d: req.query.d,
        id: req.query.id
    };

    let sqlQuery = `
        SELECT 
            emp_id, 
            emp_name, 
            date, 
            in_time, 
            out_time, 
            total_login_hr, 
            SEC_TO_TIME(SUM(TIME_TO_SEC(total_login_hr)) OVER (ORDER BY emp_id, date, in_time)) AS total_login 
        FROM 
            (SELECT 
                employee.emp_id, 
                employee.emp_name, 
                DATE(attendance.created_at) AS date, 
                TIME(attendance.created_at) AS in_time, 
                TIME(attendance.created_out) AS out_time, 
                attendance.total_login_hr 
            FROM 
                employee 
            INNER JOIN 
                attendance ON employee.emp_email = attendance.emp_id 
            WHERE 
                attendance.is_fixed = 1 
                AND DATE(attendance.created_at) = ? 
                AND employee.emp_id = ?
            ) AS subquery`;

    con.query(sqlQuery, [data.d, data.id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(result);
        }
    });
};

export { viewattendancedetail };

import con from "../../../Model/db.js";

const emprejectedreq = (req, res) => {

    let sqlQuery = "select * from leaves ,employee where employee.emp_email=leaves.empemail and leaves.is_proved='Rejected'";
    con.query(sqlQuery, function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { emprejectedreq }
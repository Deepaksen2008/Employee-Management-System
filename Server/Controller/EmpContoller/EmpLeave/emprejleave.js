import con from "../../../Model/db.js";

const emprejleave = (req, res) => {

    let email = req.query.q;
    let sqlQuery = "select * from leaves ,employee where employee.emp_email=leaves.empemail and leaves.is_proved='Rejected' and employee.emp_email=?";
    con.query(sqlQuery, email, function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { emprejleave }
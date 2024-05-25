import con from "../../../Model/db.js";

const leaveType = (req, res) => {
    let sqlQuery = "SELECT * from empleave";
    con.query(sqlQuery, function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { leaveType }
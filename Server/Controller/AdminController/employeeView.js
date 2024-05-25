import con from "../../Model/db.js";

const getEmployee = (req, res) => {
    let sqlQuery = "select * from employee";
    con.query(sqlQuery, function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { getEmployee }
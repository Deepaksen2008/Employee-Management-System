import con from "../../Model/db.js";

const adddept = (req, res) => {
    let addData = req.body
    let sqlQuery = "INSERT INTO departments SET ?";
    con.query(sqlQuery, addData, (error, result) => {
        if (error) {
            console.log("Error", error.sqlMessage);
        }
        else {
            res.send(result)
        }
    })
}

export { adddept }
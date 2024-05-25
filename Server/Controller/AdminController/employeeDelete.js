import con from "../../Model/db.js";

const deleteEmp = (req, res) => {
    let emp_id = req.query.emp_id;
    let sqlQuery = "DELETE FROM employee WHERE emp_id=?";
    con.query(sqlQuery, [emp_id], (error, result) => {
        if (error)
            console.log("Error", error.sqlMessage);
        else
            res.send(result)
    })
    console.log(emp_id);
}

export { deleteEmp }
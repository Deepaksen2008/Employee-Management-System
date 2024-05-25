import con from "../../../../Model/db.js";

const getdeptsalary = (req, res) => {
    
    
    let sqlQuery = "select dept_name from departments";
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

export { getdeptsalary }

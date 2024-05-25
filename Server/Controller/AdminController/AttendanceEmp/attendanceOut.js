import con from "../../../Model/db.js";

const attendanceEmpOut = (req, res) => {

    let sqlQuery = "update attendance set created_out = (now()), is_fixed = '1' where id = (select max(id) from attendance)";
    con.query(sqlQuery,(error, result) => {
        if (error) {
            console.log("Error", error.sqlMessage);
        }
        else {
            res.send(result)
        }
        console.log(res);
    })
}

export { attendanceEmpOut }


//update attendance set created_out=(now()), is_fixed=true where emp_id=? and is_fixed='false'
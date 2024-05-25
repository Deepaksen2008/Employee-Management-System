import con from "../../../Model/db.js";

const attendanceEmp = (req, res) => {
    let email = req.body.email; 
    let sqlQuery = "INSERT INTO attendance (created_at, emp_id) VALUES (now(), ?)";
    con.query(sqlQuery, [email], (error, results) => {
        if (error) {
            console.log("Error", error.sqlMessage);
            res.status(500).send("Error occurred");
        } else {
            console.log("Inserted successfully");
            console.log(results);
            res.send(results);
        }
    });
};

export { attendanceEmp };

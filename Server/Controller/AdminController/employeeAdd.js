import con from "../../Model/db.js";

const addEmployee = (req, res) => {
    let userData = {
        emp_id: req.body.emp_id,
        emp_name: req.body.emp_name,
        emp_dept: req.body.emp_dept,
        emp_mob: req.body.emp_mob,
        emp_email: req.body.emp_email,
        emp_dob: req.body.emp_dob,
        emp_doj: req.body.emp_doj,
        emp_add: req.body.emp_add,
        emp_city: req.body.emp_city
    };
    let sqlQuery = "INSERT INTO employee SET ?";
    con.query(sqlQuery, userData, (error, result) => {
        if (error) {
            console.log("Error", error.sqlMessage);
        }
        else {
            res.send(result)
        }
    })
}

export { addEmployee }
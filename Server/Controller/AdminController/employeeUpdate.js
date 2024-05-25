import con from "../../Model/db.js";

const updateEmployee = (req, res) => {
    let emp_email = req.query.emp_mail;
    let data = req.body;
    console.log(emp_email,data);
    let sqlQuery = "UPDATE employee SET ? WHERE emp_email=?"    
    con.query(sqlQuery, [data, emp_email], (error, result) => {   
        if (error)
            console.log(error.message);
        else
            res.send(result)
    })
}

export {updateEmployee}
// import express from "express";
// import con from '../Model/db.js'
// import Jwt from "jsonwebtoken";

// const router = express.Router()

// router.post('/adminlogin', (req, res) => {
//     const sqlQurey = "SELECT * FROM admin WHERE email=? AND password=?"
//     con.query(sqlQurey, [req.body.email, req.body.password], (err, result) => {
//         if (err)
//             console.log(err.message)
//         else if (result.length > 0) {
//             const email = result[0].email;
//             const token = Jwt.sign({ role: "admin", email: email }, "jwt_secret_key", { expiresIn: "1d" });
//             res.cookie('token', token)
//             return res.json({ loginStatus: true });
//         } else
//             return res.json({ loginStatus: false, Error: "Wrong email or password" });

//     })
//     console.log(req.body);
// })

// ////////////////////////////////////////////
// router.get("/employees", (req, res) => {
//     let sqlQuery = "select * from employee";
//     con.query(sqlQuery, function (err, result) {
//         if (err)
//             console.log(err)
//         else
//             res.send(result)

//     })
// })
// ///////////////////////////////////////////////
// router.post("/edit_employee", (req, res) => {
//     let userData = {
//         emp_id: req.body.emp_id,
//         emp_name: req.body.emp_name,
//         emp_mob: req.body.emp_mob,
//         emp_email: req.body.emp_email,
//         emp_dob: req.body.emp_dob,
//         emp_doj: req.body.emp_doj,
//         emp_add: req.body.emp_add,
//         emp_city: req.body.emp_city
//     };
//     let sqlQuery = "INSERT INTO employee SET ?";
//     con.query(sqlQuery, userData, (error, result)=> {
//         if (error) {
//             console.log("Error", error.sqlMessage);
//         }
//         else {
//             res.send(result)
//         }
//     })
// })
// ///////////////////////////////////////////////
// router.delete("/employees",(req,res)=>{
//     let emp_id = req.query.emp_id;
//     let sqlQuery = "DELETE FROM employee WHERE emp_id=?";
//     con.query(sqlQuery, [emp_id], (error, result)=>{
//         if(error)
//             console.log("Error", error.sqlMessage);
//         else
//             res.send(result)
        
//     })
//     console.log(emp_id);
// })
// ///////////////////////////////////////////////


// export { router as adminRouter }
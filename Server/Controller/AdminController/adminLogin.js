import con from "../../Model/db.js";
import Jwt from "jsonwebtoken";

const adminLogin = (req, res) => {
    const sqlQuery = "SELECT * FROM admin WHERE email=? AND password=?";
    con.query(sqlQuery, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            console.error("Database error:", err.message);
            return res.status(500).json({ loginStatus: false, Error: "Database error" });
        }
        if (result.length > 0) {
            const email = result[0].role; // Assuming email is stored in the role field
            const token = Jwt.sign({ role: "admin", email: email }, "jwt_secret_key", { expiresIn: "3h" });
            res.cookie('token', token);
            return res.json({ loginStatus: true, role: email }); // Sending loginStatus true along with role
        } else {
            return res.json({ loginStatus: false, Error: "Wrong email or password" });
        }
    });
};

export { adminLogin };

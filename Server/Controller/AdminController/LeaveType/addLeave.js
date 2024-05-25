import con from "../../../Model/db.js";

const addleave = (req, res) => {
    let addData = req.body;
    let sqlQuery = "INSERT INTO empleave SET ?";
    con.query(sqlQuery, addData, (error, result) => {
        if (error) {
            console.log("Error", error.sqlMessage);
            res.status(500).send("An error occurred while adding leave.");
        } else {
            console.log("Leave added successfully.");
            res.status(200).send(result);
        }
    });
};

export {addleave};

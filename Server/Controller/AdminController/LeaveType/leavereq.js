import con from "../../../Model/db.js";

const leavereq = (req, res) => {

    let sqlQuery = "SELECT (SELECT COUNT(*) FROM leaves where is_proved='Pending') AS pending_row_count, (SELECT COUNT(*) FROM leaves where is_proved='Approved') AS approved_row_count, (SELECT COUNT(*) FROM leaves where is_proved='Rejected') AS reject_row_count";
    con.query(sqlQuery,  function (err, result) {
        if (err)
            console.log(err)
        else
            res.send(result)
    })
}

export { leavereq }
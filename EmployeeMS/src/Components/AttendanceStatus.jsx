import { Button } from "react-bootstrap";

function AttendanceStatus(props){
    
    let buttonVariant;

    if(props.color === "Present"){
        buttonVariant = "success";
    } else if(props.color === "Half day"){
        buttonVariant = "warning";
    } else if(props.color === "Absent"){
        buttonVariant = "danger";
    }

    return (
        <Button className={`btn btn-${buttonVariant} btn-sm m-2 p-2`}>{props.color}</Button>
    );
}

export default AttendanceStatus;

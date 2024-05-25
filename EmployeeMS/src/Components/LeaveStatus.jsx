import { Button } from "react-bootstrap";

function LeaveStatus(props){
    
    let buttonVariant;

    if(props.color === "Pending"){
        buttonVariant = "warning";
    } else if(props.color === "Approved"){
        buttonVariant = "success";
    } else if(props.color === "Rejected"){
        buttonVariant = "danger";
    }

    return (
        // <Button className={`btn btn-${buttonVariant} btn-lg m-1 p-2`}>{props.color}</Button>
        <Button type="button" className={`btn btn-${buttonVariant} btn-sm m-1 `}>{props.color}</Button>
    );
}

export default LeaveStatus;

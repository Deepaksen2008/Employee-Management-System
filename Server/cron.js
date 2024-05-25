import nodeCron from "node-cron";
import { sendMail } from "./Controller/AdminController/SendMail/sendMail.js";

const user = () => {

    nodeCron.schedule('*/5 * * * * *', getCurrentTime);

}

const getCurrentTime = () => {
    // Create a new Date object
    const now = new Date();
    
    // Get the current hour, minute, and second
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    
    // Return the formatted current time
   console.log(`${hour}:${minute}:${second}`);


}

export default user()

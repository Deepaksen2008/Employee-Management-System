import Twilio from 'twilio'
import dotenv from 'dotenv'
dotenv.config()
const accountSid = process.env.ACCOUNTID;   //process.env.ACCOUNTID
const authToken = process.env.ACCOUNTSID;  //process.env.ACCOUNTSID

const client = new Twilio(accountSid, authToken);

const sendSMS = async (req, res) => {

    let {to, message} = req.body
    console.log(to, message);

    let msgOption = {
        from: '+12565781855',
        to: to,
        body: message
    }

    try {
        const message = await client.messages.create(msgOption);
        console.log(message);
    } catch (err) {
        console.error(err);
    }
}

export { sendSMS }
// sendSMS();



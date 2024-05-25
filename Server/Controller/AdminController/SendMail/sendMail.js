import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config()
const testAccount = await nodemailer.createTestAccount();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "upload");
//     },
//     filename: async function (req, file, cb) {
//      const documentname = file.originalname + "_" + Date.now() + '.pdf';
//      console.log(documentname);
//         cb(null, documentname);
//     }
// })

// const upload = multer({ storage: storage }).none()

const transporter = nodemailer.createTransport({
    host:process.env.NHOST,
    port: process.env.NPORT,
    auth: {
        user: process.env.USRERN,
        pass: process.env.PASS
    }
});


const sendMail = async (req, res) => {

    let file = req.file;
   let { from, to, subject, message } = req.body;
 
    // const filePath = path.join(__dirname, 'user.pdf');
    // console.log(filePath)
    // const documentname = await file.originalname + "_" + Date.now() + '.pdf';
    // from: 'deepakkumarsen2008@gmail.com',
    //     to: 'd.sen.31185@gmail.com',
    //     subject: 'For cron-job test',
    //     text: 'testing',

    console.log(  from, to, subject, message , file);
    console.log(file.path);
    let options = {
        from: from,
        to: to,
        subject: subject,
        text: message,
        attachments: [
            {  
                filename: file.filmana,
                path: file.path
            }
        ]
    };

    try {
        const info = await transporter.sendMail(options);
        console.log("Message sent: %s", info.messageId);
        res.json(info);
    } catch (error) {
        console.error("Error occurred while sending email:", error);
        res.status(500).json({ error: "An error occurred while sending email" });
    }
}

export { sendMail }
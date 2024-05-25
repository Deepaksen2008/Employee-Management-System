import axios from 'axios';
import React, { useState } from 'react';
import { Alert } from './Alert';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MailBox() {
    let location = useLocation();

    const initialvalue = {
        from: 'deepakkumarsen2008@gmail.com',
        to: '',
        subject: '',
        message: '',
        file: null
    }

    const [value, setValue] = useState(initialvalue);
    const [alert, setAlert] = useState({ msg: '', type: '' });

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('from', value.from);
            formData.append('to', value.to);
            formData.append('subject', value.subject);
            formData.append('message', value.message);
            formData.append('file', value.file); // Append file to FormData object

            toast("Mail Sending...");
            
            const result = await axios.post('http://localhost:4000/sendmail', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(result.data);
            showAlert("Email has been sent successfully", "success");
            setValue(initialvalue)

        } catch (err) {
            console.error(err);
            showAlert("Failed to send email", "danger");
        }
    };


    // const [file, setFile] = useState()

    // function handleChange(event) {
    //     setFile(event.target.files[0])
    // }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const url = 'http://localhost:4000/sendmail';
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('fileName', file.name);
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data',
    //         },
    //     };
    //     axios.post(url, formData, config).then((response) => {
    //         console.log(response.data);
    //     });

    // }

    const empmail = location.state.id;

    return (
        <div className="signup-form shadow mt-5" id='dept-form'>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Alert alert={alert} />
                <p>Admin  <h2>Mail Inbox</h2></p>
                <hr />
                <ToastContainer />
                <div className="form-group">
                    <label>To</label>
                    <input
                        type="email"
                        className="form-control"
                        value={value.to}
                        onChange={(e) => setValue({ ...value, to: e.target.value })}
                        placeholder="Enter recipient email"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={value.subject}
                        onChange={(e) => setValue({ ...value, subject: e.target.value })}
                        placeholder="Subject"
                    />
                </div>
                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        value={value.message}
                        onChange={(e) => setValue({ ...value, message: e.target.value })}
                        placeholder="Enter message"
                    />
                </div>

                <div class="form-group">
                    <input type="file" class="form-control-file" id="exampleFormControlFile1"
                        onChange={(e) => setValue({ ...value, file: e.target.files[0] })} />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-sm">Send</button>
                </div>
            </form>
        </div>
    );
}

export default MailBox;

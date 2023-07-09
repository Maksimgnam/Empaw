
import { useState } from 'react';
import './Comments.css';
import emailjs from 'emailjs-com';
const Comments = () => {

    const [message, setMessage] = useState('')
    const Submit = (e) => {
        e.preventDefault();

        const emailContent = {


            message: message
        };

        emailjs
            .send('service_wb3p3vc', 'service_wb3p3vc', emailContent, 'XIKKVFGQTwbBsdkZH')
            .then((result) => {
                console.log(result.text);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="Comments">
            <h1 className='CommentsH1'>Write your comment</h1>
            <form className="CommentsCard" onSubmit={Submit}>
                <div className="CommentsCardNameCard">
                    <div className="CommentsCardName">Name</div>
                </div>
                <textarea className='CommentsCardInput' placeholder='Type your opinion' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className='CommentsCardBtn'>Send</button>

            </form>


        </div>
    )
}
export default Comments;
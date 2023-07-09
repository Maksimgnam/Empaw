import './Registration.css';
import { useState } from 'react';

const Registration = ({ AccountOpen }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('')

    const NameChange = (event) => {
        setName(event.target.value);
    };

    const PasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const EmailChange = (event) => {
        setEmail(event.target.value);
    };

    const ImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const Submit = (event) => {
        event.preventDefault();

        localStorage.setItem('name', name);
        localStorage.setItem('password', password);
        localStorage.setItem('image', image);
        localStorage.setItem('email', email);


        setName('');
        setPassword('');
        setImage('');
        setEmail('')
        AccountOpen()
    };

    return (
        <form onSubmit={Submit} className='Registration'>
            <h3 className='RegistrationText'>
                Sigh up
            </h3>
            <div>

                <input
                    className='RegisterInput'
                    type="text"
                    id="name"
                    value={name}
                    onChange={NameChange}
                    required
                    placeholder='Type your name..'
                />
            </div>
            <div>

                <input
                    className='RegisterInput'
                    type="password"
                    id="password"
                    value={password}
                    onChange={PasswordChange}
                    required
                    placeholder='Type your password..'
                />
            </div>
            <div>


                <input
                    className='RegisterInput'
                    type="email"
                    id="email"
                    value={email}
                    onChange={EmailChange}
                    required
                    placeholder='Type your emaill..'
                />
            </div>
            <div className='FileContainer'>
                <label class="input-file">




                    <input
                        name="fileInfo"
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={ImageChange}
                        required
                        placeholder='Choose your image'
                        className='photo'
                    />
                    <p className='input__p'>Selected image:</p>



                </label>
                <img src={image} alt="" className='InputImage ' />

                {/* <span id="file-name"></span> */}

            </div>

            <button className='RegistrationBtn' type="submit" >Sigh up</button>

        </form>
    )
}
export default Registration;

import { useState } from "react";
import './Edit.css'
const Edit = ({ MyInfoContClose }) => {
    const [phonenumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [birth, setBirth] = useState('');
    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('')
    const AccountSubmit = (event) => {

        event.preventDefault();
        localStorage.setItem('address', address);
        localStorage.setItem('birth', birth);
        localStorage.setItem('phonenumber', phonenumber);
        localStorage.setItem('country', country);
        localStorage.setItem('gender', gender);




        setAddress('')
        setBirth('');
        setPhoneNumber('')
        setCountry('')
        setGender('')
        MyInfoContClose()



    }
    return (
        <div className="Edit">
            <div className="EditHead">
                <button className="CloseEditBtn" onClick={MyInfoContClose}>

                    x

                </button>

            </div>
            <div className="EditContainer">
                <form className='EditForm' onSubmit={AccountSubmit} >

                    <h3 className='EditFormText'>Edit your account</h3>

                    <input
                        type='address'
                        className='EditInput'
                        id='address'
                        placeholder='Type your address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                        type="tel"
                        className='EditInput'
                        id='phonenumber'
                        placeholder='Type your phone number'
                        value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        type="text"
                        className='EditInput'
                        placeholder="Type your country"
                        id='country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <input
                        type="date"
                        className='EditInput'
                        id='birth'
                        value={birth}
                        onChange={(e) => setBirth(e.target.value)}
                    />
                    <input
                        type="text"
                        className='EditInput'
                        placeholder="Type your gender"
                        id='gender'
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />


                    <button className="EditFormBtn" >Save</button>

                </form>

            </div>

        </div>
    )
}
export default Edit;
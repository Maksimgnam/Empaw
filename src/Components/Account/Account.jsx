import { useState } from 'react';
import Registration from '../Registration/Registration';
import './Account.css';
const Account = ({ AccountClose }) => {
    const name = localStorage.getItem('name');
    const password = localStorage.getItem('password');
    const image = localStorage.getItem('image');
    const email = localStorage.getItem('email');
    const [accountOpen, setAccountOpen] = useState(true);
    const [registrationOpen, setRegistrationOpen] = useState(false)
    const [myOrder, setMyOrder] = useState(true);
    const [myView, setMyView] = useState(false);
    const [myInfo, setMyInfo] = useState(false);
    const [myPayment, setMyPayment] = useState(false);
    const [myDeliveries, setMyDeliveries] = useState(false);
    const [myComments, setMyComments] = useState(false);




    const AccountOpen = () => {
        setAccountOpen(true);
        setRegistrationOpen(false)
    }
    const OrderOpen = () => {
        setMyOrder(true)
        setMyDeliveries(false)
        setMyPayment(false)

        setMyInfo(false)
        setMyView(false)
        setMyComments(false)
    }
    const ViewOpen = () => {
        setMyView(true)
        setMyDeliveries(false)
        setMyPayment(false)

        setMyInfo(false)
        setMyComments(false)
        setMyOrder(false)
    }
    const InfoOpen = () => {
        setMyInfo(true)
        setMyDeliveries(false)
        setMyPayment(false)

        setMyComments(false)
        setMyView(false)
        setMyOrder(false)
    }
    const PaymentOpen = () => {
        setMyPayment(true)
        setMyDeliveries(false)


        setMyInfo(false)
        setMyView(false)
        setMyOrder(false)
        setMyComments(false)
    }
    const DeliveriesOpen = () => {
        setMyDeliveries(true)
        setMyPayment(false)
        setMyComments(false)
        setMyInfo(false)
        setMyView(false)
        setMyOrder(false)
    }
    const CommentsOpen = () => {
        setMyComments(true)
        setMyDeliveries(false)
        setMyPayment(false)

        setMyInfo(false)
        setMyView(false)
        setMyOrder(false)

    }



    return (
        <div className='AccountMainCont'>
            {

                accountOpen && (
                    <div className="Account">
                        <div className="AccountHead">
                            <div className="AccountClose" onClick={AccountClose}>
                                X
                            </div>

                        </div>
                        <div className="AccoutMain">
                            <div className="AccountMenu">
                                <div className="AccountMenuFirstPart">
                                    <img src={image} className="AccountMenuAvatar" />


                                    <div className="AccountName">
                                    </div>

                                    {name && <div className="AccountName"> {name}
                                    </div>}



                                </div>


                                <div className="AccountMenuThirdPart">
                                    <p className='AccountMenuCardText'>Tools</p>
                                    <div className="AccountMenuCard" onClick={InfoOpen}>
                                        <img className='AccountMenuCardImg' src="https://static.thenounproject.com/png/4595395-200.png" alt="" />
                                        <p className='AccountMenuCardTextP'>My info</p>

                                    </div>
                                    <div className="AccountMenuCard" onClick={OrderOpen}>

                                        <img className='AccountMenuCardImg' src="https://static.thenounproject.com/png/101952-200.png" alt="" />
                                        <p className='AccountMenuCardTextP'>My orders</p>

                                    </div>
                                    <div className="AccountMenuCard" onClick={ViewOpen}>
                                        <img className='AccountMenuCardImg' src="https://static.thenounproject.com/png/101373-200.png" alt="" />
                                        <p className='AccountMenuCardTextP'>My view</p>

                                    </div>

                                    <div className="AccountMenuCard" onClick={PaymentOpen}>
                                        <img className='AccountMenuCardImg' src="https://cdn-icons-png.flaticon.com/512/7510/7510522.png" alt="" />
                                        <p className='AccountMenuCardTextP'>Payment</p>

                                    </div>
                                    <div className="AccountMenuCard" onClick={DeliveriesOpen}>
                                        <img className='AccountMenuCardImg' src="https://img.freepik.com/free-icon/delivery_318-877460.jpg?q=10&h=200" alt="" />
                                        <p className='AccountMenuCardTextP'>Deliveries</p>

                                    </div>
                                    <div className="AccountMenuCard" onClick={CommentsOpen}>
                                        <img className='AccountMenuCardImg' src="https://static.thenounproject.com/png/1314304-200.png" alt="" />
                                        <p className='AccountMenuCardTextP'>Comments</p>

                                    </div>




                                </div>
                                <div className="AccountMenuFourthPart">
                                    <button className='AccountLogOutBtn'>Log out</button>
                                </div>



                            </div>
                            <div className="AccountContainer">
                                {
                                    myOrder && (
                                        <div className="AccountCon" >

                                        </div>

                                    )
                                }
                                {
                                    myView && (
                                        <div className="AccountCon" >
                                            View
                                        </div>

                                    )
                                }
                                {
                                    myInfo && (
                                        <div className="AccountCon" >
                                            <div className="MyInfoMenu">
                                                <img src={image} alt="" className='MyInfoAvatar' />
                                                {name && <div className='MyInfoName' >  {name}
                                                </div>}

                                            </div>
                                            <div className="MyInfoContainer">
                                                <div className="MyInfoHeader">
                                                    MY info

                                                </div>
                                                <div className="MyInfoCardContainer">
                                                    <div className="MyInfoCard">
                                                        {name && <div className='MyInfoName' >  {name}
                                                        </div>}

                                                    </div>
                                                    <div className="MyInfoCard">
                                                        {email && <div className="Email"> Email: {email}</div>}

                                                    </div>
                                                    <div className="MyInfoCard">
                                                        <div className="Email"> Password: {password}</div>

                                                    </div>
                                                    <div className="MyInfoCard">
                                                        Address:

                                                    </div>
                                                    <div className="MyInfoCard">
                                                        Phone number:

                                                    </div>
                                                    <div className="MyInfoCard">
                                                        Date of birth:

                                                    </div>



                                                </div>
                                                <button className='EditBtn'>Edit</button>


                                            </div>





                                        </div>

                                    )
                                }
                                {
                                    myPayment && (
                                        <div className="AccountCon">
                                            Payment
                                        </div>

                                    )
                                }
                                {
                                    myDeliveries && (
                                        <div className="AccountCon" >
                                            Deliveries
                                        </div>

                                    )
                                }
                                {
                                    myComments && (
                                        <div className="AccountCon">
                                            Comments
                                        </div>

                                    )
                                }



                            </div>

                        </div>

                    </div >

                )
            }
            {
                registrationOpen && (


                    < Registration AccountOpen={AccountOpen} />
                )
            }
        </div >
    )
}
export default Account;
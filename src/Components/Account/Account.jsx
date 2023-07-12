import { useState } from 'react';
import Registration from '../Registration/Registration';
import './Account.css';
import Edit from '../Edit/Edit';
const Account = ({ AccountClose }) => {
    const name = localStorage.getItem('name');
    const password = localStorage.getItem('password');
    const image = localStorage.getItem('image');
    const email = localStorage.getItem('email');
    const address = localStorage.getItem('address');
    const country = localStorage.getItem('country')
    const phonenumber = localStorage.getItem('phonenumber');
    const birth = localStorage.getItem('birth');
    const gender = localStorage.getItem('gender')
    const [accountOpen, setAccountOpen] = useState(true);
    const [registrationOpen, setRegistrationOpen] = useState(false)
    const [myOrder, setMyOrder] = useState(true);
    const [myView, setMyView] = useState(false);
    const [myInfo, setMyInfo] = useState(false);
    const [myPayment, setMyPayment] = useState(false);
    const [myDeliveries, setMyDeliveries] = useState(false);
    const [myComments, setMyComments] = useState(false);
    const [openMyInfoCont, setOpenMyInfoCont] = useState(true)
    const [openEdit, setOpenEdit] = useState(false);
    const [openPaymentCardBtn, setOpenPaymentCardBtn] = useState(true);
    const [openPaymentCardCreate, setOpenPaymentCardCreate] = useState(false);

    const [selectedOption, setSelectedOption] = useState('Privatbank');
    const [limit, setLimit] = useState('');
    const [cardnumber, setCardNumber] = useState('');
    const [createdCard, setCreatedCard] = useState([]);
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleLimitChange = (e) => {
        setLimit(e.target.value);
    };

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleCreateCard = () => {

        const newCards = {
            option: selectedOption,
            limit: limit,
            cardnumber: cardnumber

        }
        setCreatedCard([...createdCard, newCards]);
        setSelectedOption('');
        setCardNumber('');
        setLimit('')

        setOpenPaymentCardBtn(true)
        setOpenPaymentCardCreate(false)


    };







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
    const EditOpen = () => {
        setOpenEdit(true)
        setOpenMyInfoCont(false)
    }

    const MyInfoContClose = () => {
        setOpenEdit(false)
        setOpenMyInfoCont(true)

    }

    const PaymentCreateCardOpen = () => {
        setOpenPaymentCardCreate(true)
        setOpenPaymentCardBtn(false)
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
                                    <div className="AccountMenuCard" onClick={PaymentOpen}>
                                        <img className='AccountMenuCardImg' src="https://cdn-icons-png.flaticon.com/512/7510/7510522.png" alt="" />
                                        <p className='AccountMenuCardTextP'>Payment</p>

                                    </div>
                                    <div className="AccountMenuCard" onClick={OrderOpen}>

                                        <img className='AccountMenuCardImg' src="https://static.thenounproject.com/png/101952-200.png" alt="" />
                                        <p className='AccountMenuCardTextP'>My orders</p>

                                    </div>
                                    <div className="AccountMenuCard" onClick={ViewOpen}>
                                        <img className='AccountMenuCardImg' src="https://static.thenounproject.com/png/101373-200.png" alt="" />
                                        <p className='AccountMenuCardTextP'>My view</p>

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


                                            {
                                                openMyInfoCont && (

                                                    <div className="MyInfoContainer">
                                                        <div className="MyInfoHeader">
                                                            MY info

                                                        </div>
                                                        <div className="MyInfoCardContainer">
                                                            <div className="MyInfoCard">
                                                                {name && <div className='Email' > Name:  {name}
                                                                </div>}

                                                            </div>
                                                            <div className="MyInfoCard">
                                                                {email && <div className="Email"> Email: {email}</div>}

                                                            </div>
                                                            <div className="MyInfoCard">
                                                                <div className="Email"> Password: {password}</div>

                                                            </div>
                                                            <div className="MyInfoCard">
                                                                Country:       {country && <div >  {country}</div>}

                                                            </div>
                                                            <div className="MyInfoCard">
                                                                Address:    {address && <div >  {address}</div>}

                                                            </div>
                                                            <div className="MyInfoCard">
                                                                Phone number:  {phonenumber && <div >  {phonenumber}</div>}

                                                            </div>
                                                            <div className="MyInfoCard">
                                                                Date of birth:    {birth && <div >  {birth}</div>}

                                                            </div>
                                                            <div className="MyInfoCard">
                                                                Gender:    {gender && <div >  {gender}</div>}

                                                            </div>



                                                        </div>
                                                        <button className='EditBtn' onClick={EditOpen}>Edit</button>


                                                    </div>

                                                )
                                            }
                                            {
                                                openEdit && (
                                                    <Edit MyInfoContClose={MyInfoContClose} />



                                                )
                                            }






                                        </div>

                                    )
                                }
                                {
                                    myPayment && (
                                        <div className="AccountCon">
                                            <div className="PaymentContainer">
                                                <div className="PaymentCreateCardContainer">
                                                    {
                                                        openPaymentCardBtn && (
                                                            <div className='PaymentCreateBtn' onClick={PaymentCreateCardOpen}>+</div>

                                                        )
                                                    }
                                                    {
                                                        openPaymentCardCreate && (
                                                            <div className="PaymentCreateCard">
                                                                <p className='PaymentCreateCardText'>Create a card</p>
                                                                <select className='PaymentCreateCardSelect' value={selectedOption} onChange={handleOptionChange} >
                                                                    <option value="Privatbank">Privatbank</option>
                                                                    <option value="Ocschadbank">Ocschadbank</option>
                                                                    <option value="Monobank">Monobank</option>
                                                                    <option value="A-bank">A-bank</option>

                                                                </select>
                                                                <input className='PaymentCreateCardInput' type="text" placeholder='XXXX XXXX XXXX' maxlength="8" value={cardnumber} onChange={handleCardNumberChange} />
                                                                <input className="PaymentCreateCardInput" type="text" placeholder='Type your limit' value={limit} onChange={handleLimitChange} />
                                                                <button className='PaymentCreateCardBtn' onClick={handleCreateCard} >+</button>



                                                            </div>

                                                        )
                                                    }


                                                </div>
                                                <div className="PaymentCardContainer">
                                                    {
                                                        createdCard.map((card, index) => (
                                                            <div className="PaymentCard" key={index}>
                                                                <div className="PaymentCardName">{name}</div>
                                                                <p className='PaymentCardBankText'>{card.option}</p>
                                                                <p className='PaymentCardNumber'>{card.cardnumber}</p>
                                                                <p className='PaymentCardLimit'> Limit: {card.limit}$</p>
                                                                <div className="Chip"> <img src="https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/card-chip-800x450.png" alt="" /></div>



                                                            </div>
                                                        ))
                                                    }





                                                </div>



                                            </div>
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
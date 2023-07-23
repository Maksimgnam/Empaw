import { useState } from 'react';
import Registration from '../Registration/Registration';
import './Account.css';
import Edit from '../Edit/Edit';
import { useEffect } from 'react';
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
    const [accountOpen, setAccountOpen] = useState(false);
    const [registrationOpen, setRegistrationOpen] = useState(true)
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
    useEffect(() => {
        const storedCards = localStorage.getItem('createdCard');
        if (storedCards) {
            setCreatedCard(JSON.parse(storedCards));
        }
    }, []);







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

        const updateCard = [...createdCard, newCards];
        setCreatedCard(updateCard)
        setSelectedOption('');
        setCardNumber('');
        setLimit('')
        setOpenPaymentCardBtn(true)
        setOpenPaymentCardCreate(false)
        localStorage.setItem('createdCard', JSON.stringify(updateCard));



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




                                    <div className="AccountMenuCard" onClick={DeliveriesOpen}>
                                        <img className='AccountMenuCardImg' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAAwMDC8vLz4+PiQkJDa2tpGRkZPT0+vr6/v7++fn5/Ozs7c3Nz29vb7+/tlZWVfX1+4uLjl5eXHx8c3NzeoqKglJSVZWVnq6uqLi4uVlZV5eXkrKyuAgIDR0dE+Pj4TExNtbW18fHwcHBwzMzM7OzsQEBBTU1MZGRlDQ0OekB+VAAAID0lEQVR4nO2daVciOxCGZRGElh3ZFFlGAef//8BrVyFCd6RMKi+Ze049nxzO6XQqndSWSubuzjAMwzAMwzAMwzAMwzAMwzAM43/L67KamuUCKeBL5V/gFSdgJ7VszBtOwllq2ZgnmICr1KIdqcEkfKD2h7VktKgDa5iA/An/wNqXyagHY1j7A2q/DWtf5iPvwA7W/IgEfIG1LzPkVQJr/5XaH8Hal9nlHdjg2icBZ7j2RRrUgwzWPuuxR1j7MuxQ9WDtk6mYwpr/BWA9MAdPERnWMytY+2yK5rD2ZWbgSfQ3b/+Aa1+kC55EPElbsPZlWmBjNYnkz2yru8DPMMD6M9z+g7qZ9mcrzaAne+BJWo/Ufm60+0FPjqkHHXUPfmIVqf28n2E5CPIZl+oO/AjZir2+ndymTYKeXIPdfrJFA307WWiE3gYH93fTOMuwuw11bcfg2HQeweueZ82vPMt2WPd9+jl/7l3VgavwCHp364x5v3KBb1b3QCOj6IBApg09a5UiniLSMgnTUb/ij1LRjL/kmi6XG/7Lz8WNsUyuQm53eC69e/xsjW7+r1Fr5u3ZPFID3eAeiGx0c2SRP/5xpgjnC88ZMYlkj3+Cv0F4mtLhEHX9FP/Cf2J7wXnERujjtJ+jiwoGYI+moTO3pGd0qfL3vIlnVRNX4XUe/HgECd/yJnCp4GMOKPhxknCt6YBWEYhMdBJ2HJrGDzaHuDQbuzSKLBf1TxPbsaoDbig8K5XhgkUM72EHbfDvK95OyAVHn6byGppubeiWiQxJqElDnfzSwzDoQyiVuYzeoziLLbYBKnH8z3/DT13R/JbxLfONNG8joWIdEo8P3zL6JkTgEmp16ZHR4u0kYtNrGxAuodYefrM6lY2tfR6DaxqlT3NBb7I5mg6Ph1ZoCWtRX1A/fkcPB4AtviYTJhB7krCP4xEMsYTA7dlGbKdp7amc2S/FbcvEd3wpHPNwxTmnD0y18QsiBi+kOd5+bzB6+/wBYHzI4U/EF6x8zQ8lhJF77GSpI2acaZb+9XiAFu59vA6UIKcyYgH5zLc92vVAFg2SBQveF3ktfn3O+/hkJ8kzjrB/+SOZ76w651NPTS+WEBcfefV34ql8vWlpTD5b0+1wlBvUdiM7ut9e6Ve4693QeE3zU0BR2X//6ZdBH6GdGl027yz4/eLJ031ox7ZXRXo0s4LrBLLppXxTf8tWRRtErT1qZIfT51uEzAV6HHlMgMxFWDHTiVzjZ6HbO+jtNdbWylKIV2/9cgZp8w9cBXSEYgz2S4LjE+UGn8w8QMMXedd0Eb77xMpUp8sqXgFTkae8A8gyc0p26k42VlTH6voRdN1VqPhRlfZu65RhFkHXXYXCgb1K1bRXK4UuRJfuHbNdCQ89saoBpmq4zBpYKyCyvImqgZ4TF8hLU6FBMBXvafefNJBbBTzFzapmA0ysS6zQmiC5quGUJrDSm1+Q8ljQGq0JDnqvRgc5HcBjQRyhVYEvkOA9PmAAxS8AVu1IcDYKWPoFry0TqaBtPvwFEhReAE8kuF/QA95YU9wk5lw5UELnC/rXuqilMGHY5gPTws4XIAUs7pRweAG0+c688xIpYXFJUCYDaZIpc11IC4+v91HFvjghySQjvX9SKsWLMdpj1HU745KbH7eux0HM0qgg4DY/fXiBPsEG12UiA5f+ickOrcsk4ClFil9S3o3Bmhvo/au282MA3wqGH+wQQe9epFc18N0LOi2bMmlKqgZ3beIPXs0tge9ekKqZAlMlEqxqdDu1V1mhh1CE7hUE5jThG0Ai3lWNvizBjqGIfqdWgBzDlPd7siYAvgAeg0rwwQhgrmboGsJ6pwGi7D6xMgWeS3h0KNPHX6UkwjiULBP9DNyL7jqGcAOUsHywhiI4eOL7YgjrSAHL29q02Y2MUdflIXxHSliyTHBz4RjC0Q4nYPljUToMaS6cQ1iHUe7AbY6TIo8FSMBdY0rKAq9jFoEf1HMZxJvCqhsYP6VP1VAHgMmoOnqSiFAHkAV26CEU2eQdQAZw8CGUQF8ZxWmElDEwnTFCHrakIUxZkUG1Wcg8RhM9SSQGaAln6Eki0UdLCB9CCbiE8BdIwId4m1pCeMY0+Td8QCuC5OvwCa3MD44hbN2jcLiHH2iDvC4PoeMkczTKs4V+Rtabl+8uR+ZLHWUJ9Cv8mpMLvxRZ2lYOtuERsOvUw/5aD5WU8qXwLAaf8LosLWu/PKC4L2X14WkU+BBKwOsT4btbEnT/HzKdyQe8gC+QeHGuzojQVTgpT87AQ3z4OUcJWiXwK0AShvgxrj64DnwIBW50pDuhsYDrAb6lK+EBNop/kXXQpKtDL/2KAY0wMl1LiiZhpXcHrWi4miVhTn+CXiU1tCaToBwKspaeliGyRFegToEaMoUxTbwMV+hlyJc1Jdw8XKD9fjK3yPPiElW0NaT62cJZgMdDE0VpvbGtAJ6GaDhe0LmWZNFSFPEZPYf4P1d3vRREsbiLFB3yPAm9tbAKJkgJC9VlrjkUFfa6C4X69SpQwsJpUdccigptiZRUdW/YQlHMd5GAQE3KcyRhjYJzDsWEb09I6JNSDgp4URSngpFXagt00HOIkmwp8xcv4DnEnzBhGrGN1jO8CpFZPIEFuAOr1J+QD3oAa/R5Izth4Sx7h7jAjU3RGnbJh8wm7wAuu9CL4oPpwbmkWWrRGOCu4SK1bAwwqsDWk/wW6K5lbVdNzbKf8gi5YRiGYRiGYRiGYRiGYRiGYRiGlv8AVn9mDibrxmcAAAAASUVORK5CYII=" alt="" />
                                        <p className='AccountMenuCardTextP'>My checks</p>

                                    </div>





                                </div>
                                <div className="AccountMenuFourthPart">
                                    <button className='AccountLogOutBtn'>Log out</button>
                                </div>



                            </div>
                            <div className="AccountContainer">

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
                                                                <input className='PaymentCreateCardInput' type="text" placeholder='XXXX XXXX XXXX' maxlength="12" minLength="12" value={cardnumber} onChange={handleCardNumberChange} />
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
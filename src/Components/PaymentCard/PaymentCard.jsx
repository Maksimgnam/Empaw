import React from 'react';
import './PaymentCard.css';
import { useState } from 'react';


const PaymentCard = ({ initialTotalPrice, ClosePaymentCard, ItemsAmount, orderNumber }) => {


    const storedCards = localStorage.getItem('createdCard');
    const createCard = storedCards ? JSON.parse(storedCards) : [];
    const name = localStorage.getItem('name');
    const date = new Date();
    const dayDate = date.getDate()
    const monthDate = date.getMonth();
    const yearDate = date.getFullYear();
    const DeliveryPrice = 30;
    const address = localStorage.getItem('address');
    const [totalPrice, setTotalPrice] = useState(initialTotalPrice);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [openPaymentFrom, setOpenPaymentForm] = useState(true)
    const [openPaymentCheck, setOpenPaymentCheck] = useState(false);

    const AddDeliveryPrice = () => {


        if (!buttonClicked) {
            setTotalPrice((prevTotal) => prevTotal + DeliveryPrice);
            setButtonClicked(true);

        }

    };
    const SelectCard = (index) => {
        setSelectedCard(createCard[index])
    }

    const PaymentCheckOpen = () => {
        setOpenPaymentCheck(true);
        setOpenPaymentForm(false)
    }
    const PaymentCheckClose = () => {
        setOpenPaymentCheck(false)
        ClosePaymentCard()

    }






    return (
        <div className="PaymentPay">
            <div className="PaymentPayHeader">
                <div className="PaymentPayClose" onClick={ClosePaymentCard}>X</div>
            </div>
            {
                openPaymentFrom && (
                    <div className="PaymentPayForm">

                        <div className="PaymentPayCardContainer">
                            <div className="PaymentFormText">
                                Pay for card:
                            </div>

                            {createCard.map((card, index) => (

                                <div className={`PaymentPayCard ${selectedCard === card ? 'selected' : ''}`}
                                    key={index}
                                    onClick={() => SelectCard(index)}>
                                    <div className="PaymentCardName">{name && <>{name}</>}</div>

                                    <p className='PaymentCardBankText'>{card.option}</p>
                                    <p className='PaymentCardNumber'>{card.cardnumber}</p>
                                    <p className='PaymentCardLimit'> Limit: {card.limit}$</p>

                                    <div className="PayChip"> <img src="https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/card-chip-800x450.png" alt="" /></div>



                                </div>

                            ))}

                        </div>
                        <div className="PaymentPayDownContainer">
                            <div className="PaymentPayDownContainerTextCont">
                                <p className='orderNumber'><span className='orderNumberSpan '> Order number: </span><br />{orderNumber}</p>
                                <p> {name}</p>
                                <p className="PaymentDownContainerText">Date: {dayDate}.0{monthDate}.{yearDate}</p>
                                <p className="PaymentDownContainerText">Bank: {selectedCard ? selectedCard.option : ''}</p>

                                <p className="PaymentDownContainerText">Card number: {selectedCard ? selectedCard.cardnumber : ''}</p>
                                <p className="PaymentDownContainerText"> Items: {ItemsAmount}</p>
                                <div className="PaymentDownContainerLine">

                                </div>
                                <p className='PaymentDownContainerTotalPrice'> Total price: {totalPrice}$</p>

                            </div>
                            <div className="PaymentPayDownContainerRightCont">
                                <div className="PaymentPayDownContainerDelivetyCard">
                                    <p className='DelivetyCardText'> <span className='DelivetyCardSpan'>Delivery to:</span> <br /> {address}</p>
                                    <div className="PaymentPayDownContainerDelivetyCardBtns">
                                        <div className='DeliveryPrice'>Price: {DeliveryPrice}$</div>
                                        <div className="AddDelivery" onClick={AddDeliveryPrice}>
                                            +

                                        </div>

                                    </div>



                                </div>
                                <div className="PaymentPayBtn" onClick={PaymentCheckOpen}>
                                    Pay

                                </div>

                            </div>




                        </div>


                    </div>

                )
            }
            {
                openPaymentCheck && (
                    <div className="PaymentCheckContainer">
                        <div className="PaymentCheck">
                            <div className='PaymentCheckOrderNumber'> <span className='PaymentCheckSpan'>Order number:</span> <p className='PaymentCheckP'>{orderNumber}</p></div>
                            <div className="PaymentCheckTextContainer">
                                <p className="PaymentCheckName">{name}</p>
                                <p className="PaymentCheckText">Date: {dayDate}.0{monthDate}.{yearDate}</p>
                                <p className="PaymentCheckText">Card number: {selectedCard ? selectedCard.cardnumber : ''}</p>
                                <p className="PaymentCheckText">Items: {ItemsAmount}</p>
                                <div className="PaymentCheckLine">

                                </div>
                                <p className="PaymentCheckPrice">Total price: {totalPrice}$</p>


                            </div>
                            <button className='PaymentCheckBtn' onClick={PaymentCheckClose}>Ok</button>



                        </div>


                    </div>

                )
            }


        </div>
    );
};

export default PaymentCard;
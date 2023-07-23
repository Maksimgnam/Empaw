import './MainPage.css';
import CardContainer from '../CardContainer/CardContainer';
import { useState } from 'react';
import Header from '../Header/Header';

import Account from '../Account/Account';
import Menubar from '../Menubar/Menubar';
import CardInfo from '../CardInfo/Cardinfo';
import Comments from '../Comments/Comments';
import PaymentCard from '../PaymentCard/PaymentCard';



const MainPage = ({ value }) => {


    const [OpenCart, setOpenCart] = useState(false);
    const [openCatagories, setOpenCatagories] = useState(true);
    const [openCardContainer, setOpenCardContainer] = useState(true)
    const [openHeader, setOpenHeader] = useState(true);
    const [openFollow, setOpenFollow] = useState(false);
    const [openAccount, setOpenAccount] = useState(false);
    const [openMenubar, setOpenMenubar] = useState(false);
    const [openCardInfo, setOpenCardInfo] = useState(null);
    const [openComments, setOpenComments] = useState(false);
    const [openPaymentCard, setOpenPaymentCard] = useState(false)
    const orderNumber = Array.from({ length: 1 }, () => Math.floor(Math.random() * 100000000));



    const CartOpen = () => {
        setOpenCart(true);
        setOpenCardContainer(false)
        setOpenCatagories(false)
        setOpenHeader(false)
        setOpenMenubar(false);
        setOpenCardInfo(null)
        setOpenComments(false);

    }
    const CartClose = () => {
        setOpenCart(false);
        setOpenCardContainer(true)
        setOpenCatagories(true)
        setOpenHeader(true)

    }
    const FollowOpen = () => {
        setOpenFollow(true)
        setOpenCardContainer(false)
        setOpenCatagories(false)
        setOpenHeader(false)
        setOpenMenubar(false);
        setOpenCardInfo(null)
        setOpenComments(false);

    }
    const FollowClose = () => {
        setOpenFollow(false);
        setOpenCardContainer(true)
        setOpenCatagories(true)
        setOpenHeader(true)



    }
    const AccountOpen = () => {
        setOpenAccount(true)
        setOpenCardContainer(false)
        setOpenCatagories(false)
        setOpenHeader(false)
        setOpenMenubar(false);


    }
    const AccountClose = () => {
        setOpenAccount(false)
        setOpenCardContainer(true)
        setOpenCatagories(true)
        setOpenHeader(true)
        setOpenMenubar(false);
        setOpenComments(false);


    }
    const MenubarOpen = () => {
        setOpenMenubar(true);
        setOpenCatagories(false)
        setOpenCardInfo(null)
        setOpenCardContainer(true)
        setOpenComments(false);
    }
    const MenubarClose = () => {
        setOpenMenubar(false);
        setOpenCatagories(true)
    }
    const OpenPaymentCard = () => {
        setOpenPaymentCard(true)
    }
    const ClosePaymentCard = () => {
        setOpenPaymentCard(false)
    }

    const [cartItems, setCartItems] = useState([]);


    const addToCart = (card) => {
        setCartItems([...cartItems, card]);


    }
    const [followItems, setFollowItems] = useState([]);
    const addToFollow = (card) => {
        setFollowItems([...followItems, card])


    }
    const initialTotalPrice = cartItems.reduce((acc, current) => acc + current.price, 0)
    const [searchQuery, setSearchQuery] = useState('');

    const SearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const CardInfoOpen = (card) => {

        setOpenCardInfo(card)
        setOpenCatagories(false)
        setOpenCardContainer(false)
        setOpenCart(false)
        setOpenComments(false);
    }
    const CardInfoClose = () => {
        setOpenCardInfo(null)
        setOpenCatagories(true)
        setOpenCardContainer(true)
        setOpenComments(false);


    }
    const OpenMain = () => {
        setOpenCardContainer(true);
        setOpenCatagories(true)
        setOpenMenubar(false)
        setOpenComments(false);
    }
    const CommentsOpen = () => {
        setOpenComments(true);
        setOpenCardContainer(false)
        setOpenCardInfo(false)
        setOpenFollow(false)
    }

    const ItemsAmount = cartItems.length





    return (
        <div>

            {
                openHeader && (
                    <Header CartOpen={CartOpen} FollowOpen={FollowOpen} AccountOpen={AccountOpen} MenubarOpen={MenubarOpen} searchQuery={searchQuery} SearchChange={SearchChange} />

                )
            }


            <div className="MainPage">



                {
                    openMenubar && (
                        <Menubar MenubarClose={MenubarClose} CartOpen={CartOpen} FollowOpen={FollowOpen} OpenMain={OpenMain} CommentsOpen={CommentsOpen} />

                    )
                }



                {
                    openCardContainer && (
                        <CardContainer addToCart={addToCart} addToFollow={addToFollow} searchQuery={searchQuery} onCardClick={CardInfoOpen} />

                    )
                }


                {
                    OpenCart && (
                        <div className="Cart">
                            <div className="CartHead">
                                <button className='CloseBtn' onClick={CartClose}>X</button>

                            </div>
                            <div className="CartCardMain">
                                <div className="CartCardContainer">


                                    {cartItems.map((item) => (
                                        <div key={item.id} className="CartCard">
                                            <img src={item.img} alt="" className="CartImg" />
                                            <div className="CartCardTextCont">



                                                <h3 className='Name'>{item.name}</h3>
                                                <p className='CartCardText'>Price: {item.price}$</p>
                                                <p className='CartCardText'>Type: {item.type}</p>



                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='CartPayCont'>
                                    <p className='PayText'>Total price:  {initialTotalPrice}$ </p>
                                    <button className='PayBtn' onClick={OpenPaymentCard}>Pay</button>
                                </div>

                            </div>
                            {
                                openPaymentCard
                                && (
                                    <PaymentCard initialTotalPrice={initialTotalPrice} ClosePaymentCard={ClosePaymentCard} ItemsAmount={ItemsAmount} orderNumber={orderNumber} />

                                )
                            }


                        </div>

                    )
                }
                {
                    openFollow && (
                        <div className="Follow">
                            <div className="FollowHead">
                                <button className='FollowClose' onClick={FollowClose}>X</button>

                            </div>
                            <div className="FollowContainer">
                                <div className="FollowCardContainer">
                                    {
                                        followItems.map((followitem) => (
                                            <div className="Card " key={followitem.id}>
                                                <div className="CardImg" >
                                                    <img src={followitem.img} className='Image' alt="" />

                                                </div>
                                                <div className="CardText">
                                                    <h4 className='Name'>{followitem.name}</h4>
                                                    <p className='Text'>Price: {followitem.price}$</p>
                                                    <p className='Text'> Type: {followitem.type}</p>


                                                    <div className="CardButtons">
                                                        <button className='like'>
                                                            <img className='LikeImage' src="data:image/png;base64,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" alt="" />
                                                        </button>

                                                    </div>

                                                </div>


                                            </div>
                                        ))
                                    }

                                </div>
                            </div>

                        </div>

                    )
                }
                {
                    openAccount && (
                        <Account AccountClose={AccountClose} />
                    )
                }

                {
                    openCardInfo && (
                        <CardInfo targetCard={openCardInfo} CardInfoClose={CardInfoClose} addToCart={addToCart} addToFollow={addToFollow} />

                    )


                }
                {
                    openComments && (
                        <Comments />

                    )
                }








            </div>
        </div>

    )
}
export default MainPage;

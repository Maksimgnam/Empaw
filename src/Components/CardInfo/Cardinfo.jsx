import './CardInfo.css';
import { useState } from 'react';
import { useEffect } from 'react';
const CardInfo = ({ CardInfoClose, targetCard, card, addToCart, addToFollow }) => {

    const CardInfo = [
        { id: 0, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Privat24_Logo.png' },
        { id: 1, img: 'https://play-lh.googleusercontent.com/tVdBTQSX3ek05SxDZJClWtohEohC0EHLF7BRqzfq7tRsr3533ONjQxUd-pmQxjGtb2I=w240-h480-rw' },
        { id: 2, img: 'data:image/jpeg;base64,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' },
        { id: 3, img: 'https://cdn.worldvectorlogo.com/logos/raiffeisen-1.svg' },
        { id: 4, img: 'https://blog.easypay.ua/wp-content/uploads/2022/09/A500-300x300.png' },


    ]
    const [rating, setRating] = useState(0)
    const [value, setValue] = useState(1);
    const [text, setText] = useState('');
    const [cardText, setCardText] = useState([]);
    const [like, setLike] = useState(0);
    const [dislike, setDisLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [comment, setComment] = useState(false);

    // useEffect(() => {
    //     const storedCards = localStorage.getItem('comments');
    //     if (storedCards) {
    //         setCardText(JSON.parse(storedCards));
    //     }
    // }, []);
    // const StorageChange = (updatedCards) => {
    //     localStorage.setItem('comments', JSON.stringify(updatedCards));
    // };

    const addCard = () => {


        if (text.trim() !== "") {

            const newWatchCard = { text: text, };
            setCardText([...cardText, newWatchCard]);
            setText('');

        }


    }

    // const Add = () => {
    //     setValue(value + 1)
    // }
    // const Minus = () => {
    //     setValue(value - 1)
    // }

    const ChangeStar = (selectedStar) => {
        setRating(selectedStar)
    }
    // let modifyPrice = targetCard.price * value;
    // let CurrencyPrice = modifyPrice * 36;

    const Like = () => {
        if (!isLiked && !isDisliked) {
            setLike(like + 1);
            setIsLiked(true);

        } else if (isDisliked) {
            setLike(like + 1);
            setDisLike(dislike - 1);
            setIsLiked(true);
            setIsDisliked(false);
        }
    }
    const Dislike = () => {
        if (!isDisliked && !isLiked) {
            setDisLike(dislike + 1);
            setIsDisliked(true);
        } else if (isLiked) {
            setLike(like - 1);
            setDisLike(dislike + 1);
            setIsLiked(false);
            setIsDisliked(true);
        }
    }

    const CommentOpen = () => {
        setComment(true)
    }






    return (
        <div className="CardInfoMain">




            <div className="CardInfo">

                <div className="CardInfoHead">
                    <button className='CloseBtn' onClick={CardInfoClose}>X</button>

                </div>
                <div className="CardInfoContainer">

                    <div className="CardInfoContainerImageCont">
                        <img src={targetCard.img} alt="" className='CardInfoImg' />

                    </div>
                    <div className="CardInfoContainerTextCont">




                        <div className="CardInfoTextCont">
                            <p className='CardInfoName'>{targetCard.name}</p>
                            <div className='CardInfoTraderCont'>
                                <p>Trader: EmPaw</p>

                            </div>
                            <p>{targetCard.paragraf}</p>


                        </div>

                        <div className="CardInfoButtonsCont">
                            <p className='CardInfoPrice'> {targetCard.price}$</p>

                            <p className='CardInfoStock'>In Stock</p>
                            <button className='add' onClick={() => addToCart(targetCard)}>Add</button>
                            <button className='LikeBtn' onClick={() => addToFollow(targetCard)}>
                                <img className='LikeBtnImg' src="https://images.emojiterra.com/openmoji/v14.0/512px/1f49b.png" alt="" />
                            </button>



                        </div>

                        <div className="CardInfoPayCont">
                            {
                                CardInfo.map((item) => (
                                    <div className="CardInfoPayCard" key={item.id}>
                                        <img className='CardInfoPayCardImg' src={item.img} alt="" />
                                    </div>

                                ))
                            }

                        </div>
                        <div className="CardInfoDelivery">
                            <div className="CardInfoDeliveryFirstPart">

                                <p className='CardInfoDeliveryText'>Delivery</p>
                                <img className="CardInfoDeliveryImage" src="https://cdn-icons-png.flaticon.com/512/66/66841.png" alt="" />
                            </div>
                            <p className='CardInfoDeliveryText second'>5-30$</p>
                        </div>

                        <div className="CardInfoRating">
                            <p className='CardInfoRatingText'>Rate:</p>
                            {
                                [1, 2, 3, 4, 5].map((item) => (
                                    <span key={item} className={`star ${item <= rating ? 'filled' : ''}`} onClick={() => ChangeStar(item)}>&#9733;</span>
                                ))
                            }
                            <div className="CardInfoCommentsBtn" onClick={CommentOpen}>

                                <img className='CardInfoCommentsBtnImage' src="https://cdn.icon-icons.com/icons2/2066/PNG/512/comments_alt_icon_125319.png" alt="" />



                            </div>
                        </div>










                    </div>


                </div>




            </div >
            {
                comment && (
                    <div className="CommentsContainer">
                        <div className="CommentInputCont">
                            <textarea placeholder='Type your comment' type="text" className="CommentInput" value={text} onChange={(e) => setText(e.target.value)} />
                            <button className='CommentBtn' onClick={addCard}>></button>
                        </div>
                        <div className="CommentsCardContainer">
                            {
                                cardText.map((itemText, index) => (
                                    <div className="ComentsCard" key={index}>
                                        <div className="ComentsCardHead">
                                            <div className="CommentsCardText">
                                                Customer


                                            </div>
                                            <div className="CommentStarCont">
                                                {
                                                    [1, 2, 3, 4, 5].map((item) => (
                                                        <span key={item} className={`CommentStar ${item <= rating ? 'filled' : ''}`} onClick={() => ChangeStar(item)}>&#9733;</span>
                                                    ))
                                                }

                                            </div>


                                        </div>
                                        <div className="CommentCardMain">
                                            <textarea value={itemText.text} className='CommentCardMainText' />


                                        </div>
                                        <div className="CommentCardFooter">
                                            <div className="CommentCardFooterPart" onClick={Like}>
                                                <img className='CommentCardFooterImg' src="https://cdn-icons-png.flaticon.com/512/126/126473.png" alt="" />


                                                <p disabled={isLiked}>{like}</p>

                                            </div>
                                            <div className="CommentCardFooterPartLine">

                                            </div>

                                            <div className="CommentCardFooterPart" onClick={Dislike}>

                                                <img className='CommentCardFooterImg secontFooterImg' src="https://icons.veryicon.com/png/o/miscellaneous/business-set/dislike-26.png" alt="" />
                                                <p disabled={isDisliked}>{dislike}</p>
                                            </div>

                                        </div>

                                    </div>


                                ))
                            }


                        </div>


                    </div>

                )
            }



        </div >

    )
}
export default CardInfo;
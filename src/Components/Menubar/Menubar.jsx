
import './Menubar.css'
import Logo from '../Logo/Logo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Menubar = ({ MenubarClose, CartOpen, FollowOpen, OpenMain, CommentsOpen }) => {
    const image = localStorage.getItem('image');
    const name = localStorage.getItem('name');
    let date = new Date()
    let time = date.getFullYear();
    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);

    return (
        <div className="Menubar" data-aos='fade-right'>
            <div className="MenubarHead">
                <Logo />
                <button className='CloseMenubarBtn' onClick={MenubarClose}>X</button>

            </div>

            <div className="MenubarMain">

                <div className="AccountCont">
                    <img src={image} className="AccountContImg" />


                    {
                        name && <p className="AccountContName">{name}</p>
                    }

                </div>
                {/* <div className="Languages">
                    <div className="LanguagesCont">
                        <div className="LanguagesText">
                            Language

                        </div>
                        <button className="LanguagesBtn">
                            Ua
                        </button>
                        <button className="LanguagesBtn">
                            En
                        </button>

                    </div>

                </div> */}
                <div className="Navbar">

                    <div className="NavbarCard" onClick={OpenMain} >
                        <div className="NavbarCardImage">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" className='NavbarImg' />

                        </div>
                        <p className='NavbarName'>Home</p>

                    </div>
                    <div className="NavbarCard" onClick={CartOpen}>
                        <div className="NavbarCardImage">
                            <img src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png" alt="" className='NavbarImg' />

                        </div>
                        <p className='NavbarName'>Cart</p>

                    </div>
                    <div className="NavbarCard" onClick={FollowOpen}>
                        <div className="NavbarCardImage">
                            <img src="https://www.svgrepo.com/download/13666/heart.svg" alt="" className='NavbarImg' />

                        </div>
                        <p className='NavbarName'>Liked</p>

                    </div>
                    <div className="NavbarCard" onClick={CommentsOpen}>
                        <div className="NavbarCardImage">
                            <img src="https://cdn.icon-icons.com/icons2/2066/PNG/512/comments_alt_icon_125319.png" alt="" className='NavbarImg' />

                        </div>
                        <p className='NavbarName' >Comments</p>

                    </div>



                </div>


                <div className="AboutUs">
                    <div className="AboutName">
                        About us

                    </div>
                    <a href="" className='AboutText'>Info</a>
                    <a href="" className='AboutText'>Blog</a>
                    <a href="" className='AboutText'>Delivery</a>

                </div>
                <div className="MenubarFooter">
                    <span>   &copy; </span>  Copyright {time}

                </div>


            </div>


        </div >
    )
}
export default Menubar;
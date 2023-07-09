import './Header.css';
import Logo from '../Logo/Logo';
import account from './HeaderImage/account.png'
import cart from './HeaderImage/cart.png'


const Header = ({ CartOpen, FollowOpen, AccountOpen, MenubarOpen, searchQuery, SearchChange }) => {
    return (
        <div className='Header'>
            <div className="HeaderFirstPart">
                <div className="menu" onClick={MenubarOpen}>
                    <div className="menuline"></div>
                    <div className="menuline"></div>
                    <div className="menuline"></div>
                </div>
                <Logo />

            </div>

            <div className="navbar">
                <input type="text" name="" id="" className='HeaderInput' placeholder='Search a product...' value={searchQuery} onChange={SearchChange} />
                <div className="Btn" onClick={CartOpen} >
                    <img src={cart} alt="" className='ImageBtn' />
                </div>
                <div className="Btn" onClick={FollowOpen}>
                    <img className='ImageBtn' src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="" />
                </div>
                <div className='Btn' onClick={AccountOpen}>
                    <img src={account} alt="" className='ImageBtn' />
                </div>

            </div>

        </div>
    )
}
export default Header;

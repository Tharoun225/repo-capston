import { Link } from 'react-router-dom';

function Nav(){
    return(
        <nav className="navbar">
            <div className='logo'>
                <img src="https://www.figma.com/community/resource/2666faf0-5570-454a-a5bf-82187247c74e/thumbnail" alt="Logo"/>
            </div>
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservation</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;
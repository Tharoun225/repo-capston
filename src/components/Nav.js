import react from 'react';

function Nav(){
    return(
        <nav className="navbar">
            <div className='logo'>
                <img src="/images/Logo.svg" alt="Logo"/>
            </div>
            <ul className='nav-links'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Reservation</a></li>
                <li><a href='#'>Order Online</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </nav>
    );
}
export default Nav;
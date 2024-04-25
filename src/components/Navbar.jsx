import { Link } from "react-router-dom";
import '../styles/styleNavbar.css'
import bknlogo from '../images/bknlogo.png'
import CartWidget from "./CartWidget";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="navbar">

            <Link to="/" className='logo'>
                <img className="logoMain" src={bknlogo} alt="Logo"></img>
            </Link>
            <nav className={`nav_items ${isOpen && "open"}`}>
                <ul className='menu'>
                    <li><Link className='menu-link' to="/productos"><span className="menu-palabra">Productos</span></Link></li>
                    <li><Link className='menu-link' to={`/productos/women's clothing`}><span className="menu-palabra">Ropa de mujer</span></Link></li>
                    <li><Link className='menu-link' to={`/productos/men's clothing`}><span className="menu-palabra">Ropa de hombre</span></Link></li>
                    <li><Link className='menu-link' to="/productos/jewelery"><span className="menu-palabra">Joyería</span></Link></li>
                    <li><Link className='menu-link' to="/productos/electronics"><span className="menu-palabra">Electronica</span></Link></li>
                </ul>
            </nav>
            <CartWidget />
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar;
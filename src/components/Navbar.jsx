import { Link } from "react-router-dom";
/*import '../styles/styleNavbar2.css'*/
import bknlogo from '../images/bknlogo.png'
import CartWidget from "./CartWidget";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="flex flex-row items-center justify-between w-full bg-red-100 border-b-2">
            <Link to="/" className='w-6 h-auto'>
                <img className="w-52 h-11" src={bknlogo} alt="Logo"></img>
            </Link>
            <nav className={`nav_items flex flex-col gap-4 items-start transition-all duration-300 transform -translate-x-96 rounded-lg bg-black bg-opacity-90 ${isOpen && "open"}`}>
                <ul className='menu'>
                    <li><Link className='menu-link' to="/productos"><span className="menu-palabra">Productos</span></Link></li>
                    <li><Link className='menu-link' to={`/productos/women's clothing`}><span className="menu-palabra">Ropa de mujer</span></Link></li>
                    <li><Link className='menu-link' to={`/productos/men's clothing`}><span className="menu-palabra">Ropa de hombre</span></Link></li>
                    <li><Link className='menu-link' to="/productos/jewelery"><span className="menu-palabra">Joyería</span></Link></li>
                    <li><Link className='menu-link' to="/productos/electronics"><span className="menu-palabra">Electronica</span></Link></li>
                </ul>
            </nav>
            <div className="carro-toggle">
                <CartWidget />
                <div className={`nav_toggle ${isOpen ? "open" : "close"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </header>
    )
}

export default Navbar;
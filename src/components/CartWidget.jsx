import React, { useContext } from 'react'
import carro from '../images/carro.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import '../styles/styleNavbar.css'

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);
    return (
        <Link className='menu-link carro' to="/carrito">
            <img className='logo' src={carro} alt="Logo"></img>
            <span className='numeroCarro'>{cantidadEnCarrito()}</span>
        </Link>
    )
}

export default CartWidget
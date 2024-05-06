import React, { useContext } from 'react'
import carro from '../images/carro.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import '../styles/styleNavbar2.css'

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);
    return (
        <Link className='flex flex-row items-center mr-4 gap-1 no-underline text-[#BB191F]' to="/carrito">
            <img className='w-auto h-5 sm:w-auto sm:h-8' src={carro} alt="Logo"></img>
            <span className='text-[#BDE0FE]'>{cantidadEnCarrito()}</span>
        </Link>
    )
}

export default CartWidget
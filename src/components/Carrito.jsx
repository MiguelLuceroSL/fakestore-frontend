import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import '../styles/styleCart.css';
import CargandoCarrito from "./CargandoCarrito";

const Carrito = () => {
    const { carrito, setCarrito, precioTotal, vaciarCarrito, agregarAlCarrito } = useContext(CartContext);
    const [loading, setLoading] = useState(true);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    const handleComprar = () => {
        setLoading(true);
        axios.post('http://localhost:3000/comprar', carrito)
            .then(response => {
                console.log('Productos comprados:', response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al comprar productos:', error);
                setLoading(false);
            });
    }


    if (loading || carrito.length === 0) {
        return <CargandoCarrito />;
    }

    const decrementarCantidad = (item) => {
        if (item.count > 1) {
            agregarAlCarrito(item, -1);
        }
    }

    const incrementarCantidad = (item) => {
        agregarAlCarrito(item, 1);
    }

    const eliminarProducto = (productId) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== productId);
        setCarrito(nuevoCarrito);
    }

    let claseCssCarro = 'carrito-vacio';
    if (carrito.length > 0) {
        claseCssCarro = 'carro-con-articulos';
    } else {
        claseCssCarro = 'carrito-vacio';
    }

    function precioUniFunc(precio) {
        let resultado = parseFloat(precio).toFixed(2);
        return resultado;
    }

    function precioVariosFunc(precio, cantidad) {
        let precioTotal = 0;
        precioTotal = precio * cantidad;
        let resultado = parseFloat(precioTotal).toFixed(2);
        return resultado;
    }

    return (
        <article className={claseCssCarro}>
            <h1>Carrito de compras</h1>
            <section>
                {carrito.length > 0 &&
                    carrito.map((product) => (
                        <div key={product.id} className='producto-cart'>
                            <div className='div-producto'>
                                <h3 className="product-title">{product.title}</h3>
                                <div className='contenedor-boton'>
                                    <div className="item-count-carro">
                                        <button className='cantidad boton signos' onClick={() => decrementarCantidad(product)}>-</button>
                                        <p className="cantidad">{product.count}</p>
                                        <button className='cantidad boton signos' onClick={() => incrementarCantidad(product)}>+</button>
                                    </div>
                                    <button className="eliminar boton" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                                </div>
                                {product.count > 1 ? (
                                    <>
                                        <p className='precios'>Precio unitario: ${precioUniFunc(product.precioConDescuentoAplicado)}</p>
                                        <p className='precios'>Precio total: ${precioVariosFunc(product.precioConDescuentoAplicado, product.count)}</p>
                                    </>
                                ) : (
                                    <p className='precios'>Precio total: ${precioUniFunc(product.precioConDescuentoAplicado)}</p>
                                )}
                            </div>
                            <img className="producto-img-cart" src={product.image} alt={product.title} />
                        </div>
                    ))

                }
                {carrito.length > 0 ?
                    <>
                        <p className='precio-total'>Precio total: ${precioTotal()}</p>
                        <div className='vaciar-comprar'>
                            <button className='vaciar' onClick={handleVaciar}>Vaciar carrito</button>
                            <button className='comprar' onClick={handleComprar}>Comprar</button>
                        </div>

                    </>
                    :
                    <p className='carro-vacio'>El carrito está vacío</p>

                }


            </section>
        </article>
    )
}

export default Carrito
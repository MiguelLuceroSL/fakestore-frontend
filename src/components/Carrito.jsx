import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import '../styles/styleCart2.css';

const Carrito = () => {
    const { carrito, setCarrito, precioTotal, vaciarCarrito, agregarAlCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    const handleComprar = () => {
        axios.post('https://bknshop-back.onrender.com/comprar', carrito)
            .then(response => {
                console.log('Productos comprados:', response.data);
            })
            .catch(error => {
                console.error('Error al comprar productos:', error);
            });
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
        <article className="m-8 w-auto flex flex-col items-center min-h-screen">
            <h1 className='font-dm-serif-display text-5xl'>Carrito de compras</h1>
            <section className='bg-white pt-8 mt-10 w-full md:w-2/3 flex flex-col items-center justify-center rounded-3xl min-h-96'>
                {carrito.length > 0 &&
                    carrito.map((product) => (
                        <div key={product.id} className='flex flex-col md:flex-row justify-between items-center border-b border-[#767676] w-2/3 py-4 my-4'>
                            <div className='flex flex-col items-center justify-center 2/3'>
                                <h3 className="font-dm-serif-display text-2xl my-4">{product.title}</h3>
                                <div className='flex flex-col gap-6 w-full justify-center'>
                                    <section className='flex flex-row gap-8'>
                                        {product.count > 1 ? (
                                            <>
                                                <p className='font-thin'>Precio unitario: ${precioUniFunc(product.precioConDescuentoAplicado)}</p>
                                                <p className='font-thin'>Precio total: ${precioVariosFunc(product.precioConDescuentoAplicado, product.count)}</p>
                                            </>
                                        ) : (
                                            <p className='font-thin'>Precio total: ${precioUniFunc(product.precioConDescuentoAplicado)}</p>
                                        )}
                                    </section>
                                    <section className='flex flex-row gap-8 mr-4'>
                                        <button className='font-extrabold text-sm cursor-pointer transition-all bg-[#006d77] text-[#bde0fe] h-8 w-8 flex text-center justify-center items-center rounded-lg border-[#006d77] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]' onClick={() => decrementarCantidad(product)}>-</button>
                                        <p className="font-thin">{product.count}</p>
                                        <button className='font-extrabold text-sm cursor-pointer transition-all bg-[#006d77] text-[#bde0fe] h-8 w-8 flex text-center justify-center items-center rounded-lg border-[#006d77] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]' onClick={() => incrementarCantidad(product)}>+</button>
                                        <button className="font-thin text-base cursor-pointer transition-all bg-[#006d77] text-[#bde0fe] h-8 w-20 flex text-center justify-center items-center rounded-lg border-[#006d77] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                                    </section>
                                </div>
                            </div>
                            <img className="h-20 my-10 md:my-0" src={product.image} alt={product.title} />
                        </div>
                    ))

                }
                {carrito.length > 0 ?
                    <>
                        <p className='font-thin'>Precio total: ${precioTotal()}</p>
                        <div className='flex flex-row gap-8 m-8'>
                            <button className='font-thin text-sm md:text-lg cursor-pointer transition-all bg-[#006d77] text-[#bde0fe] h-6 w-24 md:h-10 md:w-40 flex text-center justify-center items-center rounded-lg border-[#006d77] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]' onClick={handleVaciar}>Vaciar carrito</button>
                            <button className='font-thin text-sm md:text-lg cursor-pointer transition-all bg-[#006d77] text-[#bde0fe] h-6 w-24 md:h-10 md:w-40 flex text-center justify-center items-center rounded-lg border-[#006d77] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]' onClick={handleComprar}>Comprar</button>
                        </div>

                    </>
                    :
                    <p className='text-3xl font-dm-serif-display text-center'>El carrito está vacío</p>

                }


            </section>
        </article>
    )
}

export default Carrito
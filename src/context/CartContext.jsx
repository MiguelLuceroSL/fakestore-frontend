import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, count) => {
        const itemAgregado = { ...item, count };

        const estaEnElCarrito = carrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            const nuevoCarrito = carrito.map(producto =>
                producto.id === itemAgregado.id ? { ...producto, count: producto.count + count } : producto
            );
            setCarrito(nuevoCarrito);
        } else {
            const nuevoCarrito = [...carrito, itemAgregado];
            setCarrito(nuevoCarrito);
        }
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acumulador, producto) => acumulador + producto.count, 0);
    }

    const precioTotal = () => {
        let resultado = carrito.reduce((acumulador, producto) => acumulador + producto.count * producto.price, 0);
        resultado = parseFloat(resultado).toFixed(2);
        return resultado;
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={{
            carrito,
            setCarrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}
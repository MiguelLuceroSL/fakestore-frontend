import React from 'react';
// import '../styles/style2.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    // Truncar la descripción a 25 caracteres
    const truncarDescription = product.description.length > 60
        ? `${product.description.substring(0, 60)}...`
        : product.description;

    const truncarTitle = product.title.length > 32
        ? `${product.title.substring(0, 32)}...`
        : product.title;

    return (
        <div className="bg-[#f0e6ef] rounded-xl w-64 shadow-2xl h-auto hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-105">
            <Link to={`/item/${product.id}`}>
                <div className='bg-white rounded-t-xl flex flex-col justify-center items-center h-80 border-b border-[#cdcdcd]'>
                    <img className="w-28" src={product.image} alt={product.title} />
                </div>
                <div className="w-full rounded-xl">
                    <h4 className="font-dm-serif-display text-[#9368b7] text-lg mb-2 text-center px-8" title={product.title}>
                        {truncarTitle}
                    </h4>
                    <p className="font-thin text-md mb-1 ml-2 pr-4 pl-2" title={product.description}>
                        {truncarDescription}
                    </p>
                    <p className='font-thin opacity-60 mb-4 ml-2 pl-2'>Categoria: {product.category}</p>
                    {product.tieneDescuento ? (
                        <div className="ml-4">
                            <div className="flex flex-row gap-1 items-center">
                                <span className='line-through text-xs'> ${product.price}</span>
                                <span className="text-xl font-semibold">${product.precioConDescuentoAplicado} </span>
                                <p className="text-green-500 ml-2 font-semibold text-lg">{product.descuento}% OFF</p>
                            </div>
                            <p className="flex justify-center my-2 font-light">¡Ahorras ${product.descuentoEnDinero}!</p>
                        </div>
                    ) : (
                        <h4 className="text-xl font-semibold ml-4">${product.price}</h4>
                    )}

                </div>
            </Link>
        </div>
    );
}

export default Item;
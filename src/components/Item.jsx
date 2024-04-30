import React from 'react';
import '../styles/style2.css';
import { Link } from 'react-router-dom';
import oferta from '../images/oferta.png';

const Item = ({ product }) => {
    // Truncar la descripción a 30 caracteres
    const truncarDescription = product.description.length > 30
        ? `${product.description.substring(0, 30)}...`
        : product.description;

    const truncarTitle = product.title.length > 40
        ? `${product.title.substring(0, 40)}...`
        : product.title;

    return (
        <div className='producto-box'>
            <Link className="producto" to={`/item/${product.id}`}>
                <div className='productos-card-img'>
                    {product.tieneDescuento ? (
                        <>
                            <img className="productos-img" src={product.image} alt={product.title} />
                            <div className='oferta-img'>
                                <img className="offer-img" src={oferta} alt='oferta' />
                            </div>

                        </>
                    ) : (
                        <img className="productos-img" src={product.image} alt={product.title} />
                    )}
                </div>
                <div className="productos-detalles">
                    <h4 className="productos-title fuente" title={product.title}>
                        {truncarTitle}
                    </h4>
                    <p className="productos-description fuente" title={product.description}>
                        {truncarDescription}
                    </p>
                    <p className='productos-category fuente'>Categoria: {product.category}</p>
                    {product.tieneDescuento ? (
                        <div className='detalles'>
                            <div className="productos-precio">
                                <span className='precio-original fuente'> ${product.price}</span>
                                <div className='precio-off'>
                                    <span className="precio-con-descuento fuente"> $ {product.precioConDescuentoAplicado} </span>
                                    <p className='off fuente'>{product.descuento}%OFF</p>
                                </div>

                            </div>
                            <p className='ahorro fuente'>¡Ahorras ${product.descuentoEnDinero}!</p>
                        </div>
                    ) : (
                        <h4 className="precio-con-descuento fuente">${product.price}</h4>
                    )}

                </div>
            </Link>
        </div>
    );
}

export default Item;
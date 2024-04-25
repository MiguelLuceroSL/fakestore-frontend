import { useContext, useState } from 'react';
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext';
import '../styles/styleID.css'

const ItemDetail = ({ item }) => {
    const { agregarAlCarrito } = useContext(CartContext);

    const [count, setCount] = useState(1);

    const handleRestar = () => {
        count > 1 && setCount(count - 1);
    }

    const handleSumar = () => {
        setCount(count + 1);
    }

    return (
        <div className='container'>
            <div className='producto-detalle'>
                <div className='card-img'>
                    <img className='product-img' src={item.image} alt={item.title} />
                </div>
                <div>
                    <h3 className='titulo'>{item.title}</h3>
                    <p className='precio'>${item.precioConDescuentoAplicado}</p>
                    <p className='descripcion'>{item.description}</p>
                    <p className='categoria'><span className="descripcion-producto">Categoría: </span>{item.category}</p>
                    <div className="container-info">

                        <ItemCount
                            count={count}
                            handleRestar={handleRestar}
                            handleSumar={handleSumar}
                            handleAgregar={() => { agregarAlCarrito(item, count) }}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
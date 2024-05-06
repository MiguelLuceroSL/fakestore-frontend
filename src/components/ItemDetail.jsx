import { useContext, useState } from 'react';
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext';
import '../styles/styleID2.css'

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
        <div className="bg-white m-20 h-96 w-2/3 rounded-xl flex justify-center">
            <div className='flex items-center justify-center'>
                <div className='mr-8'>
                    <img className='w-48' src={item.image} alt={item.title} />
                </div>
                <div className='w-2/3'>
                    <h3 className='font-dm-serif-display text-3xl'>{item.title}</h3>
                    <p className='font-bold text-xl'>${item.precioConDescuentoAplicado}</p>
                    <p className='font-thin'>{item.description}</p>
                    <p className='font-belleza'><span className="descripcion-producto">Categoría: </span>{item.category}</p>
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
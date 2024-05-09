import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/styleID2.css'

const ItemDetail = ({ item }) => {
    const { agregarAlCarrito } = useContext(CartContext);
    const [mostrarInput, setMostrarInput] = useState(false);
    const [count, setCount] = useState(1);

    const handleChange = (event) => {
        const value = event.target.value;
        if (value === 'Otra cantidad') {
            setMostrarInput(true);
        } else {
            setMostrarInput(false);
            setCount(parseInt(value)); // Actualizar el estado del contador con el valor seleccionado
        }
    };

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        if (value > 0) {
            setCount(value);
        } else {
            setCount(1);// Actualizar el estado del contador con el valor ingresado
        }
    };

    return (
        <div className="bg-white w-full md:w-2/3 mx-10 md:mx-0 rounded-xl flex flex-col md:flex-row justify-center items-center sm:h-custom40 md:h-custom34 mt-20">
            <div className='mr-8'>
                <img className='w-28 mb-6  sm:w-36 md:mb-6 md:w-48 md:mr-4 ml-0 md:ml-4' src={item.image} alt={item.title} />
            </div>
            <div className='w-2/3 mr-0 md:mr-6'>
                <h3 className='font-dm-serif-display text-lg md:text-3xl mb-8'>{item.title}</h3>
                <p className='font-bold text-xl'>${item.precioConDescuentoAplicado}</p>
                <p className='font-thin my-4'>{item.description}</p>
                <p className='font-belleza'><span className="descripcion-producto">Categoría: </span>{item.category}</p>
                <div className="my-4">
                    <select
                        onChange={handleChange}
                        className="block appearance-none w-40 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option className='font-thin' value="1">1 unidad</option>
                        <option className='font-thin' value="2">2 unidades</option>
                        <option className='font-thin' value="3">3 unidades</option>
                        <option className='font-thin' value="4">4 unidades</option>
                        <option className='font-thin' value="Otra cantidad">Otra cantidad</option>
                    </select>
                    {mostrarInput && (
                        <input
                            type="number"
                            placeholder="Ingrese la cantidad"
                            inputMode="numeric" // Esto permitirá solo la entrada de caracteres numéricos
                            className="block w-40 my-4 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 mt-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleInputChange}
                        />
                    )}
                    <p className='my-4 font-thin'>Cantidad: {count}</p>
                    <button className="font-dm-serif-display text-sm cursor-pointer transition-all bg-[#006d77] text-[#bde0fe] px-2 py-1 h-12 flex items-center rounded-lg border-[#006d77] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => agregarAlCarrito(item, count)}>
                        Añadir al carro
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
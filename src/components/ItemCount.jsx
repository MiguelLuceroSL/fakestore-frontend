import '../styles/styleID2.css';


const ItemCount = ({ count, handleRestar, handleSumar, handleAgregar }) => {

    return (
        <div>
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <p>{count}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className="agregar-al-carro" onClick={handleAgregar}>Añadir al carro</button>
        </div>
    )
}

export default ItemCount
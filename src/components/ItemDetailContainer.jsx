import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import CargandoProducto from "./CargandoProducto";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://bknshop-back.onrender.com/productos/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error al obtener los detalles del producto');
                }
                return res.json();
            })
            .then(data => {
                setItem(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <CargandoProducto />
    }

    return (
        <div className="min-h-screen flex justify-center mt-24">
            {item && <ItemDetail item={item} />}
        </div>
    );
}

export default ItemDetailContainer;
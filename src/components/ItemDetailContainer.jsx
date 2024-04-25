import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import CargandoProducto from "./CargandoProducto";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestore-backend.vercel.app/productos/${id}`)
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
        <>
            {item && <ItemDetail item={item} />}
        </>
    );
}

export default ItemDetailContainer;
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CargandoProductos from "./CargandoProductos";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("Products");
    const [loading, setLoading] = useState(true);
    const { category } = useParams();
    let titulo;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = category
                    ? `https://fakestore-backend.vercel.app/productos?category=${category}`
                    : 'https://fakestore-backend.vercel.app/productos';

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Error al obtener los productos');
                }

                const data = await JSON.parse(response);
                setProducts(data);
                setTitle(category ? category : "Products");
                setLoading(false);
            } catch (error) {
                console.error('Error en la solicitud:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    if (loading) {
        return <CargandoProductos />
    }

    if (title === "Products") {
        titulo = "Productos"
    } else if (title === "women's clothing") {
        titulo = "Ropa de mujer"
    } else if (title === "men's clothing") {
        titulo = "Ropa de hombre"
    } else if (title === "jewelery") {
        titulo = "Joyería"
    } else if (title === "electronics") {
        titulo = "Electronica"
    }
    return (
        <ItemList products={products} title={titulo} />
    );
}

export default ItemListContainer;
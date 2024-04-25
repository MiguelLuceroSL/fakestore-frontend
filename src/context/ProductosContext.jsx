import { createContext, useState } from "react";

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
    const [womensClothing, setWomensClothing] = useState([]);
    const [mensClothing, setMensClothing] = useState([]);
    const [jewelery, setJewelery] = useState([]);
    const [electronics, setElectronics] = useState([]);



    return (<ProductosContext.Provider value={{

    }}>
        {children}
    </ProductosContext.Provider>)
}
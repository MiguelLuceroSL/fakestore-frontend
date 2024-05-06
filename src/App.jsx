import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
// import Navbar from './components/Navbar';
/*import './styles/styleApp2.css'*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import './App.css';
import Navbar2 from './components/Navbar2';
//color de canva azul mas oscuro #6CA6DD

function App() {


  return (
    <CartProvider>
      <BrowserRouter >
        <div className="m-0 p-0 bg-[#fcefef] w-full">
          <Navbar2 />
          {/* <Navbar /> */}
          <Routes >
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
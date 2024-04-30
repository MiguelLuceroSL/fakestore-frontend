import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './styles/styleApp2.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
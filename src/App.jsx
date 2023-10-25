import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Banner } from './components/Banner';
import ItemDetailContainer from './components/ItemDetailContainer';
import Catalogo from './components/Catalogo';
import Informacion from './components/Informacion';
import Promos from './components/Promos';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import CheckOut from './components/CheckOut';



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Banner/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/Catalogo" element={<Catalogo/>}/>
          <Route path="/Informacion" element={<Informacion/>}/>
          <Route path="/Promos" element={<Promos/>}/>
          <Route path="/productos/:Descripcion" element={<ItemListContainer/>}/>
          <Route path='/Carrito' element={<Carrito/>}/>
          <Route path='/CheckOut' element={<CheckOut/>}/>
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

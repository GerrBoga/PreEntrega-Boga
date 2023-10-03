import { Inicio } from './components/inicio';
import catalogo from './components/catalogo';
import informacion from './components/informacion';
import promos from './components/promos';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Banner } from './components/banner';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Banner/>
    <Routes>
      <Route path='/' element={ItemListContainer}/>
      <Route path='/item/:id' element={ItemDetailContainer}/>
      <Route path='/catalogo' element={ catalogo }/>
      <Route path='/informacion' element={informacion}/>
      <Route path='/promos' element={promos}/>
    </Routes>

    <ItemListContainer/>
    </BrowserRouter>
  );
}

export default App;

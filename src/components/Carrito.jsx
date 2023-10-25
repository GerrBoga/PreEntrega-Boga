import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className='container'>
        <h1 className='main-title'>Carrito de Compras</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <h3> {prod.Modelo} </h3>
                    <p>Precio unitario: ${prod.Precio} </p>
                    <p>Cant: {prod.cantidad} </p>
                    <p>Precio Total: ${prod.Precio * prod.cantidad} </p>
                    <hr/>
                </div>
                
            ))
            
        }
        <h2>Precio Total: ${precioTotal()} </h2>
        <button onClick={handleVaciar}>Vaciar</button>
        <Link to="/CheckOut"> Finalizar Compra. </Link>
    </div>
  )
}

export default Carrito
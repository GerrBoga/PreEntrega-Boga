import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Cartwidget = () => {

  const { cantidadEnCarrito }= useContext(CartContext);

  return (
    <i class="bi bi-car-front-fill">
      <span className='numerito'> {cantidadEnCarrito()} </span>
    </i>
  )
  
}

export default Cartwidget;
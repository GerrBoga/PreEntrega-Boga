import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ( {children} ) => {
    
  const [carrito, setCarrito]= useState([]);

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.Precio * prod.cantidad, 0);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  return (
        <CartContext.Provider value={{carrito, setCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}} >
            {children}
        </CartContext.Provider>
    )
}
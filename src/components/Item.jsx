import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.Modelo} />
        <div>
            <h4> {producto.Modelo} </h4>
            <p>Precio: ${producto.Precio}</p>
            <p>Descripcion: {producto.Descripcion} </p>
            <p>{producto.Año}</p>
            <Link className='verMas' to={`/item/${producto.id}`}>Ver Mas</Link>
        </div>
    </div>
  )
}

export default Item
import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div>
        <div>
            <img src={item.Imagen} alt={item.Modelo}/>
            <div>
                <h3 className="titulo"> {item.Descripcion} </h3>
                <p> {item.Año} </p>
                <p> {item.Precio} </p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
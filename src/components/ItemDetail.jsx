import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {

  return (
    <div>
      <div className='producto-detalle'>
        <img className='imagen' src={item.Imagen} alt={item.Modelo}/>
        <div>
          <h3 className="titulo"> {item.Descripcion} </h3>
          <p> Año: {item.Año} </p>
          <p> Precio: ${item.Precio} </p>
          <ItemCount item={item} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
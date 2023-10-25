import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase/config';


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos]= useState([]);

  const [titulo] = useState("Productos")

  const Descripcion= useParams().Descripcion;

  console.log(Descripcion);

  useEffect(()=>{
    const productosRef = collection(db, "productos");
      const q = Descripcion ? query(productosRef, where("Descripcion", "==", Descripcion)) : productosRef;

      getDocs(q)
        .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
  }, [Descripcion])


  return (
    <ItemList productos={productos} titulo={titulo} />
  )
}

export default ItemListContainer
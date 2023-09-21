import React from 'react'
import { Banner } from '../NavBar/banner'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <Banner/>
        <h2> {greeting} </h2>
    </div>
  )
}

export default ItemListContainer
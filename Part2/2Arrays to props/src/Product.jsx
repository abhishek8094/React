import React from 'react'
import "./Product.css"

function Product ({title, price, features}) {

  return (
    <div className='Product'>
        <h3>{title}</h3>
        <h5>Price: {price}</h5>
        <p>{features.a}</p>
    </div>
  )
}

export default Product;

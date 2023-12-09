import React from 'react'
import Product from "./Product"

function ProductTab () {
  return (
    <>
   <Product title="phone" price={30000} />
   <Product title="mobile" price={40000}/>
   <Product title="pen" />
    </>
  )
}

export default ProductTab;

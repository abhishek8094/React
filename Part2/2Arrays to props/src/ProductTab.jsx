import React from 'react'
import Product from "./Product"

function ProductTab () {
  // let options = ["hi-tech", "durable", "fast"];
  // let options2 = {a:"hi-tech", b:"durable", c:"fast"};
  return ( 
    <>
   <Product title="phone" price={30000} features={{a:"hi-tech"}}   />
    {/* <Product title="mobile" price={40000}/>
    <Product title="pen" price={1}/> */}
    </>
  )
}

export default ProductTab;

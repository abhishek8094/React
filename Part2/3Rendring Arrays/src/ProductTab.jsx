import React from 'react'
import Product from "./Product"

function ProductTab () {
  // let options = [<li>"hi-tech"</li>, <li>"durable"</li>,<li> "fast"</li> ];
  let options = ["hi-tech", "durable","fast"];
  return ( 
    <>
   <Product title="phone" price={30000} features={options}   />
    {/* <Product title="mobile" price={40000}/>
    <Product title="pen" price={1}/> */}
    </>
  )
}

export default ProductTab;

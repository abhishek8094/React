import { useState } from "react"

export default function Counter(){
   let [count, setCount] = useState(0); //Initialization
   console.log('Component is rendered');
   console.log(`count = ${count}`);

   let incCount =() =>{
    setCount(count + 2);
    console.log(`inside incount, count = ${count}`);
    // console.log(count);
   }

    return(
        <div>
           <h3>Count = {count}</h3> 
           <button onClick={incCount}>Increase Count</button>
        </div>
    )
}
function printHello(){
    console.log("Hello !");
}

function printBye(){
    console.log("Bye!");
}

export default function Button (){
    return(
        <div> 
            <button onClick={printHello}>Click Me!</button>
            <p onClick={printBye}>This para is for event demo</p>
        </div>
       
    )
}
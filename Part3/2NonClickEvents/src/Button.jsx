function handleClick() {
  console.log("Hello !");
}

function handleMouseOver() {
  console.log("Bye!");
}

function handleDblClick(){
    console.log(" you handle double");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        itaque quidem odit, nesciunt fugit qui ullam perspiciatis cupiditate
        vitae eos sed sequi voluptas. Eius quos odit commodi. Quo, doloremque
        numquam!
      </p>
      <button onDoubleClick={handleDblClick}>double click me! </button>
    </div>
  );
}

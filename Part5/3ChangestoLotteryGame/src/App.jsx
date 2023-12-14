import "./App.css";
import Ticket from "./Ticket";

function App() {
  return (
    <>
      <Ticket ticket={[0,1,2]}/>
      <Ticket ticket={[0,1,2,6,7,8]}/>
    </>
  );
}

export default App;

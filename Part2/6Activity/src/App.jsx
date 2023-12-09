import ProductTab from './ProductTab';
import './App.css'
import MsgBox from './MsgBox';

function App() {
  return (
  <>
    <MsgBox userName={"abhishek"} textColor={"yellow"}/>
    <MsgBox userName={"Shiva"} textColor={"blue"}/>
    <MsgBox userName={"Krishna"} textColor={"green"}/>
    <ProductTab/>
  </>
  );
}

export default App;

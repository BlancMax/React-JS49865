import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nav_Bar from "../src/components/Nabvar/Navbar";

function App() {

  const greeting ="Bienvenidos a E-Commerce..."

  return (
    <>
      <Nav_Bar/>
      <ItemListContainer mensaje={greeting}/>
    </>
  )
}

export default App;

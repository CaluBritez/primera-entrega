import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/Cabecera/NavBar.js";
import CajaProductos from "./components/Cuerpo/ItemListContainer.js";

function App() {
  return (
    <div className="container">
      <NavBar />
      <CajaProductos />
    </div>
  );
}

export default App;

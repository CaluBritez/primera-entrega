import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Botonera from "./components/NavBar.js";
import CajaProductos from "./components/ItemListContainer.js";

function App() {
  return (
    <div className="container">
      <Botonera />
      <CajaProductos />
    </div>
  );
}

export default App;

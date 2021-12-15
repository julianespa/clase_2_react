import './App.css';
import NavBar from './components/NavBar';
import './Estilos.css';
import ItemListContainer from './components/container/ItemListContainer';
import { ItemDetailContainer } from './components/container/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        < NavBar marca="Espasandin" s1="Inicio" s2="Productos" s3="Contacto"/>
      </header>
      < ItemListContainer saludo="Soy el contenedor principal" />
      < ItemDetailContainer />
    </div>
  );
}

export default App;

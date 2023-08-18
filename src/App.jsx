
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import viteLogo from './assets/logo.png'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div className="card my-card bg-black text-white">
        <img src={viteLogo} className="logo" alt="logo" />
        <div className="card-body">
          <h1 className="card-title">La unión del cómic y la animación</h1>
        </div>
      </div>
    </div>
  );
}

export default App;


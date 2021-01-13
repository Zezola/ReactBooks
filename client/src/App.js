
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CriarLivro from './components/CriarLivro';
import Livros from './components/Livros';
import EditarLivro from './components/EditarLivro';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Route path="/" exact component={Livros}></Route>
      <Route path="/livros/create" component={CriarLivro}></Route>
      <Route path={`/livros/editar/:id`} component={EditarLivro}></Route>
      </Router>
    </>
  );
}

export default App;

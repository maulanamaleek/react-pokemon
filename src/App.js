import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="detail/:id" element={<PokemonDetail />} />
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';
import Navbar from './components/Navbar/Navbar';
import Collection from './pages/Collection/Collection';
import { PokemonProvider } from './utils/PokemonContext';

const App = () => (
  <div className="App">
    <PokemonProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="detail/:id" element={<PokemonDetail />} />
          <Route path="collection" element={<Collection />} />
          <Route path="/" element={<PokemonList />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  </div>
);

export default App;

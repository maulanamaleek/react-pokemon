import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';
import Navbar from './components/Navbar/Navbar';
import Collection from './pages/Collection/Collection';
import { PokemonProvider } from './contexts/PokemonContext';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
  });
  return (
    <div className="App">
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </div>
  );
};

export default App;

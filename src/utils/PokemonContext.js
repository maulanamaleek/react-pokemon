import propTypes from 'prop-types';
import React, { useMemo, useReducer } from 'react';

const PokemonContext = React.createContext();

const initialState = {
  pokemonList: [
    { name: 'Pikachu', owned: 2 },
    { name: 'Bulbasaur', owned: 0 },
    { name: 'Metapod', owned: 11 },
    { name: 'Charizard', owned: 1 },
    { name: 'Lucario', owned: 2 },
  ],
  collection: [],
};

const PokemonReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return state;
    case 'CATCH':
      return {
        ...state,
        collection: [...state.collection, action.payload],
      };
    default:
      return state;
  }
};

const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  const value = useMemo(() => ({
    state, dispatch,
  }));

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

const usePokemonContext = () => {
  const context = React.useContext(PokemonContext);

  if (context === undefined) {
    throw new Error('usePokemonContext must be used inside PokemonProvider');
  }

  return context;
};

export { PokemonProvider, usePokemonContext };

import propTypes from 'prop-types';
import React, { useMemo, useReducer } from 'react';
import { getLocalCollection, setLocalCollection } from '../utils/storage-helpers';

const PokemonContext = React.createContext();

const initialState = {
  pokemonList: [
    { name: 'Pikachu', owned: 0, id: 1 },
    { name: 'Bulbasaur', owned: 0, id: 2 },
    { name: 'Metapod', owned: 0, id: 3 },
    { name: 'Charizard', owned: 0, id: 4 },
    { name: 'Lucario', owned: 0, id: 5 },
  ],
  collection: [],
};

const PokemonReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POKEMON': {
      const localCollection = getLocalCollection();

      const newPokemonList = state.pokemonList.map((pokemon) => {
        const filtered = localCollection?.filter((local) => Number(local.id) === pokemon.id);
        const newPokemon = {
          ...pokemon,
          owned: (filtered || []).length,
        };

        console.log(pokemon, filtered);

        return newPokemon;
      });
      return {
        ...state,
        pokemonList: newPokemonList,
      };
    }
    case 'CATCH': {
      const newCollection = [
        ...state.collection,
        action.payload,
      ];
      setLocalCollection(newCollection);
      return {
        ...state,
        collection: newCollection,
      };
    }
    case 'GET_COLLECTION': {
      const localCollection = getLocalCollection();

      return {
        ...state,
        collection: localCollection || state.collection,
      };
    }
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

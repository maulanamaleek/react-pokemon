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
  selectedPokemon: {},
  loading: true,
};

const PokemonReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POKEMON': {
      const localCollection = getLocalCollection();
      const data = action.payload;

      const newPokemonList = data?.map((pokemon) => {
        const filtered = localCollection?.filter((local) => local.id === pokemon.id);
        const newPokemon = pokemon;

        newPokemon.owned = (filtered || []).length;
        return newPokemon;
      });

      return {
        ...state,
        pokemonList: newPokemonList,
      };
    }
    case 'POKEMON_DETAIL': {
      const newSelected = action?.payload;
      if (!newSelected) return state;

      const formattedPokemon = {
        name: newSelected[0]?.name,
        id: newSelected[0]?.id,
        moves: newSelected[0]?.pokemon_v2_pokemonmoves,
        types: newSelected[0]?.pokemon_v2_pokemontypes,
        photo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${newSelected[0]?.id}.png`,
      };

      return {
        ...state,
        selectedPokemon: formattedPokemon,
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
    case 'LOADING': {
      const isLoading = action.payload;

      return {
        ...state,
        loading: isLoading,
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

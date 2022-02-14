import styled from '@emotion/styled';
import React from 'react';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import { usePokemonContext } from '../../utils/PokemonContext';

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Collection = () => {
  const { state } = usePokemonContext();

  return (
    <CardList>
      {state.collection.map((collection) => (
        <CollectionCard key={collection.name} pokemon={collection} />
      ))}
    </CardList>
  );
};

export default Collection;

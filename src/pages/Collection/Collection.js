import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import { usePokemonContext } from '../../contexts/PokemonContext';

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Collection = () => {
  const { state, dispatch } = usePokemonContext();

  useEffect(() => {
    dispatch({
      type: 'GET_COLLECTION',
    });
  }, []);

  return (
    <>
      <CardList>
        {state.collection.map((collection) => (
          <CollectionCard key={collection.id} pokemon={collection} />
        ))}

      </CardList>
      {!state.collection.length && <h2 style={{ marginTop: 200 }}>Catch your pokemon...</h2>}
    </>
  );
};

export default Collection;

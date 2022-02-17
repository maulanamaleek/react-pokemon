import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const CollectionCard = ({ pokemon }) => (
  <Card>
    <img height={150} src={pokemon.photo} alt={pokemon.nickname} />
    <h3 style={{ textTransform: 'capitalize' }}>{pokemon.nickname}</h3>
    <p>
      <b>Type:</b>
      {pokemon.types.map((type) => <span key={uuidv4()}>{type.pokemon_v2_type.name}</span>)}
    </p>
  </Card>
);

CollectionCard.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string,
    nickname: propTypes.string,
    types: propTypes.arrayOf(propTypes.shape({
      pokemon_v2_type: propTypes.shape({
        name: propTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
    photo: propTypes.string,
  }).isRequired,
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export default CollectionCard;

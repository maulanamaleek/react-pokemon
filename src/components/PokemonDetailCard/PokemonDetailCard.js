import propTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

const PokemonDetailCard = ({
  name, types, photo, moves, onCatch,
}) => (
  <PokeCardDetail>
    <h2 style={{ textTransform: 'capitalize' }}>{name}</h2>
    <h3>Types</h3>
    <PokeTag background="#34a0a4" display="flex">
      {types?.map((type) => <span key={uuidv4()}>{type.pokemon_v2_type.name}</span>)}
    </PokeTag>
    <img height={200} src={photo} alt={name} />
    <h3>Moves</h3>
    <PokeTag background="#b5e48c" display="grid">
      {moves?.map((move) => <span key={uuidv4()}>{move.pokemon_v2_move.name}</span>)}
    </PokeTag>
    <ButtonCatch onClick={() => onCatch(true)}>Catch</ButtonCatch>
  </PokeCardDetail>
);

PokemonDetailCard.propTypes = {
  name: propTypes.string.isRequired,
  types: propTypes.arrayOf(propTypes.shape({
    pokemon_v2_type: propTypes.shape({
      name: propTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  moves: propTypes.arrayOf(propTypes.shape({
    pokemon_v2_move: propTypes.shape({
      name: propTypes.string.isRequired,
    }),
  })).isRequired,
  photo: propTypes.string.isRequired,
  onCatch: propTypes.func.isRequired,
};

const PokeCardDetail = styled.div`
  padding: 12px 10px;
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokeTag = styled.div`
  display: ${(props) => props.display};
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 20px 40px;

  span {
    display: block;
    padding: 5px 7px;
    border-radius: 7px;
    background: ${(props) => props.background};
    color: white;
    margin: auto;
    width: 100%;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

const ButtonCatch = styled.button`
  width: 100%;
  background-color: #76c893;
  color: white;
  font-weight: 600;
  padding: 10px;
  border: 0;
  outline: 0;
  border-radius: 12px;
  margin-top: 20px;
`;

export default PokemonDetailCard;

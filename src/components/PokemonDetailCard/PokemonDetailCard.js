import propTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

const PokeCardDetail = styled.div`
  padding: 12px 10px;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokeMove = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  span {
    display: block;
    padding: 5px 7px;
    border-radius: 7px;
    background: dodgerblue;
    color: white;
    margin: auto;
    width: 100%;
  }
`;

const ButtonCatch = styled.button`
  width: 100%;
  background-color: purple;
  color: white;
  font-weight: 600;
  padding: 10px;
  border: 0;
  outline: 0;
  border-radius: 12px;
  margin-top: 20px;
`;

const PokemonDetailCard = ({
  name, types, photo, moves, onCatch,
}) => (
  <PokeCardDetail>
    <h2>{name.toUpperCase()}</h2>
    {types?.map((type) => <span key={uuidv4()}>{type.pokemon_v2_type.name}</span>)}
    <img src={photo} alt={name} />
    <h3>Moves</h3>
    <PokeMove>
      {moves?.map((move) => <span key={uuidv4()}>{move.pokemon_v2_move.name}</span>)}
    </PokeMove>
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

export default PokemonDetailCard;

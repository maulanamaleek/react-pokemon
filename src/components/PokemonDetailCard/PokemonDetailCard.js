import propTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const PokeCardDetail = styled.div`
  padding: 12px 10px;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);
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
`;

const PokemonDetailCard = ({
  name, type, photo, description, onCatch,
}) => (
  <PokeCardDetail>
    <h2>{name}</h2>
    <p>{type}</p>
    <img src={photo} alt={name} />
    <p>{description}</p>
    <ButtonCatch onClick={() => onCatch(true)}>Catch</ButtonCatch>
  </PokeCardDetail>
);

PokemonDetailCard.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  photo: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  onCatch: propTypes.func.isRequired,
};

export default PokemonDetailCard;

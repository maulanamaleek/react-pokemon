import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const PokeCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  height: 70px;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  background: white;
  margin-bottom: 10px;
  transition: all ease .3s;

  &:hover {
      background: purple;
      color: white;
      transform: translateY(-2px)
  }
`;

const PokemonCard = ({ name, owned }) => (
  <PokeCard>
    <p>{name}</p>
    <p>
      Owned:
      {owned}
    </p>
  </PokeCard>
);

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  owned: PropTypes.number.isRequired,
};

export default PokemonCard;

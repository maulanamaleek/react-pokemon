import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ name, owned, id }) => {
  const navigate = useNavigate();

  const navigateToDetail = () => navigate(`/detail/${id}`);
  return (
    <PokeCard onClick={navigateToDetail}>
      <p style={{ textTransform: 'capitalize' }}>{name}</p>
      <p>
        Owned:
        {owned}
      </p>
    </PokeCard>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  owned: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

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
      background: #b5e48c;
      color: white;
      transform: translateY(-2px)
  }
`;

export default PokemonCard;

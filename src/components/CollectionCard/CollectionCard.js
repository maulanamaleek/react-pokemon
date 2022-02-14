import styled from '@emotion/styled';
import propTypes from 'prop-types';
import React from 'react';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

const CollectionCard = ({ pokemon }) => (
  <Card>
    <h1>{pokemon.nickname}</h1>
    <span>{pokemon.type}</span>
  </Card>
);

CollectionCard.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string,
    nickname: propTypes.string,
    type: propTypes.string,
    photo: propTypes.string,
  }).isRequired,
};

export default CollectionCard;

import styled from '@emotion/styled';
import propTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePokemonContext } from '../../utils/PokemonContext';

const Button = styled.button`
  width: 100%;
  background-color: purple;
  color: white;
  padding: 12px;
  font-weight: 600;
  border: 0;
  outline: 0;
  border-radius: 12px;
`;

const TextField = styled.input`
  outline: 0;
  border-radius: 12px;
  border: 1px solid purple;
  padding: 12px 10px;
  margin-bottom: 10px;
`;

const CatchPokemon = ({ photo }) => {
  const { dispatch } = usePokemonContext();
  const [catching, setCatching] = React.useState(true);
  const [catched, setCatched] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      setCatching(false);
      if (Math.random() > 0.5) {
        setCatched(true);
        dispatch({
          type: 'CATCH',
          payload: {
            name: 'My Pokemon 1',
            nickname: 'Custom Name',
            type: 'Fire',
          },
        });
      } else {
        setCatched(false);
      }
    }, 2000);
  }, []);

  const navigateToList = () => navigate('/');

  return (
    <div>
      {catching && <h2>Catching...</h2>}

      {(catched && !catching) && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>You got a Pokemon</h2>
          <img src={photo} alt="Your Pokemon" />
          <TextField placeholder="Set Nickname" />
          <Button type="button">Save</Button>
        </div>
      )}

      {(!catched && !catching) && (
        <>
          <h1>Failed to Catch Pokemon</h1>
          <Button onClick={navigateToList}>Search Another Pokemon</Button>
        </>
      )}

    </div>
  );
};

CatchPokemon.propTypes = {
  photo: propTypes.string.isRequired,
};

export default CatchPokemon;

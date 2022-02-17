import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { usePokemonContext } from '../../contexts/PokemonContext';

const CatchPokemon = ({
  photo, id, name, types,
}) => {
  const { dispatch } = usePokemonContext();
  const [catching, setCatching] = useState(true);
  const [catched, setCatched] = useState(false);
  const [warn, setWarn] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setCatching(false);
      if (Math.random() > 0.5) {
        setCatched(true);
      } else {
        setCatched(false);
      }
    }, 3000);
  }, []);

  const navigateToList = () => navigate('/');

  const savePokemon = () => {
    if (nickname.length > 10) return;
    dispatch({
      type: 'CATCH',
      payload: {
        name,
        nickname: nickname || name,
        types,
        id,
        photo,
      },
    });
    setNickname('');
    navigate('/collection');
  };

  const onNicknameChange = (e) => {
    if (nickname.length >= 10) {
      setWarn('Max nickname is 10 characters');
      setNickname(e.target.value);
    } else {
      setNickname(e.target.value);
      setWarn('');
    }
  };

  return (
    <div>
      {catching && <PokeBall style={{ maxWidth: 400 }} src="/assets/catch.gif" alt="Catching..." />}

      {(catched && !catching) && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 400,
          margin: 'auto',
        }}
        >
          <h2>You got a Pokemon</h2>
          <img height={200} src={photo} alt="Your Pokemon" />
          <TextField max={10} placeholder="Set Nickname" value={nickname} onChange={onNicknameChange} />
          <p style={{ color: 'palevioletred' }}>{warn}</p>
          <Button disabled={nickname.length > 10} onClick={savePokemon}>Save</Button>
        </div>
      )}

      {(!catched && !catching) && (
        <>
          <h2 style={{ marginTop: 200 }}>Failed to Catch Pokemon</h2>
          <Button onClick={navigateToList}>Search Another Pokemon</Button>
        </>
      )}

    </div>
  );
};

CatchPokemon.propTypes = {
  photo: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  types: propTypes.arrayOf(propTypes.shape({
    pokemon_v2_type: propTypes.shape({
      name: propTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

const Button = styled.button`
  width: 100%;
  background-color: #168aad;
  color: white;
  padding: 12px;
  font-weight: 600;
  border: 0;
  outline: 0;
  border-radius: 12px;

  &:disabled {
    background-color: grey;
  }
`;

const TextField = styled.input`
  outline: 0;
  border-radius: 12px;
  border: 1px solid #168aad;
  padding: 12px 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const PokeBall = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
  margin: 100px auto;
`;

export default CatchPokemon;

import { gql } from 'apollo-boost';

const GET_POKEMON_LIST = gql`
  query pokemon_v2_pokemon (limit: 15, offset: 0) {
    name
    id
  }
`;

const GET_POKEMON_DETAIL = gql`
  query pokemon_v2_pokemon()
`;
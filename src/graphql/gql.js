import { gql } from 'apollo-boost';

const GET_POKEMON_LIST = gql`
query pokemons($limit: Int!, $offset: Int!) {
  pokemon_v2_pokemonspecies(limit: $limit, offset: $offset) {
    id
    name
  }
}
`;

const GET_POKEMON = gql`
query pokemon($id: Int!) {
  pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
    name
    id
    pokemon_v2_pokemonmoves(limit: 4) {
      pokemon_v2_move {
        name
      }
    }
    pokemon_v2_pokemontypes(limit: 3) {
      pokemon_v2_type {
        name
      }
    }
  }
}
`;

export { GET_POKEMON_LIST, GET_POKEMON };

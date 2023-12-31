import { pokeApi } from '@/api';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'
import PokemonDetail from '../pokemon/[id]';
import { getPokemonInfo } from '@/utils';

interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage : NextPage<Props> = ({pokemon}) => {
  return (
    <PokemonDetail pokemon={pokemon} />
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
    const pokemonList = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonsNames = pokemonList.data.results.map(pokemon => ({
        params: {
            name: pokemon.name
        }
    }));
    return {
      paths: [...pokemonsNames],
      fallback: 'blocking'
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as {name: string};
    const pokemon = await getPokemonInfo(name.toLowerCase());
    if(!pokemon){
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
    return { props: { pokemon }, revalidate: 46800 };
  };

export default PokemonByNamePage;
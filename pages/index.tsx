import { pokeApi } from "../api";
import { MainLayout } from "@/components/layouts";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { GetStaticProps } from "next";
import { FC } from "react";
import { POKEIMAGE } from '../constants/index';
import { PokemonList } from "../components/pokemon/";


interface Props {
  pokemons: SmallPokemon[]
}

const HomePage : FC<Props> = ({pokemons}) => {
  
  return (
    <>
      <MainLayout title="Listado de pokemons">
        <PokemonList pokemons={pokemons} />
      </MainLayout>
    </>
  )
}


export const getStaticProps: GetStaticProps<{
  pokemons: SmallPokemon[]
}> = async () => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons : SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    image: POKEIMAGE + (i + 1) + '.svg',
  }))

  return { props: { pokemons } }
}

export default HomePage;
import { MainLayout } from "../../components/layouts/layout";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Pokemon } from "@/interfaces";
import { pokeApi } from "@/api";
import { Grid } from "@nextui-org/react";
import { PokemonCardImage, PokemonDetailSprites } from "@/components/ui";
import { getPokemonInfo } from "@/utils";


interface Props {
  pokemon: Pokemon;
}

const PokemonDetail: NextPage<Props> = ({ pokemon }) => {

  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <PokemonCardImage pokemon={pokemon} key={pokemon.name} />
        <PokemonDetailSprites pokemon={pokemon} key={pokemon.name} />
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonsId = [];
  for (let i = 1; i <= 151; i++) {
    pokemonsId.push({
      params: {
        id: i.toString(),
      },
    });
  }

  return {
    paths: [...pokemonsId],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonInfo(id);

  return { props: { pokemon } };
};

export default PokemonDetail;

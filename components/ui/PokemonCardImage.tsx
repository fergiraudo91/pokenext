import { Pokemon } from "@/interfaces";
import { Card, Grid } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  pokemon: Pokemon;
}

export const PokemonCardImage: FC<Props> = ({ pokemon }) => {
  return (
    <Grid xs={12} sm={4}>
      <Card hoverable css={{ padding: "30px" }}>
        <Card.Body>
          <Card.Image
            src={
              pokemon.sprites.other?.dream_world.front_default ||
              "/no-image.png"
            }
            alt={pokemon.name}
            width="100%"
            height={200}
          />
        </Card.Body>
      </Card>
    </Grid>
  );
};

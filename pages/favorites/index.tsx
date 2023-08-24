import { MainLayout } from "@/components/layouts";
import { FavoritesPokemons, NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { useState, useEffect } from "react";

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons);
  }, []);

  

  return (
    <MainLayout title="Favoritos">
      {favoritesPokemons.length > 0 ? <FavoritesPokemons favoritesPokemons={favoritesPokemons} /> : <NoFavorites />}
    </MainLayout>
  );
};

export default FavoritesPage;

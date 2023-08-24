import Head from "next/head"
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin);

export const MainLayout: FC<PropsWithChildren<Props>> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="author" content="Fernando Giraudo" />
        <meta name="description" content={`Información sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre  ${title}`} />
        <meta property="og:description" content="Esta es la pagina sobre los pokemons mas bonita del mundo." />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

       <Navbar />

      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>
    </>
  )
}

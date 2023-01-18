import { FC } from 'react';
import Head from 'next/head';
import { title } from 'process';
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, string }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="devxyzr" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon: ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};

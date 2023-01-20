import { Spacer, Text, useTheme, Link } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

export const Navbar = () => {
  const { theme } = useTheme();

  //   console.log(theme);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: '#16181A',
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la aplicacion"
        width={70}
        height={70}
      />

      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            {' '}
            POKÉMON{' '}
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: '10px' }}>
          <Text color="white" h2>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};

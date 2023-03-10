import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Provider -> Proveedor de informacion

    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

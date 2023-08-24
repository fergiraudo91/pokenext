import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { SSRProvider } from 'react-aria';
import { darkTheme } from '../themes';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SSRProvider>
  )
}

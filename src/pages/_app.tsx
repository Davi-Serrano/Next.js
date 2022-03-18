import {Header} from "../Components/Header";

import type { AppProps } from 'next/app'
import GlobalStyle  from "../styles/globalStyled"

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
     <>
     <Header />
     <Component {...pageProps} />
     <GlobalStyle />
     </>
  )

  }
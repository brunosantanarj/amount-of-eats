import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
        />
        <script type="text/javascript" src="/js/hotjar.js" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App

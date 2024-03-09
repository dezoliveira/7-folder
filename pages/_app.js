import '../styles.css'
import React from 'react'
import Head from 'next/head'
 
export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
            <title>7 Folders</title>
        </Head>
        <Component {...pageProps} />
    </>
  )
}
import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({
                      pageTitle="Create Next App", // This will be added to the browser tab title
                      pageDescription="Generated by create next app", // This will be described about the page in the SEO to crawler
                      pageIcon="/favicon.ico", // This will be added to the browser tab icon called "favicon" it shuld be type of .ico file
                      children // This is the contnet comes from inside of the Layout component wrapper
                    }) {

  return (
    <div>
      {/* For SEO */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href={pageIcon} />
      </Head>
      
      {/* Header or Navbar */}
      <header>
        <Header/>
      </header>

      {/* Main Content Here */}
      <main>
        { children }
      </main>

      {/* Footer or Bottom Navigation bar */}
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

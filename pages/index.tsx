import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Headers from '../components/Headers'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headers />
      
    </div>
  )
}

export default Home

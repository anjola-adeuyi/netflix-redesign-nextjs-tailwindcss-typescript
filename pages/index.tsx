import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Headers from '../components/Headers'

const Home: NextPage = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Let's build Netflix

      <Headers />

      <main>
        {/* Banner */}
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      
    </div>
  )
}

export default Home

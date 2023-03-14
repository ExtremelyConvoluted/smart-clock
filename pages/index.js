import Head from 'next/head'

import Clock from '@components/Clock'
import Footer from '@components/Footer'
import News from '@components/News'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Clock />
        <News />
      </main>

      <Footer />
    </div>
  )
}
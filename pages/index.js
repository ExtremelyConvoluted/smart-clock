import Head from 'next/head'

import Clock from '@components/Clock'
import News from '@components/News'
import Settings from '@components/Settings'

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-indigo-900">
      <div>
        <Head>
          <title>Clock</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

      <div className="flex flex-col space-y-12 items-center justify-center h-screen text-center text-indigo-100">
          <Clock />
          <News />
          <Settings/>
      </div>
    </div>
  )
}
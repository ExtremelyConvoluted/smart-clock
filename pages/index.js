import Head from 'next/head'
import { useRouter } from 'next/router'

import { IconButton } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'

import Clock from '@components/Clock'
import News from '@components/News'

export default function Home () {
  const router = useRouter()

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-red-700">
      <div>
        <Head>
          <title>Clock</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

      <div className="text-indigo-100">
        <div className="flex flex-col space-y-12 items-center justify-center h-screen text-center relative z-0">
            <Clock />
            <News />
        </div>
        <div className="absolute inset-0 z-10 top-8 left-8">
            <IconButton
              onClick={ () => { router.push('/settings') } }
              fontSize="45px"
              aria-label="Open settings page"
              icon={<MdSettings />}
            />
        </div>
      </div>
    </div>
  )
}

import Head from 'next/head'
import { useRouter } from 'next/router'

import {
  Button,
  ButtonGroup,
  IconButton,
  Input
} from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'

export default function Settings () {
  const router = useRouter()

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-red-700">
        <div>
            <Head>
                <title>Settings</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>

        <div className="text-indigo-100">
            <div className="flex flex-col items-center justify-center h-screen text-center relative z-0">
                <div className="space-y-12">
                    <div className="text-5xl">Settings:</div>
                    <div className="text-3xl flex space-x-6">
                        <p>Weather of city:</p>
                        <Input placeholder='London' />
                    </div>
                    <div className="text-3xl">
                        <ButtonGroup variant='outline' spacing='100'>
                            <Button>Save</Button>
                            <Button>Cancel</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-10 top-8 left-8">
                <IconButton
                onClick={ () => { router.push('/') } }
                fontSize="45px"
                aria-label="Open index page"
                icon={<MdSettings />}
                />
            </div>
        </div>
    </div>
  )
}

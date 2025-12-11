import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaSnapchat } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'
import { LuDot } from 'react-icons/lu'

const Footer = () => {
  return (
    <div className='flex flex-col bg-secondary gap-7 pb-15 items-center justify-center h-full'>

      {/* image banner*/}

      <Image
        src="/BackgroundMobileDark.svg"
        alt="logo"
        width={1000}
        height={100}
        className='rounded-b-3xl'
      />

      {/* logo and title */}

      <div className='flex flex-col items-center gap-5 mt-10 justify-center'>
        <h1 className='text-7xl font-bold'>#</h1>
        <h2 className='text-2xl font-semibold'>Travel easier <br />
          - get the app!
        </h2>
      </div>

      {/* app store */}


      <div className='flex flex-row items-center justify-center gap-4'>
        <Image
          src="/appleStore.avif"
          alt="app-store"
          width={130}
          height={100}
          className='cursor-pointer'
        />
        <Image
          src="/GooglePlay.png"
          alt="google-play"
          width={130}
          height={100}
          className='cursor-pointer'
        />
      </div>

      {/* navigation */}

      <div className='flex mt-10 items-center underline underline-offset-1 justify-between  gap-3 text-sm'>

        <Link href={'/'}>Contact us</Link>
        <GoDotFill className='w-2 h-2' />
        <Link href={'/'}>Privacy</Link>
        <GoDotFill className='w-2 h-2' />
        <Link href={'/'}>Terms</Link>
        <GoDotFill className='w-2 h-2' />
        <Link href={'/'}>Cookies</Link>
        <GoDotFill className='w-2 h-2' />
        <Link href={'/'}>Accesibility statement</Link>

      </div>

      <div>


      </div>

      <p className='text-sm text-neutral-400'>© 2025 Ruter AS</p>

      <div className='flex items-center justify-between gap-5 '>
        <FaSnapchat className='w-6 text-neutral-400 h-6' />
        <FaFacebook className='w-6 text-neutral-400 h-6' />
        <FaInstagram className='w-6 text-neutral-400 h-6' />
      </div>

      <p className='text-sm text-neutral-400'>Last updated: 22.10.2025, 13:47
      </p>



    </div>
  )
}

export default Footer
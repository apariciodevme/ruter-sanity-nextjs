'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { BiMoon, BiSearch, BiWorld } from 'react-icons/bi'
import { FaChild, FaLocationDot } from 'react-icons/fa6'
import { IoMenu, IoClose, IoSearch, IoSettings, IoMoon, IoPlanet } from 'react-icons/io5'
import { IconType } from 'react-icons'
import SideNavItems from './SideNavItems'
import { CiSettings } from 'react-icons/ci'
import { FcSettings } from 'react-icons/fc'
import { TbWorld } from 'react-icons/tb'
import { BsFillTicketPerforatedFill } from 'react-icons/bs'
import { IoIosChatboxes } from 'react-icons/io'
import { MdNumbers, MdOutlineNumbers } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    'Plan journey',
    'About out tickets',
    'School transport',
    'Help and contact',
    'About us',
    'Log in'
  ]


  type Props = {
    icon?: IconType;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="flex items-center justify-between lg:p-10   p-5 bg-secondary relative z-50">
        <h1 className='text-2xl lg:text-3xl font-semibold'>
          Ruter#
        </h1>


        <div className='lg:flex gap-5 justify-between text-xl items-center hidden'>
          <Link className='flex gap-2 items-center' href={'/'}> <BiSearch />Travel planner</Link>
          <Link className='flex gap-2 items-center' href={'/'}> <BiWorld />Traffic status</Link>
          <Link className='flex gap-2 items-center' href={'/'}> <FaUserCircle />Log in</Link>
        </div>



        <button
          onClick={toggleMenu}
          className='px-4 flex cursor-pointer items-center gap-2 py-1.5 bg-button/20 text-[#86AFFF] rounded-full bg text-xl hover:bg-button/30 transition duration-200'
        >
          {isMenuOpen ? <h1>Close</h1> : <h1>Menu</h1>}
          {isMenuOpen ? <IoClose className='w-6 h-6' /> : <IoMenu className='w-5 h-5' />}
        </button>
      </div>

      {/* Side Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'var(--background-items)' }}
            onClick={toggleMenu}
          />

          {/* Side Menu */}
          <nav className="fixed inset-0 z-40 flex flex-col pt-20">
            {/* Search bar at the top of the side menu */}
            <div className="w-full px-6 mb-4">

              <div className='relative'>
                <IoSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-200' size={24} />
                <input
                  type="text"
                  id="to"
                  placeholder="Search Ruter.no"
                  className='w-full p-3 pl-12 rounded-3xl bg-secondary border-neutral-500 border focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-neutral-400 text-md'
                />

              </div>




            </div>

            {/* Menu items */}
            <div>
              <SideNavItems text='Place ' icon={FaLocationDot} />
              <SideNavItems text='About our tickets ' icon={BsFillTicketPerforatedFill} />
              <SideNavItems text='School transport ' icon={FaChild} />
              <SideNavItems text='Help and contact ' icon={IoIosChatboxes} />
              <SideNavItems text='About us ' icon={MdNumbers} />
              <SideNavItems text='Log in ' icon={FaUserCircle} />
            </div>

            <section>

              <div>
                <h2 className='text-2xl border-b-[0.6px] border-neutral-500 font-medium mt-6 text-white p-4'>Settings</h2>
                <SideNavItems text='Norsk ' icon={TbWorld} />
                <SideNavItems text='Cookies ' icon={IoSettings} />
                <SideNavItems text='Dark mode ' icon={IoMoon} />

              </div>

            </section>



          </nav>
        </>
      )}
    </>
  )
}

export default Header
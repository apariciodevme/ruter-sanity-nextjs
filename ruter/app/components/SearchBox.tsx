import React from 'react'
import { FaDotCircle } from 'react-icons/fa'
import { FaArrowRightLong, FaLocationDot } from 'react-icons/fa6'
import { LuArrowRightLeft } from 'react-icons/lu'


const SearchBox = () => {
  return (
    <div className='bg-secondary flex flex-col      w-full p-5 pt-10 rounded-b-2xl'>

      {/*container automatic*/}
      <div className='md:mx-auto md:w-auto'>
        <h1 className='text-gray-400 font-extralight leading-10 lg:text-4xl text-3xl'>Good afternoon,
          <br />

          <span className='text-white  lg:text-5xl text-3xl font-semibold'>

            where to?
          </span>



        </h1>


        <div className='flex  flex-col md:flex-row md:items-center  gap-4 my-6'>
          <div className='relative'>
            <FaDotCircle className='absolute left-4 top-1/2 transform -translate-y-1/2 text-red-600' size={18} />
            <input
              type="text"
              id="from"
              placeholder="From"
              className='w-full p-4 pl-12 rounded-2xl bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white text-lg'
            />
          </div>
          <LuArrowRightLeft className='w-6 h-6 hidden md:block' />
          <div className='relative'>
            <FaLocationDot className='absolute left-4 top-1/2 transform -translate-y-1/2 text-red-600' size={20} />
            <input
              type="text"
              id="to"
              placeholder="To"
              className='w-full p-4 pl-12 rounded-2xl bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white text-lg'
            />
          </div>

          {/*Search Button*/}
          <button className='px-4 mt-5 md:mt-0 py-3 text-md w-max font-medium cursor-pointer bg-button rounded-3xl text-primary'>Search</button>
        </div>



        <div className='flex mt-16 items-center gap-3'>
          <div className='flex items-center font-semibold cursor-pointer gap-2 rounded-3xl bg-primary px-5 text-button py-2'>
            <FaArrowRightLong />
            <h2 className='text-sm'>See departures</h2>

          </div>
          <div className='flex items-center cursor-pointer font-semibold gap-2 rounded-3xl bg-primary px-5 text-button py-2'>
            <FaArrowRightLong />
            <h2 className='text-sm'>Traffic status</h2>

          </div>




        </div>


      </div>


    </div>
  )
}

export default SearchBox
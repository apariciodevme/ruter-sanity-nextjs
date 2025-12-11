import Image from 'next/image'
import React from 'react'

type Props = {
  text: string;
  title: string;
  img: string;
  btnText?: string;
}



const Card = ({ text, title, img, btnText }: Props) => {
  return (
    <div className='flex relative pb-5 hover:text-button flex-col mt-5 cursor-pointer hover: rounded-3xl bg-secondary items-center justify-center gap-3 m-7 transition duration-300  hover:bg-[#3d3e45]  '>
      <Image
        src={img}
        height={800}
        width={800}
        alt='image'
        className='w-full h-fit rounded-t-3xl'
      />

      {/*Text and Button*/}
      <div className='flex flex-col items-center text-center justify-center p-5 gap-2 h-full '>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <p className='text-md text-gray-400 text-center max-w-lg mx-4'>{text}</p>
        <button className='px-4 mt-2 flex cursor-pointer items-center gap-2 py-1.5 bg-button/20 text-[#86AFFF] rounded-full bg text-md hover:bg-button/30 transition duration-200'>{btnText}</button>
      </div>

    </div>
  )
}

export default Card
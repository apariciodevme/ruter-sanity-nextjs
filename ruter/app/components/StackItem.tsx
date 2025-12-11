import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IconType } from 'react-icons'


type Props = {
    text: string;
    icon?: IconType;
}

const StackItem = ({text, icon: Icon}: Props) => {
  return (
    <div className='p-5 w-full rounded-xl bg-secondary hover:bg-[#3d3e45] '>
    <Link href={'/'} className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            {Icon && <Icon className='w-5 h-5 text-gray-400'/>}
            <h2 className='text-lg text-white font-semibold'>
                {text}
            </h2>
        </div>
        <IoIosArrowForward  className='w-5 h-5 text-gray-400'/>
    </Link>


</div>
  )
}

export default StackItem
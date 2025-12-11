import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IconType } from 'react-icons'
import Link from 'next/link';

type Props = {
    text: string;
    icon?: IconType;
}

const SideNavItems = ({text, icon: Icon}: Props) => {
    return (


    <div className='p-4 border-b-[0.6px] border-neutral-500 w-full  bg-secondary hover:bg-[#3d3e45] '>
    <Link href={'/'} className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            {Icon && <Icon className='w-5 h-5 text-white'/>}
            <h2 className='text-lg text-white font-light'>
                {text}
            </h2>
        </div>
    </Link>


</div>
  )
}
  


export default SideNavItems




{/*
    
    {menuItems.map((item, index) => (
    <div key={index} className="relative w-full">
      
      <div className="absolute left-0  " style={{ width: '100vw', left: '50%', transform: 'translateX(-50%)' }} />
      
      <Link
      
        href="#"
        className=" flex items-center gap-3 text-lg font-light py-4 px-6 relative"
        style={{ color: 'var(--foreground)' }}
        onClick={toggleMenu}
      >
        {item}
      </Link>
      <div className='w-full h-[0.5px] bg-neutral-500'></div>
    </div>
  ))}
    
    
    */}



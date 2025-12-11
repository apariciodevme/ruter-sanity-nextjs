import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward, IoIosCompass } from 'react-icons/io'
import StackItem from './StackItem'
import { FaLocationDot, FaRegFaceGrinBeam } from 'react-icons/fa6'
import { LuTicket } from 'react-icons/lu'




const Stack = () => {
    return (
        <div className='flex flex-col space-y-2 items-center justify-center p-5  rounded-xl' >
           <StackItem icon={FaLocationDot} text='About the metro project'/>
           <StackItem icon={LuTicket} text='Ticket information'/>
           <StackItem icon={FaRegFaceGrinBeam} text='Help and contact'/>
           <StackItem icon={IoIosCompass} text='For visitors'/>
           
        </div>
    )
}

export default Stack
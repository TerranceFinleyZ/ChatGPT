import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import Echos from "@/app/Echos/page";
import Link from 'next/link';
import MissionC from '@/components/MissionC';

const page = () => {
  return (
    <div>
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover pol-img'>
        <div className='p-5 text-gray-200'>
            <h2 className='text-7xl'>Politics.</h2>
        </div>
      </div>
      <div className='items-center justify-center'>
      <MissionC />
      </div>
      <Link className='flex mb-9 items-center justify-center ' href="/Echos">
      <MdArrowBackIosNew className="text-white lg:text-3xl mt-5 hover:-translate-y-1 hover:scale-110 duration-300" />
      </Link>
    </div>
  )
}

export default page
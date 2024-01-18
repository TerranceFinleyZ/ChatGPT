import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import Echos from "@/app/Echos/page";
import Link from 'next/link';
import MissionB from '@/components/MissionB';

const page = () => {
  return (
    <div>
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover sos-img'>
        <div className='p-5 text-gray-200'>
            <h2 className='text-7xl'>Society.</h2>
        </div>
      </div>
      <div className='items-center justify-center'>
      <MissionB />
      </div>
      <Link className='flex mb-9 items-center justify-center ' href="/Echos">
      <MdArrowBackIosNew className="text-white lg:text-3xl mt-5 hover:-translate-y-1 hover:scale-110 duration-300" />
      </Link>
    </div>
  )
}

export default page
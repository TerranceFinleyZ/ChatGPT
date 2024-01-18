import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import Echos from "@/app/Echos/page";
import Link from 'next/link';
import MissionA from '@/components/MissionA';

const page = () => {
  return (
    <div>
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover tech-img'>
        <div className='p-5 text-gray-300'>
            <h2 className='text-7xl'>Technology.</h2>
        </div>
      </div>
      <div className='items-center justify-center'>
      <MissionA />
      </div>
      <Link className='flex mb-9 items-center justify-center ' href="/Echos">
      <MdArrowBackIosNew className="text-white lg:text-3xl mt-5 hover:-translate-y-1 hover:scale-110 duration-300" />
      </Link>
    </div>
  )
}

export default page
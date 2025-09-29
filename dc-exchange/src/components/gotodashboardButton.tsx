"use client"
import { MoveRight } from 'lucide-react'
import  {useRouter}  from 'next/navigation'
import React from 'react'

const DashboardButton = () => {
    const router=useRouter()
    const handleClick=()=>{
        router.push("/dashboard");
    }
  return (
    <button className='flex justify-center align-middle px-2 text-sm md:text-lg p-1 rounded-md bg-[#2F4858] font-bold hover:gap-x-1 hover:cursor-pointer hover:bg-gray-800' onClick={handleClick}>
        <h1 className='flex justify-center align-middle self-center text-white text-center'>
        Go to Dashboard
        </h1>
        <div className='flex duration-100 transition-all justify-center mt-0.5 align-middle mx-0.5 text-cyan-400'>
        <MoveRight />
        </div>
    </button>
  )
}

export default DashboardButton
import React from 'react'
import logo from '@/img/logo-BfNap0Pe.png'
import Image from "next/image"

export default function Fotter() {
  return (
   <>
   <footer className='bg-white shadow-sm font-cr p-5'>
    <div className="container mx-auto ">
      <div className="flex justify-between  border-b-3 border-grey">
        <div className="flex gap-3 p-4">
          <Image src={logo} alt="logo" width={50} height={50}/>
          <span className='font-bold text-xxl'>Recipe</span>
        </div>
        <button className='text-blue-600 font-bold'>Route</button>
      </div>
      <p className='text-center'>© 2025 Nagy Osama™. All Rights Reserved.</p>
    </div>

   </footer>
   </>
  )
}

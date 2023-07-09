import React from 'react'
// import Bg1 from "../../assets/img/bg-1.jpg"

export const Header = () => {
  return (
    <div className='relative h-screen'>
        <div className='overlay-bg'></div>
        <div className='flex flex-col  h-screen justify-center absolute top-0 left-0 p-20 container mx-auto'>
            <div className='space-y-10'>
                <h1 className='font-extrabold text-9xl text-white uppercase opacity-40'>We're</h1>
                <h1 className='font-extrabold text-9xl text-white uppercase opacity-70'>Here for</h1>
                <h1 className='font-extrabold text-9xl text-white uppercase'> JESUS</h1>
            </div>

            <div className='mt-20 space-x-12'>
            <a href='#' className='btn'>Watch Videos</a>
            <a href='#' className='btn'>Upcoming events</a>
        </div>
        </div>


       
    </div>
    
    
  )
}

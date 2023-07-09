import React from 'react'
import {NavLink} from 'react-router-dom'

export const Latest = () => {
  return (
    <div className='latest-bg items-center'>
        <div className='p-24'>
            <h1 className='text-white font-bold text-6xl text-center mb-10'>Latest Uploads</h1>
            <div className='grid grid-cols-2 gap-10'>
              <div className=''>
                <iframe src="https://www.youtube.com/embed/vucqchLhLxg" title="The Jubilee @ Fountain Gate Chapel - Victory Pastures, Adenta with Eastwood Anaba" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  className='object-contain w-full h-80' allowfullscreen></iframe>
              </div>

              <div>
                
              </div>

            </div>
           
           <div className='flex justify-center items-center'>
            <NavLink to='/watch-and-listen' className='btn mt-10'> Watch More</NavLink>
           </div>
        </div>
    </div>
  )
}

import React from 'react'
import {GrInstagram, GrFacebookOption, GrTwitter} from 'react-icons/gr'
export const JoinUs = () => {
  return (
    <div className='container mx-auto py-10 flex justify-between'>
        <div className='text-left flex flex-col space-y-10'>
            <h1 className='font-extrabold text-4xl uppercase'>Join us this sunday!</h1>
            <p>Our services start from Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sapiente!</p>
            <div className="text-3xl flex space-x-5">
                <GrFacebookOption/>
                <GrInstagram/>
                <GrTwitter/>
            </div>


        </div>

        <div className=' flex flex-col space-y-10 text-right'>
            <p>Our services start from Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sapiente!</p>
        </div>

    </div>
  )
}

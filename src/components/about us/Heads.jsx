import React from 'react'
import Img1 from '../../assets/img/bg3.jpg'

export const Heads = () => {
  return (
    <div className='container mx-auto p-24'>
        <div className='grid grid-cols-2 gap-10 '>
       
            <div className='text-center'>
                    <img src={Img1} alt="" />
                    <h2 className="text-lg font-bold ">Ps. Patrick Agyemang Dua</h2>
                    <p>Head pastor</p>
            </div>
            <div className='grid grid-cols-2 items-center justify-center gap-5'>
                <div className=''>
                    <img src={Img1} alt="" className='w-full h-full object-cover' />
                </div>
                <div className=''>
                    <img src={Img1} alt="" className='w-full h-full object-cover' />
                </div>

                <div className=''>
                    <img src={Img1} alt="" className='w-full h-full object-cover' />
                </div>

                <div className=''>
                    <img src={Img1} alt="" className='w-full h-full object-cover' />
                </div>

                </div>
        </div>
    </div>
   
  )
}

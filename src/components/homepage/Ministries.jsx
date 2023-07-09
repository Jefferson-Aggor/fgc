import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from "../../assets/img/bg-1.jpg"
import YouthImage from "../../assets/img/youth-bg.jpg"

export const Ministries = () => {
  return (
    <div className='p-32'>
        <h3 className='text-center font-bold text-6xl mb-10'>Our Ministries</h3>
        <div className='container mx-auto w-1/2'>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex commodi eos atque, ea placeat officia tenetur? Ex aspernatur placeat explicabo dicta veritatis quis, blanditiis quisquam alias, natus ipsum ratione animi. </p>
        </div>

        <div className='flex flex-col md:flex-row space-x-10 mt-16'>
            <NavLink to='/youth'>
                <div className='bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:cursor-pointer'>
                    <div className='object-contain '>
                        <img src={Image} alt="" className='h-full ' />
                    </div>

                    <div className='p-3'>
                        <h2 className="font-bold text-lg mb-2">Youth Ministry</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eaque! Reiciendis odio saepe, sapiente hic accusantium maxime voluptatum obcaecati veniam unde molesti</p>
                    </div>
                </div>
            </NavLink>

            <NavLink to='/hayil-ladies'>
                <div className='bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:cursor-pointer'>
                    <div className='object-contain '>
                        <img src={Image} alt="" className='h-full ' />
                    </div>

                    <div className='p-3'>
                        <h2 className="font-bold text-lg mb-2">Hayil Ladies</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eaque! Reiciendis odio saepe, sapiente hic accusantium maxime voluptatum obcaecati veniam unde molesti</p>
                    </div>
                </div>
            </NavLink>

        </div>
    </div>
  )
}

import React from 'react'
import { FaCalendar} from 'react-icons/fa'
import Img from '../../assets/img/media.jpg'

export const PastSermons = () => {
  return (
    <div className='pastsermons-bg p-32'>
        <h1 className="text-6xl font-extrabold mb-20 text-left uppercase text-white">Watch past sermons</h1>
        <div className="grid grid-cols-4 gap-10">
            <div className="space-y-4 overflow-hidden text-black bg-white rounded-lg">
                <img src={Img} alt="" />
                <div className="space-y-4 p-5">
                <h2 className="font-extrabold uppercase text-2xl ">
                    Settlement
                </h2>
                <div className='flex font-semibold items-center space-x-4 text-gray-600'>
                    <FaCalendar/>
                    <p>20th Jan 2023</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aliquid.</p>
                <a href="" className='btn-secondary bg-black text-white'>Watch</a>
                </div>
            </div>

            <div className="space-y-4 overflow-hidden text-black bg-white rounded-lg">
                <img src={Img} alt="" />
                <div className="space-y-4 p-5">
                <h2 className="font-extrabold uppercase text-2xl ">
                    Settlement
                </h2>
                <div className='flex font-semibold items-center space-x-4 text-gray-600'>
                    <FaCalendar/>
                    <p>20th Jan 2023</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, a liquid.</p>
                <a href="" className='btn-secondary bg-black text-white'>Watch</a>
                </div>
            </div>

            <div className="space-y-4 overflow-hidden text-black bg-white rounded-lg">
                <img src={Img} alt="" />
                <div className="space-y-4 p-5">
                <h2 className="font-extrabold uppercase text-2xl ">
                    Settlement
                </h2>
                <div className='flex font-semibold items-center space-x-4 text-gray-600'>
                    <FaCalendar/>
                    <p>20th Jan 2023</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aliquid.</p>
                <a href="" className='btn-secondary bg-black text-white'>Watch</a>
                </div>
            </div>

            <div className="space-y-4 overflow-hidden text-black bg-white rounded-lg">
                <img src={Img} alt="" />
                <div className="space-y-4 p-5">
                <h2 className="font-extrabold uppercase text-2xl ">
                    Settlement
                </h2>
                <div className='flex font-semibold items-center space-x-4 text-gray-600'>
                    <FaCalendar/>
                    <p>20th Jan 2023</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aliquid.</p>
                <a href="" className='btn-secondary bg-black text-white'>Watch</a>
                </div>
            </div>
            
        </div>

    </div>
  )
}

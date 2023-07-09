import React,{useState} from 'react'
import Image from '../../assets/img/bg3.jpg'
import {FaArrowRight, FaClock, FaCalendarAlt, FaMapMarkerAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


export const UpcomingEvents = () => {
    const [event,setEvent] = useState({
        title: "Sunday Service",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam esse saepe quas natus, provident debitis est enim magnam ad asperiores facere, dignissimos, itaque aliquid quo. Quisquam asperiores repellat voluptatem!',
        image: Image,
        date: '22nd Feb 2023',
        time: '8:00am - 10:00am',
        location: "Victory Pasture, Adenta"
    })



    const {title,description,image,date,time,location} = event;
  return (
    <div id='upcoming' className='upcoming-bg mb-28 px-32 py-10 space-y-10'>
        <h1 className="text-center text-5xl font-extrabold">Upcoming Event</h1>
        <div className="conatiner mx-auto  grid grid-col-1 md:grid-cols-2 ">
            <div className="h-96">
                <img src={image} alt="" className='h-full'/>
            </div>

            <div className='flex flex-col justify-center items-center '>
                <h1 className="font-extrabold text-4xl uppercase mb-5 text-center">{title}</h1>
                <p className='text-center'>{description}</p>

                <div className="flex justify-between space-x-12 mt-5">
                    <div className='flex items-center space-x-1 font-semibold'>
                        <FaClock/> <p>{time}</p>
                    </div>
                    <div className='flex items-center space-x-1 font-semibold'>
                        <FaCalendarAlt/> <p>{date}</p>
                    </div>
                    <div className='flex items-center space-x-1 font-semibold'>
                        <FaMapMarkerAlt/> <p>{location}</p>
                    </div>
                </div>
                <NavLink to='/' className="flex items-center space-x-2 font-bold mt-5 uppercase"><FaArrowRight/> <p>More Events</p> </NavLink>
            </div>

           
        </div>
    </div>
  )
}

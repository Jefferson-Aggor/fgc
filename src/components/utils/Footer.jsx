import React from 'react'
import {FaChevronRight , FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"
export const Footer = () => {
    let date = new Date();
    let year = date.getUTCFullYear();

  return (
    <footer className='bg-black px-32 py-10'>
        <div className="container mx-auto flex flex-col justify-center items-center">
            <h3 className='w-2/3 text-gray-100 font-bold text-center text-2xl p-10'>People is our focus. Christ is our ultimate goal. Oh! Jesus is indeed Lord. Praise His name forever and ever.</h3>

            <h3 className='text-white font-bold text-center text-4xl mb-32 uppercase'>Let's Get to Know Jesus Together</h3>
        </div>

        <div className="grid grid-cols-4 border-t-white border-y-2 border-solid py-8 ">
            <div className="flex flex-col text-white space-y-5">
                <h1 className="font-extrabold uppercase text-2xl mb-5">Church Services</h1>
                <h2 className='font-bold text-lg'>Sundays</h2>
                <div className='ml-5 text-gray-400 font-semibold space-y-3'>
                    <div className='flex items-center space-x-2'>
                    <FaChevronRight/> <p>Fire Assembly: 6:00am - 8:00am</p>
                    </div>

                    <div className='flex items-center space-x-2'>
                    <FaChevronRight/> <p>Rain Assembly: 8:30am - 11:30am</p>
                    </div>

                    <div className='flex items-center space-x-2 mb-3'>
                    <FaChevronRight/> <p>Youth Service: 12:00pm - 1:00pm</p>
                    </div>
                </div>
                
                <h2 className='font-bold text-lg'>Prayer Meetings</h2>
                <div className='ml-5 text-gray-400 font-bold mb-3'>
                    <div className='flex items-center space-x-2'>
                    <FaChevronRight/> <p>Wednesday: 9:00am - 12:00am</p>
                    </div>
                </div>

                <h2 className='font-bold text-lg'>Midweek service</h2>
                <div className='ml-5 text-gray-400 font-bold mb-3'>
                    <div className='flex items-center space-x-2'>
                    <FaChevronRight/> <p>Thursday: 6:00pm - 8:00pm</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-white space-y-5">
                <h1 className="font-extrabold uppercase text-2xl mb-5">Call Us</h1>
                <div className='flex items-center space-x-2'>
                    <FaPhoneAlt/> <p><a href="tel:+233559305117">+233 (0) 55-930-5117</a></p>
                </div>

                <div className='flex items-center space-x-2'>
                    <FaPhoneAlt/> <p><a href="tel:+233559305117">+233 (0) 55-930-5117</a></p>
                </div>

                <div className='flex items-center space-x-2'>
                    <FaPhoneAlt/> <p><a href="tel:+233559305117">+233 (0) 55-930-5117</a></p>
                </div>
            </div>

            <div className="flex flex-col text-white">
                <h1 className="font-extrabold uppercase text-2xl mb-5">Email Us</h1>
                <div className='flex items-center space-x-2'>
                    <FaEnvelope/> <p><a href="mailto:aggorjefferson@gmail.com">aggorjefferson@gmail.com</a></p>
                </div>
            </div>

            <div className="flex flex-col text-white">
                <h1 className="font-extrabold uppercase text-2xl mb-5">
                    <a href="" className='underline text-blue-700'>Get Directions</a>
                </h1>
                <div className='flex items-center space-x-2'>
                    <FaMapMarkerAlt size={'30px'}/> 
                    <p>Adenta New Legon. Right behind XXX school. Once you arrive, our ushers will direct you.</p>
                </div>

            </div>
        </div>

        <div className="text-center mt-3 text-gray-500 font-bold uppercase">&copy; FGC-Victory Pastures - Media Department ({year})</div>
    </footer>
  )
}

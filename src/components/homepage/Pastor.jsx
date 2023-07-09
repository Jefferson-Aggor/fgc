import React from 'react'
import PastorImage from "../../assets/img/pastor.png"


export const Pastor = () => {
  return (
    <div className='container mx-auto p-32 grid grid-cols-2'>
        <div className='flex flex-col text-center'>
            <img src={PastorImage} alt="Ps. Patrick Agyemang Dua" className='' />
            <div className='bg-yellow-700  p-3 '> 
                <h3 className='font-bold text-white uppercase'>Pastor. Patrick Agyemang Dua</h3>
                <p className='font-semibold'>Head Pastor</p>
            </div>
        </div>
        <div className='bg-gray-100 p-10 rounded-md'>
            <h3 className='text-4xl font-bold mb-10 text-center'>Welcome to Fountain Gates Chapel, Victory Pastures.</h3>

            <p className='text-2xl text-center'>
            It’s always a real joy for us to meet and have new members on our website. We aim to take a different approach in reaching out and helping people along the journey. We stress cultural relevancy and utilize all media to communicate the church message. It’s very important to believe you are the one. We serve the city and our members through the true preaching of the Word of God as well as the right administration of the sacraments of baptism and the Lord’s Supper.
            </p>
        </div>
    </div>
  )
}

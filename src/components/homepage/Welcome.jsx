import React from 'react'
// import Pastor from "../../assets/img/avatar.jpg"
export const Welcome = () => {
  return (
    <div className='welcome-bg'>
         <div className='container mx-auto text-center p-32 items-center '>
        <div className=''>
            <div className='mb-10'>
                <h1 className='font-bold text-8xl uppercase '> You're</h1>
                <h1 className='font-extrabold text-9xl uppercase '> Invited!</h1>
            </div>

            <h2 className='font-extrabold uppercase text-2xl text-black-900'> 
            It's an honour that you would want to choose to spend a moment with us. Enjoy every moment here! 
            </h2>

          {/* <div className='flex items-center justify-center mt-10 h-20'>
            <img src={Pastor} alt="Ps. Patrick Agyemang Dua" className='h-12 w-12 rounded-full' />
            <p className='mt-2 font-semibold underline'> {}Ps. Patrick Agyemang Dua</p>
          </div> */}
          
        </div>
        
    </div>
    </div>
   
  )
}

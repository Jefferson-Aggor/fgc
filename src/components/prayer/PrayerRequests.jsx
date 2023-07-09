import React from 'react'
import {FaChevronRight} from 'react-icons/fa'


export const PrayerRequests = () => {
  return (
    <div className='px-32 py-16 '>
      <div className='container mx-auto md:w-2/3 flex justify-center items-center flex-col text-center mb-16 md:mb-32'>
          <h1 className=" font-extrabold uppercase text-6xl mb-10 ">We thrive through prayer</h1> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste a dicta! Reiciendis tenetur delectus, autem aspernatur odit, sed architecto accusamus quas dolorum modi aliquid debitis adipisci labore molestiae exercitationem, eum maiores. Molestiae soluta maxime cum maiores animi obcaecati quaerat.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='flex flex-col space-y-5'>
          <h1 className="text-3xl font-bold uppercase">
            Prayer meeting days
          </h1>
          <div className='ml-5 space-y-4'>
              <div className="flex items-center space-x-2">
                <FaChevronRight/> <p>Saturdays : 6:00am - 8:00am</p>
              </div>

              <div className="flex items-center space-x-2">
                <FaChevronRight/> <p>Saturdays : 6:00am - 8:00am</p>
              </div>

          </div>
          
        </div>
        <div>
        <h1 className="text-3xl font-bold uppercase text-right mb-10">
           Need help in prayers?
          </h1>
          <form action="" method="post">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div>
                <label htmlFor="first-name">First Name</label>
                <input type="text" name="firstname" id="first-name" className=''  />
              </div>
              <div>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" name="lastname" id="last-name" />
              </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div>
                <label htmlFor="contact">Contact</label>
                <input type="text" name="contact" id="contact" className=''  />
              </div>
              <div>
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" />
              </div>
            </div>
            

            <div>
                <label htmlFor="request">Prayer Request</label>
                <textarea name='request'></textarea>
              </div>
            
            <input type="submit" value="Submit"  className='btn-secondary bg-black text-white'/>
          </form>
        </div>
      </div>
    </div>
  )
}


import { BsCalendar2Event } from 'react-icons/bs'

export const DashboardUpcomingEvents = () => {

  return (
    <div>
      <div className='py-10'>
        <div className="flex items-center justify-center mb-10 space-x-2">
          <BsCalendar2Event className='text-3xl' />
          <p className="text-3xl">Upload an Upcoming Event</p>
        </div>

        <div className="grid">
          <form action="" method="post" className='w-1/2'>

            <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
              <label htmlFor="announcement_title">Title</label>
              <input
                type="text" name="title" id="announcement_title" className='' />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-2 gap-5'>
              <div>
                <label htmlFor="time">Start time</label>
                <input type="time" name="time" id="time" className='' />
              </div>

              <div>
                <label htmlFor="time">End time</label>
                <input type="time" name="time" id="time" className='' />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" />
              </div>

              <label htmlFor="description">Description</label>
              <textarea name='description' rows={10}></textarea>
              <label htmlFor="image">Choose an image</label>
              <input type="file" name="file" id="image" />
            </div>
            <input type="button" value="Submit" className=' bg-black text-white rounded-md' />
          </form>
        </div>
      </div>
    </div>
  )
}

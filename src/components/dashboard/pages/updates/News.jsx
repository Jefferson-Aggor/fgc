import { FaRegNewspaper } from 'react-icons/fa'

export const News = () => {
  return (
    <div className='py-10'>
      <div className="flex items-center justify-center mb-10 space-x-2">
        <FaRegNewspaper className='text-3xl' />
        <p className="text-3xl">Upload a News</p>
      </div>

      <div className="grid">
        <form action="" method="post" className='w-1/2'>

          <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
            <label htmlFor="announcement_title">Title</label>
            <input type="text" name="title" id="announcement_title" className='' />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="time">Time</label>
              <input type="time" name="time" id="time" className='' />
            </div>

            <div>
              <label htmlFor="date">Date</label>
              <input type="date" name="date" id="date" />
            </div>
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea name='description' rows={10}></textarea>
          </div>
          <div>
            <label htmlFor="image">Upload associated image
              <input type="file" name="image" id="image" />
            </label>
          </div>
          <input type="submit" value="Submit" className=' bg-black text-white rounded-md' />
        </form>
      </div>
    </div>
  )
}

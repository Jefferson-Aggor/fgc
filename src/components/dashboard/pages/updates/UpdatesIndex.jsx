import React,{ useState } from 'react'
import {Nav, Navbar, UpdateUpdatesUi} from '../../../index'

export const UpdatesIndex = () => {
  const [updateType, setUpdateType] = useState('announcements')

  const handleUpdatesType = (e)=>{
    setUpdateType(e.target.value)
  }

  return (
    <div>
      <Nav/>
      <div className='flex'>
          <Navbar/>
          <div className='p-10 w-full overflow-y-scroll'>
            {/* Horizontal Nav */}
              <div className="flex justify-between p-3 bg-slate-400 rounded-md text-slate-100 mb-5">
                <div className="flex">
                  <strong className=' px-1'>Admin</strong> | <p className='px-1'>Jefferson Aggor</p>
                </div>
              </div>

              {/* Updates */}
              <p className="text-2xl font-bold uppercase mb-4 text-right">Upload Update(s)</p>

              <label htmlFor="update_type" className='block mb-1'>Select update type</label>

              <select name="update_type" id="update_type" className='p-2 uppercase border-2 rounded-md border-black' 
              value={updateType} 
              onChange={(e)=>handleUpdatesType(e)}>
                <option value="announcements">Announcements</option>
                <option value="news">News</option>
                <option value="upcoming_events">Upcoming Events</option>
              </select>

              {updateType !== "" ? <UpdateUpdatesUi update_type={updateType}/>:""}
          </div>
      </div>
     
    </div>
  )
}

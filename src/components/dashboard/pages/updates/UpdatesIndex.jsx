import React, { useState } from 'react'
import { Nav, Navbar, UpdateUpdatesUi, UserBar } from '../../../index'

export const UpdatesIndex = () => {
  const [updateType, setUpdateType] = useState('announcements')

  const handleUpdatesType = (e) => {
    setUpdateType(e.target.value)
  }

  return (
    <div>
      <Nav />
      <div className='flex'>
        <Navbar />
        <div className='p-10 w-full overflow-y-scroll'>
          {/* Horizontal Nav */}

          <UserBar heading={{ userType: 'admin', userName: 'jefferson aggor', heading: 'upload update(s)' }} />

          <label htmlFor="update_type" className='block mb-1'>Select update type</label>

          <select name="update_type" id="update_type" className='p-2 uppercase border-2 rounded-md border-black'
            value={updateType}
            onChange={(e) => handleUpdatesType(e)}>
            <option value="announcements">Announcements</option>
            <option value="news">News</option>
            <option value="upcoming_events">Upcoming Events</option>
          </select>

          {updateType !== "" ? <UpdateUpdatesUi update_type={updateType} /> : ""}
        </div>
      </div>

    </div>
  )
}

import React from 'react'
import { Announcements, News, DashboardUpcomingEvents } from '../../../index'

export const UpdateUpdatesUi = ({update_type}) => {
  return (
    <div>
        {update_type === "announcements" ? <Announcements/> : ""}
        {update_type === "news" ? <News/> : ""}
        {update_type === "upcoming_events" ? <DashboardUpcomingEvents/> : ""}
    </div>
  )
}

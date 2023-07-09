import React from 'react'
import {GeneralHeader,Nav,Footer, PrayerRequests} from '../index'


export const Prayer = () => {
  return (
    <div>
        <Nav/>
        <GeneralHeader page={{page:'prayer', title:"1 Thesalonians 5:17"}}/>
        <PrayerRequests/>
        <Footer/>
    </div>
  )
}

import React from 'react'

import {Nav,Footer,Header, Welcome, Pastor, Latest, Ministries, UpcomingEvents, GeneralHeader} from "../index"


export const Index = () => {
  return (
    <div>
        <Nav/>
        <Header/>
        <Pastor/>
        <Welcome/>
        <Latest/>
        <Ministries/>
        <UpcomingEvents/>
        <Footer/>
    </div>
  )
}

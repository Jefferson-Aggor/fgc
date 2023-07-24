import React from 'react'

import {
  Nav, Footer, Header, Welcome,
  // Pastor, 
  Latest, Ministries,
  UpcomingEvents, Newsletter
} from "../index"


export const Index = () => {
  return (
    <div>
      <Nav />
      <Header />
      {/* <Pastor /> */}
      <Welcome />
      <Latest />
      <Ministries />
      <UpcomingEvents />
      <Newsletter />
      <Footer />
    </div>
  )
}

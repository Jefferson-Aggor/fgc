import React from 'react'
import {Nav,Footer,GeneralHeader, MediaHeader , JoinUs, PastSermons} from '../index'

export const Media = () => {
  return (
    <div>
        <Nav/>
        <GeneralHeader page={{page:'media', title:'Watch & Listen'}}/>
        <MediaHeader/>
        <JoinUs/>
        <PastSermons/>
        <Footer/>
    </div>
  )
}

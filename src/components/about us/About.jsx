import React from 'react'
import {Nav,Footer, GeneralHeader, AboutBody, Heads} from '../index'

export const About = () => {
  return (
    <div>
      <Nav/>
      <GeneralHeader page={{page:'about', title:'about us'}}/>
      <AboutBody/>
      <Heads/>
      <Footer/>
    </div>
  )
}

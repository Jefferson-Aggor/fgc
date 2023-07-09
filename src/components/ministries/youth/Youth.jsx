import React from 'react'
import {Nav, Footer, GeneralHeader, YouthContent} from '../../index'

export const Youth = () => {
  return (
    <div>
        <Nav/>
        <GeneralHeader page={{page:'youth', title:'Youth assembly'}}/>
        <YouthContent/>
        <Footer/>
    </div>
  )
}

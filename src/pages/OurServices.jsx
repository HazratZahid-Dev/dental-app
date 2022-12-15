import React from 'react'
import ServicesCard from '../Compunents/ServicesCard'
import '../PageStyle/OurServices.css'
import GetUpdate from './GetUpdate'

const OurServices = () => {
  return (
    <>
    <div className='ourServices'>

        <h1 className='ourServices__heading'>Our <span className='text-blue-700'>Services</span></h1>
        <p className='ourServices__para'>The Bandaid is place where a dintest perform procedure and treatement on patients.A 
        dental clinc <br/>ordinarilly provise basics services, such as checkup,fillings and root canals.
        </p>
        <ServicesCard/>
        
        <button type='button' className='See__all__btn'>See All</button>

        
    </div>
    

       
    </>
  )
}

export default OurServices
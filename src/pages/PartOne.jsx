import React from 'react'
import '../PageStyle/PartOne.css'
import dr3 from '../images/dr9.jpg'

const PartOne = () => {
  return (
    <div className='Main__partOne'>
        <div>
            <h1 className='partOne__heading'>CREATING<br/> <span className='text-blue-700'>BEAUTIFUL</span><br/> SMILE</h1>
            <p className='partOne__para'>I proudly provide quality dental care when people seek <br/> the best treatement for thier dental aasue.</p>
           <div className='Button__div'>
                <button type='button' className='partOne__btn'>My Blogs</button>
                <button type='button' className='partOne__btn_second'>Services</button>
           </div>
        </div>
        <div>
            <img src={dr3} className='partOne__img'/>
        </div>
    </div>
  )
}

export default PartOne
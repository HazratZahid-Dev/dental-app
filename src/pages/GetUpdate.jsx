import React from 'react'
import '../PageStyle/GetUpdate.css'
import img from '../images/Dr17.jpg'

const GetUpdate = () => {
  return (
    <>
        <div className='Main__GetUpdate'>
        <img src={img} className='MainUpdate__img'></img>
        <div className='inner__Update'>
            <h1 className='get__heading'>Get Our Update</h1>
            <p className='get__para'>Find out about events and other news</p>

            <div className='email__sec'>
           <input type='text' placeholder='info@site.com' className='input__field'></input> <p className='email__para'>Email</p>
        </div>
        </div>
       

           
        </div>
    </>
  )
}

export default GetUpdate
import React from 'react'
import data from '../Config/OurServicesCard'
import '../CompunentsStyle/ServicesCard.css'


const ServicesCard = () => {
  return (
    <div className='servicesCard'>
        {data.map((it)=>{

            return(
                <div className='Card'>
                
                        <div>
                             <img src={it.img} className="servicesCardImg"/>
                            <h1 className='services__card__heading'>{it.card__header}</h1>
                            <p className='Services__card__para'>{it.card__para}</p>
                            <div className='rating__price1'>
                              <p>{it.price}</p>
                              <p>{it.rating}</p>
                            </div>
                            <button type='button' className='Service__btn'>View Detail</button>
                        </div>
                </div>
               
            )      
        })
        }

    </div>
  )
}

export default ServicesCard
import React from 'react'
import data from '../Config/CardData'
import '../CompunentsStyle/Card.css'
// import {FaPencilAlt} from "react-icons/fa";


const Card = () => {
  return (
    <div className='card'>
        {data.map((it)=>{

            return(
                <div className='Main__card'>
                
                        <div>
                             <h4 className='card__icons'>{it.icons}</h4>
                            <h1 className='card__heading'>{it.heading}</h1>
                            <p className='card__para'>{it.para}</p>
                        </div>
                </div>
               
            )        
        })
        }

    </div>
  )
}

export default Card
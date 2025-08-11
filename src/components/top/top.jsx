import React from 'react'
import pizzashop from "../../pizzashop.png";
import Group4 from '../../Group4.png'
import Group68 from '../../Group68.png'
import Btn from '../btn/btn.jsx'
function Top() {
  return (
    <div className='fle'>
        <img src={pizzashop}/>
        <div className='fle none'>
            <p className='al'>Home</p>
            <p className='p'>Menu</p>
            <p className='p'>Events</p>
            <p className='p'>About us</p>
        </div>
        <div className='fle'>
          <div className='none'>
            <Btn title="Login"/>
          </div>
            <img src={Group4}/>
            <img src={Group68} className='block'/>
        </div>
    </div>
  )
}

export default Top
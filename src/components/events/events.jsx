import React from 'react'
import Btn from '../btn/btn'

function Event({ bg, desc }) {
  return (
    <div className='f1' style={{ backgroundImage: `url("${bg}")`,width:"337px" }}>
      <h1>{desc}</h1><br /><br /><br /><br/>
      <Btn title="More"/>
    </div>
  )
}

export default Event

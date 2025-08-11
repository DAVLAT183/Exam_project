import React from 'react'
import image from '../../image.png';
import imagecopy2 from '../../imagecopy2.png';
import imagecopy from '../../imagecopy.png';

function Topp() {
    return (
        <div className='flex'>
            <div>
                <h1 className='ho'>The Fastest</h1>
                <h1>
                    <span className='ho'>Pizza</span>
                    <img src={image} className="img" />
                    <span className='ho'>Delivery</span>
                </h1>
                <p className='p'>We will deliver juicy pizza for your family in 30</p>
                <p className='p'>minutes, if the courier is late - pizza is free!</p><br />
                <p className='p'>Cooking process:</p><br />
                <img src={imagecopy2} className='app' /><br /><br />
                <div className='hop'><button className='btn1'>To order</button><button className='btn2'>Pizza-Menu</button></div>
            </div>
            <img src={imagecopy} className='img2' />
        </div>
    )
}

export default Topp

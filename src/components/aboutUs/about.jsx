import React from 'react'


function About({ img1, img2 }) {
    return (
        <div className='flex'>
            <div>
                <h1 className='ho'>About</h1><br />
                <p className='p'>In just a couple of years, we have opened 6 outlets</p>
                <p className='p'>in different cities: Kazan, Chelyabinsk, Ufa, Samara,</p>
                <p className='p'>Izhevsk, and in the future we plan to develop the</p>
                <p className='p'>network in other major cities of Russia.</p><br />
                <img src={img2}  className='imgh' /><br /><br />
                <p className='p'>The kitchen of each point is at least: 400-500</p>
                <p className='p'>sq. m. meters, hundreds of employees, smoothly</p>
                <p className='p'>performing work in order to receive / prepare /</p>
                <p className='p'> form / deliver customer orders on time.</p><br />
            </div>
            <img className='imgh' src={img1} alt="" />
        </div>
    )
}

export default About
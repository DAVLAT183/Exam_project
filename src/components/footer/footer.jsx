import React from 'react'
import pizzashop from "../../pizzashop.png";
import Group46 from "../../Group46.png";


function Footer({ }) {
    return (
        <div style={{ color: "white", backgroundColor:'#170600', padding:"30px" }}>
            <div className='fm'>
                <img src={pizzashop} />
                <div>
                    <p className='p'>Home</p>
                    <p className='p'>ToOrder</p>
                    <p className='p'>About us</p>
                    <p className='p'>Events</p>
                    <p className='p'>Menu</p>
                </div>
                <div className='none'>
                    <p className='p'>Events</p>
                    <p className='p'>3 Pizza 1 Free Coffee</p>
                    <p className='p'>2 Pizza for 1 Price</p>
                    <p className='p'>Kitchen Tour</p>
                </div>
                <div className='none'>
                    <p className='p'>Menu</p>
                    <p className='p'>Show All</p>
                    <p className='p'>Seaproducts</p>
                    <p className='p'>Vegan</p>
                    <p className='p'>Meat</p>
                </div>
                <div className='none'>
                    <p className='p'>About Us</p>
                    <p className='p'>Our History</p>
                    <p className='p'>Why We?</p>
                </div>
            </div><br /><br /><br />
            <div className='fle'>
                <p>+7 (937) 333-55-33</p>
                <img src={Group46} />
            </div>
        </div>
    )
}

export default Footer
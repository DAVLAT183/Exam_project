import React from 'react'
import Btn from "../btn/btn"

function Menu1({ name, price, img }) {
    return (
        <div className='cc text'>
            <img src={img} />
            <h2>{name}</h2>
            <p className='p'>Filling: onion, potato, tomato,</p>
            <p className='p'>mushrooms, cheese, olives, meat...</p>
            <div className='fle'>
                <p className='p pl'>22</p>
                <p className='pm'>28</p>
                <p className='p pl'>33</p>
            </div>
            <button className='button'>+ Ingridients</button>
            <div className='fle'>
                <p className='p'>{price}</p>
                <div className='fle'>
                    <p className='p bp'>-</p>
                    <p className='p'>1</p>
                    <p className='px'>+</p>
                </div>
            </div>
            <Btn title="Order Now" />

        </div>
    )
}

export default Menu1
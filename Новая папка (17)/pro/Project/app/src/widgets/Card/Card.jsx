import React from 'react'
import watch from "../../shared/icons/watch.png"
import "./Card.css"

function Card() {
    return (
        <div className='card'>
            <div className='img-frame'>
                <img className='img-large' src={watch} alt="часы" />
            </div>
            <p className='Playfair white first post-title'>Louis XVI ATHOS</p>
            <p className='Playfair white second post-title'>165 000 руб</p>
        </div>
    )
}

export default Card

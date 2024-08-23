import React from 'react'
import "../../../../app/Fonts/typograhy.css"
import "../../../../pages/HomePage/UI/Season/Season.css"
import "../../../../shared/UI/line.css"
import "./NewItems.css"
import Card from '../../../../widgets/Card/Card'

function NewItems() {
    return (
        <div className='NewItems'>
            <div className='margin center'>
                <h3 className='Playfair white title'>НОВЫЕ ПОСТУПЛЕНИЯ</h3>
                <div className='line'></div>
            </div>
            <div className='margin'></div>
            <br />
            <div className='cards-catalog'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className='cards-catalog'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>


            </div>
        </div>
    )
}

export default NewItems

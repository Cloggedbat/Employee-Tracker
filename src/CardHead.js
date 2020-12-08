import React from 'react';
import "./Card.css"

function HeadCard() {
    return (

        <>
            <div className='card text-center'>
                <div className='card-header bg-dark'>
                    Buisness name
        </div>
                <div className='card-body' id='card-body'>
                    <h1 className='card-title'>Buisness Name</h1>
                </div>
            </div>

        </>
    )
}

export default HeadCard;
import React from 'react'

export const JournalEntry = ({id}) => {
  return (
    <div className='journal__entry pointer'>
        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://www.w3schools.com/w3images/lights.jpg)'
            }}
        >
        </div>

        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                A new day
            </p>

            <p className='journal__entry-content'>
                {id}
            </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>24</h4>
        </div>
    </div>
  )
}

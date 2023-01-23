import React from 'react'
import './Join.css'

const Join = () => {
  return (
        <div className="join" id="Join">
            <div className="left-j">
                <div>
                    <span className='stroke-text'>ready to</span>
                    <span> level up</span>
                </div>
                <div>
                    <span>your body</span>
                    <span className='stroke-text'> with us?</span>
                </div>
            </div>
            <div className="right-j">
                <div className='email-container'>
                    <input placeholder='Enter your email' type='email' />
                    <button>Join Now</button>
                </div>
            </div>
        </div>
    )
}

export default Join
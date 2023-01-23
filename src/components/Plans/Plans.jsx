import React from 'react'
import './Plans.css'

const Plans = () => {
  return (
    <div className="plans" id="Plans">
        <div className="plans-headers">
            <span className='stroke-text'>ready to start</span>
            <span> your journey</span>
            <span className='stroke-text'> withus</span>
            <span></span>
        </div>
    
    <div className="plans-options">
        <div className='box-1'>
        <span className='box-11'>basic plan</span>
        <span className='box-12'>$ 25</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span className='box-text'>see more details </span>
        <button>Join Now</button>
        </div>
        <div className='box-2'>
        <span className='box-21'>premium plan</span>
        <span className='box-22'>$ 35</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span className='box-text'>see more details </span>
        <button>Join Now</button>
        </div>
        <div className='box-3'>
        <span className='box-31'>pro plan</span>
        <span className='box-32'>$ 45</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span className='box-text'>see more details </span>
        <button>Join Now</button>
        </div>
    </div>
    </div>
  )
}

export default Plans
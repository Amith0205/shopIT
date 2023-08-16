import React from 'react';
import bg from './assets/Website Design Company Gif Animation.gif'

import './utils/css/hero.css'

const Hero = () => {
  return (
    <>
        <div className='flex flex-row bg-img h-screen'>
        <div className='w-[52%] shadow-lg flex flex-col justify-center'>
        <p className=' mx-auto  w-[80%] text-6xl font-bold m-3 text-left'>Order items with the click of a button</p>
          {/* <img src={bg} className='mx-auto w-2/5'/> */}
          <button>Explore</button>
        
        </div>
       

        </div>
    </>
  )
}

export default Hero
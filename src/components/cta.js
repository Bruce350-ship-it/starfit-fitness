import React from 'react'
import cta_pic from '../pictures/pexels-leon-ardho-1552242.jpg'

const Cta = () => {
  return (
    <div style={{backgroundImage: `URL(${cta_pic})`}} className="bg-cover bg-no-repeat bg-center h-full px-20 py-28 flex justify-start">
      <div className='bg-black/50 w-2/3 h-full'>
        <div className="flex flex-col justify-center gap-10 p-10 border border-solid border-white">
          <h1 className="text-5xl text-white font-montserrat font-semibold tracking-tighter">Ready to ignite your fitness<br /> revolution?</h1>
          <p className="text-xl text-white font-openSans">There has never been a better time than right now. Dive into your<br /> fitness journey with StartFit today.</p>
          <button className="text-xl font-openSans bg-yellow-500 border-0 py-2 rounded-full w-1/4"><a href='/contact'>Get Started</a></button>
        </div>
      </div>
    </div>
  )
}

export default Cta
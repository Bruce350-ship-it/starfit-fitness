import React from 'react'
import icon_pic from '../pictures/starFit-icon.png'

const SecHeader = () => {
  return (
    <div>
        <div className='p-5 flex justify-between bg-black text-white'>
          <div className="flex justify-center items-center">
            <img src={icon_pic} alt="icon-pic" className="w-5" />
            <h3 className="text-xl text-white ml-3 font-montserrat font-semibold hover:underline hover:cursor-pointer"><a href="/home">StarFit</a></h3>
          </div>
          <div>
            <a className="text-base font-openSans mx-4 hover:underline hover:cursor-pointer" href="/home">Home</a>
            <a className="text-base font-openSans mx-4 hover:underline hover:cursor-pointer" href="/personal">Personal Training</a>
            <a className="text-base font-openSans mx-4 hover:underline hover:cursor-pointer" href="/pricing">Pricing</a>
            <a className="text-base font-openSans mx-4 hover:underline hover:cursor-pointer" href="/blog">Blog</a>
            <a className="text-base font-openSans mx-4 hover:underline hover:cursor-pointer" href="/contact">Contact</a>
          </div>
        </div>
    </div>
  )
}

export default SecHeader
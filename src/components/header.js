import React from 'react'
import back_pic from '../pictures/pexels-victor-freitas-841130.jpg'
import icon_pic from '../pictures/starFit-icon.png'

const Header = () => {
  return (
    <div style={{backgroundImage: `URL(${back_pic})`}} className="bg-cover bg-no-repeat bg-top relative">
      <div className='bg-black/50 w-full h-full'>
        <div className='p-5 flex justify-between'>
          <div className="flex justify-center items-center">
            <img src={icon_pic} alt="icon-pic" className="w-5" />
            <h3 className="text-xl text-white ml-3 font-montserrat font-semibold hover:underline hover:cursor-pointer"><a href="/home">StarFit</a></h3>
          </div>
          <div>
            <a className="text-base text-white font-openSans mx-4 hover:underline hover:cursor-pointer" href="/home">Home</a>
            <a className="text-base text-white font-openSans mx-4 hover:underline hover:cursor-pointer" href="/personal">Personal Training</a>
            <a className="text-base text-white font-openSans mx-4 hover:underline hover:cursor-pointer" href="/pricing">Pricing</a>
            <a className="text-base text-white font-openSans mx-4 hover:underline hover:cursor-pointer" href="/blog">Blog</a>
            <a className="text-base text-white font-openSans mx-4 hover:underline hover:cursor-pointer" href="/contact">Contact</a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 max-w-3xl mx-auto text-center pt-24 pb-32">
          <h1 className="text-6xl text-white font-montserrat font-semibold tracking-tighter">Fit today,<br />Stronger tomorrow</h1>
          <p className="text-xl text-white font-openSans">Unlock your potential and redefine your limits with us. Our trainers tailor workouts to your ability, ensuring you’re fit today and undeniably stronger tomorrow.</p>
          <button className="text-xl font-openSans bg-yellow-600 border-0 py-2 px-5 rounded-full"><a href='/blog'>Learn More</a></button>
        </div>
      </div>
    </div>
    
  )
}

export default Header
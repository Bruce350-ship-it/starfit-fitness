import React from 'react'
import facebook_icon from '../pictures/icons/For white background/facebook.png'
import twitter_icon from '../pictures/icons/For white background/twitter.png'
import instagram_icon from '../pictures/icons/For white background/instagram.png'
import tiktok_icon from '../pictures/icons/For white background/tik-tok.png'

const Footer = () => {
  return (
    <div className="bg-black text-white px-20 py-40 flex gap-20">
      <div className='w-2/3'>
        <h5 className="text-2xl font-montserrat font-semibold tracking-tight">StartFit</h5>
        <p className="font-openSans leading-7">Personal fitness training service</p>
        <p className="font-openSans mt-6 leading-7">Unlock your potential and redefine your limits with us. Our trainers tailor workouts to your ability, ensuring you’re fit today and undeniably stronger tomorrow. It’s our commitment to your health. We deliver effective, efficient workouts paired with nutritional guidance to help you reach your fitness peak.</p>
      </div>
      <div className='w-1/3'>
        <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Get updated</h5>
        <p className="font-openSans mt-5 leading-7">Stay ahead in your fitness journey with our exclusive tips and offers.</p>
        <div className='flex gap-4 mt-3'>
          <div className='bg-white w-6 rounded-full p-1 transition ease-in-out delay-75 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'><img src={facebook_icon} alt="facebook-icon" /></div>
          <div className='bg-white w-6 rounded-full p-1 transition ease-in-out delay-75 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'><img src={twitter_icon} alt="twitter-icon" /></div>
          <div className='bg-white w-6 rounded-full p-1 transition ease-in-out delay-75 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'><img src={instagram_icon} alt="instagram-icon" /></div>
          <div className='bg-white w-6 rounded-full p-1 transition ease-in-out delay-75 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'><img src={tiktok_icon} alt="tiktok-icon" /></div>
        </div>
        <div className='mt-8'>
          <input placeholder='Type your Email...' className='text-xs text-slate-500 bg-white w-60 py-2 px-3 border-0 rounded-l-full' />
          <button className="text-xs text-black font-openSans font-medium bg-yellow-500 py-2 px-3 border-0 rounded-r-full">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
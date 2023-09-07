import React from 'react'
import { SecHeader, Footer } from '../components'

const Contact = () => {
  return (
    <div>
      <SecHeader />
      <div className="max-w-2xl mx-auto my-40">
        <h3 className="text-4xl font-montserrat font-semibold tracking-tight">Contact</h3>
        <p className="text-lg font-openSans mt-7">Contact us today to secure a space on our next programme.</p>
        <div className=''>
          <div className="mt-8">
            <p className="text-lg font-openSans font-semibold">Name<span className="opacity-70">(required)</span></p>
            <input className="w-full border border-solid border-slate-300 px-6 py-4 mt-2 focus:outline-none" />
          </div>
          <div className="mt-8">
            <p className="text-lg font-openSans font-semibold">Email<span className="opacity-70">(required)</span></p>
            <input className="w-full border border-solid border-slate-300 px-6 py-4 mt-2 focus:outline-none" />
          </div>
          <div className="mt-8">
            <p className="text-lg font-openSans font-semibold">Phone<span className="opacity-70">(required)</span></p>
            <input className="w-full border border-solid border-slate-300 px-6 py-4 mt-2 focus:outline-none" />
          </div>
          <div className="mt-8">
            <p className="text-lg font-openSans font-semibold">Which plan are you interested?<span className="opacity-70">(required)</span></p>
            <input className="w-full border border-solid border-slate-300 px-6 py-4 mt-2 focus:outline-none" />
          </div>
          <div className="mt-8">
            <p className="text-lg font-openSans font-semibold">Message</p>
            <textarea className="w-full border border-solid border-slate-300 px-6 py-4 mt-2 focus:outline-none" rows="6" cols="1" />
          </div>
          <button className="px-10 py-2 mt-6 text-white text-xl bg-black font-openSans font-semibold rounded-full hover:bg-yellow-500 hover:text-black">Register your interest</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
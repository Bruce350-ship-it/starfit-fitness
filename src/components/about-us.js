import React from 'react'

const AboutUs = () => {
  return (
    <div className="py-40">
      <div className="flex flex-col justify-center items-center gap-10 text-center max-w-3xl mx-auto">
        <h4 className="text-xl font-bold opacity-50">ABOUT US</h4>
        <h1 className="text-5xl font-montserrat font-medium tracking-tighter">Why choose StartFit?<br />Discover our unique edge</h1>
        <p className="text-lg font-openSans">It’s our commitment to your health. We deliver effective, efficient workouts paired with nutritional guidance to help you reach your fitness peak.</p>
      </div>
      <div className="flex gap-20 mx-24 mt-20">
        <div className="w-1/3">
          <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Personalised Workouts</h5>
          <p className="text-lg font-openSans mt-5">StartFit’s Expert Coaches are certified fitness pros dedicated to guiding you towards your health goals.</p>
        </div>
        <div className="w-1/3">
          <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Cutting-edge Facilities</h5>
          <p className="text-lg font-openSans mt-5">Our state-of-the-art facilities are designed to enhance your workout experience and fuel your progress.</p>
        </div>
        <div className="w-1/3">
          <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Supportive Community</h5>
          <p className="text-lg font-openSans mt-5">You’ll train alongside like-minded people who encourage and inspire each other towards their fitness goals.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
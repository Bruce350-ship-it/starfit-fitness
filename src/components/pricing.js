import React from 'react'

const Pricing = () => {
  return (
    <div className="py-40">
        <div className="flex flex-col justify-center items-center gap-10 text-center max-w-3xl mx-auto">
            <h4 className="text-xl font-bold opacity-50">SIMPLE PRICING</h4>
            <h1 className="text-5xl font-montserrat font-semibold tracking-tight">Minimal investment,<br />Maximum results</h1>
            <p className="text-lg font-openSans">At StartFit, we believe in making fitness affordable. Enjoy high-value training<br />experiences at incredibly competitive prices.</p>
        </div>

        <div className="flex gap-8 mx-20 mt-24 mb-16">
            <div className="w-1/3">
                <div className="border border-solid border-black p-6">
                    <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Starter Plan</h5>
                    <p className="font-openSans mt-5 leading-7">Perfect for fitness newcomers, this plan eases you into the fitness world with personalised workouts, simple nutrition guidance, and a supportive community. Choose this for a gentle introduction to your fitness journey.</p>
                    <div className="flex items-center">
                        <h1 className="text-5xl font-openSans font-semibold my-7">$160</h1>
                        <p className="font-montserrat ml-2 font-semibold">per month</p>
                    </div>
                    <button className="text-xl font-montserrat font-semibold bg-black text-white py-2 rounded-full w-full hover:bg-yellow-500 hover:text-black">Get Started</button>
                </div>
                <div className="p-7">
                    <ul className="">
                        <li className="font-openSans mb-2">&#43; 2 training sessions per week</li>
                        <li className="font-openSans mb-2">&#43; Basic nutrition guidance</li>
                        <li className="font-openSans mb-2">&#43; Access to all group classes</li>
                    </ul>
                </div>
            </div>
            <div className="w-1/3">
                <div className="border border-solid border-black p-6">
                    <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Performance Plan</h5>
                    <p className="font-openSans mt-5 leading-7">Ideal for those with some fitness background, this plan elevates your routine with personalised training, advanced nutrition advice, and progress tracking. Choose this to take your fitness to the next level.</p>
                    <div className="flex items-center">
                        <h1 className="text-5xl font-openSans font-semibold my-7">$300</h1>
                        <p className="font-montserrat ml-2 font-semibold">per month</p>
                    </div>
                    <button className="text-xl font-montserrat font-semibold bg-black text-white py-2 rounded-full w-full hover:bg-yellow-500 hover:text-black">Get Started</button>
                </div>
                <div className="p-7">
                    <ul className="">
                        <li className="font-openSans mb-2">&#43; 3 training sessions per week</li>
                        <li className="font-openSans mb-2">&#43; Tailored nutrition advice</li>
                        <li className="font-openSans mb-2">&#43; Access to all group classes</li>
                        <li className="font-openSans mb-2">&#43; Monthly body composition scans</li>
                    </ul>
                </div>
            </div>
            <div className="w-1/3">
                <div className="border border-solid border-black p-6">
                    <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Elite Plan</h5>
                    <p className="font-openSans mt-5 leading-7">Tailored for serious fitness enthusiasts or athletes, this comprehensive plan optimises your performance with an intense training regimen, highly personalised nutrition strategies, and precise progress tracking.</p>
                    <div className="flex items-center">
                        <h1 className="text-5xl font-openSans font-semibold my-7">$680</h1>
                        <p className="font-montserrat ml-2 font-semibold">per month</p>
                    </div>
                    <button className="text-xl font-montserrat font-semibold bg-black text-white py-2 rounded-full w-full hover:bg-yellow-500 hover:text-black">Get Started</button>
                </div>
                <div className="p-7">
                    <ul className="">
                        <li className="font-openSans mb-2">&#43; 5 training sessions per week</li>
                        <li className="font-openSans mb-2">&#43; Personalised nutrition plans</li>
                        <li className="font-openSans mb-2">&#43; Priority booking for all group classes</li>
                        <li className="font-openSans mb-2">&#43; Bi-weekly body composition scans</li>
                        <li className="font-openSans">&#43; Ongoing performance assessments</li>
                    </ul>
                </div>
            </div>
        </div>

        <p className="font-openSans leading-7 text-center">Not convinced? We offer a 100% money-back guarantee for all purchases. Try our product<br /> confidently; if you don’t like it, we’ll make it right.</p>
    </div>
  )
}

export default Pricing
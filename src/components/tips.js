import React from 'react'

const Tips = () => {
  return (
    <div className="py-36">
        <div className="flex flex-col justify-center items-center gap-10 text-center max-w-3xl mx-auto">
            <h4 className="text-xl font-bold opacity-50">QUICK START GUIDE</h4>
            <h1 className="text-5xl font-montserrat font-semibold tracking-tight">6-step success:<br />Your fitness roadmap</h1>
            <p className="text-lg font-openSans">We’ve developed a meticulously crafted, comprehensive six-step process that<br /> acts as your personal roadmap, guiding you steadily towards your fitness goals.</p>
        </div>
        <div className="flex flex-col gap-14 mx-20 mt-16">
            <div className="flex gap-20">
                <div className="flex flex-col w-1/3">
                    <p className="font-semibold text-base">01.</p>
                    <div className="">
                        <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Personalised Fitness Assessment</h5>
                        <p className="font-openSans my-5">We begin with a comprehensive understanding of your history, goals, and lifestyle. This holistic approach, encompassing habits and nutrition, ensure a tailor-made fitness journey just for you.</p>
                    </div>
                    <a className="text-lg font-semibold underline hover:no-underline hover:cursor-pointer">Fitness Assessment&rarr;</a>
                </div>
                <div className="flex flex-col w-1/3">
                    <p className="font-semibold text-base">02.</p>
                    <div className="">
                        <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Basic Movement Assessments</h5>
                        <p className="font-openSans my-5">In our assessments, we prioritise perfecting your techniques to ensure safe, effective training. Through meticulous movement evaluations, we facilitate the correct form, fostering long-term health.</p>
                    </div>
                    <a className="text-lg font-semibold underline hover:no-underline hover:cursor-pointer">Movement Assessments&rarr;</a>
                </div>
                <div className="flex flex-col w-1/3">
                    <p className="font-semibold text-base">03.</p>
                    <div className="">
                        <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Precision Body Composition Scan</h5>
                        <p className="font-openSans my-5">Using the top-tier machine, we track your body. These regular, detailed scans become the guiding compass for our personalised fitness and nutrition strategies, continuously adapted to your body’s needs.</p>
                    </div>
                    <a className="text-lg font-semibold underline hover:no-underline hover:cursor-pointer">Composition Scan&rarr;</a>
                </div>
            </div>
            <div className="flex gap-20">
                <div className="flex flex-col w-1/3">
                    <p className="font-semibold text-base">04.</p>
                    <div className="">
                        <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Adaptable Fitness Assessments</h5>
                        <p className="font-openSans my-5">We cater to all levels, setting a baseline for tracking your progress. From beginners to advanced, our fitness assessments ensure visible, measurable improvements.</p>
                    </div>
                    <a className="text-lg font-semibold underline hover:no-underline hover:cursor-pointer">Fitness Assessment&rarr;</a>
                </div>
                <div className="flex flex-col w-1/3">
                    <p className="font-semibold text-base">05.</p>
                    <div className="">
                        <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Personalised Programs & Consistent Support</h5>
                        <p className="font-openSans my-5">With deep insight into your fitness profile, our coaches devise the perfect program for you. They offer unwavering support and drive you towards your goals.</p>
                    </div>
                    <a className="text-lg font-semibold underline hover:no-underline hover:cursor-pointer">Programs & Support&rarr;</a>
                </div>
                <div className="flex flex-col w-1/3">
                    <p className="font-semibold text-base">06.</p>
                    <div className="">
                        <h5 className="text-2xl font-montserrat font-semibold tracking-tight">Personalised Nutrition Guidance</h5>
                        <p className="font-openSans my-5">Understanding your nutritional needs is vital for optimal health. We aim to help you discover the ideal nutrition plan for your unique needs and fitness goals for the future.</p>
                    </div>
                    <a className="text-lg font-semibold underline hover:no-underline hover:cursor-pointer">Nutrition Guidance&rarr;</a>
                </div>
            </div>        
        </div>
    </div>
  )
}

export default Tips
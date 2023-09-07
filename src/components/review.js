import React from 'react'
import lady_pic from '../pictures/pexels-mwabonje-ringa-1820575.jpg'

const Review = () => {
  return (
    <div className="bg-yellow-500 py-40">
        <div className="flex mx-20 justify-between">
            <h4 className="text-lg font-bold w-1/4">WHAT PEOPLE SAY</h4>
            <div className="w-3/4">
                <p className="text-4xl font-openSans leading-snug">StartFit didn’t just change my workout routine, it revolutionised my entire lifestyle. I’ve never felt stronger, healthier or happier!</p>
                <div className="flex gap-4 mt-5">
                    <img src={lady_pic} alt='lady-pic' className="w-12 rounded-full" />
                    <div className="">
                        <h5 className="font-bold">Kate Williams</h5>
                        <p className="">in Hove</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Review
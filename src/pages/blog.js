import React from 'react'
import { SecHeader, Footer } from '../components'
import blog_pic from '../pictures/pexels-pixabay-260409.jpg'

const Blog = () => {
  return (
    <div>
      <SecHeader />
      <div className="max-w-2xl mx-auto">
        <h5 className="text-2xl font-montserrat font-semibold mt-40">Fitness</h5>
        <div className="mt-20 mb-40">
          <div className="flex flex-col gap-8 mb-36">
            <h3 className="text-4xl font-montserrat font-semibold tracking-tight"><a className="hover:underline hover:cursor-pointer" href="/boosting-metabolism">Boosting Your Metabolism: The Fast Track to a Healthier You</a></h3>
            <img src={blog_pic} alt="blog-pic" />
            <p className="text-lg font-openSans">Metabolism is the process by which your body converts what you eat and drink into energy. A fast metabolism can help you burn more calories, lose weight more efficiently, and feel more energetic. So, how can you rev up your metabolic engine? Here are some top tips: Remember, while these tips can assist in boosting...</p>
            <div className="flex justify-between">
              <p><a className="hover:underline hover:cursor-pointer">July 26, 2023</a></p>
              <p><a className="hover:underline hover:cursor-pointer">Fitness</a></p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-4xl font-montserrat font-semibold tracking-tight"><a className="hover:underline hover:cursor-pointer" href="/unleashing-power">Unleashing Power with Mini Resistance Bands</a></h3>
            <p className="text-lg font-openSans">Compact, portable, and versatile – mini resistance bands are the unsung heroes of home and gym workouts alike. These small yet powerful tools pack a punch when it comes to enhancing your fitness routine. Here are some of the key benefits: Mini resistance bands are a versatile, portable, and cost-effective tool for enhancing your workouts...</p>
            <div className="flex justify-between">
              <p><a className="hover:underline hover:cursor-pointer">July 26, 2023</a></p>
              <p><a className="hover:underline hover:cursor-pointer">Fitness</a></p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Blog
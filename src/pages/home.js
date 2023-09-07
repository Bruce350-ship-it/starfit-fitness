import React from 'react'
import { Header, Links, Tips, Review, Pricing, Cta, Footer, AboutUs } from "../components";

const Home = () => {
  return (
    <div>
        <Header />
        <AboutUs />
        <Links />
        <Tips />
        <Review />
        <Pricing />
        <Cta />
        <Footer />
    </div>
  )
}

export default Home
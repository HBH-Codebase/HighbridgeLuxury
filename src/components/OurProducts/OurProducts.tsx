// import SwiperProduct from "../Swiper/Swiper"

import SwiperProduct from "../Swiper/Swiper"

const OurProducts = () => {
  return (
    <div className="px-10 lg:container">
      <h1 className="heading-text mb-5">
        Our Projects
      </h1>
      <div className="w-full overflow-hidden mb-20">
        <h1 className="font-bold text-lg md:text-xl lg:text-3xl gradient-text text-center mb-5">
          Highbridge Luxury Projects
        </h1>
        <p className="text-sm md:text-base lg:text-xl text-primary-text font-semibold text-center lg:px-20 tracking-wider leading-10">
          We are known for mordern high-class projects and structures. Highbriddge Luxury has lots of projects ranging from lands, buildings, architectural designs and project management as well. We have handled over 500+ projects nationwide and our legacy preceeds us.
        </p>
        <div className="px-20 mt-10">
          <SwiperProduct />
        </div>
      </div>
    </div>
  )
}

export default OurProducts

import { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { OurProjects } from '@/constants';
import PropertyCard from '../shared/propertyCard/PropertyCard';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const SwiperProduct = () => {
  const [swiper, setSwiper] = useState<any>(null);

  const handleNextClick = () => {
    if (swiper) {
     swiper.slideNext();
    }
  }

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  }

  return (
    <>
    <div className='w-full'>
      <Swiper
        spaceBetween={100}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
        autoplay={{delay: 3000}}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          968: {
            slidesPerView: 2.5,
            spaceBetween: 40
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 60
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 100
          }
        }}
      >
        {OurProjects.map((item) => (
          <SwiperSlide key={Math.floor(Math.random() * 1000)}>
            <PropertyCard
              name={item.name}
              image={item.image}
              price={item.price}
              features={item.features}
              id={item.id}
              description={item.description}
              location={item.location}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex-between mt-10 w-full md:w-24'>
        <button onClick={handlePrevClick}>
          <FiArrowLeftCircle size={40} color='#F2AF29' />
        </button>
        <button onClick={handleNextClick}>
          <FiArrowRightCircle size={40} color='#F2AF29' />
        </button>
      </div>
    </div>
  </>
  )
}

export default SwiperProduct;

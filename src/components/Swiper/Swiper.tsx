import { useRef } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { OurProjects } from '@/constants';
import PropertyCard from '../shared/propertyCard/PropertyCard';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const SwiperProduct = () => {
  const swiperRef = useRef<Swiper | null>(null);

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  return (
    <>
    <div className='hidden lg:block swiper'>
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={3}
        speed={500}
        loop={true}
        touchRatio={1.5}
        pagination={{ clickable: true }}
        >
        {OurProjects.length > 0 ?
          <>
          <div className='swipper-wrapper'>
            {OurProjects.map((item) => (
              <div className='swipper-slide'>
                <SwiperSlide key={item.id}>
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
              </div>
            ))}
          </div>
          </>
          :
          <p className="text-slate-400 font-semibold text-center">No products yet</p>
        }
      </Swiper>
      <div className='flex-between mt-10 w-24'>
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

import { useRef, useState } from "react";

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(direction: "left" | "right") {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const scrollWidth = carouselRef.current.scrollWidth;
      const scrollLeft = carouselRef.current.scrollLeft;

      if (direction === "left") {
        carouselRef.current.scrollLeft =
          scrollLeft - scrollAmount < 0 ? 0 : scrollLeft - scrollAmount;
      } else {
        carouselRef.current.scrollLeft =
          scrollLeft + scrollAmount > scrollWidth
            ? scrollWidth
            : scrollLeft + scrollAmount;
      }
    }
  }

  return (
    <>
      <div
        className="flex flex-row w-max overflow-x-scroll scroll-smooth"
        ref={carouselRef}
      >
        {items.map((item, index) => (
          <div
            key={`${items}-${index}`}
            className="min-w-[310px] h-[470px] mr-2"
          >
            <img
              src={`/assets/${item}`}
              alt="carousel-item"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-10">
        <button
          className="w-10 h-10 text-3xl flex-center bg-gray-300 rounded-full shadow-md"
          onClick={() => scrollCarousel("left")}
        >
          {"<"}
        </button>
        <button
          className="w-10 h-10 text-3xl flex-center bg-gray-300 rounded-full shadow-md"
          onClick={() => scrollCarousel("right")}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default Carousel;

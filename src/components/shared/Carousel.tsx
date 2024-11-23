import { useRef } from "react";

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(direction: "left" | "right") {
    if (carouselRef.current) {
      const scrollAmount = 200;
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
    <div className="w-full flex-center flex-col">
      <div
        className="flex w-full lg:w-[300px] gap-10 overflow-hidden"
        ref={carouselRef}
      >
        {items.map((item, index) => (
          <img
            key={index}
            src={`/assets/${item}`}
            alt="carousel-item"
            className="w-full object-cover"
          />
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
    </div>
  );
};

export default Carousel;

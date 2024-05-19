import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PropertyCard from "../shared/propertyCard/PropertyCard";
import { Properties } from "@/constants";

const PropertyCarousel = () => {
  return (
    <>
      <Carousel className="hidden lg:block w-full max-w-[80%]">
        <CarouselContent className="-ml-1">
          {Properties.map((item) => (
            <CarouselItem key={item.id} className="basis-1/3 pl-4 py-6">
              <PropertyCard
                name={item.name}
                image={item.image}
                price={item.price}
                features={item.features}
                id={item.id}
                description={item.description}
                location={item.location}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel className="lg:hidden w-full md:max-w-[60%]">
        <CarouselContent className="md:ml-14">
          {Properties.map((item) => (
            <CarouselItem key={item.id} className="pl-4 py-6">
              <PropertyCard
                name={item.name}
                image={item.image}
                price={item.price}
                features={item.features}
                id={item.id}
                description={item.description}
                location={item.location}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}

export default PropertyCarousel;

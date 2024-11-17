type TNavLinks = {
  label: string;
  path: string;
};

export const NavLinks = <TNavLinks[]>[
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about-us",
  },
  {
    label: "Our Projects",
    path: "/our-projects",
  },
  {
    label: "Realtors Arena",
    path: "https://www.highbridgehomesltd.com/become-realtor/",
  },
];

export type IProperties = {
  id: number;
  name: string;
  features: {
    bedrooms: number;
    parkingSpace: number;
    Toilet: number;
  };
  price: string;
  image: string;
  description: string;
  location: string;
};

export const Properties = <IProperties[]>[
  {
    id: 1,
    name: "Majestic Lagos",
    features: {
      bedrooms: 2,
      parkingSpace: 2,
      Toilet: 3,
    },
    price: "76,000,000",
    image: "assets/logos/majestcLagos.jpg",
    description:
      "luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community",
    location: "Ibeju Lekki",
  },
];

export interface IServices {
  title: string;
  description: string;
}

export const Services: IServices[] = [
  {
    title: "Investment Plans",
    description:
      "We offer juicy investment packages with high returns that even the banks cannot offer. Invest in our Buy2Flip package and enjoy up to 40% ROI in 12 months.",
  },
  {
    title: "Property Development",
    description:
      "Highbriddge luxury Development offers professional property development services. Do you have a property that needs to be sold out in no time? Highrbridge Luxury can make that happen for you.",
  },
  {
    title: "Real Estate Consultation",
    description:
      "Looking to delve into the Real Estate world but you are feeling overwhelmed with the many obstacles on the way? Visit our offices around and allow us hold your hand through navigating the maze of Real Estate.",
  },
];

export const OurProjects = [
  {
    id: 1,
    name: "Majestic Lagos",
    features: {
      bedrooms: 2,
      parkingSpace: 2,
      Toilet: 3,
    },
    price: "12,000,000",
    image: "assets/logos/majestcLagos.jpg",
    description:
      "luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community",
    location: "Ibeju Lekki",
  },
  {
    id: 2,
    name: "Majestic Lagos",
    features: {
      bedrooms: 2,
      parkingSpace: 2,
      Toilet: 3,
    },
    price: "76,000,000",
    image: "assets/logos/majestcLagos.jpg",
    description:
      "luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community",
    location: "Ibeju Lekki",
  },
  {
    id: 3,
    name: "Majestic Lagos",
    features: {
      bedrooms: 2,
      parkingSpace: 2,
      Toilet: 3,
    },
    price: "76,000,000",
    image: "assets/logos/majestcLagos.jpg",
    description:
      "luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community",
    location: "Ibeju Lekki",
  },
  {
    id: 4,
    name: "Majestic Lagos",
    features: {
      bedrooms: 2,
      parkingSpace: 2,
      Toilet: 3,
    },
    price: "76,000,000",
    image: "assets/logos/majestcLagos.jpg",
    description:
      "luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community",
    location: "Ibeju Lekki",
  },
  {
    id: 5,
    name: "Majestic Lagos",
    features: {
      bedrooms: 2,
      parkingSpace: 2,
      Toilet: 3,
    },
    price: "76,000,000",
    image: "assets/logos/majestcLagos.jpg",
    description:
      "luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community",
    location: "Ibeju Lekki",
  },
];

export interface ITestimonials {
  name: string;
  image: string;
  testimony: string;
}

export const Reviews: ITestimonials[] = [
  {
    name: "Jerry Lukman",
    image: "",
    testimony:
      "Absolutely stunning!! The attention to detail in this home is remarkable.",
  },
  {
    name: "Jerry Lukman",
    image: "",
    testimony: "Great location and spacious layout. Perfect for layout.",
  },
  {
    name: "Jerry Lukman",
    image: "",
    testimony:
      "Smooth buying process. The realtors were professionals and helpful.",
  },

  {
    name: "Jerry Lukman",
    image: "",
    testimony:
      "The amenities here are top-notch, i love the pool and fitness center.",
  },
];

export const BlogPosts = [];

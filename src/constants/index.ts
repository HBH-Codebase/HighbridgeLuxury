type TNavLinks = {
  label: string;
  path: string;
}

export const NavLinks = <TNavLinks[]>[
  {
    label: "Home",
    path: '/',
  },
  {
    label: "About Us",
    path: '/about-us',
  },
  {
    label: "Our Projects",
    path: '/our-projects',
  },
  {
    label: "Realtors Arena",
    path: '/realtors-arena',
  },
]

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
}

export const Properties =<IProperties[]> [
  {
    id: 1,
    name: 'Majestic Lagos',
    features: {
      bedrooms: 2,
      parkingSpace: 2,
      Toilet: 3
    },
    price: '76,000,000',
    image: 'assets/logos/majestcLagos.jpg',
    description: 'luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community',
    location: 'Ibeju Lekki'
  }
]

export interface IServices {
  title: string;
  description: string;
}

export const Services: IServices[] = [
  {
    title: 'Investment Plans',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo. Quia, excepturi amet commodi fugiat iure, rem officia, corporis dolor explicabo consectetur nam omnis modi architecto sequi voluptatibus tempore accusamus?'
  },
  {
    title: 'Property Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo. Quia, excepturi amet commodi fugiat iure, rem officia, corporis dolor explicabo consectetur nam omnis modi architecto sequi voluptatibus tempore accusamus?'
  },
  {
    title: 'Real Estate Consultation',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo. Quia, excepturi amet commodi fugiat iure, rem officia, corporis dolor explicabo consectetur nam omnis modi architecto sequi voluptatibus tempore accusamus?'
  },
  {
    title: 'Architecture and Engineering',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo. Quia, excepturi amet commodi fugiat iure, rem officia, corporis dolor explicabo consectetur nam omnis modi architecto sequi voluptatibus tempore accusamus?'
  },
  {
    title: 'Facility Management',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo. Quia, excepturi amet commodi fugiat iure, rem officia, corporis dolor explicabo consectetur nam omnis modi architecto sequi voluptatibus tempore accusamus?'
  }
]

export const OurProjects = [
  {
    id: 1,
    name: 'Majestic Lagos',
    features: {
      bedrooms: 2,
      parkingSpace: 2,
      Toilet: 3
    },
    price: '76,000,000',
    image: 'assets/logos/majestcLagos.jpg',
    description: 'luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community',
    location: 'Ibeju Lekki'
  }
];

export interface ITestimonials {
  name: string;
  image: string;
  testimony: string;
}

export const Reviews: ITestimonials[] = [
  {
    name: 'Jerry Lukman',
    image: '',
    testimony: 'Absolutely stunning!! The attention to detail in this home is remarkable.',
  },
  {
    name: 'Jerry Lukman',
    image: '',
    testimony: 'Great location and spacious layout. Perfect for layout.',
  },
  {
    name: 'Jerry Lukman',
    image: '',
    testimony: 'Smooth buying process. The realtors were professionals and helpful.',
  },

  {
    name: 'Jerry Lukman',
    image: '',
    testimony: 'The amenities here are top-notch, i love the pool and fitness center.',
}]

export const BlogPosts = [];
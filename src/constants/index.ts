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
    name: 'Highbridge Luxury',
    features: {
      bedrooms: 2,
      parkingSpace: 2,
      Toilet: 3
    },
    price: '76,000,000',
    image: 'assets/property-1.jpg',
    description: 'luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community',
    location: 'Abijo, GRA'
  },
  {
    id: 2,
    name: 'Highbridge Luxury',
    features: [
      {
        bedrooms: 2,
        parkingSpace: 2,
        Toilet: 3
      }
    ],
    price: '76,000,000',
    image: 'assets/property-1.jpg',
    description: 'luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community',
    location: 'Abijo, GRA'
  },
  {
    id: 3,
    name: 'Highbridge Luxury',
    features: [
      {
        bedrooms: 2,
        parkingSpace: 2,
        Toilet: 3
      }
    ],
    price: '76,000,000',
    image: 'assets/property-1.jpg',
    description: 'luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community',
    location: 'Abijo, GRA'
  },
  {
    id:4,
    name: 'Highbridge Luxury',
    features: [
      {
        bedrooms: 2,
        parkingSpace: 2,
        Toilet: 3
      }
    ],
    price: '76,000,000',
    image: 'assets/property-1.jpg',
    description: 'luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community',
    location: 'Abijo, GRA'
  },
  {
    id: 5,
    name: 'Highbridge Luxury',
    features: [
      {
        bedrooms: 2,
        parkingSpace: 2,
        Toilet: 3
      }
    ],
    price: '76,000,000',
    image: 'assets/property-1.jpg',
    description: 'luxury apartments to meet all your luxurious lifestyle which should elevate your status in the community',
    location: 'Abijo, GRA'
  }
]
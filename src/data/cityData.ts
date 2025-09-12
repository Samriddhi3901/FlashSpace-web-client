export interface CityData {
  id: string;
  name: string;
  description: string;
  famousMonuments: string[];
  backgroundInfo: string;
  heroImage: string;
  monumentImages: string[];
  properties: Property[];
}

export interface Property {
  id: string;
  name: string;
  address: string;
  type: string;
  price: string;
  features: string[];
  images: string[];
  rating: number;
  reviews: number;
  availability: string;
}

export const cityData: Record<string, CityData> = {
  mumbai: {
    id: "mumbai",
    name: "Mumbai",
    description: "The financial capital of India, Mumbai is a bustling metropolis that never sleeps. Home to Bollywood, major corporations, and iconic landmarks.",
    famousMonuments: ["Gateway of India", "Marine Drive", "Chhatrapati Shivaji Terminus", "Elephanta Caves", "Haji Ali Dargah"],
    backgroundInfo: "Mumbai, formerly known as Bombay, is the capital city of Maharashtra and the most populous city in India. It's the financial, commercial, and entertainment capital of India, housing the headquarters of numerous Indian companies and multinational corporations.",
    heroImage: "/src/assets/mumbai-gateway-of-india.jpg",
    monumentImages: [
      "/lovable-uploads/49fbe989-fb43-4562-b816-006c4fe48ecd.png",
      "/lovable-uploads/6295cecd-7c61-4f7d-b1eb-3062cb798cce.png"
    ],
    properties: [
      {
        id: "mumbai-1",
        name: "Bandra Kurla Complex Office",
        address: "BKC, Bandra East, Mumbai",
        type: "Virtual Office",
        price: "₹1,299/month",
        features: ["Prime Location", "GST Registration", "Mail Handling", "Business Address"],
        images: ["/lovable-uploads/81b34a7c-74b6-4999-b549-e53aac7f6a16.png"],
        rating: 4.8,
        reviews: 152,
        availability: "Available"
      },
      {
        id: "mumbai-2", 
        name: "Lower Parel Business Hub",
        address: "Lower Parel, Mumbai",
        type: "Coworking Space",
        price: "₹2,499/month",
        features: ["24/7 Access", "High-Speed WiFi", "Meeting Rooms", "Pantry"],
        images: ["/lovable-uploads/8c7281e3-7a9c-40ab-be77-442b12d1ed61.png"],
        rating: 4.7,
        reviews: 89,
        availability: "Available"
      }
    ]
  },
  delhi: {
    id: "delhi",
    name: "Delhi",
    description: "The heart of India, Delhi combines rich history with modern infrastructure. The capital city offers premium business locations and cultural heritage.",
    famousMonuments: ["Red Fort", "India Gate", "Qutub Minar", "Lotus Temple", "Humayun's Tomb"],
    backgroundInfo: "Delhi, officially the National Capital Territory of Delhi, is the capital of India. It's a city where ancient and modern worlds collide, offering a unique blend of historical monuments and contemporary business districts.",
    heroImage: "/src/assets/delhi-india-gate.jpg",
    monumentImages: [
      "/lovable-uploads/1880c486-fd35-40fb-bd96-35bc9be21cfd.png",
      "/lovable-uploads/49fbe989-fb43-4562-b816-006c4fe48ecd.png"
    ],
    properties: [
      {
        id: "delhi-1",
        name: "Connaught Place Premium Office",
        address: "Connaught Place, New Delhi",
        type: "Virtual Office", 
        price: "₹999/month",
        features: ["Central Location", "Metro Connectivity", "GST Registration", "Professional Address"],
        images: ["/lovable-uploads/6295cecd-7c61-4f7d-b1eb-3062cb798cce.png"],
        rating: 4.9,
        reviews: 203,
        availability: "Available"
      },
      {
        id: "delhi-2",
        name: "Gurgaon Business Park",
        address: "Sector 44, Gurgaon",
        type: "Managed Office",
        price: "₹3,999/month", 
        features: ["Fully Furnished", "Dedicated Desk", "IT Support", "Parking"],
        images: ["/lovable-uploads/81b34a7c-74b6-4999-b549-e53aac7f6a16.png"],
        rating: 4.6,
        reviews: 127,
        availability: "Available"
      }
    ]
  },
  bangalore: {
    id: "bangalore",
    name: "Bangalore", 
    description: "India's Silicon Valley, Bangalore is the tech hub with a pleasant climate and vibrant startup ecosystem.",
    famousMonuments: ["Bangalore Palace", "Tipu Sultan's Summer Palace", "Bull Temple", "Vidhana Soudha", "Cubbon Park"],
    backgroundInfo: "Bangalore, officially known as Bengaluru, is the capital of Karnataka. Known as the 'Silicon Valley of India', it's home to numerous tech companies and startups, making it a prime destination for business and innovation.",
    heroImage: "/src/assets/bangalore-palace.jpg",
    monumentImages: [
      "/lovable-uploads/df6fd2c0-d34a-47ac-b9ad-3d8175a7ecf6.png",
      "/lovable-uploads/1880c486-fd35-40fb-bd96-35bc9be21cfd.png"
    ],
    properties: [
      {
        id: "bangalore-1",
        name: "Koramangala Tech Hub",
        address: "Koramangala, Bangalore",
        type: "Coworking Space",
        price: "₹1,899/month",
        features: ["Tech-Friendly", "High-Speed Internet", "Collaboration Zones", "Event Space"],
        images: ["/lovable-uploads/49fbe989-fb43-4562-b816-006c4fe48ecd.png"],
        rating: 4.8,
        reviews: 178,
        availability: "Available"
      }
    ]
  },
  hyderabad: {
    id: "hyderabad",
    name: "Hyderabad",
    description: "The City of Pearls, Hyderabad blends rich history with modern IT industry. A major technology hub in southern India.",
    famousMonuments: ["Charminar", "Golconda Fort", "Qutb Shahi Tombs", "Hussain Sagar Lake", "Ramoji Film City"],
    backgroundInfo: "Hyderabad is the capital of Telangana and a major center for the technology industry. Known as Cyberabad, it houses many multinational corporations and is famous for its biryani and pearl trade.",
    heroImage: "/src/assets/hyderabad-charminar.jpg",
    monumentImages: [
      "/lovable-uploads/1880c486-fd35-40fb-bd96-35bc9be21cfd.png",
      "/lovable-uploads/49fbe989-fb43-4562-b816-006c4fe48ecd.png"
    ],
    properties: [
      {
        id: "hyderabad-1",
        name: "HITEC City Business Hub",
        address: "HITEC City, Hyderabad",
        type: "Virtual Office",
        price: "₹899/month",
        features: ["Tech Hub Location", "GST Registration", "Mail Handling", "Business Address"],
        images: ["/lovable-uploads/6295cecd-7c61-4f7d-b1eb-3062cb798cce.png"],
        rating: 4.7,
        reviews: 134,
        availability: "Available"
      }
    ]
  },
  chennai: {
    id: "chennai",
    name: "Chennai",
    description: "The Detroit of India, Chennai is a major cultural and industrial center known for its automotive industry and rich Tamil heritage.",
    famousMonuments: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George", "San Thome Cathedral", "Mahabalipuram"],
    backgroundInfo: "Chennai, formerly Madras, is the capital of Tamil Nadu. It's a major cultural, economic and educational center of South India, known for its automobile industry and classical music.",
    heroImage: "/src/assets/chennai-marina-beach.jpg",
    monumentImages: [
      "/lovable-uploads/81b34a7c-74b6-4999-b549-e53aac7f6a16.png",
      "/lovable-uploads/8c7281e3-7a9c-40ab-be77-442b12d1ed61.png"
    ],
    properties: [
      {
        id: "chennai-1",
        name: "OMR Tech Corridor Office",
        address: "Old Mahabalipuram Road, Chennai",
        type: "Coworking Space",
        price: "₹1,599/month",
        features: ["IT Corridor", "High-Speed WiFi", "Meeting Rooms", "Parking"],
        images: ["/lovable-uploads/df6fd2c0-d34a-47ac-b9ad-3d8175a7ecf6.png"],
        rating: 4.6,
        reviews: 98,
        availability: "Available"
      }
    ]
  },
  kolkata: {
    id: "kolkata",
    name: "Kolkata",
    description: "The City of Joy, Kolkata is India's cultural capital with rich literature, arts, and intellectual heritage.",
    famousMonuments: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple", "Indian Museum", "Kalighat Temple"],
    backgroundInfo: "Kolkata, formerly Calcutta, is the capital of West Bengal. Known as the cultural capital of India, it's famous for its literary, artistic and revolutionary heritage.",
    heroImage: "/src/assets/kolkata-victoria-memorial.jpg",
    monumentImages: [
      "/lovable-uploads/1880c486-fd35-40fb-bd96-35bc9be21cfd.png",
      "/lovable-uploads/49fbe989-fb43-4562-b816-006c4fe48ecd.png"
    ],
    properties: [
      {
        id: "kolkata-1",
        name: "Salt Lake Business District",
        address: "Salt Lake City, Kolkata",
        type: "Virtual Office",
        price: "₹799/month",
        features: ["Business District", "Professional Address", "Mail Handling", "GST Support"],
        images: ["/lovable-uploads/6295cecd-7c61-4f7d-b1eb-3062cb798cce.png"],
        rating: 4.5,
        reviews: 87,
        availability: "Available"
      }
    ]
  },
  pune: {
    id: "pune",
    name: "Pune",
    description: "The Oxford of the East, Pune is a major educational and IT hub with pleasant weather and rich Maratha history.",
    famousMonuments: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort", "Dagdusheth Halwai Temple", "Pataleshwar Cave Temple"],
    backgroundInfo: "Pune is a major city in Maharashtra, known for its educational institutions, IT industry, and automobile manufacturing. It's often called the cultural capital of Maharashtra.",
    heroImage: "/src/assets/pune-shaniwar-wada.jpg",
    monumentImages: [
      "/lovable-uploads/81b34a7c-74b6-4999-b549-e53aac7f6a16.png",
      "/lovable-uploads/8c7281e3-7a9c-40ab-be77-442b12d1ed61.png"
    ],
    properties: [
      {
        id: "pune-1",
        name: "Hinjewadi IT Park Office",
        address: "Hinjewadi Phase 1, Pune",
        type: "Managed Office",
        price: "₹2,299/month",
        features: ["IT Park Location", "Fully Furnished", "24/7 Access", "Cafeteria"],
        images: ["/lovable-uploads/df6fd2c0-d34a-47ac-b9ad-3d8175a7ecf6.png"],
        rating: 4.8,
        reviews: 156,
        availability: "Available"
      }
    ]
  },
  ahmedabad: {
    id: "ahmedabad",
    name: "Ahmedabad",
    description: "The Manchester of India, Ahmedabad is Gujarat's largest city known for its textile industry and Gujarati culture.",
    famousMonuments: ["Sabarmati Ashram", "Adalaj Stepwell", "Akshardham Temple", "Jama Masjid", "Kankaria Lake"],
    backgroundInfo: "Ahmedabad is the largest city in Gujarat and former capital of the state. It's known for its textile industry, Gandhi's Sabarmati Ashram, and rich architectural heritage.",
    heroImage: "/src/assets/ahmedabad-sabarmati-ashram.jpg",
    monumentImages: [
      "/lovable-uploads/1880c486-fd35-40fb-bd96-35bc9be21cfd.png",
      "/lovable-uploads/49fbe989-fb43-4562-b816-006c4fe48ecd.png"
    ],
    properties: [
      {
        id: "ahmedabad-1",
        name: "Satellite Business Center",
        address: "Satellite, Ahmedabad",
        type: "Virtual Office",
        price: "₹699/month",
        features: ["Commercial Hub", "Professional Address", "Mail Services", "GST Registration"],
        images: ["/lovable-uploads/6295cecd-7c61-4f7d-b1eb-3062cb798cce.png"],
        rating: 4.4,
        reviews: 76,
        availability: "Available"
      }
    ]
  },
  jaipur: {
    id: "jaipur",
    name: "Jaipur",
    description: "The Pink City, Jaipur is the capital of Rajasthan known for its royal palaces, forts, and vibrant culture.",
    famousMonuments: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar", "Nahargarh Fort"],
    backgroundInfo: "Jaipur is the capital and largest city of Rajasthan. Known as the Pink City for its distinctive colored buildings, it's famous for its royal heritage and architectural marvels.",
    heroImage: "/src/assets/jaipur-hawa-mahal.jpg",
    monumentImages: [
      "/lovable-uploads/81b34a7c-74b6-4999-b549-e53aac7f6a16.png",
      "/lovable-uploads/8c7281e3-7a9c-40ab-be77-442b12d1ed61.png"
    ],
    properties: [
      {
        id: "jaipur-1",
        name: "Malviya Nagar Business Hub",
        address: "Malviya Nagar, Jaipur",
        type: "Coworking Space",
        price: "₹1,199/month",
        features: ["Heritage City Location", "Modern Amenities", "Meeting Rooms", "Cultural Ambiance"],
        images: ["/lovable-uploads/df6fd2c0-d34a-47ac-b9ad-3d8175a7ecf6.png"],
        rating: 4.6,
        reviews: 92,
        availability: "Available"
      }
    ]
  },
  surat: {
    id: "surat",
    name: "Surat",
    description: "The Diamond City of India, Surat is a major commercial center known for textile and diamond industries.",
    famousMonuments: ["Surat Castle", "Sardar Patel Museum", "Dumas Beach", "Dutch Garden", "Gopi Talav"],
    backgroundInfo: "Surat is a city in Gujarat known for its diamond cutting and polishing industry. It's one of the fastest-growing cities in India and a major textile hub.",
    heroImage: "/src/assets/surat-castle.jpg",
    monumentImages: [
      "/lovable-uploads/1880c486-fd35-40fb-bd96-35bc9be21cfd.png",
      "/lovable-uploads/49fbe989-fb43-4562-b816-006c4fe48ecd.png"
    ],
    properties: [
      {
        id: "surat-1",
        name: "Ring Road Business Center",
        address: "Ring Road, Surat",
        type: "Virtual Office",
        price: "₹599/month",
        features: ["Commercial Area", "Diamond Hub Access", "Professional Address", "Trade Support"],
        images: ["/lovable-uploads/6295cecd-7c61-4f7d-b1eb-3062cb798cce.png"],
        rating: 4.3,
        reviews: 65,
        availability: "Available"
      }
    ]
  },
  lucknow: {
    id: "lucknow",
    name: "Lucknow",
    description: "The City of Nawabs, Lucknow is the capital of Uttar Pradesh known for its rich cultural heritage and cuisine.",
    famousMonuments: ["Bara Imambara", "Chota Imambara", "Rumi Darwaza", "British Residency", "Ambedkar Memorial"],
    backgroundInfo: "Lucknow is the capital city of Uttar Pradesh. Known for its multicultural ambiance, it's famous for its Awadhi cuisine, classical music, and Mughal architecture.",
    heroImage: "/src/assets/lucknow-bara-imambara.jpg",
    monumentImages: [
      "/lovable-uploads/81b34a7c-74b6-4999-b549-e53aac7f6a16.png",
      "/lovable-uploads/8c7281e3-7a9c-40ab-be77-442b12d1ed61.png"
    ],
    properties: [
      {
        id: "lucknow-1",
        name: "Gomti Nagar Business District",
        address: "Gomti Nagar, Lucknow",
        type: "Virtual Office",
        price: "₹749/month",
        features: ["Government Hub", "Professional Address", "Easy Connectivity", "Administrative Support"],
        images: ["/lovable-uploads/df6fd2c0-d34a-47ac-b9ad-3d8175a7ecf6.png"],
        rating: 4.2,
        reviews: 54,
        availability: "Available"
      }
    ]
  }
};

export const getAllCities = () => Object.values(cityData);
export const getCityById = (id: string) => cityData[id];
export const getCityByName = (name: string) => {
  const cityId = name.toLowerCase().replace(/\s+/g, '');
  return cityData[cityId];
};
export interface LondonArea {
  slug: string;
  name: string;
  title: string;
  description: string;
  postcodes: string[];
  landmarks: string[];
  servicesDescription: string;
  metaDescription: string;
}

export const londonAreas: LondonArea[] = [
  {
    slug: 'kensington',
    name: 'Kensington',
    title: 'Professional Cleaning Service in Kensington',
    description: 'Premium cleaning services in Kensington, one of London\'s most prestigious areas. We serve residents and businesses in Kensington High Street, Holland Park, and surrounding areas with the highest standards of cleanliness.',
    postcodes: ['W8', 'W14', 'SW7'],
    landmarks: ['Kensington Palace', 'Holland Park', 'Natural History Museum', 'Royal Albert Hall'],
    servicesDescription: 'Our Kensington cleaning team specializes in high-end residential properties, luxury apartments, and boutique offices. We understand the premium standards expected in this area and deliver exceptional results every time.',
    metaDescription: 'Professional cleaning service in Kensington, London. Trusted cleaners for homes & offices in W8, W14, SW7. Book online today. ⭐ 4.8/5 rated.',
  },
  {
    slug: 'chelsea',
    name: 'Chelsea',
    title: 'Expert Cleaning Service in Chelsea',
    description: 'Trusted cleaning services in Chelsea, serving the affluent Chelsea neighborhood with professional residential and commercial cleaning. From Kings Road to Chelsea Embankment, we keep Chelsea pristine.',
    postcodes: ['SW3', 'SW10'],
    landmarks: ['Kings Road', 'Chelsea Physic Garden', 'Saatchi Gallery', 'Stamford Bridge'],
    servicesDescription: 'Chelsea residents trust us for thorough, discreet cleaning services that respect the elegance of their homes and businesses. Our cleaners are experienced in handling high-value properties with care.',
    metaDescription: 'Expert cleaning service in Chelsea, London. Professional cleaners for SW3, SW10 areas. Residential & commercial cleaning. Free quote available.',
  },
  {
    slug: 'westminster',
    name: 'Westminster',
    title: 'Commercial Cleaning Service in Westminster',
    description: 'Professional cleaning services in Westminster, London\'s political heart. Serving offices, government buildings, and residences from Victoria to Mayfair with unmatched reliability.',
    postcodes: ['SW1', 'W1'],
    landmarks: ['Houses of Parliament', 'Westminster Abbey', 'Buckingham Palace', 'Trafalgar Square'],
    servicesDescription: 'Westminster\'s businesses require top-tier cleaning services, and we deliver. From corporate offices to historic buildings, our team maintains the professional image your premises deserve.',
    metaDescription: 'Commercial cleaning service in Westminster, London. Office cleaning SW1, W1. Professional, reliable cleaners. Book same-day service.',
  },
  {
    slug: 'camden',
    name: 'Camden',
    title: 'Reliable Cleaning Service in Camden',
    description: 'Affordable and thorough cleaning services in Camden. From Camden Town to Primrose Hill, we provide flexible cleaning solutions for flats, houses, and commercial spaces.',
    postcodes: ['NW1', 'NW3', 'NW5'],
    landmarks: ['Camden Market', 'Regent\'s Park', 'Primrose Hill', 'London Zoo'],
    servicesDescription: 'Camden\'s diverse community trusts us for reliable, eco-friendly cleaning. Whether you need regular domestic help or a one-off deep clean, we adapt to your needs and schedule.',
    metaDescription: 'Reliable cleaning service in Camden, London. Eco-friendly cleaners for NW1, NW3, NW5. Flexible scheduling. Book online today.',
  },
  {
    slug: 'islington',
    name: 'Islington',
    title: 'Professional Cleaning Service in Islington',
    description: 'Quality cleaning services in Islington. Serving Angel, Highbury, and Barnsbury with professional domestic and office cleaning tailored to your requirements.',
    postcodes: ['N1', 'N7'],
    landmarks: ['Upper Street', 'Business Design Centre', 'Emirates Stadium', 'Highbury Fields'],
    servicesDescription: 'Islington residents appreciate our attention to detail and flexible service. From Victorian conversions to modern flats, we clean every property type with expertise and care.',
    metaDescription: 'Professional cleaning service in Islington, London. Domestic & office cleaners for N1, N7. Quality service, competitive rates.',
  },
  {
    slug: 'shoreditch',
    name: 'Shoreditch',
    title: 'Modern Cleaning Service in Shoreditch',
    description: 'Contemporary cleaning services in trendy Shoreditch. We serve tech startups, creative studios, and modern apartments in East London\'s most vibrant neighborhood.',
    postcodes: ['E1', 'E2', 'EC2'],
    landmarks: ['Brick Lane', 'Boxpark', 'Old Street', 'Spitalfields Market'],
    servicesDescription: 'Shoreditch\'s fast-paced environment demands efficient, flexible cleaning. Our team understands the needs of startups and creative businesses, providing hassle-free cleaning that fits your schedule.',
    metaDescription: 'Modern cleaning service in Shoreditch, London. Tech office & apartment cleaning E1, E2. Flexible, reliable cleaners. Same-day bookings.',
  },
  {
    slug: 'mayfair',
    name: 'Mayfair',
    title: 'Luxury Cleaning Service in Mayfair',
    description: 'Exclusive cleaning services for Mayfair\'s most prestigious properties. Delivering white-glove service to luxury residences, boutiques, and corporate offices in W1.',
    postcodes: ['W1J', 'W1K', 'W1S'],
    landmarks: ['Bond Street', 'Berkeley Square', 'Grosvenor Square', 'The Ritz'],
    servicesDescription: 'Mayfair demands excellence, and we deliver. Our discreet, professional cleaners are trained to the highest standards, ensuring your property maintains its prestige and elegance.',
    metaDescription: 'Luxury cleaning service in Mayfair, London. Premium cleaners for W1J, W1K, W1S. Discreet, professional service for exclusive properties.',
  },
  {
    slug: 'canary-wharf',
    name: 'Canary Wharf',
    title: 'Corporate Cleaning Service in Canary Wharf',
    description: 'Professional office cleaning in Canary Wharf. Serving London\'s financial district with reliable commercial cleaning for offices, retail spaces, and high-rise apartments.',
    postcodes: ['E14'],
    landmarks: ['One Canada Square', 'Canary Wharf Station', 'Jubilee Park', 'Museum of London Docklands'],
    servicesDescription: 'Canary Wharf\'s corporate environment requires punctual, thorough cleaning. Our team works around your business hours, ensuring minimal disruption while maintaining spotless offices.',
    metaDescription: 'Corporate cleaning service in Canary Wharf, London. Office cleaning E14. Professional cleaners for financial district. Out-of-hours available.',
  },
  {
    slug: 'notting-hill',
    name: 'Notting Hill',
    title: 'Premium Cleaning Service in Notting Hill',
    description: 'Boutique cleaning services in charming Notting Hill. From Portobello Road to Ladbroke Grove, we provide personalized cleaning for period properties and modern homes.',
    postcodes: ['W11', 'W10'],
    landmarks: ['Portobello Road Market', 'Notting Hill Gate', 'Ladbroke Grove', 'Holland Park'],
    servicesDescription: 'Notting Hill\'s character properties deserve specialized care. Our cleaners respect the unique features of Victorian houses while delivering thorough, modern cleaning standards.',
    metaDescription: 'Premium cleaning service in Notting Hill, London. Expert cleaners for W11, W10 period properties. Personalized service, trusted team.',
  },
  {
    slug: 'fulham',
    name: 'Fulham',
    title: 'Family-Friendly Cleaning Service in Fulham',
    description: 'Reliable cleaning services in family-friendly Fulham. Serving homes and businesses from Parsons Green to Fulham Broadway with eco-friendly, child-safe products.',
    postcodes: ['SW6'],
    landmarks: ['Fulham Palace', 'Bishops Park', 'Fulham Broadway', 'Craven Cottage'],
    servicesDescription: 'Fulham families choose us for our reliable, child-safe cleaning approach. We use eco-friendly products and work flexibly around school runs and family schedules.',
    metaDescription: 'Family-friendly cleaning service in Fulham, London. Eco-friendly cleaners for SW6. Child-safe products, flexible scheduling.',
  },
  {
    slug: 'battersea',
    name: 'Battersea',
    title: 'Affordable Cleaning Service in Battersea',
    description: 'Quality cleaning services in Battersea at competitive rates. From Battersea Park to Clapham Junction, we deliver professional cleaning without the premium price tag.',
    postcodes: ['SW11', 'SW8'],
    landmarks: ['Battersea Power Station', 'Battersea Park', 'Clapham Junction', 'Nine Elms'],
    servicesDescription: 'Battersea\'s growing community deserves excellent cleaning at fair prices. Our team covers new developments and established neighborhoods with equal care and attention.',
    metaDescription: 'Affordable cleaning service in Battersea, London. Quality cleaners for SW11, SW8. Competitive rates, professional results. Free quotes.',
  },
  {
    slug: 'greenwich',
    name: 'Greenwich',
    title: 'Historic Greenwich Cleaning Service',
    description: 'Professional cleaning services in historic Greenwich. Serving the Maritime Quarter, Greenwich Peninsula, and local communities with heritage-conscious cleaning.',
    postcodes: ['SE10'],
    landmarks: ['Cutty Sark', 'Royal Observatory', 'O2 Arena', 'Greenwich Market'],
    servicesDescription: 'Greenwich\'s mix of historic and modern properties requires adaptable cleaning. From riverside apartments to period homes, we provide tailored service for every property type.',
    metaDescription: 'Professional cleaning service in Greenwich, London. Heritage & modern cleaners SE10. Trusted team, flexible service. Book today.',
  },
  {
    slug: 'hammersmith',
    name: 'Hammersmith',
    title: 'Efficient Cleaning Service in Hammersmith',
    description: 'Fast, reliable cleaning in busy Hammersmith. Serving homes and offices from Hammersmith Broadway to Ravenscourt Park with professional, punctual service.',
    postcodes: ['W6', 'W12'],
    landmarks: ['Hammersmith Apollo', 'Lyric Theatre', 'Ravenscourt Park', 'Riverside Studios'],
    servicesDescription: 'Hammersmith\'s busy professionals need efficient cleaning that fits their schedule. We provide quick turnarounds and flexible booking without compromising on quality.',
    metaDescription: 'Efficient cleaning service in Hammersmith, London. Fast, reliable cleaners W6, W12. Same-day available. Book online now.',
  },
  {
    slug: 'wimbledon',
    name: 'Wimbledon',
    title: 'Quality Cleaning Service in Wimbledon',
    description: 'Trusted cleaning services in leafy Wimbledon. From Wimbledon Village to Wimbledon Park, we serve suburban homes and local businesses with meticulous care.',
    postcodes: ['SW19', 'SW20'],
    landmarks: ['All England Lawn Tennis Club', 'Wimbledon Common', 'Centre Court Shopping Centre', 'Wimbledon Theatre'],
    servicesDescription: 'Wimbledon\'s residential areas trust us for consistent, high-quality cleaning. Our team understands suburban living and delivers thorough service with minimal disruption.',
    metaDescription: 'Quality cleaning service in Wimbledon, London. Trusted cleaners for SW19, SW20. Residential & commercial. Established reputation.',
  },
  {
    slug: 'richmond',
    name: 'Richmond',
    title: 'Premium Cleaning Service in Richmond',
    description: 'Exceptional cleaning services in beautiful Richmond. Serving Richmond Hill, Kew, and surrounding areas with premium residential and boutique commercial cleaning.',
    postcodes: ['TW9', 'TW10'],
    landmarks: ['Richmond Park', 'Kew Gardens', 'Richmond Theatre', 'Richmond Riverside'],
    servicesDescription: 'Richmond\'s upmarket properties deserve premium cleaning, and we deliver. From riverside homes to park-view apartments, we maintain the pristine standards this area is known for.',
    metaDescription: 'Premium cleaning service in Richmond, London. Expert cleaners TW9, TW10. High-end residential & commercial. Exceptional standards.',
  },
];

export function getAreaBySlug(slug: string): LondonArea | undefined {
  return londonAreas.find(area => area.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return londonAreas.map(area => area.slug);
}

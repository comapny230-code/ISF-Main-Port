export interface HotelPhoto {
  url: string;
  label: string;
}

export interface HotelStat {
  label: string;
  value: string;
}

export interface HotelInfo {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  category: string;
  rating: number;
  reviewsCount: string;
  address: string;
  shortAddress: string;
  landmark: string;
  distanceToCampus: string;
  driveTime: string;
  roomType: string;
  stats: HotelStat[];
  tags: string[];
  primaryPhone: string;
  allPhones: string[];
  email?: string;
  frontPhoto: string;
  photos: HotelPhoto[];
  tariffNotes?: string;
}

export const GUNUPUR_HOTELS: HotelInfo[] = [
  {
    id: "jagannath-palace",
    name: "Hotel Jagannath Palace",
    badge: "Guest Favourite",
    subtitle: "Main Road • Near New Bus Stand",
    category: "Lodging & Mandap",
    rating: 4.1,
    reviewsCount: "320+ reviews",
    address: "Main Road, Near New Bus Stand, Gunupur, Odisha 765022",
    shortAddress: "Main Road, Near Bus Stand",
    landmark: "SH-4 / New Bus Stand",
    distanceToCampus: "3.8 km",
    driveTime: "8 mins",
    roomType: "AC / Non-AC",
    stats: [
      { label: "Transit", value: "8 Mins" },
      { label: "Room Types", value: "AC & Non-AC" },
      { label: "Campus", value: "3.8 km" }
    ],
    tags: ["AC Rooms Available", "Non-AC Rooms Available", "Mandap Hall", "Central Location"],
    primaryPhone: "+91 99372 50003",
    allPhones: ["+91 99372 50003", "06857-250003"],
    frontPhoto: "/hotels/jagannath palace/outside photo.webp",
    photos: [
      { url: "/hotels/jagannath palace/outside photo.webp", label: "Palace Facade & Entrance" },
      { url: "/hotels/jagannath palace/bedroom.webp", label: "Double Bedroom" },
      { url: "/hotels/jagannath palace/room.webp", label: "AC Room & TV" },
      { url: "/hotels/jagannath palace/bed room2.webp", label: "Guest Room" }
    ],
    tariffNotes: "24-hour checkout. All room tariffs include GST."
  },
  {
    id: "sai-surya",
    name: "Sai Surya Residency",
    badge: "Prime Pick",
    subtitle: "Main Road • Beside TVS Showroom",
    category: "A/C Lodge",
    rating: 4.0,
    reviewsCount: "180+ reviews",
    address: "Main Road, Near New Bus Stand, Beside TVS Showroom, Gunupur 765022",
    shortAddress: "Beside TVS Showroom, Main Rd",
    landmark: "Beside TVS Showroom",
    distanceToCampus: "3.6 km",
    driveTime: "7 mins",
    roomType: "A/C Suites",
    stats: [
      { label: "Transit", value: "7 Mins" },
      { label: "Room Types", value: "AC & Non-AC" },
      { label: "Campus", value: "3.6 km" }
    ],
    tags: ["AC Rooms Available", "Non-AC Rooms Available", "Single & Double Beds", "In-Room TV"],
    primaryPhone: "+91 93376 57885",
    allPhones: ["+91 93376 57885", "+91 86586 94826", "+91 90783 19111"],
    frontPhoto: "/hotels/sai surya/sai surya building outside.webp",
    photos: [
      { url: "/hotels/sai surya/sai surya building outside.webp", label: "Exterior View & Elevation" },
      { url: "/hotels/sai surya/room_with_tv_straight.webp", label: "AC Room with TV" },
      { url: "/hotels/sai surya/sai surya bed room.webp", label: "Standard Room" }
    ]
  },
  {
    id: "sree-satya",
    name: "Sree Satya Residency",
    badge: "Top Value",
    subtitle: "Main Road • Near Bus & Rail Corridor",
    category: "Modern Lodging",
    rating: 4.0,
    reviewsCount: "140+ reviews",
    address: "Main Road, Near New Bus Stand, Gunupur, Odisha 765022",
    shortAddress: "Near New Bus Stand Corridor",
    landmark: "Bus & Rail Transit Hub",
    distanceToCampus: "3.7 km",
    driveTime: "8 mins",
    roomType: "Furnished Beds",
    stats: [
      { label: "Transit", value: "8 Mins" },
      { label: "Room Types", value: "AC & Non-AC" },
      { label: "Campus", value: "3.7 km" }
    ],
    tags: ["AC Rooms Available", "Non-AC Rooms Available", "Transit Hub", "24/7 Front Desk"],
    primaryPhone: "+91 94380 50088",
    allPhones: ["+91 94380 50088", "06857-250088"],
    frontPhoto: "/hotels/sree satya/outside picture.webp",
    photos: [
      { url: "/hotels/sree satya/outside picture.webp", label: "Main Entrance & Signage" },
      { url: "/hotels/sree satya/gate in.webp", label: "Lobby & Reception Entrance" },
      { url: "/hotels/sree satya/bedroom.webp", label: "Deluxe AC Bedroom" },
      { url: "/hotels/sree satya/bed room 2.webp", label: "AC Room with TV & Vanity" },
      { url: "/hotels/sree satya/corridor.webp", label: "Guest Floor Corridor" }
    ]
  },
  {
    id: "vijay-in",
    name: "Vijaya Inn",
    badge: "Executive Pick",
    subtitle: "Station Road • Up-Stairs Trends",
    category: "A/C Lodging",
    rating: 4.2,
    reviewsCount: "210+ reviews",
    address: "Up-Stairs Trends, Station Road, Gunupur 765022, Dist. Rayagada",
    shortAddress: "Station Road, Above Trends",
    landmark: "Above Trends, Station Rd",
    distanceToCampus: "4.2 km",
    driveTime: "9 mins",
    roomType: "Executive AC",
    stats: [
      { label: "Transit", value: "9 Mins" },
      { label: "Room Types", value: "AC Only" },
      { label: "Campus", value: "4.2 km" }
    ],
    tags: ["AC Rooms Only", "Super Deluxe Category", "Station Road", "Quiet Stay"],
    primaryPhone: "+91 63704 60845",
    allPhones: ["+91 63704 60845", "+91 94381 63605", "+91 93480 28358", "06857-465171"],
    frontPhoto: "/hotels/vijay in/corridor vijay in.webp",
    photos: [
      { url: "/hotels/vijay in/bedroom_enhanced.webp", label: "Double Bedroom" },
      { url: "/hotels/vijay in/justdial_real_vijay_inn.webp", label: "Verified Listing" },
      { url: "/hotels/vijay in/corridor vijay in.webp", label: "Polished Corridor" },
      { url: "/hotels/vijay in/single_room vijay in.webp", label: "Single Bedroom" }
    ]
  }
];

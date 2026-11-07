export interface AirRouteSegment {
  segmentIndex: number;
  mode: "train" | "bus" | "cab";
  fromLocation: string;
  toLocation: string;
  distance: string;
  duration: string;
  operatorOrService: string;
  serviceNumberOrType?: string;
  departureTime?: string;
  arrivalTime?: string;
  notes: string;
  bookingUrl?: string;
  bookingPlatform?: string;
}

export interface AirRouteOption {
  id: string;
  title: string;
  badge: string;
  routeType: "train" | "bus" | "cab";
  totalDuration: string;
  transfersCount: number;
  summary: string;
  segments: AirRouteSegment[];
}

export interface AirportPlan {
  airportId: string;
  airportName: string;
  iataCode: string;
  city: string;
  state: string;
  distanceToCampus: string;
  airportDescription: string;
  googleMapsDirectionsUrl: string;
  routes: AirRouteOption[];
}

export const AIRPORT_OPTIONS = [
  {
    id: "air-vtz",
    name: "Visakhapatnam International Airport",
    code: "VTZ",
    city: "Visakhapatnam, Andhra Pradesh",
    distance: "~210 km (Closest Major Hub)",
    tag: "Primary Flight Gateway · Fastest Access",
  },
  {
    id: "air-bbi",
    name: "Biju Patnaik International Airport",
    code: "BBI",
    city: "Bhubaneswar, Odisha",
    distance: "~340 km (State Capital)",
    tag: "Odisha Direct Train & Bus Gateway",
  },
  {
    id: "air-pyb",
    name: "Jeypore Airport",
    code: "PYB",
    city: "Jeypore, Odisha",
    distance: "~195 km (Regional Feeder)",
    tag: "Regional UDAN Flight Feeder",
  },
];

export const AIRPORT_PLANS: Record<string, AirportPlan> = {
  "air-vtz": {
    airportId: "air-vtz",
    airportName: "Visakhapatnam International Airport",
    iataCode: "VTZ",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    distanceToCampus: "~210 km · 3.5–4.5 hrs",
    airportDescription:
      "The primary and nearest commercial airport to Gunupur, featuring frequent daily direct flights from Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, and Kolkata.",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Visakhapatnam+Airport+Andhra+Pradesh&destination=GIET+University+Gunupur+Odisha",
    routes: [
      {
        id: "vtz-train",
        title: "Direct Morning Train (08522 Express Special)",
        badge: "Direct Rail (0 Transfers)",
        routeType: "train",
        totalDuration: "~6 hrs 45 mins",
        transfersCount: 1,
        summary:
          "Take a 15-min taxi from the airport to Visakhapatnam Junction (VSKP), then board the daily direct morning express train straight into Gunupur Railway Station.",
        segments: [
          {
            segmentIndex: 1,
            mode: "cab",
            fromLocation: "Visakhapatnam Airport (Terminal Exit)",
            toLocation: "Visakhapatnam Junction Railway Station (VSKP)",
            distance: "9.2 km",
            duration: "15–20 mins",
            operatorOrService: "Airport Pre-paid Taxi / Ola / Uber",
            notes: "Head to Platform 1 of VSKP station for boarding.",
          },
          {
            segmentIndex: 2,
            mode: "train",
            fromLocation: "Visakhapatnam Junction (VSKP)",
            toLocation: "Gunupur Railway Station (GNPR)",
            distance: "268 km",
            duration: "6 hrs 45 mins",
            operatorOrService: "Visakhapatnam - Gunupur Special",
            serviceNumberOrType: "Train #08522",
            departureTime: "05:35 AM",
            arrivalTime: "12:20 PM",
            notes:
              "Daily direct passenger/express terminating directly at Gunupur. Campus is just 4.8 km by auto outside the platform.",
            bookingUrl: "https://www.irctc.co.in/nget/train-search",
            bookingPlatform: "IRCTC",
          },
        ],
      },
      {
        id: "vtz-bus",
        title: "Highway Express Bus (via Dwaraka RTC Complex)",
        badge: "High Frequency Bus",
        routeType: "bus",
        totalDuration: "~5 hrs",
        transfersCount: 1,
        summary:
          "Take a quick 15-min cab from airport to Dwaraka Bus Complex (RTC Complex), then take frequent direct express buses to Gunupur Bus Stand.",
        segments: [
          {
            segmentIndex: 1,
            mode: "cab",
            fromLocation: "Visakhapatnam Airport",
            toLocation: "Dwaraka RTC Bus Complex (RTC Complex)",
            distance: "10.5 km",
            duration: "15–20 mins",
            operatorOrService: "App Taxi / Auto-Rickshaw",
            notes: "Major interstate bus hub with direct ticketing.",
          },
          {
            segmentIndex: 2,
            mode: "bus",
            fromLocation: "Dwaraka RTC Complex, Visakhapatnam",
            toLocation: "Gunupur Main Bus Stand",
            distance: "205 km",
            duration: "4.5–5 hrs",
            operatorOrService: "APSRTC / OSRTC Express",
            serviceNumberOrType: "Ultra Deluxe / Super Luxury / Express",
            departureTime: "Frequent morning, noon & afternoon departures",
            notes: "Scenic coastal highway route along NH-16 to Srikakulam, branching via Paralakhemundi to Gunupur.",
            bookingUrl: "https://www.redbus.in/bus-tickets/visakhapatnam-to-gunupur",
            bookingPlatform: "redBus",
          },
        ],
      },
    ],
  },

  "air-bbi": {
    airportId: "air-bbi",
    airportName: "Biju Patnaik International Airport",
    iataCode: "BBI",
    city: "Bhubaneswar",
    state: "Odisha",
    distanceToCampus: "~340 km · 6.5–7.5 hrs",
    airportDescription:
      "Odisha capital international airport, connecting all major Indian metros with direct trains (18117 Rajya Rani / 18417 Puri Exp) and direct OSRTC buses to Gunupur.",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Biju+Patnaik+International+Airport+Bhubaneswar&destination=GIET+University+Gunupur+Odisha",
    routes: [
      {
        id: "bbi-train",
        title: "Direct Express Train: 18117 Rajya Rani / 18417 Puri Exp",
        badge: "100% Direct Rail (BBS / KUR)",
        routeType: "train",
        totalDuration: "~7 hrs 20 mins",
        transfersCount: 1,
        summary:
          "Take a 10-min taxi from airport to Bhubaneswar station (BBS) for the morning 18117 Rajya Rani Exp (06:05 AM), or take afternoon 18417 Puri Exp (01:40 PM from nearby Khurda Rd).",
        segments: [
          {
            segmentIndex: 1,
            mode: "cab",
            fromLocation: "Bhubaneswar Airport (BBI)",
            toLocation: "Bhubaneswar Railway Station (BBS / Master Canteen)",
            distance: "4.2 km",
            duration: "10–12 mins",
            operatorOrService: "Airport Pre-paid Taxi / Auto",
            notes: "Platform 1/4 for morning Rajya Rani Express.",
          },
          {
            segmentIndex: 2,
            mode: "train",
            fromLocation: "Bhubaneswar (BBS) / Khurda Road (KUR)",
            toLocation: "Gunupur Railway Station (GNPR)",
            distance: "340 km",
            duration: "7 hrs 20 mins",
            operatorOrService: "Rajya Rani Express (18117) / Puri-GNPR Exp (18417)",
            serviceNumberOrType: "Train #18117 (06:05 AM) / #18417 (01:40 PM)",
            departureTime: "06:05 AM (BBS) / 01:40 PM (KUR)",
            arrivalTime: "01:25 PM / 08:45 PM (Gunupur)",
            notes:
              "Both trains terminate directly at Gunupur. Also halts at Brahmapur (BAM) for South Odisha attendees.",
            bookingUrl: "https://www.irctc.co.in/nget/train-search",
            bookingPlatform: "IRCTC",
          },
        ],
      },
      {
        id: "bbi-bus",
        title: "Direct OSRTC & Deluxe Express Coach",
        badge: "Direct Highway Bus",
        routeType: "bus",
        totalDuration: "~7 hrs",
        transfersCount: 1,
        summary:
          "Take a 15-min taxi from airport to Baramunda ISBT, then board direct OSRTC or deluxe private AC sleeper coach straight to Gunupur Bus Stand.",
        segments: [
          {
            segmentIndex: 1,
            mode: "cab",
            fromLocation: "Bhubaneswar Airport (BBI)",
            toLocation: "Baramunda ISBT (Central Bus Terminal)",
            distance: "6.5 km",
            duration: "15 mins",
            operatorOrService: "App Cab / Local Auto",
            notes: "Direct booking counters for OSRTC and private interstate buses.",
          },
          {
            segmentIndex: 2,
            mode: "bus",
            fromLocation: "Baramunda ISBT, Bhubaneswar",
            toLocation: "Gunupur Main Bus Stand",
            distance: "330 km via NH-16 & NH-326",
            duration: "7 hrs",
            operatorOrService: "OSRTC / Private Deluxe AC Seater-Sleeper",
            serviceNumberOrType: "Deluxe AC / Non-AC Express",
            departureTime: "Regular morning and overnight departures",
            notes: "Comfortable highway route passing through Khurda and Berhampur directly into Gunupur.",
            bookingUrl: "https://www.redbus.in/bus-tickets/bhubaneswar-to-gunupur",
            bookingPlatform: "redBus",
          },
        ],
      },
    ],
  },

  "air-pyb": {
    airportId: "air-pyb",
    airportName: "Jeypore Airport",
    iataCode: "PYB",
    city: "Jeypore",
    state: "Odisha",
    distanceToCampus: "~195 km · 3.5–4.5 hrs",
    airportDescription:
      "Regional UDAN airport in southern Odisha, operating scheduled feeder flights connecting to Bhubaneswar and Visakhapatnam.",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Jeypore+Airport+Odisha&destination=GIET+University+Gunupur+Odisha",
    routes: [
      {
        id: "pyb-road-transit",
        title: "Regional Highway Bus / Transit (via Rayagada)",
        badge: "Regional Bus Corridor",
        routeType: "bus",
        totalDuration: "~4.5 hrs",
        transfersCount: 1,
        summary:
          "Travel from Jeypore through the scenic Eastern Ghats via Koraput and Rayagada into Gunupur.",
        segments: [
          {
            segmentIndex: 1,
            mode: "cab",
            fromLocation: "Jeypore Airport (PYB)",
            toLocation: "Jeypore Town Bus Stand",
            distance: "5 km",
            duration: "10 mins",
            operatorOrService: "Local Taxi / Auto",
            notes: "Local transit to main bus stand.",
          },
          {
            segmentIndex: 2,
            mode: "bus",
            fromLocation: "Jeypore Bus Stand (via Rayagada)",
            toLocation: "Gunupur Bus Stand",
            distance: "190 km",
            duration: "4 hrs 15 mins",
            operatorOrService: "OSRTC Regional Express",
            serviceNumberOrType: "Daily State Transport Service",
            notes: "Operates through Koraput, Sunabeda, and Rayagada directly to Gunupur.",
            bookingUrl: "https://www.redbus.in/bus-tickets/jeypore-to-gunupur",
            bookingPlatform: "redBus",
          },
        ],
      },
    ],
  },
};


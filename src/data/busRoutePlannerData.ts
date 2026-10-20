export interface JourneySegment {
  segmentIndex: number;
  fromCity: string;
  toCity: string;
  distance: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  operators: string[];
  busType: string;
  boardingPoints: string[];
  droppingPoints: string[];
  estimatedFare: string;
  bookingPlatform: "redBus";
  bookingUrl: string;
  layoverAfter?: {
    duration: string;
    location: string;
    advice: string;
    terminalSwitchRequired: boolean;
  };
}

export interface FinalMileInfo {
  from: string;
  to: string;
  distance: string;
  duration: string;
  transportModes: {
    type: string;
    fare: string;
    notes: string;
  }[];
  dropLocation: string;
  campusHelpdeskNotes: string;
}

export interface JourneyRouteOption {
  id: string;
  title: string;
  badge: string;
  routeType: "recommended" | "fastest" | "direct" | "alternative";
  totalDuration: string;
  totalEstimatedFare: string;
  transfersCount: number;
  transferCity?: string;
  summaryDescription: string;
  isDirect: boolean;
  segments: JourneySegment[];
  finalMile: FinalMileInfo;
  travelerTips: string[];
  missedConnectionBackup: string;
}

export interface CityBusPlan {
  id: string;
  cityName: string;
  state: string;
  stateTag: string;
  isDirectPossible: boolean;
  directBusAvailable: boolean;
  approxDistance: string;
  primaryTransitHub: string;
  overviewSummary: string;
  routes: JourneyRouteOption[];
}

export const DEFAULT_FINAL_MILE: FinalMileInfo = {
  from: "Gunupur Main Bus Stand",
  to: "GIET University Campus, Gobriguda, Po-Kharling",
  distance: "3.8 km",
  duration: "10–12 minutes",
  transportModes: [
    {
      type: "Shared Auto-Rickshaw",
      fare: "₹20 – ₹30 per seat",
      notes: "Regular shared autos ply between the bus stand and the GIET Main Gate every 5–10 minutes.",
    },
    {
      type: "Private Dedicated Auto",
      fare: "₹80 – ₹120 for the full auto",
      notes: "Available directly outside the bus stand exit gate during daytime and regular bus arrival hours. Best for delegates with luggage.",
    },
    {
      type: "College Bus",
      fare: "Complimentary for summit attendees",
      notes: "Available at the bus stand, provided by the college to campus.",
    },
  ],
  dropLocation: "GIET University Main Administrative Gate, Gobriguda, Po-Kharling, Gunupur 765022",
  campusHelpdeskNotes: "Save the campus helpline (+91 94370 44444) on your phone prior to final arrival.",
};

export const BUS_JOURNEY_PLANS: Record<string, CityBusPlan> = {
  chennai: {
    id: "chennai",
    cityName: "Chennai",
    state: "Tamil Nadu",
    stateTag: "TN",
    isDirectPossible: false,
    directBusAvailable: false,
    approxDistance: "~890 km",
    primaryTransitHub: "Visakhapatnam (Vizag) / Srikakulam",
    overviewSummary:
      "There are no direct interstate buses from Chennai to Gunupur. To reach Gunupur comfortably, take an overnight sleeper bus to Visakhapatnam (Vizag), then take a connecting morning bus to Gunupur. Follow the verified 2-leg route below.",
    routes: [
      {
        id: "chennai-vizag-gunupur",
        title: "Via Visakhapatnam (Vizag) – Recommended",
        badge: "Most Reliable · Best Frequency",
        routeType: "recommended",
        totalDuration: "~22h 45m (incl. 2h layover)",
        totalEstimatedFare: "₹1,754 – ₹2,560",
        transfersCount: 1,
        transferCity: "Visakhapatnam (Vizag)",
        summaryDescription:
          "Take an evening AC sleeper bus along the coastal NH-16 corridor to Visakhapatnam. After a 2-hour breakfast layover at Dwaraka RTC Complex, catch the direct morning bus straight to Gunupur.",
        isDirect: false,
        segments: [
          {
            segmentIndex: 1,
            fromCity: "Chennai",
            toCity: "Visakhapatnam",
            distance: "791 km",
            departureTime: "18:00 – 19:30 (Evening)",
            arrivalTime: "09:00 – 09:30 (Next Morning)",
            duration: "14h 30m – 15h 30m",
            operators: ["APSRTC (Garuda)", "V Kaveri Travels", "Sri Tulasi Tours", "Orange Travels", "SKS Logistics"],
            busType: "AC Multi-Axle Sleeper / Semi-Sleeper",
            boardingPoints: ["Koyambedu Omni Bus Stand", "Madhavaram", "Guindy", "Surapet Toll"],
            droppingPoints: ["Dwaraka RTC Complex", "Gurudwara Junction", "Gajuwaka"],
            estimatedFare: "₹1,499 – ₹2,200",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/chennai-to-visakhapatnam",
            layoverAfter: {
              duration: "2 hours buffer",
              location: "Dwaraka RTC Complex, Visakhapatnam",
              advice:
                "Same bus station! Dwaraka RTC Complex has waiting lounges, clean washrooms, and food stalls for breakfast. Go to the interstate platform bay for the Gunupur/Paralakhemundi bus.",
              terminalSwitchRequired: false,
            },
          },
          {
            segmentIndex: 2,
            fromCity: "Visakhapatnam",
            toCity: "Gunupur",
            distance: "210 km",
            departureTime: "11:30 AM (also 10:30, 12:00, 14:00)",
            arrivalTime: "17:15 PM (Evening)",
            duration: "5h 45m",
            operators: ["APSRTC Express", "OSRTC Regular"],
            busType: "Super Luxury / Express Non-AC Seater",
            boardingPoints: ["Dwaraka RTC Complex (Bay 4/5)", "Maddilapalem", "Anandapuram"],
            droppingPoints: ["Gunupur Main Bus Stand, Odisha"],
            estimatedFare: "₹255 – ₹360",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/visakhapatnam-to-gunupur",
          },
        ],
        finalMile: DEFAULT_FINAL_MILE,
        travelerTips: [
          "Book Leg 1 with drop point as 'Dwaraka RTC Complex' so you arrive directly inside the main terminal where Leg 2 departs.",
          "If your Chennai bus drops at Gurudwara Junction, take an auto (5 mins, ₹50) to Dwaraka RTC Complex.",
          "Keep at least 1.5 to 2 hours layover buffer in Vizag in case of highway toll traffic on NH-16.",
        ],
        missedConnectionBackup:
          "If you miss the 11:30 AM bus in Vizag, later buses depart at 12:00 PM, 14:00 PM, and 16:30 PM. Alternatively, take an express bus to Srikakulam/Palasa and switch to frequent local shuttles into Gunupur.",
      },
      {
        id: "chennai-srikakulam-gunupur",
        title: "Via Srikakulam Road – Shorter Final Leg",
        badge: "Faster Connection · Slower Bus Leg 1",
        routeType: "fastest",
        totalDuration: "~20h 30m (incl. 1.5h layover)",
        totalEstimatedFare: "₹1,710 – ₹2,460",
        transfersCount: 1,
        transferCity: "Srikakulam",
        summaryDescription:
          "Take an overnight interstate bus directly to Srikakulam (further north than Vizag). Then take a short 2.5-hour regional connecting bus to Gunupur.",
        isDirect: false,
        segments: [
          {
            segmentIndex: 1,
            fromCity: "Chennai",
            toCity: "Srikakulam",
            distance: "880 km",
            departureTime: "17:00 – 18:30",
            arrivalTime: "09:30 – 10:00 (Next Morning)",
            duration: "16h 00m",
            operators: ["APSRTC (Amaravati/Garuda)", "Kaveri Travels", "V Kaveri"],
            busType: "AC Multi-Axle Sleeper",
            boardingPoints: ["Koyambedu", "Madhavaram"],
            droppingPoints: ["Srikakulam RTC Bus Stand", "NH-16 Bypass Toll"],
            estimatedFare: "₹1,600 – ₹2,300",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/chennai-to-srikakulam",
            layoverAfter: {
              duration: "1h 30m buffer",
              location: "Srikakulam RTC Bus Stand",
              advice:
                "Confirm drop is inside RTC Bus Stand or ask auto to take you from highway bypass to the RTC complex (10 mins). Regional buses to Gunupur leave frequently.",
              terminalSwitchRequired: false,
            },
          },
          {
            segmentIndex: 2,
            fromCity: "Srikakulam",
            toCity: "Gunupur",
            distance: "95 km",
            departureTime: "11:00 AM – 12:00 PM",
            arrivalTime: "14:00 – 14:45 PM",
            duration: "2h 45m – 3h 00m",
            operators: ["APSRTC", "OSRTC Rural Connect"],
            busType: "Ultra Deluxe / Express",
            boardingPoints: ["Srikakulam RTC Complex"],
            droppingPoints: ["Gunupur Main Bus Stand"],
            estimatedFare: "₹110 – ₹160",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/srikakulam-to-gunupur",
          },
        ],
        finalMile: DEFAULT_FINAL_MILE,
        travelerTips: [
          "Srikakulam is geographically closer to Gunupur (~95 km) than Vizag (~210 km), saving you 3 hours of day bus travel.",
          "Check whether the Chennai bus enters Srikakulam town or drops on NH-16 bypass flyover.",
        ],
        missedConnectionBackup:
          "Buses from Srikakulam to Paralakhemundi run every 20 mins. From Paralakhemundi, Gunupur is just 45 km away (frequent autos and local buses).",
      },
    ],
  },

  bhubaneswar: {
    id: "bhubaneswar",
    cityName: "Bhubaneswar",
    state: "Odisha",
    stateTag: "OD",
    isDirectPossible: true,
    directBusAvailable: true,
    approxDistance: "~335 km",
    primaryTransitHub: "Direct OSRTC Service / Berhampur",
    overviewSummary:
      "Good news: Direct overnight state transport buses run daily from Bhubaneswar (Baramunda ISBT) directly to Gunupur! You do NOT need to change buses if you take the night OSRTC service.",
    routes: [
      {
        id: "bhubaneswar-direct-osrtc",
        title: "Direct OSRTC Overnight Service – Recommended",
        badge: "Direct Bus · 0 Transfers",
        routeType: "direct",
        totalDuration: "~8h 30m",
        totalEstimatedFare: "₹750 – ₹910",
        transfersCount: 0,
        summaryDescription:
          "Direct single-bus journey operated by OSRTC (Shree Jagannath Express / Volvo AC Semi-Sleeper). Leaves Baramunda ISBT at night and arrives at Gunupur Bus Stand early morning.",
        isDirect: true,
        segments: [
          {
            segmentIndex: 1,
            fromCity: "Bhubaneswar",
            toCity: "Gunupur",
            distance: "335 km",
            departureTime: "21:20 (9:20 PM)",
            arrivalTime: "05:50 (Next Morning)",
            duration: "8h 30m",
            operators: ["OSRTC (Shree Jagannath Express / Volvo)"],
            busType: "Volvo AC Semi-Sleeper / Deluxe",
            boardingPoints: ["Baramunda ISBT (Inter-State Bus Terminal), Bhubaneswar"],
            droppingPoints: ["Gunupur Main Bus Stand"],
            estimatedFare: "₹750 – ₹910",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/bhubaneswar-to-gunupur",
          },
        ],
        finalMile: DEFAULT_FINAL_MILE,
        travelerTips: [
          "Arrive at Baramunda ISBT 30 minutes before departure (by 20:50 PM).",
          "This is the official state transport route and drops right in Gunupur town at 05:50 AM.",
          "Book at least 3–5 days in advance during summit week as seats fill fast.",
        ],
        missedConnectionBackup:
          "If the direct night bus is sold out, take any frequent daytime bus to Berhampur (every 20 mins from Baramunda, ~3.5 hrs), and switch to a Berhampur–Gunupur express bus.",
      },
      {
        id: "bhubaneswar-berhampur-gunupur",
        title: "Daytime Route via Berhampur",
        badge: "High Frequency Day Transit",
        routeType: "alternative",
        totalDuration: "~7h 45m (incl. 45m layover)",
        totalEstimatedFare: "₹340 – ₹490",
        transfersCount: 1,
        transferCity: "Berhampur",
        summaryDescription:
          "Prefer traveling by day? Take a frequent express bus from Bhubaneswar to Berhampur (~3.5 hrs), then catch a connecting bus along NH-326 to Gunupur (~3.5 hrs).",
        isDirect: false,
        segments: [
          {
            segmentIndex: 1,
            fromCity: "Bhubaneswar",
            toCity: "Berhampur",
            distance: "175 km",
            departureTime: "07:00 AM – 08:30 AM",
            arrivalTime: "10:30 AM – 11:45 AM",
            duration: "3h 30m",
            operators: ["OSRTC", "Private Express"],
            busType: "Express Non-AC / AC Seater",
            boardingPoints: ["Baramunda ISBT", "Kalpana Square"],
            droppingPoints: ["Berhampur New Bus Stand"],
            estimatedFare: "₹180 – ₹260",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/bhubaneswar-to-berhampur",
            layoverAfter: {
              duration: "45 mins buffer",
              location: "Berhampur New Bus Stand",
              advice: "Same terminal. Look for OSRTC / private bays heading to Paralakhemundi and Gunupur.",
              terminalSwitchRequired: false,
            },
          },
          {
            segmentIndex: 2,
            fromCity: "Berhampur",
            toCity: "Gunupur",
            distance: "140 km",
            departureTime: "11:30 AM – 12:30 PM",
            arrivalTime: "15:00 – 16:00 PM",
            duration: "3h 30m",
            operators: ["OSRTC", "Maa Tarini Travels"],
            busType: "Deluxe Non-AC Seater",
            boardingPoints: ["Berhampur New Bus Stand"],
            droppingPoints: ["Gunupur Main Bus Stand"],
            estimatedFare: "₹140 – ₹200",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/berhampur-to-gunupur",
          },
        ],
        finalMile: DEFAULT_FINAL_MILE,
        travelerTips: [
          "Buses from Berhampur to Gunupur operate via Digapahandi and Paralakhemundi on scenic state highway.",
          "Very affordable and reliable option if you want to travel during daylight hours.",
        ],
        missedConnectionBackup: "Berhampur to Gunupur has departures almost every hour until 17:00 PM.",
      },
    ],
  },

  vizag: {
    id: "vizag",
    cityName: "Visakhapatnam (Vizag)",
    state: "Andhra Pradesh",
    stateTag: "AP",
    isDirectPossible: true,
    directBusAvailable: true,
    approxDistance: "~210 km",
    primaryTransitHub: "Direct APSRTC / OSRTC Route",
    overviewSummary:
      "Visakhapatnam is the primary regional gateway to Gunupur. Multiple direct buses depart every day from early morning to afternoon from Dwaraka RTC Complex.",
    routes: [
      {
        id: "vizag-direct-gunupur",
        title: "Direct Interstate Bus – Recommended",
        badge: "Direct Bus · 0 Transfers · Multiple Timings",
        routeType: "direct",
        totalDuration: "~5h 45m",
        totalEstimatedFare: "₹255 – ₹360",
        transfersCount: 0,
        summaryDescription:
          "Regular daily direct buses run by APSRTC and OSRTC. Route goes along NH-16 to Palasa, then NH-326 through Paralakhemundi to Gunupur.",
        isDirect: true,
        segments: [
          {
            segmentIndex: 1,
            fromCity: "Visakhapatnam",
            toCity: "Gunupur",
            distance: "210 km",
            departureTime: "04:00 AM, 06:30 AM, 08:00 AM, 10:30 AM, 12:00 PM, 14:00 PM, 16:30 PM",
            arrivalTime: "Approx 5h 45m after departure",
            duration: "5h 45m – 6h 30m",
            operators: ["APSRTC Express", "OSRTC Scheduled"],
            busType: "Super Luxury / Express Seater",
            boardingPoints: ["Dwaraka RTC Complex", "Gurudwara Junction", "Maddilapalem", "Anandapuram"],
            droppingPoints: ["Gunupur Main Bus Stand, Odisha"],
            estimatedFare: "₹255 – ₹360",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/visakhapatnam-to-gunupur",
          },
        ],
        finalMile: DEFAULT_FINAL_MILE,
        travelerTips: [
          "Catch the 08:00 AM or 10:30 AM bus from Dwaraka RTC Complex to reach GIET campus by early afternoon.",
          "Book on redBus in advance or buy tickets directly at the APSRTC Dwaraka Complex counter.",
          "Window seats on the right side give great views of the Eastern Ghats and Vansadhara river basin.",
        ],
        missedConnectionBackup:
          "If the last direct bus has departed, take a frequent bus to Palasa or Srikakulam on NH-16, where local connection buses run until 20:00 PM.",
      },
    ],
  },

  hyderabad: {
    id: "hyderabad",
    cityName: "Hyderabad",
    state: "Telangana",
    stateTag: "TS",
    isDirectPossible: false,
    directBusAvailable: false,
    approxDistance: "~780 km",
    primaryTransitHub: "Visakhapatnam (Vizag) / Rayagada",
    overviewSummary:
      "There are no daily direct RTC buses from Hyderabad to Gunupur. The established practical route is to take an overnight sleeper to Visakhapatnam, then a connecting day bus to Gunupur.",
    routes: [
      {
        id: "hyderabad-vizag-gunupur",
        title: "Via Visakhapatnam – Recommended",
        badge: "Comfortable Overnight · 1 Transfer",
        routeType: "recommended",
        totalDuration: "~18h 30m (incl. 1.5h layover)",
        totalEstimatedFare: "₹1,350 – ₹2,200",
        transfersCount: 1,
        transferCity: "Visakhapatnam (Vizag)",
        summaryDescription:
          "Board an overnight AC sleeper bus from Hyderabad along NH-65 and NH-16 to Vizag. Switch to the morning Gunupur direct bus at Dwaraka RTC Complex.",
        isDirect: false,
        segments: [
          {
            segmentIndex: 1,
            fromCity: "Hyderabad",
            toCity: "Visakhapatnam",
            distance: "620 km",
            departureTime: "19:00 – 21:00 (Evening)",
            arrivalTime: "07:00 – 08:30 (Next Morning)",
            duration: "11h 30m – 12h 30m",
            operators: ["TGSRTC", "APSRTC Garuda", "Orange Travels", "Morning Star", "V Kaveri"],
            busType: "AC Multi-Axle Sleeper / Semi-Sleeper",
            boardingPoints: ["MGBS", "Miyapur", "Ameerpet", "Kukatpally", "LB Nagar"],
            droppingPoints: ["Dwaraka RTC Complex", "Gajuwaka", "Gurudwara"],
            estimatedFare: "₹1,100 – ₹1,800",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/hyderabad-to-visakhapatnam",
            layoverAfter: {
              duration: "1h 30m buffer",
              location: "Dwaraka RTC Complex, Visakhapatnam",
              advice: "Breakfast at RTC Complex and board the 09:30 or 10:30 AM Gunupur direct bus.",
              terminalSwitchRequired: false,
            },
          },
          {
            segmentIndex: 2,
            fromCity: "Visakhapatnam",
            toCity: "Gunupur",
            distance: "210 km",
            departureTime: "09:30 AM – 10:30 AM",
            arrivalTime: "15:15 – 16:15 PM",
            duration: "5h 45m",
            operators: ["APSRTC Express", "OSRTC"],
            busType: "Super Luxury Non-AC",
            boardingPoints: ["Dwaraka RTC Complex"],
            droppingPoints: ["Gunupur Main Bus Stand"],
            estimatedFare: "₹255 – ₹360",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/visakhapatnam-to-gunupur",
          },
        ],
        finalMile: DEFAULT_FINAL_MILE,
        travelerTips: [
          "Select Dwaraka RTC Complex as your drop point in Vizag for an effortless zero-terminal-switch layover.",
          "Sleeper buses on Hyderabad–Vizag highway are very smooth (via Vijayawada 6-lane express corridor).",
        ],
        missedConnectionBackup: "Direct night trains like Visakha Express (17016) also connect to Vizag and Rayagada.",
      },
    ],
  },

  bangalore: {
    id: "bangalore",
    cityName: "Bengaluru (Bangalore)",
    state: "Karnataka",
    stateTag: "KA",
    isDirectPossible: false,
    directBusAvailable: false,
    approxDistance: "~1,020 km",
    primaryTransitHub: "Visakhapatnam (Vizag)",
    overviewSummary:
      "No direct bus runs from Bengaluru to Gunupur. Take an overnight luxury sleeper from Bengaluru to Visakhapatnam, followed by the morning direct bus into Gunupur.",
    routes: [
      {
        id: "bangalore-vizag-gunupur",
        title: "Via Visakhapatnam – Recommended Route",
        badge: "Overnight Luxury Sleeper · 1 Transfer",
        routeType: "recommended",
        totalDuration: "~23h 30m (incl. 1.5h layover)",
        totalEstimatedFare: "₹1,855 – ₹2,860",
        transfersCount: 1,
        transferCity: "Visakhapatnam (Vizag)",
        summaryDescription:
          "Board an evening multi-axle sleeper from Majestic/Madiwala to Visakhapatnam. At Vizag's Dwaraka RTC Complex, catch the direct morning bus straight to Gunupur.",
        isDirect: false,
        segments: [
          {
            segmentIndex: 1,
            fromCity: "Bengaluru",
            toCity: "Visakhapatnam",
            distance: "810 km",
            departureTime: "16:30 – 18:30 (Evening)",
            arrivalTime: "08:30 – 09:30 (Next Morning)",
            duration: "15h 30m – 16h 30m",
            operators: ["KSRTC (Airavat Club Class)", "APSRTC", "SRS Travels", "Orange Travels", "Greenline"],
            busType: "Volvo Multi-Axle AC Sleeper",
            boardingPoints: ["Majestic (Kempegowda BS)", "Madiwala", "Anand Rao Circle", "Tin Factory", "K.R. Puram"],
            droppingPoints: ["Dwaraka RTC Complex", "Rama Talkies", "Gurudwara"],
            estimatedFare: "₹1,600 – ₹2,500",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/bangalore-to-visakhapatnam",
            layoverAfter: {
              duration: "1h 30m buffer",
              location: "Dwaraka RTC Complex, Visakhapatnam",
              advice: "Fresh-up, breakfast at RTC complex, then take the 10:30 AM bus to Gunupur.",
              terminalSwitchRequired: false,
            },
          },
          {
            segmentIndex: 2,
            fromCity: "Visakhapatnam",
            toCity: "Gunupur",
            distance: "210 km",
            departureTime: "10:30 AM – 12:00 PM",
            arrivalTime: "16:15 – 17:45 PM",
            duration: "5h 45m",
            operators: ["APSRTC Express", "OSRTC"],
            busType: "Super Luxury Non-AC",
            boardingPoints: ["Dwaraka RTC Complex"],
            droppingPoints: ["Gunupur Main Bus Stand"],
            estimatedFare: "₹255 – ₹360",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/visakhapatnam-to-gunupur",
          },
        ],
        finalMile: DEFAULT_FINAL_MILE,
        travelerTips: [
          "Book departures from K.R. Puram or Tin Factory to avoid heavy central Bengaluru exit traffic.",
          "Ensure arrival in Vizag by 09:30 AM to catch the 10:30 AM or 12:00 PM Gunupur departures.",
        ],
        missedConnectionBackup: "Prashanti Express (18464) connects Bengaluru (SBC) directly to nearby railheads.",
      },
    ],
  },

  berhampur: {
    id: "berhampur",
    cityName: "Berhampur",
    state: "Odisha",
    stateTag: "OD",
    isDirectPossible: true,
    directBusAvailable: true,
    approxDistance: "~140 km",
    primaryTransitHub: "Direct OSRTC / Regional Highway Route",
    overviewSummary:
      "Berhampur is southern Odisha's commercial hub. Frequent direct regional buses connect Berhampur New Bus Stand to Gunupur via Paralakhemundi on NH-326 every hour.",
    routes: [
      {
        id: "berhampur-direct-gunupur",
        title: "Direct Regional Bus Route",
        badge: "Direct Bus · 0 Transfers · Frequent Departures",
        routeType: "direct",
        totalDuration: "~3h 30m",
        totalEstimatedFare: "₹140 – ₹200",
        transfersCount: 0,
        summaryDescription: "Hourly direct state and private buses through Digapahandi and Paralakhemundi along NH-326.",
        isDirect: true,
        segments: [
          {
            segmentIndex: 1,
            fromCity: "Berhampur",
            toCity: "Gunupur",
            distance: "140 km",
            departureTime: "Hourly from 06:00 AM to 18:00 PM",
            arrivalTime: "Approx 3h 30m after departure",
            duration: "3h 30m",
            operators: ["OSRTC", "Maa Tarini", "Gajapati Express"],
            busType: "Express Non-AC Seater",
            boardingPoints: ["Berhampur New Bus Stand"],
            droppingPoints: ["Gunupur Main Bus Stand"],
            estimatedFare: "₹140 – ₹200",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/berhampur-to-gunupur",
          },
        ],
        finalMile: DEFAULT_FINAL_MILE,
        travelerTips: [
          "Board from Berhampur New Bus Stand near Medical College road.",
          "Tickets can be booked on redBus or directly bought at the conductor counter.",
        ],
        missedConnectionBackup: "Local shuttles to Paralakhemundi depart every 15 mins, with connecting autos to Gunupur.",
      },
    ],
  },

  rayagada: {
    id: "rayagada",
    cityName: "Rayagada",
    state: "Odisha",
    stateTag: "OD",
    isDirectPossible: true,
    directBusAvailable: true,
    approxDistance: "~75 km",
    primaryTransitHub: "Direct Highway Shuttle",
    overviewSummary:
      "Rayagada is the district headquarters. Frequent direct local shuttles and express buses run east along the Vansadhara river corridor to Gunupur every 30 minutes.",
    routes: [
      {
        id: "rayagada-direct-gunupur",
        title: "Direct Highway Shuttle",
        badge: "Direct · 0 Transfers · 30-min Frequency",
        routeType: "direct",
        totalDuration: "~1h 45m",
        totalEstimatedFare: "₹75 – ₹110",
        transfersCount: 0,
        summaryDescription: "Short, scenic river-corridor highway drive directly into Gunupur town.",
        isDirect: true,
        segments: [
          {
            segmentIndex: 1,
            fromCity: "Rayagada",
            toCity: "Gunupur",
            distance: "75 km",
            departureTime: "Departures every 30 mins from 05:30 AM to 20:00 PM",
            arrivalTime: "Approx 1h 45m after departure",
            duration: "1h 45m",
            operators: ["OSRTC", "Local Shuttles"],
            busType: "Standard Seater",
            boardingPoints: ["Rayagada Main Bus Stand", "Railway Station Circle"],
            droppingPoints: ["Gunupur Main Bus Stand"],
            estimatedFare: "₹75 – ₹110",
            bookingPlatform: "redBus",
            bookingUrl: "https://www.redbus.in/bus-tickets/rayagada-to-gunupur",
          },
        ],
        finalMile: DEFAULT_FINAL_MILE,
        travelerTips: ["Shared cruiser cabs and auto vans are also readily available outside Rayagada Railway Station."],
        missedConnectionBackup: "Regular private shared sumos operate until 21:00 PM.",
      },
    ],
  },
};

export const POPULAR_CITIES = [
  { id: "chennai", name: "Chennai", state: "Tamil Nadu", tag: "Primary Case · 2 Buses" },
  { id: "bhubaneswar", name: "Bhubaneswar", state: "Odisha", tag: "Direct OSRTC Available" },
  { id: "vizag", name: "Visakhapatnam (Vizag)", state: "Andhra Pradesh", tag: "Direct Bus Gateway" },
  { id: "hyderabad", name: "Hyderabad", state: "Telangana", tag: "Overnight + Connect" },
  { id: "bangalore", name: "Bengaluru", state: "Karnataka", tag: "Overnight + Connect" },
  { id: "berhampur", name: "Berhampur", state: "Odisha", tag: "Frequent 3.5h Bus" },
  { id: "rayagada", name: "Rayagada", state: "Odisha", tag: "Short 1.5h Shuttle" },
];

export interface TrainSegment {
  segmentIndex: number;
  fromStation: string;
  toStation: string;
  distance: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  trainName: string;
  trainNumber: string;
  runsOn: string;
  classes: string[];
  bookingUrl: string;
  bookingPlatform: "IRCTC";
  transferAdvice?: string;
}

export interface OnwardRoadSegment {
  fromLocation: string;
  toLocation: string;
  distance: string;
  duration: string;
  operators: string[];
  vehicleType: string;
  frequency: string;
  pickupPoint: string;
  dropPoint: string;
  bookingUrl?: string;
  bookingNote: string;
}

export interface TrainFinalMileInfo {
  from: string;
  to: string;
  distance: string;
  duration: string;
  transportModes: {
    type: string;
    notes: string;
  }[];
  dropLocation: string;
  campusHelpdeskNotes: string;
}

export interface TrainRouteOption {
  id: string;
  title: string;
  badge: string;
  routeType: "direct-train" | "train-then-bus" | "station-cab";
  totalDuration: string;
  transfersCount: number;
  summaryDescription: string;
  isDirectRail: boolean;
  trainSegment?: TrainSegment;
  onwardRoadSegment?: OnwardRoadSegment;
  popularIncomingTrains?: {
    trainNumber: string;
    trainName: string;
    origin: string;
    arrivalTime: string;
    runsOn: string;
  }[];
  finalMile: TrainFinalMileInfo;
  travelerTips: string[];
}

export interface RailwayStationPlan {
  id: string;
  stationName: string;
  stationCode: string;
  distanceToCampus: string;
  mapOrigin: string;
  hubType: "direct" | "major-junction" | "mainline";
  tag: string;
  state: string;
  overviewSummary: string;
  googleMapsUrl: string;
  irctcUrl: string;
  confirmTktUrl?: string;
  routes: TrainRouteOption[];
}

export const RAILWAY_STATION_PLANS: Record<string, RailwayStationPlan> = {
  "rail-gnpr": {
    id: "rail-gnpr",
    stationName: "Gunupur Railway Station",
    stationCode: "GNPR",
    distanceToCampus: "~5 km to campus",
    mapOrigin: "Gunupur Railway Station, Odisha",
    hubType: "direct",
    tag: "Direct Campus Gateway",
    state: "Odisha",
    overviewSummary:
      "Terminal station located just 5 km from GIET University. Direct express and passenger services terminate here from Rourkela, Puri, Bhubaneswar, Cuttack, Visakhapatnam, and Palasa.",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Gunupur+Railway+Station+Odisha&destination=GIET+University+Gobriguda+Po-Kharling+Gunupur+Odisha+765022",
    confirmTktUrl:
      "https://www.irctc.co.in/nget/train-search",
    irctcUrl: "https://www.irctc.co.in/nget/train-search",
    routes: [
      {
        id: "gnpr-rourkela-rajyarani",
        title: "18117 Rajya Rani Express (Daily from Rourkela / Cuttack / BBS)",
        badge: "Direct Overnight Express",
        routeType: "direct-train",
        totalDuration: "~16 hrs from Rourkela · ~8.5 hrs from Bhubaneswar",
        transfersCount: 0,
        summaryDescription:
          "The premier direct train to Gunupur. Connects North & Coastal Odisha directly to Gunupur campus gate without any train change.",
        isDirectRail: true,
        trainSegment: {
          segmentIndex: 1,
          fromStation: "Rourkela / Bhubaneswar (ROU / BBS)",
          toStation: "Gunupur (GNPR)",
          distance: "437 km (from BBS)",
          departureTime: "09:45 PM (ROU) · 04:45 AM (BBS)",
          arrivalTime: "01:25 PM (Gunupur)",
          duration: "8 hrs 40 mins from Bhubaneswar",
          trainName: "Rajya Rani Express",
          trainNumber: "18117",
          runsOn: "Daily (Mon, Tue, Wed, Thu, Fri, Sat, Sun)",
          classes: ["2S", "SL", "3A", "2A"],
          bookingUrl: "https://www.irctc.co.in/nget/train-search",
          bookingPlatform: "IRCTC",
          transferAdvice:
            "Departs Rourkela at night, crosses Sambalpur City (11:58 PM), Cuttack (04:10 AM), Bhubaneswar (04:45 AM), Brahmapur (08:30 AM), and reaches Gunupur in early afternoon.",
        },
        finalMile: {
          from: "Gunupur Railway Station Exit",
          to: "GIET University Campus, Gobriguda",
          distance: "4.8 km",
          duration: "10–12 minutes",
          transportModes: [
            {
              type: "Shared Auto-Rickshaw",
              notes:
                "Available right outside the station platform exit. Shuttles directly to GIET Main Entrance.",
            },
            {
              type: "Private Dedicated Auto",
              notes:
                "Ideal for delegates with luggage. Takes 10 minutes along the Gunupur bypass road.",
            },
            {
              type: "GIET University Volunteer Shuttle",
              notes:
                "GIET student volunteer helpdesk stationed at the platform exit during daytime train arrivals.",
            },
          ],
          dropLocation:
            "GIET University Main Administrative Gate, Gobriguda, Po-Kharling, Gunupur 765022",
          campusHelpdeskNotes:
            "Emergency station reception desk: +91 78040 68698 / +91 94370 44444.",
        },
        travelerTips: [
          "Book 18117 in advance as it is the only direct overnight sleeper/AC express connecting Bhubaneswar and Cuttack to Gunupur.",
          "If getting down at Gunupur in the afternoon (01:25 PM), GIET reception counters are active inside the university campus.",
          "Mobile network (Jio / Airtel) has strong 4G/5G coverage throughout the station and campus corridor.",
        ],
      },
      {
        id: "gnpr-puri-express",
        title: "18417 Puri – Gunupur Express (Daily Evening Arrival)",
        badge: "Direct Coastal Odisha Train",
        routeType: "direct-train",
        totalDuration: "~11 hrs from Puri · ~9 hrs from Khurda Road",
        transfersCount: 0,
        summaryDescription:
          "Daily day-express originating at Puri (09:25 AM), passing Khurda Road, Balugaon (Chilika), Brahmapur, and Palasa, reaching Gunupur at night.",
        isDirectRail: true,
        trainSegment: {
          segmentIndex: 1,
          fromStation: "Puri / Khurda Road / Brahmapur",
          toStation: "Gunupur (GNPR)",
          distance: "360 km",
          departureTime: "09:25 AM (Puri) · 02:40 PM (Brahmapur)",
          arrivalTime: "08:45 PM (Gunupur)",
          duration: "11 hrs 20 mins",
          trainName: "Puri - Gunupur Express",
          trainNumber: "18417",
          runsOn: "Daily (Mon to Sun)",
          classes: ["2S", "General Unreserved"],
          bookingUrl: "https://www.irctc.co.in/nget/train-search",
          bookingPlatform: "IRCTC",
          transferAdvice:
            "Crosses Palasa at 05:40 PM and Paralakhemundi at 07:10 PM. Arrives Gunupur at 08:45 PM.",
        },
        finalMile: {
          from: "Gunupur Railway Station Exit",
          to: "GIET University Campus, Gobriguda",
          distance: "4.8 km",
          duration: "10–12 minutes",
          transportModes: [
            {
              type: "Dedicated Auto / Shared Auto",
              notes:
                "Autos wait outside the exit specifically for the 08:45 PM Puri train arrival.",
            },
            {
              type: "Campus Helpdesk Shuttle",
              notes:
                "College vehicle stationed at exit for summit delegates arriving by this evening service.",
            },
          ],
          dropLocation: "GIET University Main Gate, Gobriguda",
          campusHelpdeskNotes:
            "Inform the GIET transport helpline (+91 78040 68698) if your train is delayed past 09:30 PM.",
        },
        travelerTips: [
          "Great budget day train for travelers boarding along the Ganjam / Brahmapur / Palasa coastal belt.",
          "Food stalls at Gunupur close by 09:30 PM, but the GIET University mess and guest cafeteria remain open for arriving guests.",
        ],
      },
      {
        id: "gnpr-vizag-passenger",
        title: "08522 Visakhapatnam – Gunupur Special (Daily Morning)",
        badge: "Direct from Andhra Pradesh",
        routeType: "direct-train",
        totalDuration: "~6 hrs 45 mins from Visakhapatnam",
        transfersCount: 0,
        summaryDescription:
          "Daily direct morning service from Visakhapatnam (05:35 AM) via Vizianagaram (06:40 AM), Srikakulam Road (07:45 AM), and Naupada Junction.",
        isDirectRail: true,
        trainSegment: {
          segmentIndex: 1,
          fromStation: "Visakhapatnam Junction (VSKP)",
          toStation: "Gunupur (GNPR)",
          distance: "268 km",
          departureTime: "05:35 AM (VSKP)",
          arrivalTime: "12:20 PM (Gunupur)",
          duration: "6 hrs 45 mins",
          trainName: "VSKP - GNPR Passenger Special",
          trainNumber: "08522",
          runsOn: "Daily (All 7 Days)",
          classes: ["General Unreserved", "2S"],
          bookingUrl: "https://www.irctc.co.in/nget/train-search",
          bookingPlatform: "IRCTC",
          transferAdvice:
            "Passes Vizianagaram Junction at 06:40 AM and Srikakulam Road at 07:45 AM. Reaches Gunupur at 12:20 PM noon.",
        },
        finalMile: {
          from: "Gunupur Railway Station",
          to: "GIET University Campus",
          distance: "4.8 km",
          duration: "10 mins",
          transportModes: [
            {
              type: "Shared Auto / Private Auto",
              notes:
                "Peak daytime frequency. Plenty of autos waiting outside.",
            },
          ],
          dropLocation: "GIET University Campus Entrance",
          campusHelpdeskNotes: "Daytime check-in counters open at campus.",
        },
        travelerTips: [
          "Best direct morning train if arriving at Visakhapatnam (VTZ) airport or VSKP railway station the previous night.",
          "Very scenic journey through the Eastern Ghats and Vamsadhara river valley between Naupada and Gunupur.",
        ],
      },
    ],
  },
  "rail-rgda": {
    id: "rail-rgda",
    stationName: "Rayagada Railway Station",
    stationCode: "RGDA",
    distanceToCampus: "~75 km to campus",
    mapOrigin: "Rayagada Railway Station, Odisha",
    hubType: "major-junction",
    tag: "Major Express Junction (~75 km)",
    state: "Odisha",
    overviewSummary:
      "A major A-category junction station on the Raipur–Vizianagaram line. Connected by 70+ superfast/express trains from Delhi, Mumbai, Hyderabad, Bangalore, Kolkata, Raipur, and Chennai. Frequent direct buses and cabs connect Rayagada to Gunupur (~1.5 to 2 hrs).",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Rayagada+Railway+Station+Odisha&destination=GIET+University+Gobriguda+Po-Kharling+Gunupur+Odisha+765022",
    confirmTktUrl:
      "https://www.irctc.co.in/nget/train-search",
    irctcUrl: "https://www.irctc.co.in/nget/train-search",
    routes: [
      {
        id: "rgda-road-bus",
        title: "Express Train to Rayagada + Direct Highway Bus to Gunupur",
        badge: "Most Popular & Economical",
        routeType: "train-then-bus",
        totalDuration: "~1.5 to 2 hrs onward by road",
        transfersCount: 1,
        summaryDescription:
          "Arrive at Rayagada on any major express train, then take a direct OSRTC or private bus from Rayagada Bus Stand straight to Gunupur (runs every 30–45 mins).",
        isDirectRail: false,
        popularIncomingTrains: [
          {
            trainNumber: "12808",
            trainName: "Samata Express",
            origin: "Hazrat Nizamuddin (Delhi) / Raipur",
            arrivalTime: "02:25 PM",
            runsOn: "5 Days/Week",
          },
          {
            trainNumber: "12806",
            trainName: "Janmabhoomi Express",
            origin: "Secunderabad (Hyderabad) via VSKP",
            arrivalTime: "07:45 PM",
            runsOn: "Daily",
          },
          {
            trainNumber: "18517",
            trainName: "Korba - Visakhapatnam Express",
            origin: "Raipur / Bilaspur",
            arrivalTime: "03:50 AM",
            runsOn: "Daily",
          },
          {
            trainNumber: "18005",
            trainName: "Samaleshwari Express",
            origin: "Howrah (Kolkata) / Sambalpur",
            arrivalTime: "09:30 AM",
            runsOn: "Daily",
          },
        ],
        onwardRoadSegment: {
          fromLocation: "Rayagada New Bus Stand (1.2 km from Station)",
          toLocation: "Gunupur Old/New Bus Stand",
          distance: "72 km via SH-4",
          duration: "1 hr 45 mins – 2 hrs",
          operators: ["OSRTC", "Maa Tarini Travels", "Private Express Coaches"],
          vehicleType: "Non-AC & AC Seater State/Private Buses",
          frequency: "Every 30–45 minutes from 06:00 AM to 07:30 PM",
          pickupPoint: "Rayagada Bus Stand (auto from station takes ~5 mins)",
          dropPoint: "Gunupur Main Bus Stand",
          bookingUrl: "https://www.redbus.in/bus-tickets/rayagada-to-gunupur",
          bookingNote:
            "Tickets available directly on bus boarding or via OSRTC counter. No advance booking strictly needed.",
        },
        finalMile: {
          from: "Gunupur Bus Stand",
          to: "GIET University Campus, Gobriguda",
          distance: "3.8 km",
          duration: "10 minutes",
          transportModes: [
            {
              type: "Shared Auto-Rickshaw",
              notes: "Regularly departing outside Gunupur bus stand gate.",
            },
            {
              type: "College Bus Shuttle",
              notes: "Available during summit peak hours.",
            },
          ],
          dropLocation: "GIET University Main Gate",
          campusHelpdeskNotes: "Save Campus Helpline: +91 78040 68698.",
        },
        travelerTips: [
          "Rayagada is the best station if coming from Central/North India (Delhi, Raipur, Nagpur, Bilaspur) or Hyderabad.",
          "Autos from Rayagada Station to Rayagada Bus Stand take just 5 minutes.",
          "Last regular daytime bus departs Rayagada around 07:30 PM. If arriving after 08:00 PM, choose the station cab option.",
        ],
      },
      {
        id: "rgda-station-cab",
        title: "Station Pre-Booked Cab / Taxi (Fastest Door-to-Door)",
        badge: "Fastest Transfer (1 hr 15 mins)",
        routeType: "station-cab",
        totalDuration: "1 hr 15 mins – 1 hr 30 mins",
        transfersCount: 1,
        summaryDescription:
          "Direct private taxi transfer from Rayagada Station portico directly to GIET University Main Administrative Building. Best for groups or delegates with luggage.",
        isDirectRail: false,
        onwardRoadSegment: {
          fromLocation: "Rayagada Railway Station Parking / Taxi Stand",
          toLocation: "GIET University Campus Porch, Gobriguda",
          distance: "72 km via SH-4 (smooth state highway)",
          duration: "1 hr 15 mins",
          operators: ["Local Station Taxi Union", "GIET Travel Desk Partner"],
          vehicleType: "Swift Dzire, Ertiga, Innova, Bolero",
          frequency: "On-demand 24/7 directly at station exit",
          pickupPoint: "Station Main Exit Portico (Platform 1 side)",
          dropPoint: "GIET University Guest House / Registration Desk",
          bookingNote:
            "Pre-booking through GIET helpline is available for summit guests, or hire directly at taxi stand.",
        },
        finalMile: {
          from: "Direct drops at campus",
          to: "GIET University Registration Desk",
          distance: "0 km (Direct door-to-door)",
          duration: "Direct",
          transportModes: [
            {
              type: "Taxi arrives directly inside campus",
              notes: "Driver drops right at the Guest House / Convention Center.",
            },
          ],
          dropLocation: "GIET University Administrative Complex",
          campusHelpdeskNotes: "Call +91 78040 68698 for cab assistance.",
        },
        travelerTips: [
          "If delegates arrive together on the same train, hiring a pre-arranged cab drops you directly at campus.",
          "The road (SH-4) is well-paved, scenic, and passes through Ramanaguda with minimal traffic.",
        ],
      },
    ],
  },
  "rail-bbs": {
    id: "rail-bbs",
    stationName: "Bhubaneswar Railway Station",
    stationCode: "BBS / BAM",
    distanceToCampus: "BBS ~340 km · BAM ~175 km",
    mapOrigin: "Bhubaneswar Railway Station, Master Canteen, Odisha",
    hubType: "mainline",
    tag: "State Capital Gateway + Brahmapur Halt",
    state: "Odisha",
    overviewSummary:
      "Capital junction connected across India. The daily 18117 Rajya Rani Express departs Bhubaneswar (BBS) at 06:05 AM, halts at Brahmapur (Berhampur - BAM) at 08:40 AM, and arrives directly at Gunupur (GNPR) at 01:25 PM.",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Bhubaneswar+Railway+Station+Master+Canteen+Odisha&destination=GIET+University+Gobriguda+Po-Kharling+Gunupur+Odisha+765022",
    confirmTktUrl:
      "https://www.irctc.co.in/nget/train-search",
    irctcUrl: "https://www.irctc.co.in/nget/train-search",
    routes: [
      {
        id: "bbs-rajya-rani-express",
        title: "18117 Rajya Rani Express: Morning Direct Train (via Brahmapur BAM)",
        badge: "Daily Direct Train (No Transfers)",
        routeType: "direct-train",
        totalDuration: "7 hrs 20 mins from BBS · 4 hrs 40 mins from BAM",
        transfersCount: 0,
        summaryDescription:
          "Daily direct morning express departs Bhubaneswar (BBS) at 06:05 AM, halts at Brahmapur (Berhampur - BAM) at 08:40 AM, and terminates directly at Gunupur Station (GNPR) at 01:25 PM.",
        isDirectRail: true,
        trainSegment: {
          segmentIndex: 1,
          fromStation: "Bhubaneswar (BBS) / Brahmapur (BAM)",
          toStation: "Gunupur (GNPR)",
          distance: "340 km from BBS · 175 km from BAM",
          departureTime: "06:05 AM (BBS) · 08:45 AM (BAM)",
          arrivalTime: "01:25 PM (Gunupur)",
          duration: "7 hrs 20 mins (BBS) · 4 hrs 40 mins (BAM)",
          trainName: "Rajya Rani Express",
          trainNumber: "18117",
          runsOn: "Daily (All 7 Days)",
          classes: ["2A", "3A", "SL", "2S / General"],
          bookingUrl: "https://www.irctc.co.in/nget/train-search",
          bookingPlatform: "IRCTC",
          transferAdvice:
            "Board at Bhubaneswar (BBS) Platform 1/4 at 06:05 AM. Delegates from South Odisha / Ganjam can board the same train at Brahmapur (BAM) Platform 2 at 08:45 AM.",
        },
        finalMile: {
          from: "Gunupur Railway Station",
          to: "GIET University Campus, Gobriguda",
          distance: "4.8 km",
          duration: "10 minutes",
          transportModes: [
            {
              type: "Auto-Rickshaw",
              notes: "Stationed right outside platform exit gate (~10 mins to GIET gate).",
            },
          ],
          dropLocation: "GIET University Main Gate",
          campusHelpdeskNotes: "GIET Helpline: +91 78040 68698.",
        },
        travelerTips: [
          "Bhubaneswar delegates: Board the 18117 Rajya Rani at 06:05 AM for a comfortable direct arrival by 01:25 PM.",
          "Brahmapur / Berhampur delegates: You can board the exact same 18117 train at Brahmapur (BAM) at 08:45 AM.",
        ],
      },
      {
        id: "bbs-puri-gnpr-express",
        title: "18417 Puri – Gunupur Express: Afternoon Service (via Brahmapur BAM)",
        badge: "Daily Afternoon Service",
        routeType: "direct-train",
        totalDuration: "7 hrs from KUR · 4 hrs 45 mins from BAM",
        transfersCount: 0,
        summaryDescription:
          "Daily afternoon express accessible near Bhubaneswar at Khurda Road Jn (KUR - 01:40 PM) or board directly from Brahmapur (BAM - 03:55 PM), terminating at Gunupur (GNPR) at 08:45 PM.",
        isDirectRail: true,
        trainSegment: {
          segmentIndex: 1,
          fromStation: "Khurda Road (KUR) / Brahmapur (BAM)",
          toStation: "Gunupur (GNPR)",
          distance: "320 km from KUR · 175 km from BAM",
          departureTime: "01:40 PM (Khurda Rd) · 04:00 PM (BAM)",
          arrivalTime: "08:45 PM (Gunupur)",
          duration: "7 hrs 05 mins (KUR) · 4 hrs 45 mins (BAM)",
          trainName: "Puri - Gunupur Express",
          trainNumber: "18417",
          runsOn: "Daily (All 7 Days)",
          classes: ["3A", "CC", "SL", "2S / General"],
          bookingUrl: "https://www.irctc.co.in/nget/train-search",
          bookingPlatform: "IRCTC",
          transferAdvice:
            "From Bhubaneswar, take a quick 20-min cab/auto to Khurda Road Jn (KUR) for 01:40 PM departure, or board directly at Brahmapur (BAM) at 03:55 PM.",
        },
        finalMile: {
          from: "Gunupur Railway Station",
          to: "GIET University Campus, Gobriguda",
          distance: "4.8 km",
          duration: "10 minutes",
          transportModes: [
            {
              type: "Auto-Rickshaw",
              notes: "Available directly outside the platform exit.",
            },
          ],
          dropLocation: "GIET University Main Gate",
          campusHelpdeskNotes: "GIET Helpline: +91 78040 68698.",
        },
        travelerTips: [
          "Ideal for travelers arriving in Bhubaneswar by mid-day flights: Khurda Road Jn is just 25 minutes from Bhubaneswar airport.",
          "Brahmapur attendees can board this train at 03:55 PM to reach Gunupur by 08:45 PM.",
        ],
      },
      {
        id: "bbs-highway-bus",
        title: "Direct Highway Bus: Bhubaneswar / Brahmapur ➔ Gunupur",
        badge: "Direct Bus (Overnight / Daytime)",
        routeType: "train-then-bus",
        totalDuration: "7 hrs from BBS · 4 hrs from BAM",
        transfersCount: 1,
        summaryDescription:
          "Regular OSRTC and private deluxe express coaches operate daily from Baramunda ISBT (Bhubaneswar) passing through Berhampur directly to Gunupur Bus Stand.",
        isDirectRail: false,
        onwardRoadSegment: {
          fromLocation: "Baramunda ISBT (Bhubaneswar) / Berhampur New Bus Stand",
          toLocation: "Gunupur Main Bus Stand",
          distance: "330 km from BBS · 175 km from BAM via NH-16 & NH-326",
          duration: "7 hrs (BBS) · 4 hrs (BAM)",
          operators: ["OSRTC", "Private Deluxe AC Coaches"],
          vehicleType: "Deluxe AC / Non-AC Seater-Sleeper",
          frequency: "Multiple daily morning and evening departures",
          pickupPoint: "Baramunda ISBT (Bhubaneswar) or Berhampur Bus Stand",
          dropPoint: "Gunupur Main Bus Stand",
          bookingUrl: "https://www.redbus.in/bus-tickets/bhubaneswar-to-gunupur",
          bookingNote: "Tickets available on redBus or OSRTC portal.",
        },
        finalMile: {
          from: "Gunupur Bus Stand",
          to: "GIET University Campus",
          distance: "3.8 km",
          duration: "10 mins",
          transportModes: [
            {
              type: "Shared / Dedicated Auto",
              notes: "Regularly available at bus stand exit.",
            },
          ],
          dropLocation: "GIET University Main Gate",
          campusHelpdeskNotes: "Helpline: +91 78040 68698.",
        },
        travelerTips: [
          "OSRTC runs comfortable night and daytime buses between Bhubaneswar/Berhampur and Gunupur.",
          "You can pre-book on redBus or directly at OSRTC counters.",
        ],
      },
    ],
  },
  "rail-psa": {
    id: "rail-psa",
    stationName: "Palasa Railway Station",
    stationCode: "PSA",
    distanceToCampus: "~90 km to campus",
    mapOrigin: "Palasa Railway Station, Andhra Pradesh",
    hubType: "mainline",
    tag: "Mainline Hub + Direct Connect (~90 km)",
    state: "Andhra Pradesh / Odisha border",
    overviewSummary:
      "A premier railway junction on the Howrah–Chennai mainline. All superfast and express trains between Kolkata/Howrah and Chennai/Bangalore halt here. Serves as the junction point for the Gunupur branch line.",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Palasa+Railway+Station+Andhra+Pradesh&destination=GIET+University+Gobriguda+Po-Kharling+Gunupur+Odisha+765022",
    confirmTktUrl:
      "https://www.irctc.co.in/nget/train-search",
    irctcUrl: "https://www.irctc.co.in/nget/train-search",
    routes: [
      {
        id: "psa-connecting-train",
        title: "Mainline Train to Palasa ➔ Connecting Train to Gunupur",
        badge: "100% Rail Journey via Naupada",
        routeType: "direct-train",
        totalDuration: "2 hrs 45 mins connecting train leg",
        transfersCount: 1,
        summaryDescription:
          "Catch any mainline train to Palasa, then take the connecting Rajya Rani Express (10:40 AM), Puri-Gunupur Express (05:40 PM), or early morning passenger directly into Gunupur Station.",
        isDirectRail: true,
        popularIncomingTrains: [
          {
            trainNumber: "12841",
            trainName: "Coromandel Express",
            origin: "Howrah / Kharagpur / Balasore",
            arrivalTime: "09:10 PM",
            runsOn: "Daily",
          },
          {
            trainNumber: "12839",
            trainName: "Howrah - Chennai Mail",
            origin: "Howrah / Cuttack / Bhubaneswar",
            arrivalTime: "08:15 AM",
            runsOn: "Daily",
          },
          {
            trainNumber: "12863",
            trainName: "Howrah - SMVB Bengaluru Superfast",
            origin: "Howrah / Kharagpur",
            arrivalTime: "06:30 AM",
            runsOn: "Daily",
          },
        ],
        trainSegment: {
          segmentIndex: 2,
          fromStation: "Palasa (PSA) / Naupada Junction (NWP)",
          toStation: "Gunupur (GNPR)",
          distance: "90 km",
          departureTime: "10:40 AM (Rajya Rani) · 05:40 PM (Puri-GNPR)",
          arrivalTime: "01:25 PM (Rajya Rani) · 08:45 PM (Puri-GNPR)",
          duration: "2 hrs 45 mins – 3 hrs",
          trainName: "18117 Rajya Rani Exp / 18417 Puri Exp",
          trainNumber: "18117 / 18417",
          runsOn: "Daily Services",
          classes: ["2S", "SL", "3A", "General"],
          bookingUrl: "https://www.irctc.co.in/nget/train-search",
          bookingPlatform: "IRCTC",
          transferAdvice:
            "If your mainline train stops at Palasa around 09:30–10:00 AM, the 18117 Rajya Rani Express at 10:40 AM is the perfect connecting train straight into Gunupur.",
        },
        finalMile: {
          from: "Gunupur Railway Station",
          to: "GIET University Campus, Gobriguda",
          distance: "4.8 km",
          duration: "10 minutes",
          transportModes: [
            {
              type: "Shared Auto-Rickshaw",
              notes: "Stationed right outside platform exit gate.",
            },
            {
              type: "Private Dedicated Auto",
              notes: "Takes 10 minutes to GIET Main Entrance.",
            },
          ],
          dropLocation: "GIET University Main Gate",
          campusHelpdeskNotes: "GIET Reception Helpline: +91 78040 68698.",
        },
        travelerTips: [
          "Palasa is the best railway transit hub for attendees arriving from Kolkata, Kharagpur, Midnapore, or Coastal Odisha.",
          "If the connecting train timing has a long wait, direct highway buses to Gunupur depart every 30 minutes right outside Palasa station.",
        ],
      },
      {
        id: "psa-highway-bus",
        title: "Train to Palasa ➔ Direct Highway Bus to Gunupur via Paralakhemundi",
        badge: "High Frequency (Every 30 mins)",
        routeType: "train-then-bus",
        totalDuration: "~2 hrs to 2 hrs 15 mins by bus",
        transfersCount: 1,
        summaryDescription:
          "Regular direct buses ply along NH-326 from Palasa through Paralakhemundi to Gunupur throughout the day from 05:30 AM to 08:00 PM.",
        isDirectRail: false,
        onwardRoadSegment: {
          fromLocation: "Palasa RTC / Private Bus Stand (near station)",
          toLocation: "Gunupur Bus Stand",
          distance: "88 km via NH-326",
          duration: "2 hrs 15 mins",
          operators: ["OSRTC", "APSRTC", "Local Express Busses"],
          vehicleType: "Express Non-AC / AC Seater Buses",
          frequency: "Every 30 minutes throughout daytime",
          pickupPoint: "Palasa Kasi Bugga Bus Stand (5 mins auto from PSA station)",
          dropPoint: "Gunupur Main Bus Stand",
          bookingUrl: "https://www.redbus.in/bus-tickets/palasa-to-gunupur",
          bookingNote: "Boarding tickets issued directly inside the bus or counter.",
        },
        finalMile: {
          from: "Gunupur Bus Stand",
          to: "GIET University Campus",
          distance: "3.8 km",
          duration: "10 mins",
          transportModes: [
            {
              type: "Shared Auto",
              notes: "Runs continuously to GIET gate.",
            },
          ],
          dropLocation: "GIET University Main Administrative Gate",
          campusHelpdeskNotes: "Helpline: +91 78040 68698.",
        },
        travelerTips: [
          "Auto from Palasa Railway Station to Kasibugga RTC Bus Stand takes ~5 minutes.",
          "Buses cross Paralakhemundi town, which is a major midpoint stop.",
        ],
      },
    ],
  },
  "rail-che": {
    id: "rail-che",
    stationName: "Srikakulam Road Railway Station",
    stationCode: "CHE",
    distanceToCampus: "~90 km to campus",
    mapOrigin: "Srikakulam Road Railway Station, Amadalavalasa",
    hubType: "mainline",
    tag: "Mainline Hub from Andhra (~90 km)",
    state: "Andhra Pradesh",
    overviewSummary:
      "Located at Amadalavalasa, Srikakulam Road is a major mainline halt on the Howrah–Chennai trunk line. Very convenient for attendees arriving from Vijayawada, Rajahmundry, Visakhapatnam, or Hyderabad.",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Srikakulam+Road+Railway+Station+Amadalavalasa&destination=GIET+University+Gobriguda+Po-Kharling+Gunupur+Odisha+765022",
    confirmTktUrl:
      "https://www.irctc.co.in/nget/train-search",
    irctcUrl: "https://www.irctc.co.in/nget/train-search",
    routes: [
      {
        id: "che-morning-train",
        title: "Direct Morning Train: 08522 Special (CHE ➔ Gunupur)",
        badge: "Direct Rail Leg (No Bus Needed)",
        routeType: "direct-train",
        totalDuration: "4 hrs 35 mins rail leg",
        transfersCount: 0,
        summaryDescription:
          "Daily direct morning train departs Srikakulam Road at 07:45 AM, connects through Naupada and Paralakhemundi, and arrives Gunupur at 12:20 PM noon.",
        isDirectRail: true,
        trainSegment: {
          segmentIndex: 1,
          fromStation: "Srikakulam Road (CHE)",
          toStation: "Gunupur (GNPR)",
          distance: "185 km",
          departureTime: "07:45 AM (Daily)",
          arrivalTime: "12:20 PM (Gunupur)",
          duration: "4 hrs 35 mins",
          trainName: "VSKP - Gunupur Passenger Special",
          trainNumber: "08522",
          runsOn: "Daily (All 7 Days)",
          classes: ["General", "2S"],
          bookingUrl: "https://www.irctc.co.in/nget/train-search",
          bookingPlatform: "IRCTC",
          transferAdvice:
            "Board at Srikakulam Road Platform 2/3 at 07:45 AM. Arrives in Gunupur by 12:20 PM noon right in time for afternoon summit orientation.",
        },
        finalMile: {
          from: "Gunupur Railway Station",
          to: "GIET University Campus, Gobriguda",
          distance: "4.8 km",
          duration: "10 mins",
          transportModes: [
            {
              type: "Shared / Dedicated Auto",
              notes: "Autos plying continuously to GIET campus.",
            },
          ],
          dropLocation: "GIET University Main Gate",
          campusHelpdeskNotes: "Save: +91 78040 68698.",
        },
        travelerTips: [
          "Ideal for travelers arriving in Srikakulam Road early morning by overnight express from Hyderabad, Vijayawada, or Tirupati.",
          "Buy unreserved/2S ticket on UTS app or railway counter at Srikakulam Road station.",
        ],
      },
    ],
  },
  "rail-vskp": {
    id: "rail-vskp",
    stationName: "Visakhapatnam (Vizag) Station",
    stationCode: "VSKP",
    distanceToCampus: "~210 km to campus",
    mapOrigin: "Visakhapatnam Railway Station, Andhra Pradesh",
    hubType: "mainline",
    tag: "Major Coastal Trunk Terminal (~210 km)",
    state: "Andhra Pradesh",
    overviewSummary:
      "A primary A1-category railway junction on the east coast, directly connected to Mumbai, Bengaluru, Chennai, Hyderabad, Delhi, Kolkata, and Kochi. Delegates can take the direct daily morning train (08522) straight into Gunupur, or take direct highway express buses / cabs (~4 hrs).",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Visakhapatnam+Railway+Station+Andhra+Pradesh&destination=GIET+University+Gobriguda+Po-Kharling+Gunupur+Odisha+765022",
    confirmTktUrl:
      "https://www.irctc.co.in/nget/train-search",
    irctcUrl: "https://www.irctc.co.in/nget/train-search",
    routes: [
      {
        id: "vskp-direct-morning-train",
        title: "08522 Special: Direct Morning Train (VSKP ➔ Gunupur)",
        badge: "Direct Rail (No Transfers)",
        routeType: "direct-train",
        totalDuration: "6 hrs 45 mins",
        transfersCount: 0,
        summaryDescription:
          "Daily direct morning train departs Visakhapatnam (VSKP) at 05:35 AM, travels through Vizianagaram, Srikakulam Road, Naupada, and Paralakhemundi, arriving Gunupur at 12:20 PM noon.",
        isDirectRail: true,
        trainSegment: {
          segmentIndex: 1,
          fromStation: "Visakhapatnam Junction (VSKP)",
          toStation: "Gunupur (GNPR)",
          distance: "268 km",
          departureTime: "05:35 AM (Daily)",
          arrivalTime: "12:20 PM (Gunupur)",
          duration: "6 hrs 45 mins",
          trainName: "Visakhapatnam - Gunupur Special",
          trainNumber: "08522",
          runsOn: "Daily (All 7 Days)",
          classes: ["General", "2S"],
          bookingUrl: "https://www.irctc.co.in/nget/train-search",
          bookingPlatform: "IRCTC",
          transferAdvice:
            "Board at Platform 1/2 of Visakhapatnam Junction at 05:35 AM. Perfect for travelers arriving at Vizag overnight by flight or long-distance trains.",
        },
        finalMile: {
          from: "Gunupur Railway Station",
          to: "GIET University Campus",
          distance: "4.8 km",
          duration: "10 mins",
          transportModes: [
            {
              type: "Shared / Dedicated Auto",
              notes: "Regularly available outside station exit.",
            },
          ],
          dropLocation: "GIET University Main Gate",
          campusHelpdeskNotes: "Helpline: +91 78040 68698.",
        },
        travelerTips: [
          "If arriving at Visakhapatnam Airport (VTZ) the previous night, stay near station area and board this scenic early morning train directly to Gunupur.",
          "Tickets can be booked on the official IRCTC portal or purchased at unreserved counter at VSKP.",
        ],
      },
      {
        id: "vskp-direct-express-bus",
        title: "Direct Highway Bus from Vizag to Gunupur (via NH-16 / NH-326)",
        badge: "Fastest Road Transfer (~4.5 hrs)",
        routeType: "train-then-bus",
        totalDuration: "~4.5 hrs to 5 hrs",
        transfersCount: 1,
        summaryDescription:
          "Regular direct OSRTC & APSRTC express buses depart from Dwaraka RTC Complex (RTC Complex, Vizag) directly to Gunupur via Srikakulam & Paralakhemundi.",
        isDirectRail: false,
        onwardRoadSegment: {
          fromLocation: "Dwaraka RTC Bus Complex, Visakhapatnam (1.8 km from VSKP Station)",
          toLocation: "Gunupur Main Bus Stand",
          distance: "205 km via NH-16 & NH-326",
          duration: "4 hrs 45 mins",
          operators: ["OSRTC", "APSRTC", "Private AC Sleepers/Seaters"],
          vehicleType: "Express Deluxe / AC Seater",
          frequency: "Multiple daily services (Morning 06:30, 08:30, 11:30 AM & Evening)",
          pickupPoint: "Dwaraka Bus Complex (RTC Complex), Vizag",
          dropPoint: "Gunupur Main Bus Stand",
          bookingUrl: "https://www.redbus.in/bus-tickets/visakhapatnam-to-gunupur",
          bookingNote: "Tickets can be pre-booked on redBus or OSRTC portal.",
        },
        finalMile: {
          from: "Gunupur Bus Stand",
          to: "GIET University Campus",
          distance: "3.8 km",
          duration: "10 mins",
          transportModes: [
            {
              type: "Shared / Dedicated Auto",
              notes: "Plying every 5 mins to GIET gate.",
            },
          ],
          dropLocation: "GIET University Main Administrative Gate",
          campusHelpdeskNotes: "Helpline: +91 78040 68698.",
        },
        travelerTips: [
          "Take an auto from VSKP Railway Station to Dwaraka RTC Complex (takes ~10 mins).",
          "Buses are comfortable with scenic views of coastal Andhra and southern Odisha hills.",
        ],
      },
    ],
  },
};

export const RAILWAY_STATION_OPTIONS = [
  {
    id: "rail-bbs",
    name: "Bhubaneswar Railway Station",
    code: "BBS (via Brahmapur BAM)",
    distance: "BBS ~340 km · BAM ~175 km",
  },
  {
    id: "rail-che",
    name: "Srikakulam Road Station",
    code: "CHE",
    distance: "~90 km to campus",
  },
  {
    id: "rail-vskp",
    name: "Visakhapatnam (Vizag) Station",
    code: "VSKP",
    distance: "~210 km to campus",
  },
];


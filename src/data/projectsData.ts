export interface ProjectDetail {
  slug: string;
  title: string;
  category: "commercial" | "community" | "education" | "healthcare" | "public-sector";
  categoryName: string;
  categorySlug: string;
  cardImage: string;
  heroImage: string;
  location: string;
  owner: string;
  squareFootage: string;
  duration: string;
  overview: string;
  description: string[];
  gallery: { src: string; caption?: string }[];
}

export const COMMERCIAL_PROJECTS: ProjectDetail[] = [
  {
    slug: "lehign-northamto-nairport-main-terminal",
    title: "Lehign Northamton Airport Main Terminal",
    category: "commercial",
    categoryName: "Commercial, Retail & Hospitality",
    categorySlug: "commercial-retail-and-hospitality",
    cardImage: "/images/projects/lehigh-card.jpg",
    heroImage: "/images/projects/commercial-hero.jpg",
    location: "Allentown, PA",
    owner: "Lehigh-Northampton Airport Authority",
    squareFootage: "45,000 Sq Ft",
    duration: "18 Months",
    overview:
      "Comprehensive terminal modernization, passenger checkpoint enhancements, and multi-phase gate concourse improvements at Lehigh Valley International Airport (ABE).",
    description: [
      "E.R. Stuebner was contracted to perform comprehensive interior and exterior terminal modernizations for the Lehigh-Northampton Airport Authority.",
      "The multi-phased scope encompassed new architectural finishes, modern energy-efficient lighting, enhanced structural vestibules, upgraded baggage handling corridors, and modernized passenger circulation zones all executed within a 24/7 operating aviation environment without disruption to flight schedules.",
      "Strict TSA and FAA safety and security protocols were maintained throughout construction, delivering a state-of-the-art gateway for travelers across eastern Pennsylvania."
    ],
    gallery: [
      { src: "/images/projects/lehigh-card.jpg", caption: "Main Concourse Interior" },
      { src: "/images/projects/lehigh-ext-1.jpg", caption: "Exterior Terminal Access" },
      { src: "/images/projects/lehigh-int-2.jpg", caption: "Passenger Circulation Corridor" },
      { src: "/images/projects/lehigh-int-1.jpg", caption: "Gate Lounges & Seating" }
    ]
  },
  {
    slug: "diamond-credit-union",
    title: "Diamond Credit Union",
    category: "commercial",
    categoryName: "Commercial, Retail & Hospitality",
    categorySlug: "commercial-retail-and-hospitality",
    cardImage: "/images/projects/diamond-card.jpg",
    heroImage: "/images/projects/commercial-hero.jpg",
    location: "Exeter Township, PA",
    owner: "Diamond Credit Union",
    squareFootage: "18,500 Sq Ft",
    duration: "10 Months",
    overview:
      "Ground-up construction of a signature financial branch featuring modern member service spaces, custom wood accents, teller pods, drive-through canopies, and administrative offices.",
    description: [
      "Diamond Credit Union partnered with E.R. Stuebner for the ground-up development of their premier Exeter Township retail banking branch.",
      "The facility features a contemporary open-concept layout replacing traditional teller barriers with dynamic member consultation stations, high-security teller cash recyclers, and private advisory suites.",
      "Exterior construction incorporates stone veneer masonry, expansive curtain wall glass, high-efficiency mechanical systems, and multi-lane covered drive-through lanes engineered for optimal traffic flow."
    ],
    gallery: [
      { src: "/images/projects/diamond-card.jpg", caption: "Signature Branch Exterior" },
      { src: "/images/projects/diamond-01.jpg", caption: "Main Member Banking Hall" },
      { src: "/images/projects/diamond-02.jpg", caption: "Private Consultation Suites" },
      { src: "/images/projects/diamond-03.jpg", caption: "Custom Architectural Wood Ceiling" },
      { src: "/images/projects/diamond-04.jpg", caption: "Drive-Through Canopy Structure" },
      { src: "/images/projects/diamond-06.jpg", caption: "Executive Conference Room" },
      { src: "/images/projects/diamond-07.jpg", caption: "Member Hospitality Bar" },
      { src: "/images/projects/diamond-08.jpg", caption: "Interior Glass Office Partitions" },
      { src: "/images/projects/diamond-09.jpg", caption: "Security Vestibule & ATM Lobby" },
      { src: "/images/projects/diamond-10.jpg", caption: "Exterior Evening Lighting" }
    ]
  },
  {
    slug: "jeffersonville-new-clubhouse",
    title: "Jeffersonville New Clubhouse",
    category: "commercial",
    categoryName: "Commercial, Retail & Hospitality",
    categorySlug: "commercial-retail-and-hospitality",
    cardImage: "/images/projects/jeffersonville-card.jpg",
    heroImage: "/images/projects/commercial-hero.jpg",
    location: "Norristown, PA",
    owner: "West Norriton Township",
    squareFootage: "24,000 Sq Ft",
    duration: "14 Months",
    overview:
      "A premier municipal golf clubhouse and hospitality center featuring a grand banquet ballroom, pro shop, restaurant, commercial kitchen, and indoor virtual golf simulators.",
    description: [
      "E.R. Stuebner constructed the brand new multi-million dollar clubhouse facility at the historic Jeffersonville Golf Club for West Norriton Township.",
      "The two-story clubhouse features an expansive banquet hall hosting up to 200 guests with panoramic views of the greens, a full-service restaurant and bar, outdoor viewing terrace, and modern locker room facilities.",
      "The lower level includes cutting-edge commercial golf simulator bays, club fitting studios, and an upgraded PGA pro shop, making the clubhouse a year-round community destination."
    ],
    gallery: [
      { src: "/images/projects/jeffersonville-card.jpg", caption: "Grand Banquet Ballroom" },
      { src: "/images/projects/jeff-banquet-01.jpg", caption: "Ballroom Event Space" },
      { src: "/images/projects/jeff-exterior-06.jpg", caption: "Clubhouse Main Elevation" },
      { src: "/images/projects/jeff-exterior-03.jpg", caption: "Patio & Course Views" },
      { src: "/images/projects/jeff-lobby-03.jpg", caption: "Main Reception Lobby" },
      { src: "/images/projects/jeff-stair-02.jpg", caption: "Custom Architectural Staircase" },
      { src: "/images/projects/jeff-proshop-02.jpg", caption: "PGA Golf Pro Shop" },
      { src: "/images/projects/jeff-simulator-01.jpg", caption: "Virtual Golf Simulator Suite" },
      { src: "/images/projects/jeff-simulator-03.jpg", caption: "Simulator Lounge" },
      { src: "/images/projects/jeff-burgess-01.jpg", caption: "Restaurant Dining Room" },
      { src: "/images/projects/jeff-burgess-03.jpg", caption: "Full-Service Bar & Lounge" }
    ]
  },
  {
    slug: "staybridge",
    title: "Staybridge Hotel",
    category: "commercial",
    categoryName: "Commercial, Retail & Hospitality",
    categorySlug: "commercial-retail-and-hospitality",
    cardImage: "/images/projects/staybridge-card.jpg",
    heroImage: "/images/projects/commercial-hero.jpg",
    location: "Royersford, PA",
    owner: "Latitude Hospitality Group",
    squareFootage: "72,000 Sq Ft (106,000 Total Facility)",
    duration: "12 Months",
    overview:
      "A 4-story, 105-suite extended-stay hospitality facility constructed utilizing the Guaranteed Maximum Price (GMP) format, achieving early delivery below client budget.",
    description: [
      "E.R. Stuebner was selected to construct a 4-story, 72,000 sq ft Hotel in Royersford, PA utilizing the GMP contracting format.",
      "The project contains 105 guest suites, an indoor heated pool, commercial kitchen, multi-purpose conference rooms, spacious high-ceiling lobby, and outdoor courtyard gathering patios with fire pits.",
      "Through collaborative pre-construction and value engineering, E.R. Stuebner and Latitude Hospitality Group both achieved early project completion with total costs well below initial budget projections."
    ],
    gallery: [
      { src: "/images/projects/staybridge-card.jpg", caption: "Front Entrance & Porte-Cochere" },
      { src: "/images/projects/staybridge-06.jpg", caption: "Hotel Exterior Elevation" },
      { src: "/images/projects/staybridge-07.jpg", caption: "Guest Amenities & Courtyard" },
      { src: "/images/projects/staybridge-08.jpg", caption: "Lobby & Reception Lounge" }
    ]
  }
];

export const COMMUNITY_PROJECTS: ProjectDetail[] = [
  {
    slug: "ardmore-community-center",
    title: "Ardmore Community Center",
    category: "community",
    categoryName: "Community & Institutional",
    categorySlug: "community-and-institutional",
    cardImage: "/images/projects/ardmore-card.jpg",
    heroImage: "/images/projects/community-hero.jpg",
    location: "Ardmore, PA",
    owner: "Lower Merion Township",
    squareFootage: "32,000 Sq Ft",
    duration: "14 Months",
    overview:
      "Modern civic and recreational hub featuring multi-purpose community gathering halls, youth development classrooms, administrative suites, and accessibility upgrades.",
    description: [
      "E.R. Stuebner constructed the new Ardmore Community Center for Lower Merion Township, creating a vibrant focal point for municipal activities.",
      "The design integrates sustainable materials, high-performance HVAC systems, and open flexible floorplans to host diverse community events, arts programs, and civic meetings."
    ],
    gallery: [
      { src: "/images/projects/ardmore-card.jpg", caption: "Main Center Entrance" },
      { src: "/images/projects/community-hero.jpg", caption: "Civic Complex Exterior" }
    ]
  },
  {
    slug: "bishop-mcdevitt-high-school-and-stadium-renovations",
    title: "Bishop McDevitt High School and Stadium Renovations",
    category: "community",
    categoryName: "Community & Institutional",
    categorySlug: "community-and-institutional",
    cardImage: "/images/projects/bishop-mcdevitt-card.jpg",
    heroImage: "/images/projects/community-hero.jpg",
    location: "Harrisburg, PA",
    owner: "Diocese of Harrisburg",
    squareFootage: "115,000 Sq Ft",
    duration: "16 Months",
    overview:
      "Comprehensive campus renovations encompassing modern educational wings, collegiate athletic stadium grandstands, synthetic turf field, and student commons.",
    description: [
      "Full modernization of campus educational facilities paired with complete athletic stadium reconstruction, lighting installations, and locker pavilion construction."
    ],
    gallery: [
      { src: "/images/projects/bishop-mcdevitt-card.jpg", caption: "Athletic Stadium & Field" },
      { src: "/images/projects/community-hero.jpg", caption: "Campus Facilities" }
    ]
  }
];

export const EDUCATION_PROJECTS: ProjectDetail[] = [
  {
    slug: "wilson-high-school",
    title: "Wilson High School",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/wilson-hs-card.jpg",
    heroImage: "/images/projects/education-hero.jpg",
    location: "West Lawn, PA",
    owner: "Wilson School District",
    squareFootage: "285,000 Sq Ft",
    duration: "24 Months",
    overview: "Major high school additions, modern science laboratory wings, and state-of-the-art auditorium expansion.",
    description: ["Multi-phase renovation and building addition executed while campus remained fully occupied and active."],
    gallery: [{ src: "/images/projects/wilson-hs-card.jpg", caption: "High School Main Entry" }]
  },
  {
    slug: "dciu-marple-campus",
    title: "DCIU Marple Campus",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/dciu-marple-card.webp",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Broomall, PA",
    owner: "Delaware County Intermediate Unit",
    squareFootage: "98,000 Sq Ft",
    duration: "15 Months",
    overview: "Specialized education campus tailored with sensory rooms, adaptive learning centers, and administrative offices.",
    description: ["A premier regional intermediate unit facility featuring customized accessibility infrastructure."],
    gallery: [{ src: "/images/projects/dciu-marple-card.webp", caption: "Campus Exterior" }]
  },
  {
    slug: "uwchlan-hills-elementary-school",
    title: "Uwchlan Hills Elementary School",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/uwchlan-hills-card.jpg",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Downingtown, PA",
    owner: "Downingtown Area School District",
    squareFootage: "78,000 Sq Ft",
    duration: "14 Months",
    overview: "Modern elementary school building featuring dynamic STEM learning suites and open collaborative library media centers.",
    description: ["Delivered on schedule and within budget for Downingtown Area School District."],
    gallery: [{ src: "/images/projects/uwchlan-hills-card.jpg", caption: "Elementary School Exterior" }]
  },
  {
    slug: "springfield-high-school-and-stadium",
    title: "Springfield High School and Stadium",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/springfield-hs-card.webp",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Springfield, PA",
    owner: "Springfield School District",
    squareFootage: "240,000 Sq Ft",
    duration: "22 Months",
    overview: "New master high school building and multi-sport athletics stadium complex.",
    description: ["An iconic regional high school project delivering world-class academic and athletic facilities."],
    gallery: [{ src: "/images/projects/springfield-hs-card.webp", caption: "Athletic Stadium Complex" }]
  },
  {
    slug: "lincoln-middle-school",
    title: "Lincoln Middle School",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/lincoln-ms-card.webp",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Lancaster, PA",
    owner: "School District of Lancaster",
    squareFootage: "120,000 Sq Ft",
    duration: "18 Months",
    overview: "Historic middle school renovation and comprehensive modern wing expansion.",
    description: ["Seamlessly blend historic architectural preservation with 21st-century learning environments."],
    gallery: [{ src: "/images/projects/lincoln-ms-card.webp", caption: "School Facade" }]
  },
  {
    slug: "lynnewood-elementary-school",
    title: "Lynnewood Elementary School",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/lynnewood-es-card.jpg",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Havertown, PA",
    owner: "School District of Haverford Township",
    squareFootage: "85,000 Sq Ft",
    duration: "14 Months",
    overview: "Complete replacement elementary school with energy-efficient thermal envelope and flexible classrooms.",
    description: ["Designed for long-term operational sustainability and inspired childhood education."],
    gallery: [{ src: "/images/projects/lynnewood-es-card.jpg", caption: "Classroom Wing" }]
  },
  {
    slug: "dowingtown",
    title: "Downingtown High School West",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/downingtown-west-card.jpg",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Downingtown, PA",
    owner: "Downingtown Area School District",
    squareFootage: "310,000 Sq Ft",
    duration: "26 Months",
    overview: "Comprehensive phased additions, athletic facilities, and academic modernization.",
    description: ["One of E.R. Stuebner's flagship educational projects exceeding 300,000 square feet."],
    gallery: [{ src: "/images/projects/downingtown-west-card.jpg", caption: "Campus Facade" }]
  },
  {
    slug: "cca",
    title: "Commonwealth Charter Academy",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/cca-card.jpg",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Malvern, PA",
    owner: "Commonwealth Charter Academy",
    squareFootage: "65,000 Sq Ft",
    duration: "11 Months",
    overview: "Adaptive reuse transformation into a cutting-edge hybrid learning and digital technology center.",
    description: ["Features robotics labs, aquaponics greenhouses, and multimedia production studios."],
    gallery: [{ src: "/images/projects/cca-card.jpg", caption: "Technology Center Entry" }]
  },
  {
    slug: "blue-bell-elementary",
    title: "Blue Bell Elementary",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/blue-bell-card.jpg",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Blue Bell, PA",
    owner: "Wissahickon School District",
    squareFootage: "72,000 Sq Ft",
    duration: "12 Months",
    overview: "Elementary school additions, modern cafeteria expansion, and security vestibule enhancements.",
    description: ["Enhanced student safety infrastructure and dynamic early-learning environments."],
    gallery: [{ src: "/images/projects/blue-bell-card.jpg", caption: "Main Entry" }]
  },
  {
    slug: "west-bradford",
    title: "West Bradford Elementary",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/west-bradford-card.jpg",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Downingtown, PA",
    owner: "Downingtown Area School District",
    squareFootage: "80,000 Sq Ft",
    duration: "13 Months",
    overview: "Classroom wings, gymnasium improvements, and mechanical infrastructure overhaul.",
    description: ["Energy-efficient modernization providing bright, comfortable spaces for elementary students."],
    gallery: [{ src: "/images/projects/west-bradford-card.jpg", caption: "School Elevation" }]
  },
  {
    slug: "thomas-ford-aquaponics-2",
    title: "Thomas Ford Aquaponics",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/thomas-ford-card.jpg",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Reading, PA",
    owner: "Reading School District",
    squareFootage: "12,000 Sq Ft",
    duration: "8 Months",
    overview: "Innovative living laboratory and controlled-environment agricultural education facility.",
    description: ["A forward-thinking educational initiative integrating biological science with hands-on aquaculture."],
    gallery: [{ src: "/images/projects/thomas-ford-card.jpg", caption: "Aquaponics Greenhouse" }]
  },
  {
    slug: "coopertown-elementary-school",
    title: "Coopertown Elementary School",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/blue-bell-card.jpg",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Bryn Mawr, PA",
    owner: "School District of Haverford Township",
    squareFootage: "76,000 Sq Ft",
    duration: "14 Months",
    overview: "Suburban elementary campus modernization with enhanced instructional tech and outdoor play areas.",
    description: ["Delivered with meticulous attention to detail and zero disruption to the academic calendar."],
    gallery: [{ src: "/images/projects/blue-bell-card.jpg", caption: "Campus Facade" }]
  },
  {
    slug: "central-bucks-hs-south",
    title: "Central Bucks HS South",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/central-bucks-south-card.jpg",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Warrington, PA",
    owner: "Central Bucks School District",
    squareFootage: "365,000 Sq Ft",
    duration: "30 Months",
    overview: "Comprehensive state-of-the-art regional high school facility accommodating over 2,000 students.",
    description: ["One of Pennsylvania's largest and most comprehensive secondary education construction projects."],
    gallery: [{ src: "/images/projects/central-bucks-south-card.jpg", caption: "High School Entrance" }]
  },
  {
    slug: "palmerton-high-school",
    title: "Palmerton Area School District",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/palmerton-sd-card.jpg",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Palmerton, PA",
    owner: "Palmerton Area School District",
    squareFootage: "140,000 Sq Ft",
    duration: "16 Months",
    overview: "District-wide high school renovation, upgraded sciences and vocational technical classrooms.",
    description: ["Revitalized core high school facilities for generations of Palmerton students."],
    gallery: [{ src: "/images/projects/palmerton-sd-card.jpg", caption: "District Campus" }]
  },
  {
    slug: "norristown",
    title: "Norristown Area School",
    category: "education",
    categoryName: "Education",
    categorySlug: "education",
    cardImage: "/images/projects/norristown-school-card.png",
    heroImage: "/images/projects/education-hero.jpg",
    location: "Norristown, PA",
    owner: "Norristown Area School District",
    squareFootage: "190,000 Sq Ft",
    duration: "20 Months",
    overview: "Extensive campus revitalizations, technology infrastructure, and athletic facility modernization.",
    description: ["Modernized learning spaces designed to nurture student potential and community pride."],
    gallery: [{ src: "/images/projects/norristown-school-card.png", caption: "Main Complex Elevation" }]
  }
];

export const HEALTHCARE_PROJECTS: ProjectDetail[] = [
  {
    slug: "tower-health-plastic-surgury-and-day-spa",
    title: "Reading Health - Plastic Surgery & Medical Spa",
    category: "healthcare",
    categoryName: "Healthcare",
    categorySlug: "healthcare",
    cardImage: "/images/projects/reading-health-card.jpg",
    heroImage: "/images/projects/healthcare-hero.jpg",
    location: "Wyomissing, PA",
    owner: "Tower Health System",
    squareFootage: "22,000 Sq Ft",
    duration: "10 Months",
    overview: "Luxury outpatient surgical suite and clinical medspa featuring sterile procedure rooms and patient suites.",
    description: ["Precision clinical environment built to rigorous healthcare standards paired with upscale hospitality finishes."],
    gallery: [{ src: "/images/projects/reading-health-card.jpg", caption: "Medical Suite Lobby" }]
  },
  {
    slug: "health-science",
    title: "Health Science & Wellness Center",
    category: "healthcare",
    categoryName: "Healthcare",
    categorySlug: "healthcare",
    cardImage: "/images/projects/health-science-card.jpg",
    heroImage: "/images/projects/healthcare-hero.jpg",
    location: "Blue Bell, PA",
    owner: "Montgomery County Community College",
    squareFootage: "60,000 Sq Ft",
    duration: "14 Months",
    overview: "State-of-the-art nursing simulation laboratories, dental hygiene clinics, and kinesiology facilities.",
    description: ["Educating future healthcare heroes in cutting-edge, realistic hospital mock clinical rooms."],
    gallery: [{ src: "/images/projects/health-science-card.jpg", caption: "Wellness Center Exterior" }]
  },
  {
    slug: "racc-theater",
    title: "RACC Theater – Miller Center for Arts",
    category: "healthcare",
    categoryName: "Healthcare",
    categorySlug: "healthcare",
    cardImage: "/images/projects/racc-theater-card.jpg",
    heroImage: "/images/projects/healthcare-hero.jpg",
    location: "Reading, PA",
    owner: "Reading Area Community College",
    squareFootage: "42,000 Sq Ft",
    duration: "12 Months",
    overview: "500-seat performing arts center and multi-purpose civic theatre with acoustic engineering.",
    description: ["World-class acoustic performance spaces hosting regional educational and cultural events."],
    gallery: [{ src: "/images/projects/racc-theater-card.jpg", caption: "Miller Center Arts Hall" }]
  },
  {
    slug: "thrh-varian-linac",
    title: "THRH Varian Linac",
    category: "healthcare",
    categoryName: "Healthcare",
    categorySlug: "healthcare",
    cardImage: "/images/projects/thrh-varian-card.jpg",
    heroImage: "/images/projects/healthcare-hero.jpg",
    location: "West Reading, PA",
    owner: "Reading Hospital / Tower Health",
    squareFootage: "14,500 Sq Ft",
    duration: "9 Months",
    overview: "High-density heavy concrete radiation therapy linear accelerator vault with advanced medical shielding.",
    description: ["Complex radiation protection concrete placement meeting atomic regulatory safety tolerances."],
    gallery: [{ src: "/images/projects/thrh-varian-card.jpg", caption: "Radiation Therapy Vault" }]
  },
  {
    slug: "phoenixville-hosp-maternity",
    title: "Phoenixville Hosp. Maternity",
    category: "healthcare",
    categoryName: "Healthcare",
    categorySlug: "healthcare",
    cardImage: "/images/projects/phoenixville-maternity-card.jpg",
    heroImage: "/images/projects/healthcare-hero.jpg",
    location: "Phoenixville, PA",
    owner: "Phoenixville Hospital / Tower Health",
    squareFootage: "28,000 Sq Ft",
    duration: "12 Months",
    overview: "Modernized labor, delivery, recovery, and postpartum (LDRP) private suites and neonatal nurseries.",
    description: ["Soothing family-centered environments paired with critical-care medical gas and life-safety systems."],
    gallery: [{ src: "/images/projects/phoenixville-maternity-card.jpg", caption: "Hospital Maternity Wing" }]
  }
];

export const PUBLIC_SECTOR_PROJECTS: ProjectDetail[] = [
  {
    slug: "northampton-twp-fire-station",
    title: "Northampton Twp New Fire Station",
    category: "public-sector",
    categoryName: "Public Sector",
    categorySlug: "public-sector",
    cardImage: "/images/projects/northampton-fire-card.jpg",
    heroImage: "/images/projects/public-sector-hero.jpg",
    location: "Richboro, PA",
    owner: "Northampton Township",
    squareFootage: "26,000 Sq Ft",
    duration: "14 Months",
    overview: "State-of-the-art municipal fire department headquarters with 4 drive-through apparatus bays and emergency command center.",
    description: ["Built for 24/7 durability, firefighter decontamination corridors, gear drying lockers, and sleeping quarters."],
    gallery: [{ src: "/images/projects/northampton-fire-card.jpg", caption: "Apparatus Bays & Station" }]
  },
  {
    slug: "berks-transit-center",
    title: "Berks Transit Center Renovation",
    category: "public-sector",
    categoryName: "Public Sector",
    categorySlug: "public-sector",
    cardImage: "/images/projects/berks-transit-card.jpg",
    heroImage: "/images/projects/public-sector-hero.jpg",
    location: "Reading, PA",
    owner: "Berks Area Regional Transportation Authority (BARTA)",
    squareFootage: "35,000 Sq Ft",
    duration: "11 Months",
    overview: "Intermodal regional transit terminal modernization with updated passenger concourse, ticketing, and bus docking lanes.",
    description: ["Executed seamlessly without disruption to daily commuter bus schedules and public access."],
    gallery: [{ src: "/images/projects/berks-transit-card.jpg", caption: "Transit Terminal Elevation" }]
  },
  {
    slug: "harmonville-fire-station",
    title: "Harmonville Fire Station",
    category: "public-sector",
    categoryName: "Public Sector",
    categorySlug: "public-sector",
    cardImage: "/images/projects/harmonville-fire-card.jpg",
    heroImage: "/images/projects/public-sector-hero.jpg",
    location: "Plymouth Meeting, PA",
    owner: "Harmonville Fire Company No. 1",
    squareFootage: "24,500 Sq Ft",
    duration: "13 Months",
    overview: "New emergency response substation featuring heavy-duty structural bays, rapid response doors, and training tower.",
    description: ["A modern facility engineered to serve Plymouth Township and surrounding Montgomery County communities."],
    gallery: [{ src: "/images/projects/harmonville-fire-card.jpg", caption: "Fire Station Apparatus Facility" }]
  }
];

export const ALL_PROJECTS: ProjectDetail[] = [
  ...COMMERCIAL_PROJECTS,
  ...COMMUNITY_PROJECTS,
  ...EDUCATION_PROJECTS,
  ...HEALTHCARE_PROJECTS,
  ...PUBLIC_SECTOR_PROJECTS
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return ALL_PROJECTS.find(p => p.slug === slug);
}

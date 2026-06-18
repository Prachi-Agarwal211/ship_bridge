export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ServiceDetail {
  whyPill: string;
  journeySteps: { icon: string; title: string; desc: string }[];
  flowSteps: { icon: string; title: string; brief: string }[];
  whatWeDo: string[];
  whatYouNeed: string[];
  faqs?: { q: string; a: string }[];
  stats?: { value: string; label: string }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ftl",
    title: "Full Truck Load (FTL)",
    subtitle: "Dedicated Freight",
    description: "Book an entire truck exclusively for your cargo. FTL ensures faster transit, zero damage risk from sharing, and direct point-to-point delivery. Ideal for bulk shipments, high-value goods, and time-sensitive freight across India.",
    image: "/services/warehouse.jpeg",
    tags: ["Dedicated Truck", "Door-to-Door", "GPS Tracking", "Fastest Transit", "Zero Handling"]
  },
  {
    id: "ptl",
    title: "Part Truck Load (PTL)",
    subtitle: "Shared Freight / LTL",
    description: "Pay only for the space you use. PTL consolidates your shipment with others heading the same route, offering 20-30% savings over FTL while maintaining reliable transit times. Perfect for medium-sized B2B shipments.",
    image: "/services/warehouse.jpeg",
    tags: ["Cost Effective", "Shared Truck", "Flexible Volume", "Pan-India", "Regular Service"]
  },
  {
    id: "express",
    title: "Express Delivery",
    subtitle: "Time-Definite Freight",
    description: "Guaranteed time-definite delivery with air and surface express options. Choose same-day, next-day, or scheduled delivery windows. Real-time tracking and priority handling for urgent shipments.",
    image: "/services/local.png",
    tags: ["Same-Day", "Next-Day", "Time-Definite", "Priority Handling", "Air + Surface"]
  },
  {
    id: "b2bcoloading",
    title: "B2B Coloading",
    subtitle: "Consolidated Freight",
    description: "ShipBridge's signature service — consolidate your B2B shipments with other shippers going the same route. AI-optimized routing reduces costs by 20-30% while maintaining fast transit. Perfect for regular shippers.",
    image: "/services/warehouse.jpeg",
    tags: ["AI Optimized", "20-30% Savings", "Regular Routes", "Shared Load", "Eco-Friendly"]
  },
  {
    id: "household",
    title: "Household Shifting",
    subtitle: "Residential Relocation",
    description: "Our expert team handles your household shifting with the utmost care. From premium packaging of delicate glassware to secure transit and furniture layout in your new home, we make moving completely stress-free.",
    image: "/services/household.jpeg",
    tags: ["Premium Packing", "Furniture Disassembly", "Fragile Care", "Secure Transit", "Placement & Setup"]
  },
  {
    id: "office",
    title: "Office Shifting",
    subtitle: "Corporate Relocation",
    description: "Minimize downtime with our efficient workspace relocations. We specialize in packing complex server setups, high-value IT equipment, office workstations, and secure files with minimal operational disruption.",
    image: "/services/office.jpeg",
    tags: ["IT Asset Management", "Server Packing", "Document Cataloging", "After-Hours Shifting", "Cubicle Setup"]
  },
  {
    id: "warehouse",
    title: "Warehouse & Storage",
    subtitle: "Secure Warehousing",
    description: "Safe, climate-controlled, and fully insured storage solutions for your short-term or long-term inventory needs. Features 24/7 CCTV surveillance, fire prevention, and digital stock indexing.",
    image: "/services/warehouse.jpeg",
    tags: ["24/7 Surveillance", "Climate Control", "Digital Inventory", "Short/Long Term", "Fire-Safety Certified"]
  },
  {
    id: "local",
    title: "Local Shifting",
    subtitle: "Same-City Relocations",
    description: "Fast, reliable, and affordable moving services within your city. Our local teams navigate city routes efficiently to ensure your household or office belongings are safely moved on the very same day.",
    image: "/services/local.png",
    tags: ["Same-Day Delivery", "Dedicated Trucks", "Local Route Experts", "Express Packing", "Budget Friendly"]
  },
  {
    id: "vehicle",
    title: "Car & Bike Transport",
    subtitle: "Safe Vehicle Logistics",
    description: "Relocate your cars and motorcycles across long distances without adding miles or risk. We use specialized, secure auto-carriers and advanced harnessing to ensure scratch-free doorstep delivery.",
    image: "/services/vehicle.jpeg",
    tags: ["Enclosed Carriers", "GPS Tracking", "Safety Harnessing", "Damage-Free Guarantee", "Doorstep Pickup"]
  },
  {
    id: "exhibition",
    title: "Exhibition & Trade",
    subtitle: "Event Logistics",
    description: "Time-critical setup and logistics management for exhibition pavilions, trade shows, and events. We coordinate booth material transport, on-site assembly, and secure reverse logistics post-event.",
    image: "/services/exhibition.png",
    tags: ["Booth Construction Setup", "Time-Critical Delivery", "On-Site Support", "Event Coordination", "Reverse Logistics"]
  },
  {
    id: "ecommerce",
    title: "E-commerce Logistics",
    subtitle: "Last Mile & COD",
    description: "End-to-end e-commerce fulfillment — from warehouse to customer door. COD collection, returns management, same-day/next-day delivery, and NDR resolution. Integrates with all major marketplaces.",
    image: "/services/local.png",
    tags: ["COD Management", "Returns Handling", "Same-Day Delivery", "Marketplace Integration", "NDR Resolution"]
  },
  {
    id: "reverselog",
    title: "Reverse Logistics",
    subtitle: "Returns Management",
    description: "Complete returns management — pickup, transit, inspection, grading, and restocking or disposal. Specialized for e-commerce returns across India.",
    image: "/services/local.png",
    tags: ["End-to-End Returns", "Inspection & Grading", "Restocking", "E-commerce Focus", "Pan-India Pickup"]
  }
];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  household: {
    whyPill: "Door-to-door Premium Packing",
    journeySteps: [
      { icon: "🔎", title: "Survey Check", desc: "Digital or physical inventory lookup" },
      { icon: "📦", title: "Premium Packing", desc: "Multi-layer wrap & box protection" },
      { icon: "🚛", title: "Safe Transit", desc: "Closed-container transport trucks" },
      { icon: "🏠", title: "Room Setup", desc: "Unpacking & furniture alignment" }
    ],
    flowSteps: [
      { icon: "📍", title: "Pickup Details", brief: "Provide address, floors, and lift access" },
      { icon: "🚚", title: "Drop Details", brief: "Provide destination address info" },
      { icon: "📦", title: "Item Inventory", brief: "List furniture and electronics room-by-room" },
      { icon: "🚛", title: "Vehicle Details", brief: "Select container truck sizes" },
      { icon: "🏺", title: "Fragile Items", brief: "Specify delicate items and glassware" },
      { icon: "🛡️", title: "Service Options", brief: "Select Premium or Standard wrap grade" },
      { icon: "📅", title: "Schedule", brief: "Select preferred shifting date/time" },
      { icon: "🚀", title: "Submit", brief: "Confirm details and submit lead" }
    ],
    whatWeDo: [
      "Multi-layer bubble wrapping for all fragile glass and chinaware.",
      "Custom furniture packaging with foam sheets and corner guards.",
      "Heavy item loading, unloading, and alignment inside the new home.",
      "Systematic wardrobe box packing to prevent wrinkles in clothing."
    ],
    whatYouNeed: [
      "Keep cash, jewelry, and personal ID documents in your personal carry-on.",
      "Defrost and dry out refrigerators 24 hours prior to shifting.",
      "Acquire societal permission gate passes for entry/exit.",
      "Label boxes containing items you need immediately after arrival."
    ],
    faqs: [
      { q: "How do you protect fragile glassware and chinaware?", a: "We use multi-layer bubble wrap, custom foam inserts, and dedicated 'fragile only' crates with 'this side up' markings and shock indicators." },
      { q: "What should I do with my fridge and appliances before the move?", a: "Defrost and dry refrigerators and freezers at least 24 hours in advance. Disconnect and drain washing machines. We handle the rest." },
      { q: "Do I need society permissions or gate passes?", a: "Yes — most apartments require prior intimation. We provide a standard permission letter template and coordinate timing with security." },
      { q: "What items should I carry myself?", a: "Cash, jewelry, important documents, medicines, and one change of clothes per person. Everything else goes safely with us." }
    ],
    stats: [
      { value: "4,800+", label: "Household moves" },
      { value: "Pan-India", label: "Coverage" },
      { value: "48hr", label: "Avg delivery" }
    ]
  },
  office: {
    whyPill: "Weekend & After-Hours Shifting Available",
    journeySteps: [
      { icon: "🏢", title: "IT Audit", desc: "Desktop & server setup assessment" },
      { icon: "⚡", title: "Tech Packing", desc: "Anti-static bubble wrap safety" },
      { icon: "🚚", title: "Off-Hours Move", desc: "Overnight/weekend transit to limit downtime" },
      { icon: "💻", title: "Workspace Setup", desc: "Placement and desktop wiring setup" }
    ],
    flowSteps: [
      { icon: "🏢", title: "Address Details", brief: "Source and destination office locations" },
      { icon: "💻", title: "Item Details", brief: "Tables, chairs, and desk cabinets list" },
      { icon: "⚡", title: "IT/Electronics", brief: "Servers, switches, systems catalog" },
      { icon: "📋", title: "Inventory", brief: "Secure tags for business files and archives" },
      { icon: "🛡️", title: "Service Options", brief: "Standard shifting or server transport setup" },
      { icon: "📅", title: "Schedule", brief: "Finalize weekend/night shift timings" }
    ],
    whatWeDo: [
      "Anti-static bubble wrapping for servers, workstations, and network switches.",
      "Systematic numbering and labeling of desks, drawers, and document bins.",
      "Out-of-hours shifting options to keep downtime at absolute zero.",
      "Desktop setup and wiring arrangements at the new corporate location."
    ],
    whatYouNeed: [
      "Back up all critical databases and server configurations.",
      "Catalog and lock confidential business records in security boxes.",
      "Direct employee personal items to be taken home prior to move day.",
      "Arrange lift usage permissions with building management."
    ],
    faqs: [
      { q: "Can you shift during weekends or after office hours?", a: "Yes — we specialize in zero-downtime moves. Most corporate relocations happen Friday night through Sunday or overnight on weekdays." },
      { q: "How do you handle servers and sensitive IT equipment?", a: "Anti-static wrapping, labeled rack-by-rack disassembly/reassembly, dedicated server trolleys, and engineer supervision on both ends." },
      { q: "What about confidential files and documents?", a: "Tamper-evident security boxes, chain-of-custody logs, and optional escorted transport with NDA staff." }
    ],
    stats: [
      { value: "620+", label: "Office moves" },
      { value: "0.2 days", label: "Avg downtime" },
      { value: "24x7", label: "Support" }
    ]
  },
  warehouse: {
    whyPill: "24/7 CCTV & Climate Controlled Slots",
    journeySteps: [
      { icon: "🚚", title: "Safe Pickup", desc: "Professional logistics retrieval from your site" },
      { icon: "🏷️", title: "Safe Crate", desc: "Secure barcoded packing & cataloging" },
      { icon: "🔒", title: "CCTV Slots", desc: "Monitored, humidity-controlled compartments" },
      { icon: "📦", title: "Retrieval", desc: "Doorstep delivery on demand" }
    ],
    flowSteps: [
      { icon: "📍", title: "Pickup Details", brief: "Address and pickup schedule details" },
      { icon: "🏭", title: "Storage Type", brief: "Climate-regulated or normal lock slots" },
      { icon: "📦", title: "Item Details", brief: "Detailed barcode list of stored crates" },
      { icon: "📅", title: "Schedule & Submit", brief: "Finalize storage duration and confirm" }
    ],
    whatWeDo: [
      "Dedicated, humidity-regulated clean storage slots.",
      "Digital cataloging and barcode indexing of all incoming crates.",
      "24/7 CCTV tracking with structural security protocols and guards.",
      "Flexible scheduling for partial or full retrieval transits."
    ],
    whatYouNeed: [
      "Categorize and clean items before sending them to storage.",
      "Compile a list of high-value items requiring climate control.",
      "Finalize insurance selections for long-term inventory storage.",
      "Secure keys and locks for custom container spaces."
    ],
    faqs: [
      { q: "Is the storage climate controlled and insured?", a: "Yes — we offer both ambient and humidity-controlled zones. All goods are fully insured with 24/7 monitored CCTV and on-site guards." },
      { q: "Can I retrieve only part of my stored items?", a: "Absolutely. We support partial retrievals with 24-48hr notice. Your digital inventory lets us pull exact crates without disturbing the rest." },
      { q: "How do I know exactly what is stored?", a: "Every crate receives a unique barcode + photo at intake. You get a digital manifest with photos and can request live verification anytime." }
    ],
    stats: [
      { value: "18,000+", label: "Sq ft secure" },
      { value: "99.8%", label: "Retrieval on-time" },
      { value: "24/7", label: "Surveillance" }
    ]
  },
  local: {
    whyPill: "Fast, Budget-Friendly Same-Day Moves",
    journeySteps: [
      { icon: "📱", title: "3-Min Booking", desc: "Submit details & choose a local truck option" },
      { icon: "📦", title: "Tape & Wrap", desc: "Quick basic wrap protection for transport" },
      { icon: "🚚", title: "Direct Transit", desc: "Direct route shifting via local transporter" },
      { icon: "🏁", title: "Quick Delivery", desc: "Same-day doorstep placement and alignment" }
    ],
    flowSteps: [
      { icon: "📍", title: "Select Service", brief: "Configure local distance limits" },
      { icon: "🚚", title: "Pickup Details", brief: "Source address and floor level notes" },
      { icon: "📦", title: "Item Details", brief: "Furniture list and boxes details" },
      { icon: "🚛", title: "Vehicle Details", brief: "Select Tata Ace, Bolero, or Containers" },
      { icon: "📅", title: "Schedule", brief: "Choose move date and morning slots" },
      { icon: "🚀", title: "Submit", brief: "Verify checklist and submit lead" }
    ],
    whatWeDo: [
      "Rapid same-day loading, short-haul transport, and unloading.",
      "Budget-friendly pricing packages tailored for local relocations.",
      "Experienced drivers navigating city-specific load zones and routes.",
      "Basic packing with high-strength cargo wrap and tapes."
    ],
    whatYouNeed: [
      "Measure doorways and elevators to check if large furniture fits.",
      "Block parking slots for cargo trucks at both pickup and drop points.",
      "Keep small loose items in bags to speed up packaging.",
      "Secure entry permissions from local resident associations."
    ],
    faqs: [
      { q: "How fast can a local move happen?", a: "Same-day is standard for most bookings before 10am. We confirm vehicle & team within 60 minutes of request in supported cities." },
      { q: "What vehicle options do you have for local?", a: "Tata Ace (mini), Bolero/Tempo (1-1.5 ton), and larger containers for full 2-3BHK. We recommend based on your inventory list." },
      { q: "Is basic packing included?", a: "Yes — cargo wrap, tape, and basic padding for furniture. Premium bubble/wardrobe boxes available as add-on for fragile or clothing." }
    ],
    stats: [
      { value: "9,100+", label: "Local shifts" },
      { value: "Same day", label: "Most moves" },
      { value: "500+", label: "Cities covered" }
    ]
  },
  vehicle: {
    whyPill: "Scratch-Free Enclosed Auto Carriers",
    journeySteps: [
      { icon: "📋", title: "Condition Check", desc: "Multi-point digital scratch inspection report" },
      { icon: "🔒", title: "Carrier Safe", desc: "Side-wall harnesses inside enclosed carrier" },
      { icon: "🛰️", title: "GPS Transit", desc: "Real-time transport tracking notifications" },
      { icon: "🔑", title: "Safe Handover", desc: "Inspection match verification on delivery" }
    ],
    flowSteps: [
      { icon: "📍", title: "Select Vehicle", brief: "Specify Car, Bike, or Scooter transit" },
      { icon: "🚚", title: "Pickup Address", brief: "Doorstep pickup address log" },
      { icon: "📋", title: "Make & Model", brief: "Brand, registration, status logs" },
      { icon: "🚛", title: "Carrier Select", brief: "Open carrier or Enclosed trailer" },
      { icon: "📅", title: "Schedule", brief: "Finalize transit dates" },
      { icon: "🚀", title: "Submit", brief: "Review transit terms and submit" }
    ],
    whatWeDo: [
      "Doorstep vehicle pickup and transport in dedicated car-carriers.",
      "High-strength wheel harnessing and side-wall stabilization.",
      "Complete structural scratch checks with digital condition reports.",
      "Live GPS transit mapping links sent directly to your phone."
    ],
    whatYouNeed: [
      "Keep fuel levels below 1/4th tank to meet carrier load guidelines.",
      "Clean the vehicle so scratch inspections are clear.",
      "Remove personal belongings and accessories from the vehicle.",
      "Prepare photocopies of RC book, insurance, and owner ID papers."
    ],
    faqs: [
      { q: "Do you use enclosed carriers or open trailers?", a: "We default to enclosed carriers for cars (scratch & weather protection). Open carriers available for bikes/scooters when requested." },
      { q: "What documents do I need to provide?", a: "RC copy, valid insurance, PUC, and owner ID. We handle permits for inter-state; you just hand over the keys after the pre-inspection." },
      { q: "How do I track my car during transit?", a: "Live GPS link + daily status SMS. You can also call the driver or our 24/7 control room anytime." }
    ],
    stats: [
      { value: "3,200+", label: "Vehicles moved" },
      { value: "0.4%", label: "Claim rate" },
      { value: "Enclosed", label: "Default" }
    ]
  },
  exhibition: {
    whyPill: "Time-Critical Setup & Reverse Logistics",
    journeySteps: [
      { icon: "⏱️", title: "Safe Transport", desc: "Express delivery timed to stall setup schedule" },
      { icon: "🛠️", title: "Setup Help", desc: "Dedicated crew assisting loading & stand setups" },
      { icon: "🏢", title: "Buffer Hold", desc: "Temporary warehousing before & after show times" },
      { icon: "🔄", title: "Return Logistics", desc: "Dismantling and safe return transport" }
    ],
    flowSteps: [
      { icon: "📍", title: "Event Setup", brief: "Enter show date and timings" },
      { icon: "🚚", title: "Venue Destination", brief: "Hall number, stall address logs" },
      { icon: "📦", title: "Exhibit Inventory", brief: "Stall panels, displays, brochure index" },
      { icon: "🚛", title: "Transit Carrier", brief: "Express delivery scheduler selection" },
      { icon: "📅", title: "Schedule", brief: "On-site unloading time frame" },
      { icon: "🚀", title: "Submit", brief: "Submit event logistics form" }
    ],
    whatWeDo: [
      "Direct time-critical transport of stalls, banners, and brochures.",
      "On-site event crew assisting with loading and stand installations.",
      "Secure warehouse storage buffer slots before and after show times.",
      "Complete reverse packing and return logistics to home warehouses."
    ],
    whatYouNeed: [
      "Finalize booth structural specifications and unloading timelines.",
      "Apply for event organizer gate passes and unloading permit slots.",
      "Pack delicate exhibit electronics in custom flight cases.",
      "Provide contact lists of booth managers present at the venue."
    ],
    faqs: [
      { q: "Can you help with on-site booth setup and dismantling?", a: "Yes — our trained crew assists with unloading, stand assembly, electrical tie-ins, and full post-event pack-down + reverse logistics." },
      { q: "What if my materials arrive before the hall opens?", a: "We hold in our bonded buffer warehouse near the venue and deliver in your exact time window. No extra storage fees for standard exhibition windows." },
      { q: "Do you handle international or multi-city exhibition tours?", a: "We coordinate end-to-end for domestic circuits and partner for international freight on larger programs." }
    ],
    stats: [
      { value: "410+", label: "Events supported" },
      { value: "98%", label: "On-time setup" },
      { value: "Multi-city", label: "Tours handled" }
    ]
  },
  ftl: {
    whyPill: "Dedicated Truck, Zero Sharing, Fastest Transit",
    journeySteps: [
      { icon: "📋", title: "Load Plan", desc: "Cargo volume & weight assessment" },
      { icon: "🚛", title: "Vehicle Match", desc: "Right truck for your load size" },
      { icon: "🛰️", title: "Live Tracking", desc: "GPS-enabled real-time transit updates" },
      { icon: "🔑", title: "Direct Delivery", desc: "Point-to-point, no intermediate handling" }
    ],
    flowSteps: [
      { icon: "📍", title: "Origin Pincode", brief: "Pickup address & dock details" },
      { icon: "📍", title: "Destination Pincode", brief: "Delivery address & access info" },
      { icon: "📦", title: "Cargo Details", brief: "Weight, dimensions, type of goods" },
      { icon: "🚛", title: "Vehicle Type", brief: "Select truck (6W, 10W, 32ft, Trailer)" },
      { icon: "📅", title: "Schedule", brief: "Pickup date & time window" },
      { icon: "🚀", title: "Confirm & Book", brief: "Review quote and confirm booking" }
    ],
    whatWeDo: [
      "Dedicated 10-wheeler, multi-axle, or container truck for your cargo.",
      "GPS tracking with real-time location updates sent to your phone.",
      "Door-to-door delivery with no intermediate handling or transfers.",
      "Flexible scheduling — immediate or planned pickup windows."
    ],
    whatYouNeed: [
      "Accurate cargo weight and dimensions for vehicle selection.",
      "Loading/unloading arrangements at both origin and destination.",
      "Proper packaging for fragile or high-value cargo.",
      "GST details and shipping documents ready."
    ],
    faqs: [
      { q: "What is FTL and when should I use it?", a: "Full Truck Load means you book the entire truck exclusively. Use FTL when you have enough cargo to fill a truck (typically 5+ tonnes) or when cargo safety requires no sharing." },
      { q: "What truck sizes are available?", a: "LCV (6-wheeler, 9-11MT), 10-wheeler (16-20MT), Multi-axle (20-32MT), 32ft Container, and Trailers for heavy cargo." },
      { q: "Can I track my shipment?", a: "Yes — live GPS tracking link is shared via SMS and WhatsApp. You can also call our 24/7 control room." }
    ],
    stats: [
      { value: "50,000+", label: "FTL trips completed" },
      { value: "99.2%", label: "On-time delivery" },
      { value: "0.1%", label: "Damage rate" }
    ]
  },
  ptl: {
    whyPill: "Pay Only for Your Space, Save 20-30%",
    journeySteps: [
      { icon: "📦", title: "Cargo Measured", desc: "Weight & volumetric assessment" },
      { icon: "🤝", title: "Space Shared", desc: "Consolidated with compatible loads" },
      { icon: "🚛", title: "Hub Transit", desc: "Routed through nearest hub" },
      { icon: "🔑", title: "Final Delivery", desc: "Direct to destination address" }
    ],
    flowSteps: [
      { icon: "📍", title: "Origin Pincode", brief: "Pickup location details" },
      { icon: "📍", title: "Destination Pincode", brief: "Delivery address details" },
      { icon: "📦", title: "Cargo Details", brief: "Weight, dimensions, packages" },
      { icon: "📅", title: "Schedule", brief: "Preferred pickup date" },
      { icon: "🚀", title: "Confirm", brief: "Get instant rate & confirm" }
    ],
    whatWeDo: [
      "Consolidate your shipment with others heading the same route.",
      "Hub-and-spoke network ensuring reliable transit times.",
      "Pay only for the weight you ship.",
      "Pan-India coverage through 500+ partner network."
    ],
    whatYouNeed: [
      "Accurate weight and dimensions of all packages.",
      "Proper labeling with origin-destination tags.",
      "Packaging suitable for multi-touch transit.",
      "GST and invoice details for billing."
    ],
    faqs: [
      { q: "What is the difference between PTL and FTL?", a: "PTL (Part Truck Load) shares truck space with other shippers. You pay only for your cargo's weight/volume. FTL is a dedicated truck. PTL saves 20-30% for loads under 5 tonnes." },
      { q: "How long does PTL take?", a: "Same city: same day. 500km: 2-3 days. 1000km+: 3-5 days. Transit times include hub consolidation." },
      { q: "Is my cargo safe in shared transport?", a: "Yes — each shipment is barcoded, sealed, and tracked. Hub handling follows strict SOPs with CCTV monitoring." }
    ],
    stats: [
      { value: "1,00,000+", label: "PTL shipments" },
      { value: "25%", label: "Avg savings vs FTL" },
      { value: "500+", label: "Network hubs" }
    ]
  },
  express: {
    whyPill: "Guaranteed Time-Definite Delivery",
    journeySteps: [
      { icon: "⚡", title: "Priority Pickup", desc: "Immediate collection within hours" },
      { icon: "✈️", title: "Fast Transit", desc: "Air or express surface routing" },
      { icon: "🛰️", title: "Live Tracking", desc: "Real-time ETA updates" },
      { icon: "🔑", title: "On-Time Drop", desc: "Delivered within committed window" }
    ],
    flowSteps: [
      { icon: "📍", title: "Pickup Address", brief: "Origin details" },
      { icon: "📍", title: "Drop Address", brief: "Destination details" },
      { icon: "📦", title: "Cargo Details", brief: "Weight & contents" },
      { icon: "⏱️", title: "Select Speed", brief: "Same-day / Next-day / 2-day" },
      { icon: "🚀", title: "Book Now", brief: "Confirm & get instant tracking" }
    ],
    whatWeDo: [
      "Same-day delivery within metro cities (before 10am cutoff).",
      "Next-day delivery between major metros via air express.",
      "Time-definite windows: Morning (10:30am), Afternoon (2pm), Evening (6pm).",
      "Priority handling with dedicated express fleet."
    ],
    whatYouNeed: [
      "Book before 10am for same-day delivery.",
      "Ensure accurate address with landmark for faster delivery.",
      "Pack cargo securely for express handling.",
      "Keep phone accessible for delivery coordination."
    ],
    faqs: [
      { q: "What is the cutoff for same-day delivery?", a: "Book before 10am for metro cities. For intercity express, book before 2pm for next-day delivery via air." },
      { q: "Can I get a specific delivery time window?", a: "Yes — we offer Morning (10:30am), Afternoon (2pm), and Evening (6pm) delivery windows for metro routes." },
      { q: "Is express available for all pin codes?", a: "Same-day is available in 8 major metros. Next-day covers 50+ cities. Standard express reaches all serviceable pincodes." }
    ],
    stats: [
      { value: "25,000+", label: "Express deliveries" },
      { value: "98.5%", label: "On-time rate" },
      { value: "8 metros", label: "Same-day coverage" }
    ]
  },
  b2bcoloading: {
    whyPill: "AI-Optimized Shared Load, Maximum Savings",
    journeySteps: [
      { icon: "📋", title: "Shipper Profile", desc: "Regular route & volume analysis" },
      { icon: "🤖", title: "AI Match", desc: "Smart consolidation with compatible loads" },
      { icon: "🚛", title: "Consolidated Truck", desc: "Shared truck, dedicated space" },
      { icon: "🔑", title: "Direct Delivery", desc: "No rehandling at destination" }
    ],
    flowSteps: [
      { icon: "📍", title: "Origin Pincode", brief: "Regular pickup point" },
      { icon: "📍", title: "Destination Pincode", brief: "Delivery area" },
      { icon: "📦", title: "Cargo Profile", brief: "Typical weight & frequency" },
      { icon: "📅", title: "Schedule", brief: "Daily / Weekly / On-demand" },
      { icon: "🚀", title: "Get Started", brief: "Activate coloading account" }
    ],
    whatWeDo: [
      "AI matches your cargo with other shippers on the same route.",
      "You get a dedicated portion of the truck at shared cost.",
      "20-30% cost savings vs individual FTL bookings.",
      "Regular scheduled service for repeat shippers."
    ],
    whatYouNeed: [
      "Minimum 500kg per shipment for optimal consolidation.",
      "Flexible pickup windows (2-3 hour range).",
      "Standardized packaging for easy loading.",
      "Monthly volume commitment for best rates."
    ],
    faqs: [
      { q: "How does B2B coloading work?", a: "ShipBridge's AI consolidates shipments from multiple shippers going the same route. Each shipper gets a dedicated section of the truck. You save 20-30% vs booking your own FTL." },
      { q: "What is the minimum shipment size?", a: "Minimum 500kg per booking. For regular shippers, we offer monthly contracts with even better rates based on volume." },
      { q: "Is my cargo safe with other shippers' goods?", a: "Yes — each shipment is individually sealed, barcoded, and tracked. Loading follows strict compatibility rules (no mixing hazardous with food, etc.)." },
      { q: "How often does the coloading service run?", a: "Major routes run daily. Secondary routes run 3-5 times per week. Schedule is confirmed 24 hours before pickup." }
    ],
    stats: [
      { value: "30%", label: "Avg cost savings" },
      { value: "500+", label: "Regular shippers" },
      { value: "Daily", label: "Major routes" }
    ]
  },
  ecommerce: {
    whyPill: "End-to-End E-commerce Fulfillment",
    journeySteps: [
      { icon: "🏭", title: "Warehouse Pickup", desc: "Collection from fulfillment center" },
      { icon: "📦", title: "Sort & Route", desc: "AI-optimized last-mile routing" },
      { icon: "🏍️", title: "Last Mile", desc: "Doorstep delivery with OTP" },
      { icon: "💰", title: "COD Collection", desc: "Cash collection & remittance" }
    ],
    flowSteps: [
      { icon: "🏭", title: "Warehouse Address", brief: "Fulfillment center pickup" },
      { icon: "📍", title: "Customer Pincode", brief: "Delivery destination" },
      { icon: "📦", title: "Order Details", brief: "Weight, value, COD amount" },
      { icon: "⏱️", title: "SLA Selection", brief: "Same-day / Next-day / Standard" },
      { icon: "🚀", title: "Book Shipment", brief: "Integrate via API or dashboard" }
    ],
    whatWeDo: [
      "Marketplace integration with Flipkart, Amazon, Meesho, and more.",
      "Same-day and next-day delivery in 50+ cities.",
      "COD collection with next-day remittance to your bank.",
      "Complete returns management with reverse pickup."
    ],
    whatYouNeed: [
      "API credentials or marketplace seller account access.",
      "Proper product packaging with shipping labels.",
      "PIN code serviceability check before listing.",
      "COD remittance bank account details."
    ],
    faqs: [
      { q: "What marketplaces do you integrate with?", a: "All major Indian marketplaces — Flipkart, Amazon, Meesho, JioMart, Shopclues, and custom Shopify/WooCommerce stores via API." },
      { q: "How fast is COD remittance?", a: "Next-business-day remittance for all metro deliveries. T+2 for Tier-2/3 cities. Weekly settlement for high-volume sellers." },
      { q: "What is the RTO (Return to Origin) rate?", a: "Industry average is 23%. Our AI address verification and OTP-based delivery reduces RTO to under 15% for our sellers." },
      { q: "Do you handle returns?", a: "Yes — complete reverse logistics from customer doorstep back to your warehouse. Inspection, grading, and restocking included." }
    ],
    stats: [
      { value: "5,00,000+", label: "Monthly deliveries" },
      { value: "15%", label: "RTO rate (vs 23% avg)" },
      { value: "50+", label: "Cities same-day" }
    ]
  },
  reverselog: {
    whyPill: "Complete Returns Management",
    journeySteps: [
      { icon: "📱", title: "Return Request", desc: "Customer initiates return" },
      { icon: "🏍️", title: "Reverse Pickup", desc: "Collection from customer door" },
      { icon: "🏭", title: "Inspection", desc: "Grading & condition check" },
      { icon: "♻️", title: "Disposition", desc: "Restock / Refurbish / Recycle" }
    ],
    flowSteps: [
      { icon: "📍", title: "Pickup Address", brief: "Customer location" },
      { icon: "📍", title: "Return Warehouse", brief: "Destination facility" },
      { icon: "📦", title: "Product Details", brief: "Category, value, reason" },
      { icon: "⏱️", title: "Pickup Window", brief: "Schedule reverse pickup" },
      { icon: "🚀", title: "Confirm", brief: "Track return journey" }
    ],
    whatWeDo: [
      "Pan-India reverse pickup from customer doorsteps.",
      "Product inspection and grading (A/B/C/D categories).",
      "Refurbishment coordination for resellable returns.",
      "Disposal/recycling for end-of-life products."
    ],
    whatYouNeed: [
      "Return policy and RMA process documentation.",
      "Grading criteria for inspection (A/B/C/D).",
      "Destination warehouse address for restocking.",
      "API integration for automated return triggers."
    ],
    faqs: [
      { q: "How fast is reverse pickup?", a: "Metro: same-day or next-day pickup. Tier-2/3 cities: 2-3 days. Remote areas: 3-5 days. SLA depends on your reverse logistics policy." },
      { q: "Can you inspect and grade products?", a: "Yes — trained inspectors grade products as A (like new), B (minor defect), C (needs repair), D (scrap). Photos uploaded to dashboard for your review." },
      { q: "Do you handle e-commerce RTO (Return to Origin)?", a: "Yes — RTO management is our specialty. We handle failed deliveries, customer returns, and seller returns with complete tracking." }
    ],
    stats: [
      { value: "2,00,000+", label: "Returns processed" },
      { value: "48 hrs", label: "Avg return cycle" },
      { value: "Pan-India", label: "Coverage" }
    ]
  }
};

export function getServiceDetail(id: string): ServiceDetail {
  return SERVICE_DETAILS[id] || SERVICE_DETAILS.ftl;
}

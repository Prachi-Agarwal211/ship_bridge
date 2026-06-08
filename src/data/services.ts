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
  pricingFactors?: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
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
  }
];

// Rich per-service content (journey, process, checklists, FAQs, stats, pricing notes).
// Moved here from ServicePageClient for DRY + easier maintenance. Base data stays lean.
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
    ],
    pricingFactors: ["Number of rooms & inventory volume", "Floor & lift access at both ends", "Distance + city traffic", "Premium vs standard packing grade", "Specialty items (piano, art, antiques)"]
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
    ],
    pricingFactors: ["IT density & server count", "After-hours premium", "Floor access & building permissions", "Document volume & secure handling", "Weekend vs weekday timing"]
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
      { q: "Is the storage climate controlled and insured?", a: "Yes — we offer both ambient and humidity-controlled zones (15-25°C, 45-55% RH). All goods are fully insured with 24/7 monitored CCTV and on-site guards." },
      { q: "Can I retrieve only part of my stored items?", a: "Absolutely. We support partial retrievals with 24-48hr notice. Your digital inventory lets us pull exact crates without disturbing the rest." },
      { q: "How do I know exactly what is stored?", a: "Every crate receives a unique barcode + photo at intake. You get a digital manifest with photos and can request live verification anytime." }
    ],
    stats: [
      { value: "18,000+", label: "Sq ft secure" },
      { value: "99.8%", label: "Retrieval on-time" },
      { value: "24/7", label: "Surveillance" }
    ],
    pricingFactors: ["Volume (cubic feet or pallets)", "Climate vs standard zone", "Duration (monthly discounts)", "Access frequency (self vs assisted)", "High-value rider insurance"]
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
      { value: "₹4.5k", label: "Starting from" }
    ],
    pricingFactors: ["Distance within city limits", "Vehicle type (Ace / Bolero / Container)", "Floor & parking access", "Basic vs premium wrap", "Peak hour / weekend surcharge"]
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
      { q: "Do you use enclosed carriers or open trailers?", a: "We default to enclosed carriers for cars (scratch & weather protection). Open carriers available for bikes/scooters at lower cost when requested." },
      { q: "What documents do I need to provide?", a: "RC copy, valid insurance, PUC, and owner ID. We handle permits for inter-state; you just hand over the keys after the pre-inspection." },
      { q: "How do I track my car during transit?", a: "Live GPS link + daily status SMS. You can also call the driver or our 24/7 control room anytime." }
    ],
    stats: [
      { value: "3,200+", label: "Vehicles moved" },
      { value: "0.4%", label: "Claim rate" },
      { value: "Enclosed", label: "Default" }
    ],
    pricingFactors: ["Car vs bike vs scooter", "Enclosed vs open carrier", "Distance (inter-city)", "Make/model (specialty handling)", "Express vs standard schedule"]
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
      { q: "Do you handle international or multi-city exhibition tours?", a: "We coordinate end-to-end for domestic circuits and partner for international freight + customs clearance on larger programs." }
    ],
    stats: [
      { value: "410+", label: "Events supported" },
      { value: "98%", label: "On-time setup" },
      { value: "Multi-city", label: "Tours handled" }
    ],
    pricingFactors: ["Stall size & material volume", "Express vs standard timing", "On-site crew hours", "Buffer storage duration", "Reverse logistics complexity"]
  }
};

export function getServiceDetail(id: string): ServiceDetail {
  return SERVICE_DETAILS[id] || SERVICE_DETAILS.household;
}

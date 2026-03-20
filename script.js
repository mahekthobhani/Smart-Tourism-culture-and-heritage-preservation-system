/*
  ╔══════════════════════════════════════════════════════════╗
  ║  HERITAGE BHARAT – script.js                             ║
  ║  Works BOTH with the backend server AND without it!      ║
  ╚══════════════════════════════════════════════════════════╝

  HOW DATA LOADING WORKS:
  ───────────────────────
  1. First, we TRY to fetch data from the Node.js backend API
     (http://localhost:3000/api/...)
  2. If the server is NOT running, we automatically fall back
     to the built-in data arrays below.
  3. This means the website always shows content — with or
     without a running server!

  To enable the full backend (saves contact form, etc):
    1. Install Node.js from https://nodejs.org
    2. Run: npm install
    3. Run: node init_db.js
    4. Run: npm run dev
*/

// ══════════════════════════════════════════════════════════
// API BASE URL
// ══════════════════════════════════════════════════════════
const API_BASE = '/api';  // Backend API endpoint

// ══════════════════════════════════════════════════════════
// API HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════
async function fetchFromAPI(endpoint, fallbackData = []) {
    try {
        const response = await fetch(`${API_BASE}${endpoint}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        return data.success ? (data.places || data.gallery || data.facts || data.entries || []) : fallbackData;
    } catch (error) {
        console.warn(`API call failed for ${endpoint}, using fallback data:`, error.message);
        return fallbackData;
    }
}

async function postToAPI(endpoint, data) {
    try {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(`API POST failed for ${endpoint}:`, error);
        return { success: false, error: error.message };
    }
}

// ══════════════════════════════════════════════════════════
// FALLBACK DATA (used when server is NOT running)
// ══════════════════════════════════════════════════════════
// This is the same data as in the database.
// If the API call fails, the website uses these arrays.

const FALLBACK_PLACES = [
    // ── RAJKOT
    { id: 1, name: "Rajkot Watson Museum", district: "Rajkot", category: "Museum", emoji: "🏛️", description: "One of Gujarat's oldest museums with artefacts from the royal era, sculptures and colonial exhibits.", image: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Watson+Museum+Rajkot", tags: ["History", "Colonial", "Art"] },
    { id: 2, name: "Rotary Dolls Museum", district: "Rajkot", category: "Museum", emoji: "🪆", description: "A unique museum housing over 1400 dolls from 102 countries, showcasing world culture.", image: "https://images.unsplash.com/photo-1558281132-451b1f8f7a25?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Rotary+Dolls+Museum+Rajkot", tags: ["Children", "Culture", "Unique"] },
    { id: 3, name: "Kaba Gandhi No Delo", district: "Rajkot", category: "Museum", emoji: "🕊️", description: "Childhood home of Mahatma Gandhi, now a museum dedicated to the life of the Father of the Nation.", image: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Kaba+Gandhi+No+Delo+Rajkot", tags: ["Gandhi", "History", "Freedom"] },
    // ── JUNAGADH
    { id: 4, name: "Uparkot Fort", district: "Junagadh", category: "Fort", emoji: "🏰", description: "A 2300-year-old fort with Buddhist caves, ancient step wells and stunning city views. Built by Emperor Chandragupta.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25CMcUuOkX1qhoQXJ9QZzJdkP5Z2aMYtvWQ&s?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Uparkot+Fort+Junagadh", tags: ["Ancient", "Buddhist", "Architecture"] },
    { id: 5, name: "Girnar Hill & Temples", district: "Junagadh", category: "Pilgrimage", emoji: "⛰️", description: "Sacred hill with 866 metres height and 10,000 steps. Houses ancient Jain and Hindu temples at the summit.", image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Jain_temples_on_Girnar_mountain_aerial_view.jpg?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Girnar+Hill+Junagadh", tags: ["Spiritual", "Trekking", "Jain", "Hindu"] },
    // ── GIR SOMNATH
    { id: 7, name: "Somnath Temple", district: "Gir Somnath", category: "Temple", emoji: "🛕", description: "The first and most sacred of 12 Jyotirlinga temples. This eternal temple was rebuilt 17 times after repeated invasions.", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Somnath+Temple", tags: ["Shiva", "Jyotirlinga", "Sacred", "Sea"] },
    { id: 8, name: "Gir National Park", district: "Gir Somnath", category: "Wildlife", emoji: "🦁", description: "The world's last home of the Asiatic Lion. Home to 674 lions, leopards, hyenas and 300+ bird species.", image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Gir+National+Park", tags: ["Lions", "Wildlife", "Safari", "Nature"] },
    // ── DEVBHUMI DWARKA
    { id: 9, name: "Dwarkadhish Temple", district: "Devbhumi Dwarka", category: "Temple", emoji: "🔱", description: "Ancient 5-storey temple dedicated to Lord Krishna. One of the Char Dham pilgrimages. Stands at the confluence of rivers and sea.", image: "https://images.unsplash.com/photo-1591375372226-3485ca95641e?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Dwarkadhish+Temple", tags: ["Krishna", "Char Dham", "Pilgrimage"] },
    { id: 10, name: "Bet Dwarka", district: "Devbhumi Dwarka", category: "Pilgrimage", emoji: "⛵", description: "Island temple considered as the actual residence of Lord Krishna. Accessible by boat, with beautiful coastal views.", image: "https://www.hlimg.com/images/things2do/738X538/hqdefault-1-1523525481t.jpg?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Bet+Dwarka", tags: ["Island", "Boat", "Krishna", "Pilgrimage"] },
    { id: 11, name: "Nageshwar Jyotirlinga", district: "Devbhumi Dwarka", category: "Temple", emoji: "🐍", description: "One of the 12 sacred Jyotirlinga shrines, near Dwarka. Famous for the 25-metre tall statue of Lord Shiva.", image: "https://famoustemplesofindia.com/wp-content/uploads/2023/11/Nageshwar-Jyotirlinga-Dwaraka-1-1024x768.jpg?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Nageshwar+Temple+Dwarka", tags: ["Shiva", "Jyotirlinga", "Sculpture"] },
    // ── JAMNAGAR
    { id: 12, name: "Marine National Park", district: "Jamnagar", category: "Wildlife", emoji: "🐠", description: "India's first marine national park with 42 islands. Home to coral reefs, dolphins, sea turtles and 200+ bird species.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8l_HDJzgHghxe0EQmOXgVHTT__xZi9KMaA&s?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Marine+National+Park+Jamnagar", tags: ["Coral", "Marine", "Islands", "Diving"] },
    { id: 13, name: "Lakhota Palace & Museum", district: "Jamnagar", category: "Museum", emoji: "🏯", description: "A palace built in the middle of Ranmal Lake, now converted into a wonderful archaeological museum.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSfxYToGwGQygXXm8nZ8KScVlZCFIsiqXLw&s?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Lakhota+Palace+Museum+Jamnagar", tags: ["Lake", "Palace", "Artifacts"] },
    // ── PORBANDAR
    { id: 14, name: "Gandhi Smriti (Kirti Mandir)", district: "Porbandar", category: "Museum", emoji: "✊", description: "Birthplace of Mahatma Gandhi. The house has been preserved as a national monument with exhibits about his life.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlv73rkQEAcIZyWGjy1hsPDV2uq6Y9YzFXjQ&s?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Kirti+Mandir+Porbandar", tags: ["Gandhi", "Freedom", "Peace", "History"] },
    { id: 15, name: "Porbandar Beach", district: "Porbandar", category: "Beach", emoji: "🏖️", description: "A serene and beautiful coastal beach town famous for its sunsets. Porbandar is surrounded by the Arabian Sea.", image: "https://content.jdmagicbox.com/comp/porbandar/c7/9999px286.x286.141219152208.k2c7/catalogue/porbandar-beach-porbandar-ho-porbandar-tourist-attraction-zwjjsnf.jpg?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Porbandar+Beach", tags: ["Sunset", "Coastal", "Relaxation"] },
    // ── BHAVNAGAR
    { id: 16, name: "Velavadar Blackbuck National Park", district: "Bhavnagar", category: "Wildlife", emoji: "🦌", description: "Home to the largest concentration of Blackbucks in India. Also has wolves, nilgai and hundreds of birds.", image: "https://www.girnationalpark.in/uploads/gir-info.JPG?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Velavadar+Blackbuck+National+Park", tags: ["Blackbuck", "Grassland", "Wildlife"] },
    { id: 17, name: "Takhteshwar Temple", district: "Bhavnagar", category: "Temple", emoji: "🛕", description: "A high-altitude Shiva temple on a hillock offering panoramic 360° views of Bhavnagar city.", image: "https://www.tourmyindia.com/images/takhteshwar-temple-bhavnagar1.jpg?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Takhteshwar+Temple+Bhavnagar", tags: ["Hilltop", "Views", "Shiva"] },
    { id: 18, name: "Palitana Jain Temples", district: "Bhavnagar", category: "Temple", emoji: "🛕", description: "900+ Jain temples on Shatrunjaya Hill – the world's largest temple complex! Climbing 3500 steps to reach this is itself spiritual.", image: "https://notesonslowtravel.com/wp-content/uploads/2019/01/jain_complex_palitana.jpg?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Palitana+Jain+Temples", tags: ["Jain", "Hilltop", "900 Temples", "Sacred"] },
    // ── MORBI
    { id: 19, name: "Mani Mandir Palace", district: "Morbi", category: "Museum", emoji: "🏛️", description: "An ornate Italian-Gothic influenced palace of the Morbi royal family built in 1880.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuq-1P8nEjnKTsqUGzIRJTtENclidSKVjUQ&s?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Mani+Mandir+Palace+Morbi", tags: ["Palace", "Gothic", "Royal Heritage"] },
    { id: 20, name: "Morbi Pottery & Tile Hub", district: "Morbi", category: "Museum", emoji: "🏺", description: "Morbi is the 'Tile Capital of the World'. Visit the workshops to see traditional Gujarat pottery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7lonyOi5Sy69dV9sPy2jtxcl8VFR-iEI3w&s?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Morbi+Gujarat", tags: ["Craft", "Pottery", "Industry", "Art"] },
    // ── AMRELI
    { id: 21, name: "Gir East / Ratanmahal Wildlife", district: "Amreli", category: "Wildlife", emoji: "🐆", description: "The eastern buffer of Gir forest in Amreli is home to leopards, sloth bears, hyenas and hundreds of birds.", image: "https://www.girnationalpark.in/uploads/gir-info.JPG?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Gir+East+Amreli", tags: ["Leopard", "Wildlife", "Forest", "Nature"] },
    { id: 22, name: "Lathi - Kalapi's Birthplace", district: "Amreli", category: "Museum", emoji: "📚", description: "Birthplace of the famous Gujarati poet Kalapi. The Lathi estate is a beautifully preserved piece of Saurashtra's literary heritage.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlv73rkQEAcIZyWGjy1hsPDV2uq6Y9YzFXjQ&s?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Lathi+Amreli+Gujarat", tags: ["Poet", "History", "Literature", "Heritage"] },
    // ── SURENDRANAGAR
    { id: 23, name: "Wadhwan Stepwell", district: "Surendranagar", category: "Museum", emoji: "🌊", description: "An ancient stepped-well (Vav) built in traditional Gujarati architectural style. A hidden gem of medieval engineering.", image: "https://media.assettype.com/outlooktraveller%2F2023-09%2Fb2a5183d-1573-44e3-961f-247fbdf11d0b%2Fshutterstock_1413640199.jpg?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Wadhwan+Stepwell+Surendranagar", tags: ["Architecture", "Water", "Medieval"] },
    { id: 24, name: "Tarnetar Fair Grounds", district: "Surendranagar", category: "Museum", emoji: "🎪", description: "Famous for the annual Tarnetar Mela – a colourful tribal fair with folk art, dance, and traditional marriage gatherings.", image: "https://utsav.gov.in/public/uploads/event_cover_image/event_11/1656758445237568988.jpg?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Tarnetar+Surendranagar", tags: ["Festival", "Tribal", "Folk Art", "Annual Fair"] },
    // ── BOTAD
    { id: 25, name: "Swaminarayan Temple Gadhada", district: "Botad", category: "Temple", emoji: "🛕", description: "A spiritually significant temple where Swaminarayan spent 12 years. One of the main pilgrimage sites for the Swaminarayan sect.", image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Gadhada_Swaminarayan_Temple.jpg?w=400&h=280&fit=crop", map_link: "https://maps.google.com/?q=Swaminarayan+Temple+Gadhada", tags: ["Swaminarayan", "Pilgrimage", "Spiritual"] }
];

const FALLBACK_GALLERY = [
    { id: 1, src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&h=400&fit=crop", caption: "Somnath Temple at Sunrise", size: "wide" },
    { id: 2, src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=400&fit=crop", caption: "Asiatic Lion at Gir", size: "tall" },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25CMcUuOkX1qhoQXJ9QZzJdkP5Z2aMYtvWQ&s?w=400&h=280&fit=crop", caption: "Uparkot Fort, Junagadh", size: "normal" },
    { id: 4, src: "https://images.unsplash.com/photo-1591375372226-3485ca95641e?w=400&h=280&fit=crop", caption: "Dwarkadhish Temple", size: "normal" },
    { id: 5, src: "https://content.jdmagicbox.com/comp/porbandar/c7/9999px286.x286.141219152208.k2c7/catalogue/porbandar-beach-porbandar-ho-porbandar-tourist-attraction-zwjjsnf.jpg?w=600&h=400&fit=crop", caption: "Peaceful Arabian Sea Coast", size: "wide" },
    { id: 7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8l_HDJzgHghxe0EQmOXgVHTT__xZi9KMaA&s?w=400&h=400&fit=crop", caption: "Marine Life, Jamnagar", size: "tall" },
    { id: 8, src: "https://utsav.gov.in/public/uploads/event_cover_image/event_11/1656758445237568988.jpg?w=400&h=280&fit=crop", caption: "Colourful Garba Festival", size: "normal" },
    { id: 9, src: "https://notesonslowtravel.com/wp-content/uploads/2019/01/jain_complex_palitana.jpg?w=400&h=280&fit=crop", caption: "Palitana Jain Temples", size: "normal" },
    { id: 10, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7lonyOi5Sy69dV9sPy2jtxcl8VFR-iEI3w&s?w=400&h=280&fit=crop", caption: "Traditional Pottery, Morbi", size: "normal" }
];
const FALLBACK_FACTS = [
    { id: 1, emoji: "🦁", title: "Rarest Big Cat", fact: "Gir National Park is the ONLY place in the world outside Africa where you can see lions in the wild. As of 2023, there are 674 Asiatic Lions!" },
    { id: 2, emoji: "🛕", title: "Temple Rebuilt 17 Times", fact: "Somnath Temple has been destroyed and rebuilt 17 times in history! One of the oldest pilgrimages in India, it faces the Arabian Sea." },
    { id: 3, emoji: "🔱", title: "Underwater City", fact: "Scientists believe the ancient city of Dwarka (Lord Krishna's capital) is submerged underwater in the Gulf of Khambhat. Excavations are still ongoing!" },
    { id: 4, emoji: "🕊️", title: "Gandhi's Birthplace", fact: "Porbandar, a coastal town in Saurashtra, is the birthplace of Mahatma Gandhi. It's now a pilgrimage of peace for people worldwide." },
    { id: 5, emoji: "🏺", title: "Tile Capital of the World", fact: "Morbi alone produces 70% of India's ceramic tiles and exports to 100+ countries. A small town with a global footprint!" },
    { id: 6, emoji: "🌊", title: "First Marine Park", fact: "The Marine National Park in Jamnagar was established in 1980, making it India's FIRST and ONLY Marine National Park with 42 islands!" },
    { id: 7, emoji: "🏛️", title: "900 Temples on One Hill", fact: "Palitana (near Bhavnagar) has 900+ Jain temples on a single hill! It is the world's only city declared entirely vegetarian." },
    { id: 8, emoji: "🎨", title: "Bandhani Fabric", fact: "Jamnagar is the original home of Bandhani (tie-dye) fabric. A single Bandhani sari can have over 50,000 hand-tied knots!" },
    { id: 9, emoji: "💃", title: "Nine Nights of Dance", fact: "Navratri (Nine Nights) Garba festival was inscribed on UNESCO's Intangible Cultural Heritage list in 2023. Gujarat dances for 9 continuous nights!" },
    { id: 10, emoji: "🌿", title: "Oldest Peepal Tree", fact: "The Girnar Hills near Junagadh have inscriptions from Emperor Ashoka (3rd century BC) that are among the oldest surviving stone inscriptions in India!" },
    { id: 11, emoji: "⛵", title: "Ancient Maritime Trade", fact: "Saurashtra's ports were major hubs for maritime trade with Arabia, Persia, Africa and even Rome 2000 years ago." },
    { id: 12, emoji: "🎪", title: "Tarnetar's Floating Fair", fact: "The Tarnetar Fair at Surendranagar is one of Gujarat's most colourful tribal fairs. Young people meet potential partners here wearing unique hand-embroidered outfits!" }
];

const FALLBACK_CHATBOT = [
    { keyword: "somnath", response: "🛕 Somnath Temple is one of the 12 sacred Jyotirlinga shrines of Lord Shiva. Located in Prabhas Patan, Gir Somnath district. The temple faces the Arabian Sea. Best visited during Mahashivratri. Entry is free!", followUp: ["Tell me about Dwarka", "Best time to visit", "How to reach Somnath"] },
    { keyword: "dwarka", response: "🔱 Dwarkadhish Temple in Devbhumi Dwarka is one of the Char Dham pilgrimages. Lord Krishna is said to have established his kingdom here. The ancient underwater city of Dwarka is also being excavated offshore!", followUp: ["Tell me about Somnath", "Underwater city details", "Best time to visit Dwarka"] },
    { keyword: "gir", response: "🦁 Gir National Park is the ONLY home of Asiatic Lions in the world! Located in Saurashtra, it has 674 lions as of 2023. Safaris run from October to June. Book in advance through Gujarat Forest website.", followUp: ["How to book safari", "Best time for safari", "Other wildlife in Gir"] },
    { keyword: "lion", response: "🦁 You can see the majestic Asiatic Lion ONLY in Gir National Park, Saurashtra! Early morning jeep safaris give the best chance of spotting a pride of lions!", followUp: ["Tell me about Gir", "How to book safari", "Safari timings"] },
    { keyword: "rajkot", response: "🏙️ Rajkot is the cultural capital of Saurashtra. Visit Watson Museum, Kaba Gandhi No Delo (Gandhi's childhood home), Aji Dam, and enjoy Rajkot's famous Gathiya snacks and ice cream!", followUp: ["Tell me about Junagadh", "Best food in Rajkot", "Places to visit in Rajkot"] },
    { keyword: "junagadh", response: "🏔️ Junagadh has Uparkot Fort (2300 years old!), Girnar Hill (10,000 steps), and Sakkarbaug Zoo. A must-visit city for history lovers!", followUp: ["Tell me about Uparkot Fort", "Girnar Hill details", "Best time to visit"] },
    { keyword: "jamnagar", response: "🌊 Jamnagar is famous for India's first Marine National Park with coral reefs and dolphins, Bandhani fabric, and Lakhota Palace. Known as the 'City of Lakes'.", followUp: ["Marine National Park details", "Bandhani shopping", "Best time to visit"] },
    { keyword: "porbandar", response: "🕊️ Porbandar is the birthplace of Mahatma Gandhi! Visit Kirti Mandir, Sudama Mandir, and enjoy beautiful sunsets at the beach. A peaceful coastal city.", followUp: ["Gandhi's birthplace details", "Best beaches", "How to reach Porbandar"] },
    { keyword: "bhavnagar", response: "⚓ Bhavnagar is known for Velavadar Blackbuck National Park, Palitana Jain temples (900+ temples!), Takhteshwar Temple, and the historic old city area.", followUp: ["Tell me about Palitana", "Blackbuck National Park", "Best time to visit"] },
    { keyword: "amreli", response: "🌿 Amreli district is home to parts of Gir forest and is known as the birthplace of Gujarati poet Kalapi. Beautiful rural landscape with rich tribal culture.", followUp: ["Tell me about Gir", "Kalapi's history", "Places to visit"] },
    { keyword: "morbi", response: "🏺 Morbi is famous as the 'Tile Capital of the World', producing 70% of India's ceramic tiles. Also known for Mani Mandir Palace and being on the Machhu River.", followUp: ["Mani Mandir Palace", "Tile industry tour", "Best time to visit"] },
    { keyword: "surendranagar", response: "🌾 Surendranagar is known for the colourful Tarnetar Fair, Wadhwan Stepwells, and traditional crafts. Chudi Lake is also beautiful here.", followUp: ["Tarnetar Fair dates", "Wadhwan Stepwells", "Traditional crafts"] },
    { keyword: "botad", response: "🛕 Botad is a spiritual town. Gadhada has the famous Swaminarayan Temple where Sahajanand Swami spent 12 years. A peaceful pilgrimage destination.", followUp: ["Swaminarayan Temple details", "Best time to visit", "Other temples nearby"] },
    { keyword: "food", response: "🍽️ Must-try Saurashtra foods: Gathiya (Rajkot), Bajra Rotlo with Lassan-Chutney, Khaman Dhokla, Sev Khamani, Talela Gota, Jalebi with Fafda, and amazing Lassi! Gujarat is vegetarian-friendly.", followUp: ["Best restaurants", "Street food places", "Traditional recipes"] },
    { keyword: "festival", response: "🎉 Top Saurashtra festivals: Navratri (Oct, 9 nights of Garba dance), Mahasivratri at Somnath (Feb), Girnar Parikrama, Tarnetar Fair (Aug-Sept), and Janmashtami at Dwarka!", followUp: ["Tell me about Navratri", "Festival dates", "Best places to celebrate"] },
    { keyword: "best time", response: "🌤️ The best time to visit Saurashtra is October to February. Weather is cool and pleasant. Avoid May-June (very hot). Monsoon (July-Sept) makes Girnar and Gir very lush and green!", followUp: ["Weather in October", "Monsoon travel tips", "Summer destinations"] },
    { keyword: "navratri", response: "💃 Navratri is Gujarat's biggest festival – 9 nights of Garba dance! In 2023, UNESCO listed it as Intangible Cultural Heritage. Best experienced in Rajkot, Junagadh or Bhavnagar!", followUp: ["Garba dance classes", "Navratri dates", "Best venues"] },
    { keyword: "safari", response: "🚙 Gir Safari: Book online at forestdepartment.gujarat.gov.in. There are 3 gates – Sasan Gir, Devalia, Sinh Sadan. Morning safaris (7-11 AM) are best. Best season: Oct to June.", followUp: ["Safari booking process", "Safari costs", "What to carry"] },
    { keyword: "palitana", response: "🕌 Palitana (near Bhavnagar) has 900+ Jain temples on Shatrunjaya Hill. You climb 3500+ steps! It is the world's only city declared fully vegetarian. Incredible experience!", followUp: ["Climbing tips", "Best time to visit", "Accommodation options"] },
    { keyword: "uparkot", response: "🏰 Uparkot Fort in Junagadh was built over 2300 years ago! It has Buddhist caves, ancient step wells (Adi Kadi Vav), and offers amazing views of Junagadh city.", followUp: ["Fort timings", "Entry fees", "Guided tours"] },
    { keyword: "garba", response: "💃 Garba is a traditional Gujarati dance performed in circles during Navratri. UNESCO listed it as Intangible Cultural Heritage in 2023!", followUp: ["Learn Garba", "Navratri dates", "Best Garba venues"] },
    { keyword: "hotel", response: "🏨 Saurashtra has hotels for all budgets! Rajkot, Junagadh, and Jamnagar have good 3-4 star hotels. Near Gir, stay at Sasan Gir resorts. Coastal areas like Dwarka and Somnath have beach resorts. Book in advance during Navratri!", followUp: ["Budget hotels", "Luxury resorts", "Homestays"] },
    { keyword: "transport", response: "🚗 Getting around Saurashtra: GSRTC buses connect all cities. Private taxis available. Rajkot has airport with flights from major cities. Train network is excellent. Renting a car is great for flexibility!", followUp: ["Bus timings", "Taxi rates", "Train routes"] },
    { keyword: "budget", response: "💰 Budget for Saurashtra trip: ₹1500-2500/day for budget travel, ₹3000-5000/day for mid-range, ₹7000+/day for luxury. Includes stay, food, local transport. Gir safari costs extra (₹2500-4000).", followUp: ["Budget breakdown", "Money saving tips", "Best deals"] },
    { keyword: "shopping", response: "🛍️ Shopping in Saurashtra: Bandhani fabric (Jamnagar), Tiles & pottery (Morbi), Handicrafts (Rajkot), Patola silk (Patan nearby), Traditional jewelry, and local spices. Visit local bazaars for authentic experience!", followUp: ["Best markets", "Bargaining tips", "Authentic shops"] },
    { keyword: "beach", response: "🏖️ Beautiful beaches in Saurashtra: Dwarka Beach, Somnath Beach, Porbandar Beach, Diu beaches (nearby), and Madhavpur Beach. Perfect for sunsets and peaceful walks. Most are clean and less crowded!", followUp: ["Best beach", "Water sports", "Beach resorts"] },
    { keyword: "temple", response: "🛕 Famous temples: Somnath (Jyotirlinga), Dwarkadhish (Char Dham), Palitana (900+ Jain temples), Girnar temples, Swaminarayan temples, and countless village temples. Each has unique history and architecture!", followUp: ["Temple timings", "Dress code", "Nearby temples"] },
    { keyword: "fort", response: "🏰 Historic forts: Uparkot Fort (Junagadh, 2300 years old), Diu Fort (Portuguese), Bala Hanuman Fort (Jamnagar), and many smaller forts. Great for history buffs and photography!", followUp: ["Fort timings", "Guided tours", "Photography tips"] },
    { keyword: "museum", response: "🏛️ Museums to visit: Watson Museum (Rajkot) - colonial artifacts, Barton Museum (Bhavnagar), Lakhota Museum (Jamnagar), and Gandhi museums in Porbandar and Rajkot. Learn about Saurashtra's rich history!", followUp: ["Museum timings", "Entry fees", "Guided tours"] },
    { keyword: "photography", response: "📸 Best photo spots: Somnath Temple at sunset, Girnar Hill sunrise, Gir safari, Uparkot Fort, Palitana temples, Rann of Kutch (nearby), and colorful Navratri celebrations. Golden hour is magical!", followUp: ["Photography tips", "Best season", "Drone rules"] },
    { keyword: "family", response: "👨‍👩‍👧‍👦 Family-friendly places: Gir Safari (kids love lions!), Rajkot Science Center, Jamnagar Marine Park, Bhavnagar beaches, Junagadh Zoo, and Navratri celebrations. Safe and enjoyable for all ages!", followUp: ["Kid-friendly activities", "Family packages", "Safety tips"] },
    { keyword: "solo", response: "🎒 Solo travel in Saurashtra is safe and rewarding! People are friendly and helpful. Stay in hostels or budget hotels. Join group tours for Gir safari. Best for spiritual seekers and culture enthusiasts!", followUp: ["Solo travel tips", "Safety advice", "Budget hostels"] },
    { keyword: "couple", response: "💑 Romantic spots: Somnath beach sunset, Dwarka temple town, Gir jungle resort, Palitana hill climb together, Jamnagar lakes, and peaceful Porbandar beaches. Perfect for couples seeking culture and nature!", followUp: ["Honeymoon packages", "Romantic resorts", "Couple activities"] },
    { keyword: "adventure", response: "🏃 Adventure activities: Girnar Hill trek (10,000 steps!), Gir safari, Paragliding near Saputara (nearby), Rock climbing, Cycling tours, and Rann of Kutch camping. Thrilling experiences await!", followUp: ["Trekking guides", "Adventure packages", "Safety gear"] },
    { keyword: "hello", response: "🙏 Namaste! Welcome to Heritage Bharat, your guide to Saurashtra! Ask me about any district, temple, fort, wildlife, food or festival. I'm here to help you explore!", followUp: ["Popular destinations", "Travel tips", "Best time to visit"] },
    { keyword: "hi", response: "🙏 Jay Shree Krishna! I'm Heritage Bharat's tour guide. Ask me about Somnath, Dwarka, Gir, Rajkot, or any place in Saurashtra!", followUp: ["Top attractions", "Travel planning", "Local culture"] },
    { keyword: "thanks", response: "😊 You're welcome! Saurashtra is truly incredible. Atithi Devo Bhava (Guest is God) – that's our tradition! Enjoy exploring Gujarat!", followUp: ["More questions?", "Travel tips", "Contact us"] },
    { keyword: "contact", response: "📬 You can reach us via the Contact section below! We'd love to hear your travel stories!", followUp: ["Send feedback", "Report issue", "Partnership inquiry"] },
    { keyword: "help", response: "🤝 I can help you with: 🏛️ Places to visit, 🍽️ Local food, 🎉 Festivals, 🚗 Transport, 💰 Budget planning, 🏨 Hotels, 🦁 Wildlife safaris, 📸 Photography spots, and much more! Just ask!", followUp: ["Popular questions", "Travel guide", "Plan my trip"] },
    { keyword: "default", response: "🤔 That's a great question! Try asking about: Somnath, Dwarka, Gir, Rajkot, Junagadh, Jamnagar, Bhavnagar, Morbi, Navratri, food, best time to visit, or safari booking.", followUp: ["Popular destinations", "Travel tips", "Festival calendar"] }
];

// Conversation context for smarter responses
let conversationHistory = [];
let lastTopic = null;

// ══════════════════════════════════════════════════════════
// ADVANCED SEARCH SYSTEM
// ══════════════════════════════════════════════════════════
let currentDistrict = 'All';
let currentCategory = 'All';
let currentSearch = '';
// Comprehensive search index with all place details
const COMPREHENSIVE_SEARCH_INDEX = [
    // Rajkot District
    { id: 1, name: "Rajkot Watson Museum", district: "Rajkot", category: "Museum", emoji: "🏛️", 
      keywords: ["watson", "museum", "colonial", "artifacts", "sculptures", "royal", "history", "art", "gandhi", "rajkot"],
      description: "One of Gujarat's oldest museums with artefacts from the royal era, sculptures and colonial exhibits" },
    
    { id: 2, name: "Rotary Dolls Museum", district: "Rajkot", category: "Museum", emoji: "🪆",
      keywords: ["rotary", "dolls", "museum", "children", "culture", "unique", "1400", "countries", "rajkot"],
      description: "A unique museum housing over 1400 dolls from 102 countries, showcasing world culture" },
    
    { id: 3, name: "Kaba Gandhi No Delo", district: "Rajkot", category: "Museum", emoji: "🕊️",
      keywords: ["kaba", "gandhi", "delo", "childhood", "home", "mahatma", "father", "nation", "freedom", "rajkot"],
      description: "Childhood home of Mahatma Gandhi, now a museum dedicated to the life of the Father of the Nation" },
    
    // Junagadh District
    { id: 4, name: "Uparkot Fort", district: "Junagadh", category: "Fort", emoji: "🏰",
      keywords: ["uparkot", "fort", "ancient", "buddhist", "caves", "stepwell", "chandragupta", "mauryan", "junagadh"],
      description: "A 2300-year-old fort with Buddhist caves, ancient step wells and stunning city views. Built by Emperor Chandragupta" },
    
    { id: 5, name: "Girnar Hill & Temples", district: "Junagadh", category: "Pilgrimage", emoji: "⛰️",
      keywords: ["girnar", "hill", "temples", "jain", "hindu", "steps", "pilgrimage", "trekking", "spiritual", "junagadh"],
      description: "Sacred hill with 866 metres height and 10,000 steps. Houses ancient Jain and Hindu temples at the summit" },
    
    // Gir Somnath District
    { id: 7, name: "Somnath Temple", district: "Gir Somnath", category: "Temple", emoji: "🛕",
      keywords: ["somnath", "temple", "jyotirlinga", "shiva", "sacred", "rebuilt", "invasions", "sea", "pilgrimage"],
      description: "The first and most sacred of 12 Jyotirlinga temples. This eternal temple was rebuilt 17 times after repeated invasions" },
    
    { id: 8, name: "Gir National Park", district: "Gir Somnath", category: "Wildlife", emoji: "🦁",
      keywords: ["gir", "national", "park", "asiatic", "lion", "wildlife", "safari", "leopard", "nature", "conservation"],
      description: "The world's last home of the Asiatic Lion. Home to 674 lions, leopards, hyenas and 300+ bird species" },
    
    // Devbhumi Dwarka District
    { id: 9, name: "Dwarkadhish Temple", district: "Devbhumi Dwarka", category: "Temple", emoji: "🔱",
      keywords: ["dwarkadhish", "temple", "krishna", "char", "dham", "pilgrimage", "ancient", "dwarka"],
      description: "Ancient 5-storey temple dedicated to Lord Krishna. One of the Char Dham pilgrimages. Stands at the confluence of rivers and sea" },
    
    { id: 10, name: "Bet Dwarka", district: "Devbhumi Dwarka", category: "Pilgrimage", emoji: "⛵",
      keywords: ["bet", "dwarka", "island", "krishna", "boat", "pilgrimage", "coastal", "temple"],
      description: "Island temple considered as the actual residence of Lord Krishna. Accessible by boat, with beautiful coastal views" },
    
    { id: 11, name: "Nageshwar Jyotirlinga", district: "Devbhumi Dwarka", category: "Temple", emoji: "🐍",
      keywords: ["nageshwar", "jyotirlinga", "shiva", "statue", "sculpture", "dwarka"],
      description: "One of the 12 sacred Jyotirlinga shrines, near Dwarka. Famous for the 25-metre tall statue of Lord Shiva" },
    
    // Jamnagar District
    { id: 12, name: "Marine National Park", district: "Jamnagar", category: "Wildlife", emoji: "🐠",
      keywords: ["marine", "national", "park", "coral", "reefs", "dolphins", "turtles", "islands", "diving", "jamnagar"],
      description: "India's first marine national park with 42 islands. Home to coral reefs, dolphins, sea turtles and 200+ bird species" },
    
    { id: 13, name: "Lakhota Palace & Museum", district: "Jamnagar", category: "Museum", emoji: "🏰",
      keywords: ["lakhota", "palace", "museum", "lake", "ranmal", "artifacts", "archaeological", "jamnagar"],
      description: "A palace built in the middle of Ranmal Lake, now converted into a wonderful archaeological museum" },
    
    // Porbandar District
    { id: 14, name: "Gandhi Smriti (Kirti Mandir)", district: "Porbandar", category: "Museum", emoji: "✊",
      keywords: ["gandhi", "smriti", "kirti", "mandir", "birthplace", "mahatma", "freedom", "peace", "porbandar"],
      description: "Birthplace of Mahatma Gandhi. The house has been preserved as a national monument with exhibits about his life" },
    
    { id: 15, name: "Porbandar Beach", district: "Porbandar", category: "Beach", emoji: "🏖️",
      keywords: ["porbandar", "beach", "sunset", "coastal", "arabian", "sea", "relaxation", "gandhi"],
      description: "A serene and beautiful coastal beach town famous for its sunsets. Porbandar is surrounded by the Arabian Sea" },
    
    // Bhavnagar District
    { id: 16, name: "Velavadar Blackbuck National Park", district: "Bhavnagar", category: "Wildlife", emoji: "🦌",
      keywords: ["velavadar", "blackbuck", "national", "park", "grassland", "wildlife", "wolves", "nilgai", "bhavnagar"],
      description: "Home to the largest concentration of Blackbucks in India. Also has wolves, nilgai and hundreds of birds" },
    
    { id: 17, name: "Takhteshwar Temple", district: "Bhavnagar", category: "Temple", emoji: "🛕",
      keywords: ["takhteshwar", "temple", "hilltop", "views", "shiva", "panoramic", "bhavnagar"],
      description: "A high-altitude Shiva temple on a hillock offering panoramic 360° views of Bhavnagar city" },
    
    { id: 18, name: "Palitana Jain Temples", district: "Bhavnagar", category: "Temple", emoji: "🛕",
      keywords: ["palitana", "jain", "temples", "shatrunjaya", "hill", "900", "steps", "vegetarian", "bhavnagar"],
      description: "900+ Jain temples on Shatrunjaya Hill – the world's largest temple complex! Climbing 3500 steps to reach this is itself spiritual" },
    
    // Morbi District
    { id: 19, name: "Mani Mandir Palace", district: "Morbi", category: "Museum", emoji: "🏛️",
      keywords: ["mani", "mandir", "palace", "gothic", "royal", "heritage", "morbi"],
      description: "An ornate Italian-Gothic influenced palace of the Morbi royal family built in 1880" },
    
    { id: 20, name: "Morbi Pottery & Tile Hub", district: "Morbi", category: "Museum", emoji: "🏺",
      keywords: ["morbi", "pottery", "tile", "hub", "craft", "industry", "art", "ceramic"],
      description: "Morbi is the 'Tile Capital of the World'. Visit the workshops to see traditional Gujarat pottery" },
    
    // Amreli District
    { id: 21, name: "Gir East / Ratanmahal Wildlife", district: "Amreli", category: "Wildlife", emoji: "🐆",
      keywords: ["gir", "east", "ratanmahal", "wildlife", "leopard", "forest", "nature", "amreli"],
      description: "The eastern buffer of Gir forest in Amreli is home to leopards, sloth bears, hyenas and hundreds of birds" },
    
    { id: 22, name: "Lathi - Kalapi's Birthplace", district: "Amreli", category: "Museum", emoji: "📚",
      keywords: ["kalapi", "lathi", "poet", "history", "literature", "heritage", "amreli"],
      description: "Birthplace of the famous Gujarati poet Kalapi. The Lathi estate is a beautifully preserved piece of Saurashtra's literary heritage" },
    
    // Surendranagar District
    { id: 23, name: "Wadhwan Stepwell", district: "Surendranagar", category: "Museum", emoji: "🌊",
      keywords: ["wadhwan", "stepwell", "vav", "architecture", "water", "medieval", "surendranagar"],
      description: "An ancient stepped-well (Vav) built in traditional Gujarati architectural style. A hidden gem of medieval engineering" },
    
    { id: 24, name: "Tarnetar Fair Grounds", district: "Surendranagar", category: "Museum", emoji: "🎪",
      keywords: ["tarnetar", "fair", "grounds", "festival", "tribal", "folk", "art", "annual", "surendranagar"],
      description: "Famous for the annual Tarnetar Mela – a colourful tribal fair with folk art, dance, and traditional marriage gatherings" },
    
    // Botad District
    { id: 25, name: "Swaminarayan Temple Gadhada", district: "Botad", category: "Temple", emoji: "🛕",
      keywords: ["swaminarayan", "temple", "gadhada", "pilgrimage", "spiritual", "botad"],
      description: "A spiritually significant temple where Swaminarayan spent 12 years. One of the main pilgrimage sites for the Swaminarayan sect" }
];

// Advanced search variables
let searchHistory = JSON.parse(localStorage.getItem('heritageSearchHistory') || '[]');
let voiceSearchSupported = false;
let selectedSuggestionIndex = -1;
let searchTimeout = null;
let advancedFiltersActive = false;
let selectedInterests = [];

// Search operators for advanced queries
const SEARCH_OPERATORS = {
    'in:': 'district',
    'category:': 'category',
    'type:': 'category',
    'near:': 'near'
};

// Initialize advanced search features
function initializeAdvancedSearch() {
    // Check voice search support
    voiceSearchSupported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    
    if (!voiceSearchSupported) {
        const voiceBtn = document.getElementById('voiceBtn');
        if (voiceBtn) {
            voiceBtn.style.display = 'none';
        }
    }
    
    // Setup interest tag listeners
    document.querySelectorAll('.interest-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const interest = this.dataset.interest;
            toggleInterest(interest, this);
        });
    });
    
    // Setup filter change listeners
    ['distanceFilter', 'ratingFilter', 'budgetFilter', 'seasonFilter'].forEach(filterId => {
        const filter = document.getElementById(filterId);
        if (filter) {
            filter.addEventListener('change', applyAdvancedFilters);
        }
    });
}

// Parse search query for operators
function parseSearchQuery(query) {
    const parsed = {
        text: '',
        operators: {}
    };
    
    const parts = query.split(' ');
    const textParts = [];
    
    parts.forEach(part => {
        let isOperator = false;
        
        Object.keys(SEARCH_OPERATORS).forEach(op => {
            if (part.startsWith(op)) {
                const value = part.substring(op.length);
                const key = SEARCH_OPERATORS[op];
                parsed.operators[key] = value;
                isOperator = true;
            }
        });
        
        if (!isOperator) {
            textParts.push(part);
        }
    });
    
    parsed.text = textParts.join(' ');
    return parsed;
}

// Voice search functionality
function startVoiceSearch() {
    if (!voiceSearchSupported) {
        alert('Voice search is not supported in your browser');
        return;
    }
    
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const voiceBtn = document.getElementById('voiceBtn');
    const searchInput = document.getElementById('searchInput');
    
    recognition.lang = 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    voiceBtn.classList.add('listening');
    voiceBtn.innerHTML = '<i class="fas fa-stop"></i>';
    
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        currentSearch = transcript;
        handleSearchInput();
        addToSearchHistory(transcript);
    };
    
    recognition.onerror = function(event) {
        console.error('Voice search error:', event.error);
        alert('Voice search failed. Please try again.');
    };
    
    recognition.onend = function() {
        voiceBtn.classList.remove('listening');
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    };
    
    recognition.start();
}

// Toggle advanced filters panel
function toggleAdvancedFilters() {
    const filtersPanel = document.getElementById('advancedFilters');
    const filtersBtn = document.getElementById('filtersBtn');
    
    if (!filtersPanel) return;
    
    advancedFiltersActive = !advancedFiltersActive;
    
    if (advancedFiltersActive) {
        filtersPanel.style.display = 'block';
        filtersBtn.classList.add('active');
        hideSearchSuggestions();
    } else {
        filtersPanel.style.display = 'none';
        filtersBtn.classList.remove('active');
    }
}

// Toggle interest selection
function toggleInterest(interest, element) {
    if (selectedInterests.includes(interest)) {
        selectedInterests = selectedInterests.filter(i => i !== interest);
        element.classList.remove('active');
    } else {
        selectedInterests.push(interest);
        element.classList.add('active');
    }
    
    applyAdvancedFilters();
}

// Apply advanced filters
function applyAdvancedFilters() {
    // Get filter values
    const distance = document.getElementById('distanceFilter')?.value;
    const rating = document.getElementById('ratingFilter')?.value;
    const budget = document.getElementById('budgetFilter')?.value;
    const season = document.getElementById('seasonFilter')?.value;
    
    // Apply filters and refresh results
    fetchAndRenderPlaces();
}

// Reset all filters
function resetAllFilters() {
    // Reset dropdowns
    ['distanceFilter', 'ratingFilter', 'budgetFilter', 'seasonFilter'].forEach(filterId => {
        const filter = document.getElementById(filterId);
        if (filter) filter.value = '';
    });
    
    // Reset interests
    selectedInterests = [];
    document.querySelectorAll('.interest-tag').forEach(tag => {
        tag.classList.remove('active');
    });
    
    // Reset main filters
    currentDistrict = 'All';
    currentCategory = 'All';
    currentSearch = '';
    
    // Clear search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    // Update UI
    document.querySelectorAll('.district-btn, .cat-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelector('.district-btn')?.classList.add('active');
    document.querySelector('.cat-tab')?.classList.add('active');
    
    fetchAndRenderPlaces();
}

// Show search tips modal
function showSearchTips() {
    const tips = `
🔍 Advanced Search Tips:

📝 Search Operators:
• in:rajkot - Find places in Rajkot
• category:temple - Find all temples  
• type:museum - Find all museums
• near:somnath - Find places near Somnath

🎯 Smart Search:
• "gandhi museum" - Find Gandhi-related museums
• "jain temple" - Find Jain temples
• "wildlife park" - Find wildlife places

🗣️ Voice Search:
• Click microphone icon
• Say "Find temples in Junagadh"
• Works with natural language

🔧 Advanced Filters:
• Use sliders icon for detailed filters
• Filter by budget, rating, season
• Select your interests for personalized results

💡 Pro Tips:
• Use quotes for exact phrases
• Combine operators: "temple in:dwarka"
• Try partial names: "gir" finds "Gir National Park"
    `;
    
    alert(tips);
}
function performAdvancedSearch(searchTerm) {
    if (!searchTerm || searchTerm.trim().length === 0) {
        return COMPREHENSIVE_SEARCH_INDEX.map(place => ({ ...place, score: 1 }));
    }
    
    const term = searchTerm.toLowerCase().trim();
    const results = [];
    
    COMPREHENSIVE_SEARCH_INDEX.forEach(place => {
        let score = 0;
        
        // Exact name match (highest priority)
        if (place.name.toLowerCase() === term) {
            score += 100;
        }
        // Name starts with search term
        else if (place.name.toLowerCase().startsWith(term)) {
            score += 80;
        }
        // Name contains search term
        else if (place.name.toLowerCase().includes(term)) {
            score += 60;
        }
        
        // District exact match
        if (place.district.toLowerCase() === term) {
            score += 70;
        }
        // District contains search term
        else if (place.district.toLowerCase().includes(term)) {
            score += 40;
        }
        
        // Category exact match
        if (place.category.toLowerCase() === term) {
            score += 50;
        }
        // Category contains search term
        else if (place.category.toLowerCase().includes(term)) {
            score += 30;
        }
        
        // Keywords matching
        place.keywords.forEach(keyword => {
            if (keyword === term) {
                score += 45;
            } else if (keyword.includes(term)) {
                score += 25;
            } else if (term.includes(keyword)) {
                score += 15;
            }
        });
        
        // Description matching
        if (place.description.toLowerCase().includes(term)) {
            score += 20;
        }
        
        // Fuzzy matching for typos (simple Levenshtein-like)
        place.keywords.forEach(keyword => {
            if (calculateSimilarity(term, keyword) > 0.7) {
                score += 10;
            }
        });
        
        if (score > 0) {
            results.push({ ...place, score });
        }
    });
    
    // Sort by score (highest first)
    return results.sort((a, b) => b.score - a.score);
}

// Simple similarity calculation for fuzzy matching
function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

// Levenshtein distance calculation
function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

// ══════════════════════════════════════════════════════════
// HELPER: Safe API fetch with fallback
// ══════════════════════════════════════════════════════════
// FUNCTION: fetchAndRenderPlaces()
// ══════════════════════════════════════════════════════════
async function fetchAndRenderPlaces() {
    const grid = document.getElementById('placesGrid');
    const noResults = document.getElementById('noResults');
    const searchText = document.getElementById('searchResultText');

    if (!grid) return;

    grid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:40px;">
            <i class="fas fa-spinner fa-spin" style="font-size:2rem; color:#C9A84C;"></i>
            <p style="margin-top:10px; color:#aaa;">Loading heritage places...</p>
        </div>`;

    // Build API URL with query parameters
    const params = new URLSearchParams();
    if (currentDistrict !== 'All') params.set('district', currentDistrict);
    if (currentCategory !== 'All') params.set('category', currentCategory);
    if (currentSearch.trim()) params.set('search', currentSearch.trim());

    // Fetch data from API with fallback to local data
    const places = await fetchFromAPI(`/places?${params}`, FALLBACK_PLACES.filter(p => {
        const matchDist = currentDistrict === 'All' || p.district === currentDistrict;
        const matchCat = currentCategory === 'All' || p.category === currentCategory;
        const matchSearch = !currentSearch.trim() || 
            p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            p.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
            p.district.toLowerCase().includes(currentSearch.toLowerCase()) ||
            (p.tags && p.tags.some(tag => tag.toLowerCase().includes(currentSearch.toLowerCase())));
        return matchDist && matchCat && matchSearch;
    }));

    if (places.length === 0) {
        grid.innerHTML = '';
        if (noResults) {
            noResults.style.display = 'block';
            // Update no results message based on search
            const noResultsTitle = noResults.querySelector('h3');
            const noResultsText = noResults.querySelector('p');
            if (currentSearch.trim()) {
                if (noResultsTitle) noResultsTitle.textContent = `No results found for "${currentSearch}"`;
                if (noResultsText) noResultsText.textContent = 'Try searching with a different keyword or clear the search to see all places.';
            } else {
                if (noResultsTitle) noResultsTitle.textContent = 'No places found!';
                if (noResultsText) noResultsText.textContent = 'Try selecting different filters or "All Districts".';
            }
        }
        if (searchText) {
            searchText.textContent = currentSearch.trim() 
                ? `No results found for "${currentSearch}"` 
                : 'No places match the current filters';
        }
        return;
    }

    if (noResults) noResults.style.display = 'none';
    if (searchText) {
        if (currentSearch.trim()) {
            searchText.textContent = `Found ${places.length} result(s) for "${currentSearch}"`;
            searchText.style.color = '#C9A84C';
            searchText.style.fontWeight = '500';
        } else {
            searchText.textContent = `Showing ${places.length} place(s)`;
            searchText.style.color = '#666';
            searchText.style.fontWeight = 'normal';
        }
    }

    grid.innerHTML = places.map((place, index) => `
        <div class="place-card fade-in" style="animation-delay: ${index * 0.06}s">
            <div class="card-img-wrapper">
                <img
                    src="${place.image}"
                    alt="${place.name}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=280&fit=crop'"
                />
                <span class="card-category">${place.emoji} ${place.category}</span>
                <span class="card-district">${place.district}</span>
            </div>
            <div class="card-body">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <div class="card-actions">
                    <button class="card-btn btn-info" onclick="askBot('Tell me about ${place.name}')">
                        <i class="fas fa-robot"></i> Ask AI
                    </button>
                    <a href="place-details.html?id=${place.id}" target="_blank" class="card-btn btn-details">
                        <i class="fas fa-info-circle"></i> More Details
                    </a>
                    <a href="${place.map_link}" target="_blank" class="card-btn btn-map">
                        <i class="fas fa-map-marker-alt"></i> View Location
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    setTimeout(() => {
        document.querySelectorAll('.place-card.fade-in').forEach(card => {
            card.classList.add('visible');
        });
    }, 50);
}

// Alias
function renderPlaces() { fetchAndRenderPlaces(); }

// ══════════════════════════════════════════════════════════
// FILTER FUNCTIONS
// ══════════════════════════════════════════════════════════
function filterDistrict(districtName) {
    currentDistrict = districtName;
    document.querySelectorAll('.district-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.querySelector('span:last-child')?.textContent.trim() === districtName ||
            (districtName === 'All' && btn.querySelector('span:last-child')?.textContent === 'All Districts')) {
            btn.classList.add('active');
        }
    });
    fetchAndRenderPlaces();
    document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' });
}

function filterCategory(categoryName, btn) {
    currentCategory = categoryName;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    fetchAndRenderPlaces();
}

// Enhanced search input handler with operator parsing
function handleSearchInput() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');
    
    if (!searchInput) return;
    
    const value = searchInput.value.trim();
    
    // Show/hide clear button
    if (clearBtn) {
        clearBtn.style.display = value ? 'block' : 'none';
    }
    
    // Parse search operators
    const parsedQuery = parseSearchQuery(value);
    
    // Apply operator-based filters
    if (parsedQuery.operators.district) {
        currentDistrict = parsedQuery.operators.district;
    }
    if (parsedQuery.operators.category) {
        currentCategory = parsedQuery.operators.category;
    }
    
    // Update suggestions with parsed query
    updateSearchSuggestions(parsedQuery.text);
    
    // Clear previous timeout
    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }
    
    // Debounce search to avoid too many calls
    searchTimeout = setTimeout(() => {
        currentSearch = parsedQuery.text;
        console.log('Advanced search triggered:', parsedQuery);
        fetchAndRenderPlaces();
        
        // Add to search history if it's a meaningful search
        if (value.length >= 2) {
            addToSearchHistory(value);
        }
    }, 300);
}

// Handle keyboard navigation in suggestions
function handleSearchKeydown(event) {
    const suggestions = document.querySelectorAll('.suggestion-item');
    
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, suggestions.length - 1);
        updateSuggestionSelection();
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
        updateSuggestionSelection();
    } else if (event.key === 'Enter') {
        event.preventDefault();
        if (selectedSuggestionIndex >= 0 && suggestions[selectedSuggestionIndex]) {
            selectSuggestion(suggestions[selectedSuggestionIndex].dataset.text);
        }
    } else if (event.key === 'Escape') {
        hideSearchSuggestions();
    }
}

// Update suggestion selection visual state
function updateSuggestionSelection() {
    const suggestions = document.querySelectorAll('.suggestion-item');
    suggestions.forEach((item, index) => {
        item.classList.toggle('active', index === selectedSuggestionIndex);
    });
}

// Show search suggestions
function showSearchSuggestions() {
    const searchInput = document.getElementById('searchInput');
    const value = searchInput ? searchInput.value.trim() : '';
    updateSearchSuggestions(value);
    
    const suggestionsDiv = document.getElementById('searchSuggestions');
    if (suggestionsDiv) {
        suggestionsDiv.style.display = 'block';
    }
}

// Hide search suggestions
function hideSearchSuggestions() {
    const suggestionsDiv = document.getElementById('searchSuggestions');
    if (suggestionsDiv) {
        suggestionsDiv.style.display = 'none';
    }
    selectedSuggestionIndex = -1;
}

// Close dropdown when clicking outside
function setupClickOutsideListener() {
    document.addEventListener('click', function(event) {
        const searchBox = document.querySelector('.search-box');
        const suggestionsDiv = document.getElementById('searchSuggestions');
        
        // Check if click is outside the search box and suggestions
        if (searchBox && !searchBox.contains(event.target)) {
            hideSearchSuggestions();
        }
    });
}
// Update search suggestions based on input
function updateSearchSuggestions(value) {
    const suggestionsList = document.getElementById('suggestionsList');
    if (!suggestionsList) return;
    
    let suggestions = [];
    
    if (value.length === 0) {
        // Show recent searches and popular places
        const recentSearches = searchHistory.slice(0, 3).map(text => ({
            type: 'recent',
            text: text,
            icon: '🕒',
            subtitle: 'Recent search'
        }));
        
        const popularPlaces = [
            { type: 'place', text: 'Somnath Temple', icon: '🛕', subtitle: 'Gir Somnath • Temple' },
            { type: 'place', text: 'Gir National Park', icon: '🦁', subtitle: 'Gir Somnath • Wildlife' },
            { type: 'place', text: 'Dwarkadhish Temple', icon: '🔱', subtitle: 'Devbhumi Dwarka • Temple' },
            { type: 'category', text: 'temple', icon: '🛕', subtitle: '8 temples found' },
            { type: 'category', text: 'museum', icon: '🏛️', subtitle: '6 museums found' },
            { type: 'district', text: 'rajkot', icon: '📍', subtitle: '3 places in Rajkot' }
        ];
        
        suggestions = [...recentSearches, ...popularPlaces.slice(0, 6)];
    } else {
        // Perform advanced search and show top results
        const searchResults = performAdvancedSearch(value);
        
        suggestions = searchResults.slice(0, 8).map(place => ({
            type: 'place',
            text: place.name,
            icon: place.emoji,
            subtitle: `${place.district} • ${place.category}`,
            score: place.score,
            id: place.id
        }));
        
        // Add category and district suggestions if they match
        const categories = ['temple', 'museum', 'fort', 'wildlife', 'palace', 'beach'];
        const districts = ['rajkot', 'junagadh', 'jamnagar', 'bhavnagar', 'dwarka', 'porbandar'];
        
        categories.forEach(cat => {
            if (cat.includes(value.toLowerCase())) {
                const count = COMPREHENSIVE_SEARCH_INDEX.filter(p => p.category.toLowerCase().includes(cat)).length;
                suggestions.unshift({
                    type: 'category',
                    text: cat,
                    icon: getCategoryIcon(cat),
                    subtitle: `${count} ${cat}s found`
                });
            }
        });
        
        districts.forEach(dist => {
            if (dist.includes(value.toLowerCase())) {
                const count = COMPREHENSIVE_SEARCH_INDEX.filter(p => p.district.toLowerCase().includes(dist)).length;
                suggestions.unshift({
                    type: 'district',
                    text: dist,
                    icon: '📍',
                    subtitle: `${count} places in ${dist}`
                });
            }
        });
    }
    
    suggestionsList.innerHTML = suggestions.map((suggestion, index) => `
        <div class="suggestion-item ${suggestion.type}" 
             onclick="selectSuggestion('${suggestion.text}', '${suggestion.type}', ${suggestion.id || 'null'})" 
             data-text="${suggestion.text}" 
             data-index="${index}">
            <span class="suggestion-icon">${suggestion.icon}</span>
            <div class="suggestion-content">
                <span class="suggestion-text">${highlightMatch(suggestion.text, value)}</span>
                <span class="suggestion-subtitle">${suggestion.subtitle}</span>
            </div>
        </div>
    `).join('');
}

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        'temple': '🛕',
        'museum': '🏛️',
        'fort': '🏰',
        'wildlife': '🦁',
        'palace': '🏰',
        'beach': '🏖️',
        'pilgrimage': '🕊️'
    };
    return icons[category] || '📍';
}

// Highlight matching text
function highlightMatch(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Select a suggestion
function selectSuggestion(text, type = 'search', placeId = null) {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    if (type === 'place' && placeId) {
        // Direct navigation to place details
        window.open(`place-details.html?id=${placeId}`, '_blank');
        addToSearchHistory(text);
        hideSearchSuggestions();
        return;
    }
    
    // Regular search
    searchInput.value = text;
    currentSearch = text;
    addToSearchHistory(text);
    hideSearchSuggestions();
    
    // Update clear button
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.style.display = 'block';
    }
    
    fetchAndRenderPlaces();
}

// Add to search history
function addToSearchHistory(text) {
    if (!text || text.length < 2) return;
    
    // Remove if already exists
    searchHistory = searchHistory.filter(item => item !== text);
    
    // Add to beginning
    searchHistory.unshift(text);
    
    // Keep only last 10 searches
    searchHistory = searchHistory.slice(0, 10);
    
    // Save to localStorage
    localStorage.setItem('heritageSearchHistory', JSON.stringify(searchHistory));
    
    // Update search analytics
    updateSearchAnalytics(text);
}

// Search analytics (optional - tracks popular searches)
function updateSearchAnalytics(searchTerm) {
    const analytics = JSON.parse(localStorage.getItem('heritageSearchAnalytics') || '{}');
    analytics[searchTerm] = (analytics[searchTerm] || 0) + 1;
    localStorage.setItem('heritageSearchAnalytics', JSON.stringify(analytics));
}

// Get popular searches from analytics
function getPopularSearches() {
    const analytics = JSON.parse(localStorage.getItem('heritageSearchAnalytics') || '{}');
    return Object.entries(analytics)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([term]) => term);
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');
    
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus(); // Focus back to search input
    }
    
    if (clearBtn) {
        clearBtn.style.display = 'none';
    }
    
    currentSearch = '';
    hideSearchSuggestions();
    
    // Also reset filters to show all places
    currentDistrict = 'All';
    currentCategory = 'All';
    
    // Update active buttons
    document.querySelectorAll('.district-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.trim() === 'All Districts') {
            btn.classList.add('active');
        }
    });
    
    document.querySelectorAll('.cat-tab').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.trim() === 'All') {
            btn.classList.add('active');
        }
    });
    
    fetchAndRenderPlaces();
}

// ══════════════════════════════════════════════════════════
// GALLERY
// ══════════════════════════════════════════════════════════
// GALLERY
// ══════════════════════════════════════════════════════════
async function fetchAndRenderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const images = await fetchFromAPI('/gallery', FALLBACK_GALLERY);

    grid.innerHTML = images.map(img => `
        <div class="gallery-item ${img.size}" onclick="openLightbox('${img.src}', '${img.caption}')">
            <img src="${img.src}" alt="${img.caption}" loading="lazy"
                 onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=280&fit=crop'" />
            <div class="gallery-caption-overlay">${img.caption}</div>
        </div>
    `).join('');
}

function renderGallery() { fetchAndRenderGallery(); }

// ══════════════════════════════════════════════════════════
// FACTS ("Did You Know?")
// ══════════════════════════════════════════════════════════
async function fetchAndRenderFacts(limit = 6) {
    const grid = document.getElementById('factsGrid');
    if (!grid) return;

    const facts = await fetchFromAPI(`/facts?limit=${limit}`, 
        [...FALLBACK_FACTS].sort(() => Math.random() - 0.5).slice(0, limit)
    );

    grid.innerHTML = facts.map((fact, i) => `
        <div class="fact-card" style="animation-delay: ${i * 0.1}s">
            <div class="fact-emoji">${fact.emoji}</div>
            <h4>${fact.title}</h4>
            <p>${fact.fact}</p>
        </div>
    `).join('');
}

function renderFacts() { fetchAndRenderFacts(); }

function showRandomFact() { fetchAndRenderFacts(6); }

// ══════════════════════════════════════════════════════════
// GALLERY LIGHTBOX
// ══════════════════════════════════════════════════════════
function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightboxImg').alt = caption;
    document.getElementById('lightboxCaption').textContent = caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeLightbox(); closeVideo(); }
});

// ══════════════════════════════════════════════════════════
// VIDEO MODAL
// ══════════════════════════════════════════════════════════
// VIDEO MODAL FUNCTIONS
// ══════════════════════════════════════════════════════════
function openVideo(url) {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');
    
    // Add additional YouTube parameters for better embedding
    const enhancedUrl = url + '?autoplay=1&rel=0&modestbranding=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0';
    
    frame.src = enhancedUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add error handling
    frame.onerror = function() {
        console.error('Error loading video:', url);
        alert('Sorry, there was an error loading the video. Please try again.');
        closeVideo();
    };
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');
    modal.classList.remove('active');
    frame.src = '';
    frame.onerror = null;
    document.body.style.overflow = '';
}
// ══════════════════════════════════════════════════════════
// ADVANCED CHATBOT WITH CONTEXT AWARENESS
// ══════════════════════════════════════════════════════════
async function sendChat() {
    const inputEl = document.getElementById('chatInput');
    const userText = inputEl.value.trim();
    if (!userText) return;

    // Add to conversation history
    conversationHistory.push({ role: 'user', text: userText, timestamp: Date.now() });
    
    addChatMessage(userText, 'user');
    inputEl.value = '';
    showTypingIndicator();

    // Try API first, fall back to enhanced local KB matching
    try {
        const response = await fetch(`${API_BASE}/chat?message=${encodeURIComponent(userText)}`);
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                botResponse = data.response;
            } else {
                throw new Error('API returned error');
            }
        } else {
            throw new Error('API request failed');
        }
    } catch (error) {
        // ⚡ Enhanced offline matching with fuzzy search and context
        const result = findBestMatch(userText);
        botResponse = result.response;
        followUpQuestions = result.followUp || [];
        lastTopic = result.keyword;
    }

    removeTypingIndicator();

    // Add to conversation history
    conversationHistory.push({ role: 'bot', text: botResponse, timestamp: Date.now() });
    
    // Keep only last 10 messages for context
    if (conversationHistory.length > 10) {
        conversationHistory = conversationHistory.slice(-10);
    }

    addChatMessage(botResponse, 'bot');
    
    // Show follow-up suggestions if available
    if (followUpQuestions.length > 0) {
        addFollowUpSuggestions(followUpQuestions);
    }
}

// Enhanced matching algorithm with fuzzy search and context awareness
function findBestMatch(userText) {
    const msg = userText.toLowerCase();
    
    // Check for exact keyword matches first
    let match = FALLBACK_CHATBOT.find(kb => 
        kb.keyword !== 'default' && msg.includes(kb.keyword)
    );
    
    // If no exact match, try fuzzy matching
    if (!match) {
        match = fuzzyMatch(msg);
    }
    
    // Context-aware responses
    if (!match && lastTopic) {
        match = getContextualResponse(msg, lastTopic);
    }
    
    // Default response
    if (!match) {
        match = FALLBACK_CHATBOT.find(kb => kb.keyword === 'default');
    }
    
    return match || { 
        keyword: 'default', 
        response: "🤔 I'm not sure about that. Try asking about places, food, festivals, or travel tips!",
        followUp: ["Popular destinations", "Travel tips", "Festival calendar"]
    };
}

// Fuzzy matching for similar words
function fuzzyMatch(msg) {
    const synonyms = {
        'temple': ['mandir', 'shrine', 'worship', 'religious'],
        'food': ['eat', 'restaurant', 'cuisine', 'dish', 'snack'],
        'hotel': ['stay', 'accommodation', 'lodge', 'resort'],
        'travel': ['trip', 'journey', 'tour', 'visit'],
        'cost': ['price', 'budget', 'expense', 'money'],
        'weather': ['climate', 'temperature', 'season'],
        'festival': ['celebration', 'event', 'fair'],
        'beach': ['sea', 'coast', 'shore', 'ocean']
    };
    
    for (const [keyword, syns] of Object.entries(synonyms)) {
        if (syns.some(syn => msg.includes(syn))) {
            return FALLBACK_CHATBOT.find(kb => kb.keyword === keyword);
        }
    }
    
    return null;
}

// Context-aware responses based on previous topic
function getContextualResponse(msg, topic) {
    const contextResponses = {
        'somnath': {
            'timing': "⏰ Somnath Temple is open from 6:00 AM to 9:30 PM. Aarti timings: Morning 7 AM, Evening 7 PM. Best to visit early morning or evening for peaceful darshan!",
            'reach': "🚗 Reaching Somnath: Nearest airport is Diu (63 km). Veraval railway station is 5 km away. Regular buses from Ahmedabad, Rajkot, and Junagadh. Taxis available from Veraval.",
            'stay': "🏨 Hotels near Somnath: GIDC Guest House, Hotel Shubham, Hotel Somnath Atithi Gruh, and many budget options in Veraval. Book in advance during festivals!"
        },
        'gir': {
            'booking': "📱 Book Gir Safari online at: https://girlion.gujarat.gov.in or forestdepartment.gujarat.gov.in. Advance booking recommended (30 days before). Cost: ₹2500-4000 per vehicle.",
            'timing': "⏰ Safari timings: Morning 6:30-9:30 AM, Evening 3:00-6:00 PM. Morning safaris have better lion sighting chances. Duration: 3 hours.",
            'stay': "🏨 Stay options: Sasan Gir has resorts like Gir Birding Lodge, Lion Safari Camp, and GIDC Guest House. Book 2-3 months in advance for peak season!"
        }
    };
    
    if (contextResponses[topic]) {
        for (const [key, response] of Object.entries(contextResponses[topic])) {
            if (msg.includes(key) || msg.includes(key + 's') || msg.includes(key + 'ing')) {
                return { keyword: topic, response: response, followUp: [`More about ${topic}`, "Other places", "Travel tips"] };
            }
        }
    }
    
    return null;
}

// Add follow-up suggestion chips
function addFollowUpSuggestions(questions) {
    const chatWindow = document.getElementById('chatWindow');
    const suggestDiv = document.createElement('div');
    suggestDiv.classList.add('follow-up-suggestions');
    
    suggestDiv.innerHTML = `
        <div class="follow-up-label">💡 You might also want to know:</div>
        <div class="follow-up-chips">
            ${questions.map(q => `
                <button class="follow-up-chip" onclick="askBot('${q}')">
                    ${q}
                </button>
            `).join('')}
        </div>
    `;
    
    chatWindow.appendChild(suggestDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Clear conversation history
function clearChatHistory() {
    conversationHistory = [];
    lastTopic = null;
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML = `
        <div class="chat-message bot-message">
            <span class="chat-avatar">🤖</span>
            <div class="chat-bubble">
                Namaste! 🙏 I am your Heritage Bharat guide. Ask me about temples, forts, wildlife,
                food, festivals or any district in Saurashtra!
            </div>
        </div>
    `;
}

function askBot(message) {
    document.getElementById('chatInput').value = message;
    sendChat();
    document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' });
}

function addChatMessage(text, sender) {
    const chatWindow = document.getElementById('chatWindow');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-message', `${sender}-message`);

    if (sender === 'bot') {
        msgDiv.innerHTML = `<span class="chat-avatar">🤖</span><div class="chat-bubble">${text}</div>`;
    } else {
        msgDiv.innerHTML = `<div class="chat-bubble">${text}</div><span class="chat-avatar">👤</span>`;
    }

    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function showTypingIndicator() {
    const chatWindow = document.getElementById('chatWindow');
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('chat-message', 'bot-message');
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <span class="chat-avatar">🤖</span>
        <div class="chat-bubble typing-bubble">
            <span></span><span></span><span></span>
        </div>`;
    chatWindow.appendChild(typingDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function removeTypingIndicator() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

// ══════════════════════════════════════════════════════════
// CONTACT FORM
// ══════════════════════════════════════════════════════════
async function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const purpose = document.getElementById('purposeInput').value;
    const message = document.getElementById('messageInput').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    const btn = event.target.querySelector('.submit-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    try {
        const data = await postToAPI('/contact', { name, email, purpose, message });

        if (data.success) {
            const successDiv = document.getElementById('formSuccess');
            successDiv.style.display = 'block';
            successDiv.innerHTML = '<i class="fas fa-check-circle"></i> ' + data.message;
            event.target.reset();
            setTimeout(() => { successDiv.style.display = 'none'; }, 6000);
        } else {
            alert('Error: ' + (data.error || 'Could not send message.'));
        }

    } catch (err) {
        // Server is offline – show a friendly offline message
        const successDiv = document.getElementById('formSuccess');
        if (successDiv) {
            successDiv.style.display = 'block';
            successDiv.innerHTML = `<i class="fas fa-check-circle"></i> Thank you, ${name}! Your message has been noted. 🙏 (Start the server to save it to the database.)`;
            event.target.reset();
            setTimeout(() => { successDiv.style.display = 'none'; }, 8000);
        }
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// ══════════════════════════════════════════════════════════
// NAVIGATION & SCROLL
// ══════════════════════════════════════════════════════════
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
    });
});

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const navbar = document.getElementById('navbar');
    const scrollBtn = document.getElementById('scrollTopBtn');

    if (scrollY > 80) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    if (scrollY > 400) scrollBtn?.classList.add('visible');
    else scrollBtn?.classList.remove('visible');

    triggerFadeIn();
});

function triggerFadeIn() {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.classList.add('visible');
        }
    });
}

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ══════════════════════════════════════════════════════════
// PARTICLES ANIMATION
// ══════════════════════════════════════════════════════════
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = Math.random() * 15 + 10 + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        container.appendChild(particle);
    }
}

// ══════════════════════════════════════════════════════════
// FADE-IN ANIMATIONS
// ══════════════════════════════════════════════════════════
function addFadeInToSections() {
    ['.section-header', '.guide-card', '.edu-card', '.info-card', '.fact-card', '.tour-card']
        .forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.classList.add('fade-in'));
        });
}

// ══════════════════════════════════════════════════════════
// MAIN INITIALIZATION
// ══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', async function () {
    console.log('🏛️ Heritage Bharat – Smart Tourism Website Loaded!');

    // Render places, gallery and facts
    // Falls back to offline data automatically if server is not running
    await fetchAndRenderPlaces();
    await fetchAndRenderGallery();
    await fetchAndRenderFacts(6);

    createParticles();
    addFadeInToSections();
    triggerFadeIn();
    
    // Initialize advanced search features
    initializeAdvancedSearch();

    // Close mobile menu on outside click
    document.addEventListener('click', function(e) {
        const navLinks = document.getElementById('navLinks');
        const hamburger = document.querySelector('.hamburger');
        
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('open');
        }
    });

    // Setup search suggestions click outside listener
    setupClickOutsideListener();
    
    // Load search history from localStorage
    searchHistory = JSON.parse(localStorage.getItem('heritageSearchHistory') || '[]');
});
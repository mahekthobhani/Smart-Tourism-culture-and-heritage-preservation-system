/*
  ╔══════════════════════════════════════════════════════════╗
  ║  DETAILED PLACE INFORMATION                              ║
  ║  This file contains comprehensive details for each place ║
  ╚══════════════════════════════════════════════════════════╝
  
  WHAT IS THIS FILE?
  ──────────────────
  This JavaScript file stores detailed information about each
  heritage place. When you click "More Details", a new tab opens
  and shows this information.
  
  Each place has:
  - Name, emoji, district, category
  - Main image and photo gallery
  - Full address with location details
  - Opening hours (when you can visit)
  - Best time to visit (which season/month)
  - Average budget (how much money you need)
  - History (the story and significance)
  - Tips for visitors (helpful advice)
*/

const PLACE_DETAILS = {
    // ══════════════════════════════════════════════════════════
    // RAJKOT DISTRICT
    // ══════════════════════════════════════════════════════════
    1: {
        id: 1,
        name: "Rajkot Watson Museum",
        emoji: "🏛️",
        district: "Rajkot",
        category: "Museum",
        mainImage: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800&h=500&fit=crop",
        fullAddress: "Jubilee Garden, Jawahar Road, Rajkot, Gujarat 360001, India",
        mapLink: "https://maps.google.com/?q=Watson+Museum+Rajkot",
        openingHours: "9:00 AM - 1:00 PM, 3:00 PM - 6:00 PM (Closed on Wednesdays and public holidays)",
        bestTime: "October to March (Pleasant weather, ideal for museum visits)",
        budget: "₹50-200 per person (Entry: ₹10-20, Food & Travel extra)",
        history: "The Watson Museum, established in 1888, is one of the oldest museums in Gujarat. Named after Colonel John Watson, a British political agent, this museum houses a remarkable collection of artifacts from the Rajkot princely state. The museum showcases precious artifacts, sculptures, paintings, and manuscripts dating back to the 13th century. It includes items from the Indus Valley Civilization, colonial-era exhibits, natural history specimens, and traditional handicrafts. The building itself is an architectural marvel with colonial-style design. Mahatma Gandhi's memorabilia and photographs are also displayed here, making it a significant cultural landmark.",
        gallery: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/0b/3a/3a/watson-museum.jpg?w=400&h=300&fit=crop",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/db/38/2a/photo2jpg.jpg?w=400&h=300&fit=crop",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/db/37/05/watson-museum.jpg?w=400&h=300&fit=crop",
            "https://images.indianexpress.com/2023/07/guj_museum.jpg?w=400&h=300&fit=crop"
        ],
        tips: [
            "Photography is allowed but flash is prohibited inside the museum",
            "Guided tours are available on request for groups",
            "Carry a water bottle as the museum is quite large",
            "Allocate at least 2-3 hours to explore the entire collection",
            "Nearby attractions: Kaba Gandhi No Delo, Rotary Dolls Museum"
        ]
    },

    2: {
        id: 2,
        name: "Rotary Dolls Museum",
        emoji: "🪆",
        district: "Rajkot",
        category: "Museum",
        mainImage: "https://images.unsplash.com/photo-1558281132-451b1f8f7a25?w=800&h=500&fit=crop",
        fullAddress: "Rotary Dolls Museum, Yagnik Road, Near Jubilee Garden, Rajkot, Gujarat 360001",
        mapLink: "https://maps.google.com/?q=Rotary+Dolls+Museum+Rajkot",
        openingHours: "10:00 AM - 6:00 PM (Closed on Mondays)",
        bestTime: "Throughout the year, especially good for children during school holidays",
        budget: "₹100-300 per person (Entry: ₹20-30, Snacks & Travel extra)",
        history: "The Rotary Dolls Museum is a unique cultural treasure established by the Rotary Club of Rajkot in 1995. This one-of-a-kind museum houses over 1,400 dolls from 102 countries around the world, making it one of the largest doll museums in India. Each doll represents the traditional costume, culture, and heritage of its country of origin. The collection includes dolls gifted by international visitors, Rotarians, and cultural exchange programs. The museum serves as a window to world cultures, teaching children and adults about global diversity through these beautifully crafted dolls. Special sections showcase Indian regional dolls representing different states and their traditional attire.",
        gallery: [
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqy_cGPspjOGUTevzaoFuyjlwDTZHjme-KiYqNIqyNzOlB8hs_qKOmFoKnqRAXinzPoHZVrfM8TuNzXkfc7yKUqOaJ_lqOeKT2iCZ0tZn7ba7YLaNJHpoZwz1yvGvgbVwQ9roIY=w400-h300-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep1bhMTtem3_olF54WeBkxNnVmJSNHj6vJxtxauP-q8Ry_Gc330G8QOVxxMMgK84JHv5m_xWZ74yffQNi-ovSK9BdW9iTgBHgo_4R0Zp4VmCfIWzwQpGlXEtWjum0JZLzNUou09=w400-h300-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep2G4su-nYAy4T5DUbuHov6n2xxa5gc7Wn36d6ddC8pr0giuS-zVw1-fVHg2Z4xdI4lrv9LCmg3BAZ2tLHCEa4yd54Pmoi6Yo4umZt28t6SADULDcBBxAh1HVfduNI6zexBr3R4=w400-h300-rw",
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepbjnJWfNqYgQCdjSyZB9R-MKhmzyrpPdUPr2TOEIWAapQbUoNBRpk8RGMYLDh_2nQMu82BqIyhDzSprNm_1XaKahGI0-y_5OEqsi7eWOgcvuErhLJPXwaFEg9TUdKvekYLWL94=w400-h300-rw"
        ],
        tips: [
            "Perfect place for children and families",
            "Photography is allowed, great for Instagram photos",
            "The museum shop sells miniature dolls as souvenirs",
            "Visit during weekdays to avoid crowds",
            "Combine with Watson Museum visit as they are nearby"
        ]
    },

    3: {
        id: 3,
        name: "Kaba Gandhi No Delo",
        emoji: "🕊️",
        district: "Rajkot",
        category: "Museum",
        mainImage: "https://images.unsplash.com/photo-1571104508999-893933ded431?w=800&h=500&fit=crop",
        fullAddress: "Gheekanta Road, Near Alfred High School, Rajkot, Gujarat 360001",
        mapLink: "https://maps.google.com/?q=Kaba+Gandhi+No+Delo+Rajkot",
        openingHours: "9:00 AM - 12:00 PM, 3:00 PM - 6:00 PM (Closed on Sundays and public holidays)",
        bestTime: "October 2nd (Gandhi Jayanti) for special programs, otherwise October to March",
        budget: "₹50-150 per person (Entry is free, donations welcome)",
        history: "Kaba Gandhi No Delo (House of Kaba Gandhi) is the ancestral home where Mahatma Gandhi, the Father of the Nation, spent his childhood years from 1881 to 1887. This historic building has been converted into a memorial museum dedicated to Gandhi's life and philosophy. The house belonged to Gandhi's father, Karamchand Gandhi (Kaba Gandhi), who served as the Diwan (Prime Minister) of Rajkot. The museum displays rare photographs, personal belongings, letters, and documents related to Gandhi's early life and the Indian freedom struggle. The simple architecture reflects the modest lifestyle of the Gandhi family. Visitors can see the room where young Mohandas studied, the courtyard where he played, and exhibits showcasing his journey from a shy boy to the leader of India's independence movement.",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl_Sag9YjdSeYItV9lLtU4ImUMs6WV6YQ9Q&s?w=400&h=300&fit=crop",
            "https://www.tourmyindia.com/images/kaba-gandhi-no-delo-rajkot1.jpg?w=400&h=300&fit=crop",
            "https://cdn.s3waas.gov.in/s3839ab46820b524afda05122893c2fe8e/uploads/bfi_thumb/2018082017-olw9uo19e04llpf1q83k9wk4b2bzua63c88topeaoa.jpg?w=400&h=300&fit=crop",
            "https://s7ap1.scene7.com/is/image/incredibleindia/kaba-gandhi-no-delo-rajkot-gujarat-2-attr-hero?qlt=82&ts=1751441574553"
        ],
        tips: [
            "Maintain silence and respect as it's a memorial site",
            "Free entry but donations are appreciated for maintenance",
            "Audio guides available in multiple languages",
            "Best visited in the morning for peaceful atmosphere",
            "Nearby: Alfred High School where Gandhi studied"
        ]
    },

    // ══════════════════════════════════════════════════════════
    // JUNAGADH DISTRICT
    // ══════════════════════════════════════════════════════════
    4: {
        id: 4,
        name: "Uparkot Fort",
        emoji: "🏰",
        district: "Junagadh",
        category: "Fort",
        mainImage: "https://www.girnationalpark.online/assets/img/uparkot-fort.webp?w=800&h=500&fit=crop",
        fullAddress: "Uparkot Fort, Junagadh, Gujarat 362001 (2 km from Junagadh Railway Station)",
        mapLink: "https://maps.google.com/?q=Uparkot+Fort+Junagadh",
        openingHours: "8:00 AM - 6:00 PM (Open all days)",
        bestTime: "October to February (Cool weather for exploring the fort)",
        budget: "₹200-500 per person (Entry: ₹15-25, Guide: ₹100-200, Food extra)",
        history: "Uparkot Fort is an ancient fortification with over 2,300 years of history, built during the Mauryan dynasty by Emperor Chandragupta around 319 BCE. The name 'Uparkot' means 'upper fort' in Gujarati. This massive fort has witnessed 16 sieges, the longest lasting 12 years! The fort walls are up to 20 meters high in some places. Inside, you'll find Buddhist caves dating back to the 3rd-4th century CE, featuring intricate carvings and pillars. The fort also houses two remarkable step wells (vavs) - Adi Kadi Vav and Navghan Kuvo - which are architectural marvels with spiral staircases descending deep into the earth. The Jama Masjid inside the fort was converted from a Hindu temple. From the ramparts, you get panoramic views of Junagadh city and the Girnar hills.",
        gallery: [
            "https://www.gujaratexpert.com/blog/wp-content/uploads/2019/08/Uparkot-Fort.jpg?w=400&h=300&fit=crop",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f7/f2/98/uperkot-fort.jpg?w=400&h=300&fit=crop",
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/Gate_of_Uperkot_Fort_02.jpg?w=400&h=300&fit=crop",
            "https://im.whatshot.in/img/2023/Mar/1024px-cannon-at-uperkot-fort-02-1678776047.jpg?w=400&h=300&fit=crop"
        ],
        tips: [
            "Wear comfortable walking shoes - lots of climbing involved",
            "Carry water and snacks, limited facilities inside",
            "Hire a local guide to learn fascinating historical stories",
            "Visit early morning or late afternoon to avoid heat",
            "Don't miss the Buddhist caves and ancient step wells",
            "Combine with Girnar Hill visit if you have time"
        ]
    },

    5: {
        id: 5,
        name: "Girnar Hill & Temples",
        emoji: "⛰️",
        district: "Junagadh",
        category: "Pilgrimage",
        mainImage: "https://www.tourmyindia.com/images/takhteshwar-temple-bhavnagar1.jpg?w=800&h=500&fit=crop",
        fullAddress: "Girnar Hill, Junagadh, Gujarat 362001 (5 km east of Junagadh city)",
        mapLink: "https://maps.google.com/?q=Girnar+Hill+Junagadh",
        openingHours: "4:00 AM - 6:00 PM (Start early to complete the climb)",
        bestTime: "November to February (Kartik Purnima fair in Nov), avoid monsoon",
        budget: "₹300-800 per person (Ropeway: ₹300-400, Food & offerings extra)",
        history: "Girnar is one of the most sacred mountains in India, standing at 1,117 meters (3,666 feet) with a challenging climb of approximately 10,000 stone steps! This ancient pilgrimage site is sacred to both Jains and Hindus. The mountain has 16 Jain temples at the summit, with the main temple dedicated to Neminath, the 22nd Jain Tirthankara. The temples date back to the 12th century and showcase exquisite marble architecture. Hindu temples dedicated to Goddess Amba and Lord Dattatreya are also present. Emperor Ashoka's rock edicts from 250 BCE are inscribed on a boulder at the base. The climb takes 4-6 hours depending on fitness level. A ropeway now makes it easier to reach partway up. The annual Girnar Parikrama (circumambulation) during Kartik Purnima attracts millions of pilgrims.",
        gallery: [
            "https://www.tourmyindia.com/images/takhteshwar-temple-bhavnagar1.jpg?w=400&h=300&fit=crop",
            "https://www.tourmyindia.com/images/takhteshwar-temple-bhavnagar1.jpg?w=400&h=300&fit=crop",
            "https://upload.wikimedia.org/wikipedia/commons/7/71/Gadhada_Swaminarayan_Temple.jpg?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=400&h=300&fit=crop"
        ],
        tips: [
            "Start climbing by 5-6 AM to avoid afternoon heat",
            "Ropeway available but only covers first 4,000 steps",
            "Wear comfortable shoes with good grip",
            "Carry sufficient water, snacks, and glucose",
            "Respect religious sentiments - dress modestly",
            "Porters (doli) available for elderly or tired climbers",
            "Mobile network available at most points",
            "Sunrise view from the top is breathtaking"
        ]
    },

    // ══════════════════════════════════════════════════════════
    // GIR SOMNATH DISTRICT
    // ══════════════════════════════════════════════════════════
    7: {
        id: 7,
        name: "Somnath Temple",
        emoji: "🛕",
        district: "Gir Somnath",
        category: "Temple",
        mainImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=500&fit=crop",
        fullAddress: "Somnath Temple, Veraval, Prabhas Patan, Gir Somnath, Gujarat 362268",
        mapLink: "https://maps.google.com/?q=Somnath+Temple",
        openingHours: "6:00 AM - 9:30 PM (Aarti: 7 AM, 12 PM, 7 PM)",
        bestTime: "October to March, Mahashivratri (Feb/Mar) for grand celebrations",
        budget: "₹500-1500 per person (Temple: Free, Accommodation & food extra)",
        history: "Somnath Temple is one of the twelve sacred Jyotirlinga shrines of Lord Shiva and holds immense religious significance. The temple has a legendary history spanning over 2,000 years. According to mythology, the Moon God (Soma) built the original temple in gold. It was rebuilt in silver by Ravana, in wood by Lord Krishna, and in stone by Bhimdev. The temple has been destroyed and rebuilt 17 times throughout history, facing invasions by Mahmud of Ghazni (1026 CE) and others. The current structure was reconstructed in 1951 in the Chalukya style of architecture under the guidance of Sardar Vallabhbhai Patel. The temple stands majestically on the shores of the Arabian Sea, and it's believed that there's no landmass between Somnath and Antarctica in a straight line across the ocean. The temple's shikhara (spire) is 150 feet tall, and the temple flag changes three times a day.",
        gallery: [
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=300&fit=crop",
            "https://famoustemplesofindia.com/wp-content/uploads/2023/11/Nageshwar-Jyotirlinga-Dwaraka-1-1024x768.jpg?w=400&h=300&fit=crop",
            "https://upload.wikimedia.org/wikipedia/commons/7/71/Gadhada_Swaminarayan_Temple.jpg?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1591375372226-3485ca95641e?w=400&h=300&fit=crop"
        ],
        tips: [
            "Mobile phones and cameras not allowed inside temple",
            "Locker facility available for ₹10-20 near entrance",
            "Attend the evening aarti for a divine experience",
            "Sound and light show at 8 PM (₹25 entry)",
            "Dress modestly - no shorts or sleeveless clothes",
            "Visit the beach behind the temple for sunset views",
            "Nearby: Bhalka Tirth, Triveni Sangam, Prabhas Patan Museum"
        ]
    },

    8: {
        id: 8,
        name: "Gir National Park",
        emoji: "🦁",
        district: "Gir Somnath",
        category: "Wildlife",
        mainImage: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&h=500&fit=crop",
        fullAddress: "Gir National Park, Sasan Gir, Talala, Gir Somnath, Gujarat 362135",
        mapLink: "https://maps.google.com/?q=Gir+National+Park",
        openingHours: "Safari: 6:30 AM - 9:30 AM, 3:00 PM - 6:00 PM (Closed mid-June to mid-October)",
        bestTime: "December to March (Best lion sightings, pleasant weather)",
        budget: "₹2000-5000 per person (Safari: ₹1500-3000, Accommodation: ₹1000-3000)",
        history: "Gir National Park and Wildlife Sanctuary is the last remaining home of the Asiatic Lion in the world, making it one of the most important protected areas in Asia. Spread over 1,412 square kilometers, Gir was established as a sanctuary in 1965. The park's history dates back to the early 20th century when the Nawab of Junagadh saved the lions from extinction - only 20 lions remained in 1913. Today, the population has grown to over 674 lions (2020 census). The park is named after the Gir hills and the river Hiran flowing through it. Besides lions, Gir is home to leopards, hyenas, marsh crocodiles, jungle cats, and over 300 bird species. The landscape includes deciduous forests, grasslands, and rocky hills. The Maldharis, indigenous pastoral communities, have coexisted with lions for centuries.",
        gallery: [
            "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=300&fit=crop",
            "https://www.girnationalpark.in/uploads/gir-info.JPG?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8l_HDJzgHghxe0EQmOXgVHTT__xZi9KMaA&s?w=400&h=300&fit=crop"
        ],
        tips: [
            "Book safari online at least 2-3 months in advance",
            "Morning safaris have better lion sighting chances",
            "Wear neutral colored clothes (avoid bright colors)",
            "Carry binoculars, camera with zoom lens",
            "Stay silent during safari to not disturb wildlife",
            "Devalia Safari Park (interpretation zone) is easier for guaranteed sightings",
            "Accommodation: Forest guesthouses or private resorts in Sasan Gir",
            "Combine with Somnath Temple visit (60 km away)"
        ]
    },

    // ══════════════════════════════════════════════════════════
    // DEVBHUMI DWARKA DISTRICT
    // ══════════════════════════════════════════════════════════
    9: {
        id: 9,
        name: "Dwarkadhish Temple",
        emoji: "🔱",
        district: "Devbhumi Dwarka",
        category: "Temple",
        mainImage: "https://images.unsplash.com/photo-1591375372226-3485ca95641e?w=800&h=500&fit=crop",
        fullAddress: "Dwarkadhish Temple, Dwarka, Gujarat 361335 (Near Dwarka Railway Station)",
        mapLink: "https://maps.google.com/?q=Dwarkadhish+Temple",
        openingHours: "6:00 AM - 1:00 PM, 5:00 PM - 9:30 PM (Aarti times vary)",
        bestTime: "August-September (Janmashtami), October to March for pleasant weather",
        budget: "₹500-2000 per person (Temple: Free, Accommodation & food extra)",
        history: "Dwarkadhish Temple, also known as Jagat Mandir, is one of the four sacred Char Dham pilgrimage sites and one of the 108 Divya Desams (holy abodes of Lord Vishnu). The temple is dedicated to Lord Krishna, who is believed to have established his kingdom in Dwarka after leaving Mathura. According to legend, the original city of Dwarka was built by Lord Krishna and was submerged in the sea after his death. The current temple structure is believed to be 2,500 years old, though it has been renovated multiple times. The temple is a five-story structure supported by 72 pillars, with a 78.3-meter tall main spire (shikhara). The temple architecture is in the Chalukya style with intricate carvings. The main deity is a black idol of Lord Krishna made of shiny black stone. Archaeological excavations have found evidence of an ancient city submerged underwater near Dwarka.",
        gallery: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwVhCoDakpFeD9Q2RB_IrT3Tlsz8Cul61Pwb4attj7SvlCk1q0LqshWad5BQoY4a_2__QulSV0wI0_AbqwLyl8CY2Xu6D9ZRDDod2k5Hc3hrCxQFvXk3VPZbWiiceSGA0WE9pwztS4Y-2N/s1600/Dwarakadish+Temple.jpg?w=400&h=300&fit=crop",
            "https://famoustemplesofindia.com/wp-content/uploads/2023/11/Nageshwar-Jyotirlinga-Dwaraka-1-1024x768.jpg?w=400&h=300&fit=crop",
            "https://upload.wikimedia.org/wikipedia/commons/7/71/Gadhada_Swaminarayan_Temple.jpg?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=300&fit=crop"
        ],
        tips: [
            "Non-Hindus are not allowed inside the main sanctum",
            "Cameras and mobile phones not allowed inside",
            "Dress code: Traditional attire preferred, no leather items",
            "Visit Gomti Ghat for holy bath before temple visit",
            "Attend evening aarti for spiritual experience",
            "Nearby: Bet Dwarka (island), Nageshwar Jyotirlinga, Rukmini Temple",
            "Accommodation: Many dharamshalas and hotels available",
            "Try local Gujarati thali at nearby restaurants"
        ]
    },

    10: {
        id: 10,
        name: "Bet Dwarka",
        emoji: "⛵",
        district: "Devbhumi Dwarka",
        category: "Pilgrimage",
        mainImage: "https://www.hlimg.com/images/things2do/738X538/hqdefault-1-1523525481t.jpg?w=800&h=500&fit=crop",
        fullAddress: "Bet Dwarka Island, Okha Port, Devbhumi Dwarka, Gujarat 361350",
        mapLink: "https://maps.google.com/?q=Bet+Dwarka",
        openingHours: "Boats: 7:00 AM - 5:00 PM (Temple: 6 AM - 8 PM)",
        bestTime: "October to March, avoid monsoon season (rough seas)",
        budget: "₹400-1000 per person (Boat: ₹50-100, Food & offerings extra)",
        history: "Bet Dwarka, also called Shankhodhar, is a small island located 30 km north of Dwarka in the Gulf of Kutch. According to Hindu mythology, this island is believed to be the original residence of Lord Krishna during his reign in Dwarka. 'Bet' means island in Gujarati. The island houses several ancient temples, with the main temple dedicated to Lord Krishna. The temple is believed to be 5,000 years old and contains idols of Krishna, Vishnu, and other deities. The island is also associated with Krishna's childhood friend Sudama. The journey to Bet Dwarka involves a scenic 20-30 minute boat ride from Okha port. The island has beautiful beaches, coral reefs, and marine life. Archaeological excavations have revealed ancient structures and artifacts dating back to the Harappan civilization.",
        gallery: [
            "https://www.hlimg.com/images/things2do/738X538/hqdefault-1-1523525481t.jpg?w=400&h=300&fit=crop",
            "https://content.jdmagicbox.com/comp/porbandar/c7/9999px286.x286.141219152208.k2c7/catalogue/porbandar-beach-porbandar-ho-porbandar-tourist-attraction-zwjjsnf.jpg?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1591375372226-3485ca95641e?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8l_HDJzgHghxe0EQmOXgVHTT__xZi9KMaA&s?w=400&h=300&fit=crop"
        ],
        tips: [
            "Boats run frequently from Okha port",
            "Carry motion sickness medicine if prone to seasickness",
            "Wear life jackets provided on boats",
            "Visit early morning to avoid crowds",
            "Explore the beaches and coral areas",
            "Local vendors sell seashells and handicrafts",
            "Combine with Dwarka and Nageshwar temple visit",
            "Limited food options on island - carry snacks and water"
        ]
    },

    11: {
        id: 11,
        name: "Nageshwar Jyotirlinga",
        emoji: "🐍",
        district: "Devbhumi Dwarka",
        category: "Temple",
        mainImage: "https://famoustemplesofindia.com/wp-content/uploads/2023/11/Nageshwar-Jyotirlinga-Dwaraka-1-1024x768.jpg?w=800&h=500&fit=crop",
        fullAddress: "Nageshwar Temple, Dwarka-Okha Highway, Devbhumi Dwarka, Gujarat 361345",
        mapLink: "https://maps.google.com/?q=Nageshwar+Temple+Dwarka",
        openingHours: "6:00 AM - 9:30 PM (Aarti: Morning and evening)",
        bestTime: "October to March, Mahashivratri for special celebrations",
        budget: "₹300-800 per person (Temple: Free, Food & travel extra)",
        history: "Nageshwar Jyotirlinga Temple is one of the 12 sacred Jyotirlinga shrines dedicated to Lord Shiva. Located between Dwarka and Bet Dwarka, the temple is mentioned in the Shiva Purana. According to legend, a demon named Daruka imprisoned a Shiva devotee named Supriya here. When Supriya prayed to Lord Shiva, the deity appeared as Nageshwar (Lord of Serpents) and defeated the demon. The temple houses a self-manifested (Swayambhu) lingam facing south, which is rare. The temple complex features a massive 25-meter (82 feet) tall statue of Lord Shiva in a seated meditation pose, one of the tallest Shiva statues in India. The temple architecture is relatively modern, rebuilt in the 1950s, but the sanctity dates back thousands of years. The temple is surrounded by a beautiful garden and has a peaceful atmosphere.",
        gallery: [
            "https://famoustemplesofindia.com/wp-content/uploads/2023/11/Nageshwar-Jyotirlinga-Dwaraka-1-1024x768.jpg?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=300&fit=crop",
            "https://upload.wikimedia.org/wikipedia/commons/7/71/Gadhada_Swaminarayan_Temple.jpg?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1591375372226-3485ca95641e?w=400&h=300&fit=crop"
        ],
        tips: [
            "Photography allowed in outer areas, not inside sanctum",
            "Visit the giant Shiva statue - great photo opportunity",
            "Peaceful atmosphere, less crowded than Dwarka temple",
            "Combine with Dwarka and Bet Dwarka in one day trip",
            "Prasad and offerings available at temple shop",
            "Parking available, easily accessible by road",
            "Dress modestly as per temple norms"
        ]
    },

    // Add more places following the same pattern...
    // For brevity, I'll add a few more key places

    12: {
        id: 12,
        name: "Marine National Park",
        emoji: "🐠",
        district: "Jamnagar",
        category: "Wildlife",
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8l_HDJzgHghxe0EQmOXgVHTT__xZi9KMaA&s?w=800&h=500&fit=crop",
        fullAddress: "Marine National Park, Jamnagar, Gujarat 361001 (Near Narara Island)",
        mapLink: "https://maps.google.com/?q=Marine+National+Park+Jamnagar",
        openingHours: "Depends on low tide timings (Check locally, usually morning)",
        bestTime: "October to March, during low tide for reef walks",
        budget: "₹1000-3000 per person (Entry: ₹100-200, Boat: ₹500-1000)",
        history: "Marine National Park, established in 1982, is India's first marine national park and one of the few in the world. Spread across 458 square kilometers in the Gulf of Kutch, it comprises 42 islands and intertidal zones. The park is home to incredible marine biodiversity including coral reefs, mangroves, sea turtles, dolphins, whale sharks, sea cucumbers, octopuses, and over 200 species of birds. The coral reefs here are some of the northernmost in the Indian Ocean. The park plays a crucial role in marine conservation and research. During low tide, visitors can walk on exposed coral reefs and observe marine life in tidal pools. The Pirotan Island is the most popular spot for tourists. The park also has historical significance with ancient temples on some islands.",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8l_HDJzgHghxe0EQmOXgVHTT__xZi9KMaA&s?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop"
        ],
        tips: [
            "Check tide timings before visiting - low tide is essential",
            "Wear water-resistant footwear for reef walking",
            "Don't touch or damage corals - they're fragile",
            "Carry sunscreen, hat, and plenty of water",
            "Snorkeling and scuba diving available with permits",
            "Book boat trips through authorized operators",
            "Best visited as a day trip from Jamnagar city",
            "Respect marine life - no littering or collecting specimens"
        ]
    },

    // ══════════════════════════════════════════════════════════
    // JAMNAGAR DISTRICT (continued)
    // ══════════════════════════════════════════════════════════
    13: {
        id: 13,
        name: "Lakhota Palace & Museum",
        emoji: "🏰",
        district: "Jamnagar",
        category: "Museum",
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSfxYToGwGQygXXm8nZ8KScVlZCFIsiqXLw&s?w=800&h=500&fit=crop",
        fullAddress: "Lakhota Palace, Ranmal Lake, Jamnagar, Gujarat 361001",
        mapLink: "https://maps.google.com/?q=Lakhota+Palace+Museum+Jamnagar",
        openingHours: "9:00 AM - 6:00 PM (Closed on Wednesdays)",
        bestTime: "October to March (Pleasant weather for lake views)",
        budget: "₹200-500 per person (Entry: ₹10-20, Boating: ₹50-100)",
        history: "Lakhota Palace is a beautiful palace built in the middle of Ranmal Lake in 1748 by Jam Rawal, the founder of Jamnagar. The palace served as a summer retreat and fortress for the royal family. Built in traditional Rajput architecture, it's connected to the shore by a stone causeway. The palace now houses an archaeological museum displaying artifacts, sculptures, pottery, and coins from the 9th to 18th centuries. The museum showcases the rich history of the Jadeja dynasty and Jamnagar's cultural heritage. The palace's reflection in the lake creates a picturesque view, especially during sunset.",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSfxYToGwGQygXXm8nZ8KScVlZCFIsiqXLw&s?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuq-1P8nEjnKTsqUGzIRJTtENclidSKVjUQ&s?w=400&h=300&fit=crop",
            "https://media.assettype.com/outlooktraveller%2F2023-09%2Fb2a5183d-1573-44e3-961f-247fbdf11d0b%2Fshutterstock_1413640199.jpg?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8l_HDJzgHghxe0EQmOXgVHTT__xZi9KMaA&s?w=400&h=300&fit=crop"
        ],
        tips: [
            "Best photography time: Early morning or sunset",
            "Boating available in Ranmal Lake",
            "Combine with Marine National Park visit",
            "Peaceful atmosphere, perfect for relaxation",
            "Local guides available for historical insights"
        ]
    },
    // ══════════════════════════════════════════════════════════
    // PORBANDAR DISTRICT
    // ══════════════════════════════════════════════════════════
    14: {
        id: 14,
        name: "Gandhi Smriti (Kirti Mandir)",
        emoji: "🕊️",
        district: "Porbandar",
        category: "Museum",
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlv73rkQEAcIZyWGjy1hsPDV2uq6Y9YzFXjQ&s?w=800&h=500&fit=crop",
        fullAddress: "Kirti Mandir, Porbandar, Gujarat 360575",
        mapLink: "https://maps.google.com/?q=Kirti+Mandir+Porbandar",
        openingHours: "9:00 AM - 6:00 PM (Open all days)",
        bestTime: "October 2nd (Gandhi Jayanti) for special programs, otherwise year-round",
        budget: "₹100-300 per person (Entry: Free, donations welcome)",
        history: "Kirti Mandir is the birthplace of Mahatma Gandhi, built as a memorial temple in 1950. The original house where Gandhi was born on October 2, 1869, has been converted into a beautiful temple-museum. The memorial showcases Gandhi's life journey from birth to his assassination, displaying rare photographs, personal belongings, and his philosophy of non-violence. The temple architecture reflects traditional Gujarati style with intricate carvings. A prayer hall conducts daily prayers and bhajans. The memorial also houses a library with books on Gandhi's life and teachings.",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlv73rkQEAcIZyWGjy1hsPDV2uq6Y9YzFXjQ&s?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1571104508999-893933ded431?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop",
            "https://www.girnationalpark.in/uploads/gir-info.JPG?w=400&h=300&fit=crop"
        ],
        tips: [
            "Maintain silence and respect in the memorial",
            "Photography allowed in outer areas only",
            "Free entry but donations appreciated",
            "Visit during Gandhi Jayanti for special events",
            "Nearby: Porbandar Beach, Sudama Temple"
        ]
    },
    15: {
        id: 15,
        name: "Porbandar Beach",
        emoji: "🏖️",
        district: "Porbandar",
        category: "Beach",
        mainImage: "https://content.jdmagicbox.com/comp/porbandar/c7/9999px286.x286.141219152208.k2c7/catalogue/porbandar-beach-porbandar-ho-porbandar-tourist-attraction-zwjjsnf.jpg?w=800&h=500&fit=crop",
        fullAddress: "Porbandar Beach, Porbandar, Gujarat 360575",
        mapLink: "https://maps.google.com/?q=Porbandar+Beach",
        openingHours: "24 hours (Best time: 5:00 AM - 8:00 AM, 5:00 PM - 7:00 PM)",
        bestTime: "October to March (Pleasant weather), avoid monsoon",
        budget: "₹200-600 per person (Food, parking, activities extra)",
        history: "Porbandar Beach is a pristine stretch of golden sand along the Arabian Sea, famous for its spectacular sunsets and peaceful atmosphere. The beach has historical significance as it's located in the birthplace of Mahatma Gandhi. The coastline has been witness to centuries of maritime trade and cultural exchange. Local fishermen still use traditional boats, and you can see their colorful vessels dotting the shore. The beach offers a perfect blend of natural beauty and cultural heritage, making it a popular destination for both pilgrims visiting Gandhi's birthplace and tourists seeking coastal tranquility.",
        gallery: [
            "https://content.jdmagicbox.com/comp/porbandar/c7/9999px286.x286.141219152208.k2c7/catalogue/porbandar-beach-porbandar-ho-porbandar-tourist-attraction-zwjjsnf.jpg?w=400&h=300&fit=crop",
            "https://www.hlimg.com/images/things2do/738X538/hqdefault-1-1523525481t.jpg?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8l_HDJzgHghxe0EQmOXgVHTT__xZi9KMaA&s?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
        ],
        tips: [
            "Best sunset views in Saurashtra region",
            "Early morning walks are refreshing",
            "Try local seafood at nearby restaurants",
            "Camel rides available during tourist season",
            "Combine with Kirti Mandir visit",
            "Carry sunscreen and water"
        ]
    },
    // ══════════════════════════════════════════════════════════
    // BHAVNAGAR DISTRICT
    // ══════════════════════════════════════════════════════════
    16: {
        id: 16,
        name: "Velavadar Blackbuck National Park",
        emoji: "🦌",
        district: "Bhavnagar",
        category: "Wildlife",
        mainImage: "https://images.unsplash.com/photo-1564935714697-9e64e0dc31ec?w=800&h=500&fit=crop",
        fullAddress: "Velavadar Blackbuck National Park, Bhavnagar, Gujarat 364313",
        mapLink: "https://maps.google.com/?q=Velavadar+Blackbuck+National+Park",
        openingHours: "Safari: 6:30 AM - 9:30 AM, 3:30 PM - 6:30 PM (Closed mid-June to mid-October)",
        bestTime: "November to February (Best wildlife sightings, migratory birds)",
        budget: "₹800-2000 per person (Entry: ₹100-200, Safari: ₹500-800)",
        history: "Velavadar Blackbuck National Park, established in 1976, is the only tropical grassland in India dedicated to the conservation of blackbucks. Spread over 34 square kilometers, it's home to the largest population of blackbucks in India with over 3,000 individuals. The park was once the hunting ground of the Maharaja of Bhavnagar. Besides blackbucks, it houses wolves, nilgai, jungle cats, and over 140 bird species including the endangered lesser florican. The grassland ecosystem is unique and supports various endangered species. During winter, the park becomes a haven for migratory birds.",
        gallery: [
            "https://images.unsplash.com/photo-1564935714697-9e64e0dc31ec?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8l_HDJzgHghxe0EQmOXgVHTT__xZi9KMaA&s?w=400&h=300&fit=crop"
        ],
        tips: [
            "Book safari in advance, especially during peak season",
            "Early morning safaris have better wildlife sightings",
            "Carry binoculars for bird watching",
            "Wear neutral colored clothes",
            "Best time for photography: Golden hour",
            "Stay at forest guesthouses for complete experience"
        ]
    },
    17: {
        id: 17,
        name: "Takhteshwar Temple",
        emoji: "🛕",
        district: "Bhavnagar",
        category: "Temple",
        mainImage: "https://www.tourmyindia.com/images/takhteshwar-temple-bhavnagar1.jpg?w=800&h=500&fit=crop",
        fullAddress: "Takhteshwar Temple, Takhteshwar Hill, Bhavnagar, Gujarat 364001",
        mapLink: "https://maps.google.com/?q=Takhteshwar+Temple+Bhavnagar",
        openingHours: "5:00 AM - 9:00 PM (Aarti: Morning and evening)",
        bestTime: "October to March, Mahashivratri for special celebrations",
        budget: "₹200-500 per person (Temple: Free, Food & travel extra)",
        history: "Takhteshwar Temple is a magnificent Shiva temple built in 1893 by Maharaja Takhtasinhji of Bhavnagar, after whom it's named. Perched atop a hillock, the temple offers panoramic 360-degree views of Bhavnagar city and the Gulf of Khambhat. The temple architecture is a blend of traditional and colonial styles with beautiful stone carvings. The main deity is Lord Shiva, and the temple is especially crowded during Mahashivratri. The climb to the temple involves ascending several steps, but the breathtaking views make it worthwhile. The temple also serves as a popular sunset point.",
        gallery: [
            "https://www.tourmyindia.com/images/takhteshwar-temple-bhavnagar1.jpg?w=400&h=300&fit=crop",
            "https://upload.wikimedia.org/wikipedia/commons/7/71/Gadhada_Swaminarayan_Temple.jpg?w=400&h=300&fit=crop",
            "https://famoustemplesofindia.com/wp-content/uploads/2023/11/Nageshwar-Jyotirlinga-Dwaraka-1-1024x768.jpg?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=300&fit=crop"
        ],
        tips: [
            "Visit during sunset for spectacular views",
            "Wear comfortable shoes for the climb",
            "Carry water, especially during summer",
            "Photography allowed in outer areas",
            "Combine with Velavadar National Park visit",
            "Local food stalls available at the base"
        ]
    },
    18: {
        id: 18,
        name: "Palitana Jain Temples",
        emoji: "🏛️",
        district: "Bhavnagar",
        category: "Pilgrimage",
        mainImage: "https://notesonslowtravel.com/wp-content/uploads/2019/01/jain_complex_palitana.jpg?w=800&h=500&fit=crop",
        fullAddress: "Shatrunjaya Hill, Palitana, Bhavnagar, Gujarat 364270",
        mapLink: "https://maps.google.com/?q=Palitana+Jain+Temples",
        openingHours: "6:00 AM - 6:00 PM (Closed during monsoon: July-September)",
        bestTime: "October to March (Cool weather for climbing), avoid monsoon",
        budget: "₹500-1500 per person (Entry: Free, Doli: ₹800-1200 optional)",
        history: "Palitana is the most sacred pilgrimage site for Jains, featuring 863 marble temples built over 900 years (11th-20th century) atop Shatrunjaya Hill. The temples are dedicated to various Jain Tirthankaras, with the main temple honoring Adinath (1st Tirthankara). The climb involves 3,500 stone steps over 3.5 km, taking 2-4 hours depending on fitness. The temples showcase exquisite marble architecture with intricate carvings, pillars, and domes. According to Jain belief, Shatrunjaya Hill is where 23 Tirthankaras attained moksha (liberation). The entire hill is considered so sacred that no one is allowed to stay overnight, including priests.",
        gallery: [
            "https://notesonslowtravel.com/wp-content/uploads/2019/01/jain_complex_palitana.jpg?w=400&h=300&fit=crop",
            "https://upload.wikimedia.org/wikipedia/commons/7/71/Gadhada_Swaminarayan_Temple.jpg?w=400&h=300&fit=crop",
            "https://www.tourmyindia.com/images/takhteshwar-temple-bhavnagar1.jpg?w=400&h=300&fit=crop",
            "https://famoustemplesofindia.com/wp-content/uploads/2023/11/Nageshwar-Jyotirlinga-Dwaraka-1-1024x768.jpg?w=400&h=300&fit=crop"
        ],
        tips: [
            "Start climbing by 6 AM to avoid heat",
            "Doli (palanquin) service available for elderly",
            "No leather items allowed - leave at base",
            "Carry sufficient water and energy snacks",
            "Dress modestly - cover arms and legs",
            "Photography restrictions in some temples",
            "Complete climb takes 4-6 hours round trip"
        ]
    },
    // ══════════════════════════════════════════════════════════
    // MORBI DISTRICT
    // ══════════════════════════════════════════════════════════
    19: {
        id: 19,
        name: "Mani Mandir Palace",
        emoji: "🏰",
        district: "Morbi",
        category: "Palace",
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuq-1P8nEjnKTsqUGzIRJTtENclidSKVjUQ&s?w=800&h=500&fit=crop",
        fullAddress: "Mani Mandir Palace, Morbi, Gujarat 363641",
        mapLink: "https://maps.google.com/?q=Mani+Mandir+Palace+Morbi",
        openingHours: "9:00 AM - 6:00 PM (Closed on Mondays)",
        bestTime: "October to March (Pleasant weather for palace exploration)",
        budget: "₹300-700 per person (Entry: ₹50-100, Guide: ₹100-200)",
        history: "Mani Mandir Palace, built in 1880 by Maharaja Waghji Ravaji, is a stunning example of Indo-European architecture. The palace combines Rajput, Gothic, and Mughal architectural styles with European influences. Built with Italian marble and decorated with Belgian glass, the palace features beautiful gardens, ornate halls, and intricate carvings. The palace served as the residence of the Morbi royal family and hosted many distinguished guests including British officials. Today, it houses a museum displaying royal artifacts, vintage cars, weapons, and photographs showcasing the grandeur of the Morbi princely state.",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuq-1P8nEjnKTsqUGzIRJTtENclidSKVjUQ&s?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSfxYToGwGQygXXm8nZ8KScVlZCFIsiqXLw&s?w=400&h=300&fit=crop",
            "https://media.assettype.com/outlooktraveller%2F2023-09%2Fb2a5183d-1573-44e3-961f-247fbdf11d0b%2Fshutterstock_1413640199.jpg?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop"
        ],
        tips: [
            "Guided tours provide rich historical insights",
            "Photography allowed in most areas",
            "Best time for photos: Morning light",
            "Combine with pottery workshops visit",
            "Royal artifacts collection is impressive",
            "Well-maintained gardens perfect for walks"
        ]
    },
    20: {
        id: 20,
        name: "Morbi Pottery & Tile Hub",
        emoji: "🏺",
        district: "Morbi",
        category: "Industry",
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7lonyOi5Sy69dV9sPy2jtxcl8VFR-iEI3w&s?w=800&h=500&fit=crop",
        fullAddress: "Industrial Area, Morbi, Gujarat 363641",
        mapLink: "https://maps.google.com/?q=Morbi+Gujarat",
        openingHours: "9:00 AM - 6:00 PM (Factory visits by appointment)",
        bestTime: "October to March (Comfortable for factory visits)",
        budget: "₹400-1000 per person (Factory tours, pottery workshops)",
        history: "Morbi is globally renowned as the 'Ceramic Capital of India', producing over 80% of India's ceramic tiles and sanitaryware. The industry began in the 1960s and has grown to supply tiles worldwide. The city houses over 800 ceramic manufacturing units, making it one of the largest ceramic clusters globally. Visitors can witness the complete tile-making process from clay preparation to final glazing. Many factories offer guided tours showcasing modern technology and traditional craftsmanship. The pottery tradition dates back centuries, and local artisans still create beautiful handcrafted items alongside industrial production.",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7lonyOi5Sy69dV9sPy2jtxcl8VFR-iEI3w&s?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuq-1P8nEjnKTsqUGzIRJTtENclidSKVjUQ&s?w=400&h=300&fit=crop",
            "https://utsav.gov.in/public/uploads/event_cover_image/event_11/1656758445237568988.jpg?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSfxYToGwGQygXXm8nZ8KScVlZCFIsiqXLw&s?w=400&h=300&fit=crop"
        ],
        tips: [
            "Book factory visits in advance",
            "Pottery workshops available for hands-on experience",
            "Great place to buy ceramic items at factory prices",
            "Wear closed shoes for factory visits",
            "Photography may be restricted in some areas",
            "Combine with Mani Mandir Palace visit"
        ]
    },
    // ══════════════════════════════════════════════════════════
    // AMRELI DISTRICT
    // ══════════════════════════════════════════════════════════
    21: {
        id: 21,
        name: "Gir East / Ratanmahal Wildlife",
        emoji: "🐆",
        district: "Amreli",
        category: "Wildlife",
        mainImage: "https://images.unsplash.com/photo-1564935714697-9e64e0dc31ec?w=800&h=500&fit=crop",
        fullAddress: "Gir East Wildlife Sanctuary, Amreli, Gujarat 365601",
        mapLink: "https://maps.google.com/?q=Gir+East+Amreli",
        openingHours: "Safari: 6:30 AM - 9:30 AM, 3:30 PM - 6:30 PM (Closed mid-June to mid-October)",
        bestTime: "November to March (Best wildlife sightings, pleasant weather)",
        budget: "₹1500-3000 per person (Entry: ₹200-300, Safari: ₹800-1500)",
        history: "Gir East Wildlife Sanctuary, part of the greater Gir ecosystem, was established to provide additional habitat for the growing Asiatic lion population. Spread over 180 square kilometers, it serves as a buffer zone and corridor connecting different parts of Gir. The sanctuary is home to leopards, sloth bears, hyenas, jungle cats, and over 200 bird species. The landscape includes dry deciduous forests, grasslands, and rocky hills. The area has been crucial in the conservation success story of Asiatic lions, providing them with expanded territory as their population recovered from near extinction.",
        gallery: [
            "https://images.unsplash.com/photo-1564935714697-9e64e0dc31ec?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8l_HDJzgHghxe0EQmOXgVHTT__xZi9KMaA&s?w=400&h=300&fit=crop"
        ],
        tips: [
            "Book safari through authorized operators",
            "Morning safaris offer better wildlife sightings",
            "Carry binoculars and camera with zoom lens",
            "Maintain silence during safari",
            "Wear neutral colored clothing",
            "Combine with main Gir National Park visit"
        ]
    },
    22: {
        id: 22,
        name: "Kalapi Memorial – Lathi Estate",
        emoji: "📚",
        district: "Amreli",
        category: "Heritage",
        mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlv73rkQEAcIZyWGjy1hsPDV2uq6Y9YzFXjQ&s?w=800&h=500&fit=crop",
        fullAddress: "Kalapi Memorial, Lathi, Amreli, Gujarat 365430",
        mapLink: "https://maps.google.com/?q=Lathi+Amreli+Gujarat",
        openingHours: "9:00 AM - 6:00 PM (Closed on Mondays)",
        bestTime: "October to March (Pleasant weather for literary exploration)",
        budget: "₹200-500 per person (Entry: ₹20-50, Guide optional)",
        history: "The Kalapi Memorial is dedicated to Sursinhji Takhtasinhji Gohil, popularly known as 'Kalapi' (1874-1900), one of Gujarat's most beloved poets. Born as the prince of Lathi state, Kalapi chose poetry over royal duties and became a legendary figure in Gujarati literature. His romantic poems and ghazals are still widely read and sung. The memorial, built at his ancestral palace, displays his manuscripts, photographs, and personal belongings. Kalapi's tragic love story and his untimely death at age 26 have made him an iconic figure. The memorial preserves his literary legacy and showcases the rich cultural heritage of Saurashtra.",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlv73rkQEAcIZyWGjy1hsPDV2uq6Y9YzFXjQ&s?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1571104508999-893933ded431?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuq-1P8nEjnKTsqUGzIRJTtENclidSKVjUQ&s?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSfxYToGwGQygXXm8nZ8KScVlZCFIsiqXLw&s?w=400&h=300&fit=crop"
        ],
        tips: [
            "Learn about Gujarati literature and poetry",
            "Guided tours provide insights into Kalapi's life",
            "Photography allowed in most areas",
            "Peaceful atmosphere perfect for literature lovers",
            "Local library has collection of his works",
            "Combine with other Amreli district attractions"
        ]
    },
    // ══════════════════════════════════════════════════════════
    // SURENDRANAGAR DISTRICT
    // ══════════════════════════════════════════════════════════
    23: {
        id: 23,
        name: "Wadhwan Stepwell",
        emoji: "🏛️",
        district: "Surendranagar",
        category: "Architecture",
        mainImage: "https://media.assettype.com/outlooktraveller%2F2023-09%2Fb2a5183d-1573-44e3-961f-247fbdf11d0b%2Fshutterstock_1413640199.jpg?w=800&h=500&fit=crop",
        fullAddress: "Wadhwan Stepwell, Wadhwan, Surendranagar, Gujarat 363030",
        mapLink: "https://maps.google.com/?q=Wadhwan+Stepwell+Surendranagar",
        openingHours: "6:00 AM - 7:00 PM (Open all days)",
        bestTime: "October to March (Pleasant weather for exploration)",
        budget: "₹100-300 per person (Entry: Free, Guide optional ₹100-150)",
        history: "The Wadhwan Stepwell is a magnificent example of medieval water architecture, built in the 11th-12th century during the Solanki dynasty. This intricately carved stepwell (vav) showcases the advanced engineering skills of ancient Gujarat. The stepwell features multiple levels with ornate pillars, arches, and sculptures depicting Hindu deities and mythological scenes. Built to provide water storage and relief from heat, stepwells were also social gathering places. The Wadhwan stepwell is particularly noted for its geometric patterns and the play of light and shadow created by its architecture. It represents the ingenuity of water conservation in arid regions.",
        gallery: [
            "https://media.assettype.com/outlooktraveller%2F2023-09%2Fb2a5183d-1573-44e3-961f-247fbdf11d0b%2Fshutterstock_1413640199.jpg?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSfxYToGwGQygXXm8nZ8KScVlZCFIsiqXLw&s?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuq-1P8nEjnKTsqUGzIRJTtENclidSKVjUQ&s?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop"
        ],
        tips: [
            "Best photography during midday for light effects",
            "Wear comfortable shoes with good grip",
            "Carry flashlight for exploring lower levels",
            "Respect the historical monument - no littering",
            "Local guides can explain architectural details",
            "Combine with other stepwells in Gujarat"
        ]
    },
    24: {
        id: 24,
        name: "Tarnetar Fair Grounds",
        emoji: "🎪",
        district: "Surendranagar",
        category: "Festival",
        mainImage: "https://utsav.gov.in/public/uploads/event_cover_image/event_11/1656758445237568988.jpg?w=800&h=500&fit=crop",
        fullAddress: "Tarnetar Fair Grounds, Tarnetar, Surendranagar, Gujarat 363650",
        mapLink: "https://maps.google.com/?q=Tarnetar+Surendranagar",
        openingHours: "Fair time: August-September (3 days during Bhadrapada Purnima)",
        bestTime: "August-September during the annual fair (monsoon season)",
        budget: "₹500-2000 per person (Accommodation, food, shopping during fair)",
        history: "Tarnetar Fair is one of Gujarat's most colorful and famous tribal fairs, held annually for over 200 years. The fair takes place at the Trinetreshwar Mahadev Temple during Bhadrapada Purnima (full moon in August-September). Originally a cattle fair, it evolved into a cultural extravaganza showcasing tribal art, dance, music, and traditions. The fair is famous for its unique 'marriage market' where young tribal men and women meet potential partners. Participants wear traditional colorful attire, with men sporting elaborate turbans and women in vibrant chaniya cholis. The fair features folk dances like Garba, Raas, and tribal performances, handicraft exhibitions, and traditional competitions.",
        gallery: [
            "https://utsav.gov.in/public/uploads/event_cover_image/event_11/1656758445237568988.jpg?w=400&h=300&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7lonyOi5Sy69dV9sPy2jtxcl8VFR-iEI3w&s?w=400&h=300&fit=crop",
            "https://www.tourmyindia.com/images/takhteshwar-temple-bhavnagar1.jpg?w=400&h=300&fit=crop",
            "https://www.tourmyindia.com/images/takhteshwar-temple-bhavnagar1.jpg?w=400&h=300&fit=crop"
        ],
        tips: [
            "Visit only during fair time (August-September)",
            "Book accommodation well in advance",
            "Respect local customs and traditions",
            "Great opportunity for cultural photography",
            "Try traditional Gujarati food at stalls",
            "Participate in folk dance performances",
            "Shop for authentic tribal handicrafts"
        ]
    },
    // ══════════════════════════════════════════════════════════
    // BOTAD DISTRICT
    // ══════════════════════════════════════════════════════════
    25: {
        id: 25,
        name: "Swaminarayan Temple Gadhada",
        emoji: "🛕",
        district: "Botad",
        category: "Temple",
        mainImage: "https://upload.wikimedia.org/wikipedia/commons/7/71/Gadhada_Swaminarayan_Temple.jpg?w=800&h=500&fit=crop",
        fullAddress: "Swaminarayan Temple, Gadhada, Botad, Gujarat 364750",
        mapLink: "https://maps.google.com/?q=Swaminarayan+Temple+Gadhada",
        openingHours: "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM (Aarti times vary)",
        bestTime: "October to March, Swaminarayan Jayanti for grand celebrations",
        budget: "₹300-800 per person (Temple: Free, Accommodation & food extra)",
        history: "The Swaminarayan Temple in Gadhada holds immense significance as one of the primary centers where Bhagwan Swaminarayan lived and preached. Built in the early 19th century, this temple was where Swaminarayan spent considerable time during his spiritual mission. Gadhada is mentioned frequently in the Vachanamrut, the sacred text containing Swaminarayan's spiritual discourses. The temple features beautiful architecture with intricate carvings and houses the murtis (sacred images) of Swaminarayan and other deities. The temple complex includes the original residence where Swaminarayan stayed, now converted into a museum displaying his personal belongings and teachings. It remains one of the most important pilgrimage sites for Swaminarayan devotees worldwide.",
        gallery: [
            "https://upload.wikimedia.org/wikipedia/commons/7/71/Gadhada_Swaminarayan_Temple.jpg?w=400&h=300&fit=crop",
            "https://famoustemplesofindia.com/wp-content/uploads/2023/11/Nageshwar-Jyotirlinga-Dwaraka-1-1024x768.jpg?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1591375372226-3485ca95641e?w=400&h=300&fit=crop"
        ],
        tips: [
            "Dress modestly - traditional attire preferred",
            "Remove shoes before entering temple premises",
            "Photography restrictions in inner sanctum",
            "Attend morning and evening aarti for spiritual experience",
            "Visit the museum to learn about Swaminarayan's life",
            "Prasad (blessed food) available after aarti",
            "Peaceful atmosphere perfect for meditation"
        ]
    }

};
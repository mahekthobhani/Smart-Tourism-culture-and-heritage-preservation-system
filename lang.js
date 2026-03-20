/*
  ════════════════════════════════════════════════════════════
  SIMPLE LANGUAGE TRANSLATION SYSTEM
  Supports: English (default), Hindi, Gujarati
  ════════════════════════════════════════════════════════════
*/

// Current language (default: English)
let currentLang = localStorage.getItem('language') || 'en';

// All translations in one place - COMPREHENSIVE VERSION
const translations = {
    // Navigation
    'nav.home': { en: 'Home', hi: 'होम', gu: 'હોમ' },
    'nav.districts': { en: 'Districts', hi: 'जिले', gu: 'જિલ્લાઓ' },
    'nav.heritage': { en: 'Heritage', hi: 'विरासत', gu: 'વારસો' },
    'nav.travelPlanner': { en: 'Travel Planner', hi: 'यात्रा योजनाकार', gu: 'મુસાફરી આયોજક' },
    'nav.gallery': { en: 'Gallery', hi: 'गैलरी', gu: 'ગેલેરી' },
    'nav.didYouKnow': { en: 'Did You Know?', hi: 'क्या आप जानते हैं?', gu: 'શું તમે જાણો છો?' },
    'nav.learn': { en: 'Learn', hi: 'सीखें', gu: 'શીખો' },
    'nav.contact': { en: 'Contact', hi: 'संपर्क', gu: 'સંપર્ક' },
    
    // Common
    'common.backToHome': { en: 'Back to Home', hi: 'होम पर वापस', gu: 'હોમ પર પાછા' },
    'common.backToEducation': { en: 'Back to Education', hi: 'शिक्षा पर वापस', gu: 'શિક્ષણ પર પાછા' },
    'common.close': { en: 'Close', hi: 'बंद करें', gu: 'બંધ કરો' },
    
    // Hero Section
    'hero.badge': { en: '🌟 Hackathon Project 2026', hi: '🌟 हैकाथॉन प्रोजेक्ट 2026', gu: '🌟 હેકાથોન પ્રોજેક્ટ 2026' },
    'hero.title1': { en: 'Discover the Soul of', hi: 'की आत्मा की खोज करें', gu: 'ની આત્મા શોધો' },
    'hero.title2': { en: 'Saurashtra', hi: 'सौराष्ट्र', gu: 'સૌરાષ્ટ્ર' },
    'hero.subtitle': { 
        en: '🏛️ Digitally preserving the temples, forts, traditions and cultural treasures of Gujarat\'s historic Saurashtra region for generations to come.',
        hi: '🏛️ गुजरात के ऐतिहासिक सौराष्ट्र क्षेत्र के मंदिरों, किलों, परंपराओं और सांस्कृतिक खजानों को आने वाली पीढ़ियों के लिए डिजिटल रूप से संरक्षित करना।',
        gu: '🏛️ ગુજરાતના ઐતિહાસિક સૌરાષ્ટ્ર પ્રદેશના મંદિરો, કિલ્લાઓ, પરંપરાઓ અને સાંસ્કૃતિક ખજાનાને આવનારી પેઢીઓ માટે ડિજિટલ રીતે સાચવવું.'
    },
    'hero.districts': { en: 'Districts', hi: 'जिले', gu: 'જિલ્લાઓ' },
    'hero.heritageSites': { en: 'Heritage Sites', hi: 'विरासत स्थल', gu: 'વારસા સ્થળો' },
    'hero.yearsOfHistory': { en: 'Years of History', hi: 'वर्षों का इतिहास', gu: 'વર્ષોનો ઇતિહાસ' },
    'hero.storiesToTell': { en: 'Stories to Tell', hi: 'कहानियां', gu: 'વાર્તાઓ' },
    'hero.startExploring': { en: 'Start Exploring', hi: 'खोज शुरू करें', gu: 'શોધ શરૂ કરો' },
    'hero.virtualTour': { en: 'Virtual Tour', hi: 'वर्चुअल टूर', gu: 'વર્ચ્યુઅલ ટૂર' },
    
    // Search
    'search.placeholder': { 
        en: 'Search temples, forts, museums, festivals...', 
        hi: 'मंदिर, किले, संग्रहालय, त्योहार खोजें...', 
        gu: 'મંદિરો, કિલ્લાઓ, સંગ્રહાલયો, તહેવારો શોધો...' 
    },
    
    // Travel Planner
    'planner.title': { en: '🚗 Travel Planner', hi: '🚗 यात्रा योजनाकार', gu: '🚗 મુસાફરી આયોજક' },
    'planner.subtitle': { en: 'Plan your journey across Saurashtra with ease', hi: 'आसानी से सौराष्ट्र में अपनी यात्रा की योजना बनाएं', gu: 'સરળતાથી સૌરાષ્ટ્રમાં તમારી મુસાફરીની યોજના બનાવો' },
    'planner.planJourney': { en: 'Plan Your Journey', hi: 'अपनी यात्रा की योजना बनाएं', gu: 'તમારી મુસાફરીની યોજના બનાવો' },
    'planner.from': { en: 'From (Starting Point)', hi: 'से (प्रारंभिक बिंदु)', gu: 'થી (શરૂઆતનું સ્થળ)' },
    'planner.to': { en: 'To (Destination)', hi: 'तक (गंतव्य)', gu: 'સુધી (ગંતવ્ય)' },
    'planner.selectStarting': { en: 'Select starting location', hi: 'प्रारंभिक स्थान चुनें', gu: 'શરૂઆતનું સ્થળ પસંદ કરો' },
    'planner.selectDestination': { en: 'Select destination', hi: 'गंतव्य चुनें', gu: 'ગંતવ્ય પસંદ કરો' },
    'planner.travelers': { en: 'Number of Travelers', hi: 'यात्रियों की संख्या', gu: 'મુસાફરોની સંખ્યા' },
    'planner.calculate': { en: 'Calculate Travel Options', hi: 'यात्रा विकल्पों की गणना करें', gu: 'મુસાફરી વિકલ્પોની ગણતરી કરો' },
    
    // Place Details
    'place.openingHours': { en: 'Opening Hours', hi: 'खुलने का समय', gu: 'ખુલવાનો સમય' },
    'place.bestTime': { en: 'Best Time to Visit', hi: 'घूमने का सबसे अच्छा समय', gu: 'મુલાકાત લેવાનો શ્રેષ્ઠ સમય' },
    'place.budget': { en: 'Average Budget', hi: 'औसत बजट', gu: 'સરેરાશ બજેટ' },
    'place.location': { en: 'Location & Address', hi: 'स्थान और पता', gu: 'સ્થાન અને સરનામું' },
    'place.viewMaps': { en: 'View on Google Maps', hi: 'गूगल मैप्स पर देखें', gu: 'ગૂગલ મેપ્સ પર જુઓ' },
    'place.history': { en: 'History & Significance', hi: 'इतिहास और महत्व', gu: 'ઇતિહાસ અને મહત્વ' },
    'place.gallery': { en: 'Photo Gallery', hi: 'फोटो गैलरी', gu: 'ફોટો ગેલેરી' },
    'place.visitorInfo': { en: 'Visitor Information', hi: 'आगंतुक जानकारी', gu: 'મુલાકાતી માહિતી' },
    
    // Districts Section
    'districts.tag': { en: 'Explore by Region', hi: 'क्षेत्र के अनुसार खोजें', gu: 'પ્રદેશ પ્રમાણે શોધો' },
    'districts.title': { en: '11 Districts of Saurashtra', hi: 'सौराष्ट्र के 11 जिले', gu: 'સૌરાષ્ટ્રના 11 જિલ્લાઓ' },
    'districts.subtitle': { en: 'Click on any district to filter heritage places', hi: 'विरासत स्थलों को फ़िल्टर करने के लिए किसी भी जिले पर क्लिक करें', gu: 'વારસા સ્થળોને ફિલ્ટર કરવા માટે કોઈપણ જિલ્લા પર ક્લિક કરો' },
    'districts.all': { en: 'All Districts', hi: 'सभी जिले', gu: 'બધા જિલ્લાઓ' },
    
    // Heritage Section
    'heritage.tag': { en: 'Cultural Heritage Archive', hi: 'सांस्कृतिक विरासत संग्रह', gu: 'સાંસ્કૃતિક વારસો સંગ્રહ' },
    'heritage.title': { en: 'Heritage & Tourist Places', hi: 'विरासत और पर्यटन स्थल', gu: 'વારસો અને પર્યટન સ્થળો' },
    'heritage.subtitle': { en: 'Explore temples, forts, museums and natural wonders', hi: 'मंदिरों, किलों, संग्रहालयों और प्राकृतिक चमत्कारों का अन्वेषण करें', gu: 'મંદિરો, કિલ્લાઓ, સંગ્રહાલયો અને કુદરતી અજાયબીઓ શોધો' },
    'heritage.all': { en: 'All', hi: 'सभी', gu: 'બધા' },
    'heritage.temples': { en: '🛕 Temples', hi: '🛕 मंदिर', gu: '🛕 મંદિરો' },
    'heritage.forts': { en: '🏰 Forts', hi: '🏰 किले', gu: '🏰 કિલ્લાઓ' },
    'heritage.wildlife': { en: '🦁 Wildlife', hi: '🦁 वन्यजीव', gu: '🦁 વન્યજીવન' },
    'heritage.beaches': { en: '🏖️ Beaches', hi: '🏖️ समुद्र तट', gu: '🏖️ દરિયાકિનારા' },
    'heritage.museums': { en: '🏛️ Museums', hi: '🏛️ संग्रहालय', gu: '🏛️ સંગ્રહાલયો' },
    'heritage.pilgrimage': { en: '🕊️ Pilgrimage', hi: '🕊️ तीर्थयात्रा', gu: '🕊️ તીર્થયાત્રા' },
    'heritage.noResults': { en: 'No places found!', hi: 'कोई स्थान नहीं मिला!', gu: 'કોઈ સ્થળ મળ્યું નથી!' },
    'heritage.noResultsText': { en: 'Try searching with a different keyword or select "All Districts"', hi: 'किसी अन्य कीवर्ड से खोजें या "सभी जिले" चुनें', gu: 'અલગ કીવર્ડથી શોધો અથવા "બધા જિલ્લાઓ" પસંદ કરો' },
    'heritage.showAll': { en: 'Show All Places', hi: 'सभी स्थान दिखाएं', gu: 'બધા સ્થળો બતાવો' },
    'heritage.askAI': { en: 'Ask AI', hi: 'AI से पूछें', gu: 'AI ને પૂછો' },
    'heritage.moreDetails': { en: 'More Details', hi: 'अधिक विवरण', gu: 'વધુ વિગતો' },
    'heritage.viewLocation': { en: 'View Location', hi: 'स्थान देखें', gu: 'સ્થાન જુઓ' },
    
    // Travel Planner Section (Homepage)
    'travelSection.tag': { en: '🚗 Plan Your Trip', hi: '🚗 अपनी यात्रा की योजना बनाएं', gu: '🚗 તમારી મુસાફરીની યોજના બનાવો' },
    'travelSection.title': { en: 'Travel Planner', hi: 'यात्रा योजनाकार', gu: 'મુસાફરી આયોજક' },
    'travelSection.subtitle': { en: 'Calculate costs and compare transport options for your journey', hi: 'अपनी यात्रा के लिए लागत की गणना करें और परिवहन विकल्पों की तुलना करें', gu: 'તમારી મુસાફરી માટે ખર્ચની ગણતરી કરો અને પરિવહન વિકલ્પોની તુલના કરો' },
    'travelSection.heading': { en: 'Plan Your Journey Across Saurashtra', hi: 'सौराष्ट्र में अपनी यात्रा की योजना बनाएं', gu: 'સૌરાષ્ટ્રમાં તમારી મુસાફરીની યોજના બનાવો' },
    'travelSection.description': { en: 'Get instant cost estimates and compare all transport options (Bus, Train, Car, Flight) between any two cities in Saurashtra. Make informed travel decisions with our smart calculator!', hi: 'सौराष्ट्र के किसी भी दो शहरों के बीच तत्काल लागत अनुमान प्राप्त करें और सभी परिवहन विकल्पों (बस, ट्रेन, कार, फ्लाइट) की तुलना करें। हमारे स्मार्ट कैलकुलेटर के साथ सूचित यात्रा निर्णय लें!', gu: 'સૌરાષ્ટ્રના કોઈપણ બે શહેરો વચ્ચે તાત્કાલિક ખર્ચ અંદાજ મેળવો અને તમામ પરિવહન વિકલ્પો (બસ, ટ્રેન, કાર, ફ્લાઇટ)ની તુલના કરો. અમારા સ્માર્ટ કેલ્ક્યુલેટર સાથે માહિતગાર મુસાફરી નિર્ણયો લો!' },
    'travelSection.feature1': { en: 'Cost Calculator', hi: 'लागत कैलकुलेटर', gu: 'ખર્ચ કેલ્ક્યુલેટર' },
    'travelSection.feature2': { en: 'Multiple Options', hi: 'कई विकल्प', gu: 'અનેક વિકલ્પો' },
    'travelSection.feature3': { en: 'Travel Duration', hi: 'यात्रा अवधि', gu: 'મુસાફરી સમયગાળો' },
    'travelSection.feature4': { en: 'Travel Tips', hi: 'यात्रा सुझाव', gu: 'મુસાફરી ટિપ્સ' },
    'travelSection.openPlanner': { en: 'Open Travel Planner', hi: 'यात्रा योजनाकार खोलें', gu: 'મુસાફરી આયોજક ખોલો' },
    'travelSection.exampleRoute': { en: 'Example Route', hi: 'उदाहरण मार्ग', gu: 'ઉદાહરણ માર્ગ' },
    'travelSection.car': { en: 'Car', hi: 'कार', gu: 'કાર' },
    'travelSection.bus': { en: 'Bus', hi: 'बस', gu: 'બસ' },
    'travelSection.train': { en: 'Train', hi: 'ट्रेन', gu: 'ટ્રેન' },
    'travelSection.pricesNote': { en: 'Prices per person • Click to see all routes', hi: 'प्रति व्यक्ति कीमतें • सभी मार्ग देखने के लिए क्लिक करें', gu: 'વ્યક્તિ દીઠ કિંમતો • બધા માર્ગો જોવા માટે ક્લિક કરો' },
    
    // Virtual Tour Section
    'virtualTour.tag': { en: 'Virtual Experience', hi: 'वर्चुअल अनुभव', gu: 'વર્ચ્યુઅલ અનુભવ' },
    'virtualTour.title': { en: 'Virtual Tours', hi: 'वर्चुअल टूर', gu: 'વર્ચ્યુઅલ ટૂર' },
    'virtualTour.subtitle': { en: 'Experience Saurashtra\'s wonders from your screen', hi: 'अपनी स्क्रीन से सौराष्ट्र के चमत्कारों का अनुभव करें', gu: 'તમારી સ્ક્રીનથી સૌરાષ્ટ્રના અજાયબીઓનો અનુભવ કરો' },
    
    // Gallery Section
    'gallery.tag': { en: 'Photo Gallery', hi: 'फोटो गैलरी', gu: 'ફોટો ગેલેરી' },
    'gallery.title': { en: 'Visual Heritage Archive', hi: 'दृश्य विरासत संग्रह', gu: 'દૃશ્ય વારસો સંગ્રહ' },
    'gallery.subtitle': { en: 'A glimpse into the beauty of Saurashtra', hi: 'सौराष्ट्र की सुंदरता की एक झलक', gu: 'સૌરાષ્ટ્રની સુંદરતાની એક ઝલક' },
    
    // Facts Section
    'facts.tag': { en: 'Cultural Knowledge', hi: 'सांस्कृतिक ज्ञान', gu: 'સાંસ્કૃતિક જ્ઞાન' },
    'facts.title': { en: 'Did You Know?', hi: 'क्या आप जानते हैं?', gu: 'શું તમે જાણો છો?' },
    'facts.subtitle': { en: 'Interesting facts about Saurashtra\'s culture & heritage', hi: 'सौराष्ट्र की संस्कृति और विरासत के बारे में रोचक तथ्य', gu: 'સૌરાષ્ટ્રની સંસ્કૃતિ અને વારસા વિશે રસપ્રદ તથ્યો' },
    'facts.showRandom': { en: 'Show Random Fact', hi: 'यादृच्छिक तथ्य दिखाएं', gu: 'રેન્ડમ તથ્ય બતાવો' },
    
    // Guide Section
    'guide.tag': { en: 'Travel Guide', hi: 'यात्रा गाइड', gu: 'મુસાફરી માર્ગદર્શિકા' },
    'guide.title': { en: 'Smart Tourist Guide', hi: 'स्मार्ट पर्यटक गाइड', gu: 'સ્માર્ટ પર્યટક માર્ગદર્શિકા' },
    'guide.subtitle': { en: 'Everything you need to plan your perfect trip', hi: 'अपनी परफेक्ट यात्रा की योजना बनाने के लिए आपको जो कुछ भी चाहिए', gu: 'તમારી સંપૂર્ણ મુસાફરીની યોજના બનાવવા માટે જરૂરી બધું' },
    'guide.howToReach': { en: 'How to Reach', hi: 'कैसे पहुंचें', gu: 'કેવી રીતે પહોંચવું' },
    'guide.bestTime': { en: 'Best Time to Visit', hi: 'घूमने का सबसे अच्छा समय', gu: 'મુલાકાત લેવાનો શ્રેષ્ઠ સમય' },
    'guide.food': { en: 'Must-Try Food', hi: 'जरूर आजमाएं खाना', gu: 'અવશ્ય ખાવાનું' },
    'guide.tips': { en: 'Travel Tips', hi: 'यात्रा सुझाव', gu: 'મુસાફરી ટિપ્સ' },
    'guide.festivals': { en: 'Festivals to Experience', hi: 'अनुभव करने योग्य त्योहार', gu: 'અનુભવવા યોગ્ય તહેવારો' },
    'guide.shopping': { en: 'Local Shopping', hi: 'स्थानीय खरीदारी', gu: 'સ્થાનિક ખરીદી' },
    
    // Education Section
    'education.tag': { en: 'Learn & Research', hi: 'सीखें और शोध करें', gu: 'શીખો અને સંશોધન કરો' },
    'education.title': { en: 'Educational Hub', hi: 'शैक्षिक केंद्र', gu: 'શૈક્ષણિક કેન્દ્ર' },
    'education.subtitle': { en: 'For students, teachers and researchers', hi: 'छात्रों, शिक्षकों और शोधकर्ताओं के लिए', gu: 'વિદ્યાર્થીઓ, શિક્ષકો અને સંશોધકો માટે' },
    
    // Chatbot Section
    'chatbot.tag': { en: 'AI Assistant', hi: 'AI सहायक', gu: 'AI સહાયક' },
    'chatbot.title': { en: 'Tourism Chatbot', hi: 'पर्यटन चैटबॉट', gu: 'પર્યટન ચેટબોટ' },
    'chatbot.subtitle': { en: 'Ask anything about Saurashtra\'s heritage and tourism', hi: 'सौराष्ट्र की विरासत और पर्यटन के बारे में कुछ भी पूछें', gu: 'સૌરાષ્ટ્રના વારસા અને પર્યટન વિશે કંઈપણ પૂછો' },
    
    // Contact Section
    'contact.tag': { en: '📬 Get in Touch', hi: '📬 संपर्क करें', gu: '📬 સંપર્ક કરો' },
    'contact.title': { en: 'Contact & Feedback', hi: 'संपर्क और प्रतिक्रिया', gu: 'સંપર્ક અને પ્રતિસાદ' },
    'contact.subtitle': { en: 'We\'d love to hear from you!', hi: 'हम आपसे सुनना पसंद करेंगे!', gu: 'અમે તમારી પાસેથી સાંભળવા માંગીએ છીએ!' }
};

// Language names for dropdown
const langNames = {
    en: 'English',
    hi: 'हिंदी',
    gu: 'ગુજરાતી'
};

// Get translation
function t(key) {
    return translations[key] ? translations[key][currentLang] : key;
}

// Change language
function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    translatePage();
    updateLangUI();
}

// Translate all elements on page
function translatePage() {
    // Translate text content
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        el.textContent = t(key);
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-placeholder');
        el.placeholder = t(key);
    });
}

// Update language dropdown UI
function updateLangUI() {
    const btn = document.getElementById('langBtn');
    if (btn) btn.textContent = langNames[currentLang];
    
    // Update checkmarks
    document.querySelectorAll('.lang-check').forEach(el => {
        el.style.display = 'none';
    });
    const activeCheck = document.getElementById(`check-${currentLang}`);
    if (activeCheck) activeCheck.style.display = 'inline';
}

// Toggle dropdown
function toggleLangDropdown() {
    const menu = document.getElementById('langMenu');
    if (menu) menu.classList.toggle('show');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
        const menu = document.getElementById('langMenu');
        if (menu) menu.classList.remove('show');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    translatePage();
    updateLangUI();
});

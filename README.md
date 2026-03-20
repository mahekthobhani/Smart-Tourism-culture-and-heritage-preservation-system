# 🎨 Heritage Bharat - Frontend

This folder contains all the **frontend files** for the Heritage Bharat platform - a Smart Tourism & Cultural Heritage Preservation System for Saurashtra, Gujarat.

## 📁 Frontend Structure

```
frontend/
├── 📄 index.html              # Main homepage
├── 📄 place-details.html      # Individual place details page
├── 📄 travel-planner.html     # Travel planning interface
├── 📄 education-details.html  # Educational content page
├── 📄 admin.html              # Admin dashboard
├── 🎨 style.css               # Main stylesheet
├── ⚡ script.js               # Main frontend JavaScript
├── 🌐 lang.js                 # Multi-language support
├── 📊 details-data.js         # Heritage places data
├── 🎓 education-data.js       # Educational content data
├── 🧳 travel-data.js          # Travel planning data
└── 📁 lang/
    └── en.json                # English translations
```

## 🌟 Frontend Features

### 🏛️ **Heritage Places Explorer**
- Interactive place cards with detailed information
- Category-wise filtering (Temples, Forts, Museums, Wildlife)
- Search functionality with advanced filters
- High-quality images and descriptions

### 🗺️ **Smart Travel Planner**
- Route planning with cost estimation
- Multiple transport options (Car, Bus, Train)
- Distance and time calculations
- Budget-friendly suggestions

### 🎥 **Virtual Tours**
- YouTube-integrated virtual experiences
- Modal-based video player
- 4 immersive video tours of major attractions

### 🤖 **AI-Powered Chatbot**
- Context-aware conversational AI
- Heritage place recommendations
- Travel assistance and information

### 🌐 **Multi-Language Support**
- English (Primary)
- Hindi (हिंदी)
- Gujarati (ગુજરાતી)
- Dynamic language switching

### 📸 **Photo Gallery**
- Curated heritage photographs
- Lightbox viewer with full-screen experience
- Organized by location and category

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

## 🚀 How to Run Frontend

### **Option 1: Simple File Opening**
1. Open `index.html` in any modern web browser
2. All features will work except backend-dependent ones

### **Option 2: Local Server (Recommended)**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

### **Option 3: With Backend**
1. Run the backend server first
2. Open `http://localhost:3000` in browser

## 📱 Mobile Responsiveness

The frontend is fully responsive with:
- Mobile-first design approach
- Flexible grid layouts for all screen sizes
- Touch-friendly interactive elements
- Optimized images for faster loading

## 🎯 Key Frontend Files

### **HTML Pages**
- `index.html` - Main single-page application
- `place-details.html` - Detailed place information
- `travel-planner.html` - Interactive travel calculator
- `education-details.html` - Educational content
- `admin.html` - Admin interface

### **JavaScript Files**
- `script.js` - Main application logic
- `lang.js` - Language switching functionality
- `details-data.js` - Heritage places database
- `education-data.js` - Educational content
- `travel-data.js` - Travel routes and costs

### **Styling**
- `style.css` - Complete styling for all pages
- Responsive design with CSS Grid and Flexbox
- Custom CSS variables for consistent theming

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🔧 Customization

### **Adding New Heritage Places**
Edit `details-data.js` and add new place objects:

```javascript
{
    id: 26,
    name: "New Heritage Site",
    district: "District Name",
    category: "Category",
    image: "image-url",
    description: "Description"
}
```

### **Adding New Languages**
1. Create new language file in `lang/` folder
2. Update `lang.js` with new language mappings

### **Customizing Colors**
Edit CSS variables in `style.css`:

```css
:root {
    --saffron: #FF6B35;
    --teal: #0F4C75;
    --golden: #FFB347;
}
```

## 📊 Performance Features

- **Lazy loading** for images
- **Efficient DOM manipulation**
- **Optimized search algorithms**
- **Responsive image sizing**
- **Minimal external dependencies**

## 🎨 Design System

### **Color Palette**
- **Saffron Orange** (#FF6B35) - Primary brand color
- **Deep Teal** (#0F4C75) - Secondary color
- **Golden Yellow** (#FFB347) - Accent color
- **Heritage Dark** (#1A1A2E) - Text color

### **Typography**
- **Headings**: Playfair Display (Serif)
- **Body Text**: Poppins (Sans-serif)
- **UI Elements**: Poppins (Sans-serif)

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large Desktop */ }
```

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with alt text
- Clean URL structure
- Fast loading times

---

**Made with ❤️ for preserving India's rich cultural heritage**

*Frontend of Heritage Bharat - Where History Meets Technology*
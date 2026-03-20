# 🏛️ Heritage Bharat - Saurashtra Cultural Heritage Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18+-blue.svg)](https://expressjs.com/)

**Heritage Bharat** is a comprehensive Smart Tourism & Cultural Heritage Preservation System designed specifically for the Saurashtra region of Gujarat, India. This platform combines modern web technology with rich cultural heritage to provide an immersive digital experience for tourists, researchers, and heritage enthusiasts.

## 🌟 Features

### 🏛️ **Heritage Places Explorer**
- **25+ Heritage Sites** across 11 districts of Saurashtra
- Interactive place cards with detailed information
- High-quality images and virtual tours
- Category-wise filtering (Temples, Forts, Museums, Wildlife, etc.)
- GPS integration for easy navigation

### 🗺️ **Smart Travel Planner**
- Intelligent route planning with cost estimation
- Multiple transport options (Car, Bus, Train)
- Distance and time calculations
- Budget-friendly travel suggestions
- Real-time pricing information

### 🎥 **Virtual Tours**
- YouTube-integrated virtual experiences
- 4 immersive video tours of major attractions
- Modal-based video player with autoplay
- High-quality thumbnails and descriptions

### 🤖 **AI-Powered Chatbot**
- Context-aware conversational AI
- Heritage place recommendations
- Travel assistance and information
- Multi-language support preparation

### 🌐 **Multi-Language Support**
- **English** (Primary)
- **Hindi** (हिंदी)
- **Gujarati** (ગુજરાતી)
- Dynamic language switching
- Localized content for all sections

### 📚 **Educational Hub**
- Digital preservation techniques
- Cultural heritage education
- Interactive learning modules
- Technology in heritage conservation

### 📸 **Photo Gallery**
- Curated collection of heritage photographs
- Lightbox viewer with full-screen experience
- High-resolution images from across Saurashtra
- Organized by location and category

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (Node Package Manager)
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/heritage-bharat.git
   cd heritage-bharat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Initialize the database**
   ```bash
   npm run init-db
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

### Production Deployment

1. **Start the production server**
   ```bash
   npm start
   ```

2. **Using PowerShell (Windows)**
   ```powershell
   .\start-server.ps1
   ```

## 📁 Project Structure

```
heritage-bharat/
├── 📄 index.html              # Main homepage
├── 📄 place-details.html      # Individual place details
├── 📄 travel-planner.html     # Travel planning interface
├── 📄 education-details.html  # Educational content
├── 📄 admin.html             # Admin dashboard
├── 🎨 style.css              # Main stylesheet
├── ⚡ script.js              # Frontend JavaScript
├── 🗄️ server.js              # Express.js server
├── 🗃️ database.js            # Database connection
├── 🔧 init_db.js             # Database initialization
├── 📊 details-data.js        # Heritage places data
├── 🎓 education-data.js      # Educational content data
├── 🧳 travel-data.js         # Travel planning data
├── 🌐 lang.js                # Multi-language support
├── 📦 package.json           # Project dependencies
├── 🗂️ lang/                  # Language files
│   └── en.json               # English translations
└── 📚 docs/                  # Documentation files
```

## 🏛️ Heritage Places Covered

### **Districts & Major Attractions**

| District | Key Places | Category |
|----------|------------|----------|
| **Gir Somnath** | Somnath Temple | Temple |
| **Junagadh** | Gir National Park, Uparkot Fort | Wildlife, Fort |
| **Dwarka** | Dwarkadhish Temple, Bet Dwarka | Temple, Island |
| **Jamnagar** | Marine National Park, Lakhota Palace | Wildlife, Museum |
| **Porbandar** | Gandhi Smriti, Porbandar Beach | Museum, Beach |
| **Rajkot** | Watson Museum, Jubilee Garden | Museum, Garden |
| **Morbi** | Mani Mandir Palace, Pottery Hub | Palace, Culture |
| **Surendranagar** | Wadhwan Stepwell | Architecture |
| **Bhavnagar** | Palitana Jain Temples, Velavadar | Temple, Wildlife |
| **Amreli** | Khodiyar Temple | Temple |
| **Botad** | Tarnetar Fair Grounds | Cultural |

## 🛠️ Technology Stack

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **SQLite3** - Database
- **CORS** - Cross-origin resource sharing

### **APIs & Integrations**
- **YouTube API** - Virtual tour videos
- **Google Maps** - Location services
- **Unsplash** - High-quality images

## 🔧 Configuration

### **Database Setup**
The platform uses SQLite3 for data storage. Run the initialization script:

```bash
node init_db.js
```

This creates:
- `heritage_places` table with all 25+ locations
- Proper indexing for fast searches
- Sample data for testing

### **Environment Variables**
Create a `.env` file for configuration:

```env
PORT=3000
NODE_ENV=development
DB_PATH=./heritage.db
```

## 🎯 API Endpoints

### **Heritage Places**
- `GET /api/places` - Get all heritage places
- `GET /api/places/:id` - Get specific place details
- `GET /api/places/district/:district` - Get places by district
- `GET /api/places/category/:category` - Get places by category

### **Search**
- `GET /api/search?q=query` - Search places by name/description
- `GET /api/search/advanced` - Advanced search with filters

### **Travel Planning**
- `POST /api/travel/route` - Calculate travel routes
- `GET /api/travel/costs` - Get travel cost estimates

## 🎨 Customization

### **Adding New Heritage Places**

1. **Update the data file** (`details-data.js`):
```javascript
{
    id: 26,
    name: "New Heritage Site",
    district: "District Name",
    category: "Category",
    mainImage: "image-url",
    description: "Detailed description",
    // ... other properties
}
```

2. **Add to database** (`init_db.js`):
```javascript
// Add new place to the places array
```

3. **Update search index** (`script.js`):
```javascript
// Add to COMPREHENSIVE_SEARCH_INDEX
```

### **Adding New Languages**

1. **Create language file** (`lang/new-lang.json`):
```json
{
    "hero.title": "Title in new language",
    "hero.subtitle": "Subtitle in new language"
}
```

2. **Update language support** (`lang.js`):
```javascript
'hero.title': { 
    en: 'English', 
    hi: 'Hindi', 
    gu: 'Gujarati',
    newLang: 'New Language'
}
```

### **Customizing Virtual Tours**

Replace YouTube video IDs in `index.html`:
```html
<div class="tour-thumbnail" onclick="openVideo('https://www.youtube.com/embed/YOUR_VIDEO_ID')">
    <img src="https://img.youtube.com/vi/YOUR_VIDEO_ID/hqdefault.jpg" />
</div>
```

## 🧪 Testing

### **Manual Testing**
1. Test all navigation links
2. Verify search functionality
3. Check virtual tour videos
4. Test travel planner calculations
5. Validate multi-language switching

### **Browser Compatibility**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📱 Mobile Responsiveness

The platform is fully responsive with:
- **Mobile-first design** approach
- **Flexible grid layouts** for all screen sizes
- **Touch-friendly** interactive elements
- **Optimized images** for faster loading
- **Hamburger menu** for mobile navigation

## 🚀 Performance Optimization

- **Lazy loading** for images
- **Minified CSS/JS** for production
- **Efficient database queries** with indexing
- **Caching strategies** for static content
- **Optimized image formats** and sizes

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Contribution Guidelines**
- Follow existing code style and conventions
- Add comments for complex functionality
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Heritage Bharat Development Team**
- Frontend Development
- Backend Development  
- Database Design
- UI/UX Design
- Content Curation

## 🙏 Acknowledgments

- **Gujarat Tourism Department** for heritage information
- **Archaeological Survey of India** for historical data
- **Local communities** for cultural insights
- **Open source community** for tools and libraries

## 📞 Support

For support and queries:
- 📧 Email: support@heritagebharat.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/heritage-bharat/issues)
- 📖 Documentation: [Wiki](https://github.com/your-username/heritage-bharat/wiki)

## 🔮 Future Roadmap

- [ ] **Mobile App** development (React Native)
- [ ] **AR/VR Integration** for immersive experiences
- [ ] **Offline Mode** for remote areas
- [ ] **User Reviews** and ratings system
- [ ] **Social Media Integration**
- [ ] **Advanced Analytics** dashboard
- [ ] **Multi-state Expansion** beyond Gujarat

---

**Made with ❤️ for preserving India's rich cultural heritage**

*Discover the Soul of Saurashtra - Where History Meets Technology*
# Republic - Weapon Analysis Dashboard

A military-style weapon analysis dashboard with dark theme, inspired by defense intelligence systems.

## Features

### 🎯 Dashboard Components
- **Header**: Military-style header with Indian flag and title
- **Statistics Cards**: Key metrics display (Rating, Weapons, Cost, Models)
- **Interactive Filters**: Weapon type and brand filtering
- **Central Weapon Display**: 3D weapon visualization with rotation
- **Multiple Charts**: Bar charts, scatter plots, donut charts
- **Side Panels**: Detailed analytics and top weapons list

### 📊 Charts & Analytics
- **Weapon Type Distribution**: Bar chart showing model counts
- **Cost vs Rating**: Scatter plot analysis
- **Caliber Distribution**: Donut chart with legend
- **Stock Status**: Visual stock indicators
- **Brand Analysis**: Horizontal bar chart
- **Mini Charts**: Trend indicators for different weapon types

### 🎨 Design Features
- **Dark Military Theme**: Black/dark gray background
- **Accent Colors**: Green (#00ff88) and Orange (#ff9500)
- **Glowing Effects**: Subtle glow on key elements
- **Responsive Layout**: Works on all screen sizes
- **Interactive Elements**: Clickable weapon rotation
- **Smooth Animations**: Loading and hover effects

### 🔧 Technical Stack
- **HTML5**: Semantic structure
- **CSS3**: Advanced styling with gradients and effects
- **JavaScript**: Interactive functionality
- **Chart.js**: Professional charts and graphs
- **Bootstrap 5**: Responsive grid system

## File Structure
```
republic/
├── index.html          # Main dashboard page
├── style.css           # Military-themed styling
├── script.js           # Interactive functionality
└── README.md           # Documentation
```

## Usage

1. Open `index.html` in a web browser
2. Use the left sidebar filters to filter weapons by type and brand
3. Click on the central weapon image to rotate it
4. Explore different charts and analytics panels
5. View top expensive weapons and stock status

## Customization

### Colors
- Primary: `#00ff88` (Green)
- Secondary: `#ff9500` (Orange)
- Background: `#0a0a0a` (Dark)
- Borders: `#333333` (Gray)

### Data
Modify the `weaponData` array in `script.js` to add/update weapon information:
```javascript
const weaponData = [
  { name: 'Weapon Name', type: 'Type', brand: 'Brand', cost: 75000, rating: 4.3, stock: 'In Stock' }
];
```

## Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License
Created for educational and demonstration purposes.

---
**Republic Dashboard** - Military-Grade Weapon Intelligence System
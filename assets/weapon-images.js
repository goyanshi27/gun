// Weapon Images Configuration - Ready for your photos
const WEAPON_IMAGE_URLS = {
  'Shotgun': './assets/shotgun.jpg',    // Your green holographic shotgun image
  'Pistol': './assets/pistol.jpg',      // Your green holographic pistol image
  'Sniper': './assets/sniper.jpg',      // Your green holographic sniper image
  'Rifle': './assets/rifle.jpg'         // Your green holographic rifle image
};

// Temporary online images (will be replaced when you add your photos)
const FALLBACK_IMAGES = {
  'Shotgun': 'https://images.unsplash.com/photo-1544717684-6e5e4c6b7e3b?w=600&h=400&fit=crop&crop=center',
  'Pistol': 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600&h=400&fit=crop&crop=center',
  'Sniper': 'https://images.unsplash.com/photo-1544717684-6e5e4c6b7e3b?w=600&h=400&fit=crop&crop=center',
  'Rifle': 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600&h=400&fit=crop&crop=center'
};

// Function to get weapon image with smart fallback
function getWeaponImage(weaponType) {
  console.log('Getting image for:', weaponType);
  
  // Try local image first, fallback to online if not found
  const localPath = WEAPON_IMAGE_URLS[weaponType];
  const fallbackPath = FALLBACK_IMAGES[weaponType];
  
  // Test if local image exists
  const img = new Image();
  img.src = localPath;
  
  return new Promise((resolve) => {
    img.onload = () => {
      console.log(`✅ Local ${weaponType} image found:`, localPath);
      resolve(localPath);
    };
    img.onerror = () => {
      console.log(`⚠️ Local ${weaponType} image not found, using fallback:`, fallbackPath);
      resolve(fallbackPath);
    };
  });
}

// Synchronous version for immediate use
function getWeaponImageSync(weaponType) {
  return WEAPON_IMAGE_URLS[weaponType];
}

// Test function to check if your images are properly loaded
function testImageLoad(weaponType) {
  const img = new Image();
  const imagePath = WEAPON_IMAGE_URLS[weaponType];
  
  img.onload = function() {
    console.log(`✅ ${weaponType} image loaded successfully:`, imagePath);
    console.log(`Image dimensions: ${this.naturalWidth}x${this.naturalHeight}`);
  };
  
  img.onerror = function() {
    console.log(`❌ ${weaponType} image failed to load:`, imagePath);
    console.log('Make sure you have saved your image as:', imagePath);
  };
  
  img.src = imagePath;
}
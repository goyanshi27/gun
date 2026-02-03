// Military Dashboard Colors
const colors = {
  primary: '#00ff88',
  secondary: '#ff9500',
  accent: '#ffffff',
  dark: '#1a1a1a',
  darker: '#0a0a0a',
  border: '#333333'
};

let weaponTypeChart, caliberChart, scatterChart, brandChart;
let rifleChart, shotgunChart, sniperChart;

// Sample weapon data
const weaponData = [
  { name: 'Pistol M157', type: 'Pistol', brand: 'G&G', cost: 75000, rating: 4.3, stock: 'In Stock' },
  { name: 'Rifle AK47', type: 'Rifle', brand: 'Tokyo Marui', cost: 120000, rating: 4.8, stock: 'In Stock' },
  { name: 'Sniper M4A4', type: 'Sniper', brand: 'CYMA', cost: 180000, rating: 4.9, stock: 'Limited' },
  { name: 'Shotgun M83', type: 'Shotgun', brand: 'Novritsch', cost: 165000, rating: 4.2, stock: 'In Stock' },
  { name: 'Rifle M416', type: 'Rifle', brand: 'VFC', cost: 172000, rating: 4.7, stock: 'In Stock' },
  { name: 'Pistol P158', type: 'Pistol', brand: 'Lancer Tactical', cost: 153000, rating: 4.1, stock: 'Out of Stock' },
  { name: 'Sniper M107', type: 'Sniper', brand: 'Umarex', cost: 161000, rating: 4.6, stock: 'Limited' }
];

// Weapon images mapping - now using the configuration file
const weaponImages = WEAPON_IMAGE_URLS;

// Initialize all charts
function initCharts() {
  initWeaponTypeChart();
  initCaliberChart();
  initScatterChart();
  initBrandChart();
  initMiniCharts();
}

// Weapon Type Bar Chart
function initWeaponTypeChart() {
  const ctx = document.getElementById('weaponTypeChart');
  if (!ctx) return;

  weaponTypeChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Pistol', 'Rifle', 'Shotgun', 'Sniper'],
      datasets: [{
        data: [34, 24, 18, 10],
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: {
            color: colors.accent,
            font: { size: 10 }
          },
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: colors.accent,
            font: { size: 10 }
          },
          grid: {
            color: colors.border,
            lineWidth: 0.5
          }
        }
      }
    }
  });
}

// Caliber Donut Chart
function initCaliberChart() {
  const ctx = document.getElementById('caliberChart');
  if (!ctx) return;

  caliberChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['9mm', '.45', '5.56'],
      datasets: [{
        data: [56.7, 12.8, 30.4],
        backgroundColor: [colors.secondary, colors.primary, '#666666'],
        borderColor: colors.darker,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      cutout: '60%'
    }
  });
}

// Scatter Chart - Cost vs Rating
function initScatterChart() {
  const ctx = document.getElementById('scatterChart');
  if (!ctx) return;

  const scatterData = weaponData.map(weapon => ({
    x: weapon.rating,
    y: weapon.cost / 1000 // Convert to thousands
  }));

  scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Weapons',
        data: scatterData,
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        pointRadius: 6,
        pointHoverRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Customer Rating',
            color: colors.accent,
            font: { size: 10 }
          },
          ticks: {
            color: colors.accent,
            font: { size: 10 }
          },
          grid: {
            color: colors.border,
            lineWidth: 0.5
          }
        },
        y: {
          title: {
            display: true,
            text: 'Cost (₹ Thousands)',
            color: colors.accent,
            font: { size: 10 }
          },
          ticks: {
            color: colors.accent,
            font: { size: 10 }
          },
          grid: {
            color: colors.border,
            lineWidth: 0.5
          }
        }
      }
    }
  });
}

// Brand Horizontal Bar Chart
function initBrandChart() {
  const ctx = document.getElementById('brandChart');
  if (!ctx) return;

  brandChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['G&G', 'Tokyo Marui', 'CYMA', 'Novritsch', 'VFC', 'Lancer Tactical', 'Umarex'],
      datasets: [{
        data: [31, 21, 15, 9, 6, 4, 3],
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            color: colors.accent,
            font: { size: 9 }
          },
          grid: {
            color: colors.border,
            lineWidth: 0.5
          }
        },
        y: {
          ticks: {
            color: colors.accent,
            font: { size: 9 }
          },
          grid: {
            display: false
          }
        }
      }
    }
  });
}

// Mini Charts for Bottom Row - Fixed containment
function initMiniCharts() {
  // Rifle Mini Chart
  const rifleCtx = document.getElementById('rifleChart');
  if (rifleCtx) {
    rifleChart = new Chart(rifleCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          data: [20, 25, 22, 28, 32, 30],
          borderColor: colors.primary,
          backgroundColor: 'rgba(0, 255, 136, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5
          }
        },
        plugins: { 
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: { 
            display: true,
            ticks: { 
              color: colors.accent, 
              font: { size: 9 },
              maxTicksLimit: 6
            },
            grid: { display: false }
          },
          y: { 
            display: true,
            ticks: { 
              color: colors.accent, 
              font: { size: 9 },
              maxTicksLimit: 4
            },
            grid: { 
              color: colors.border, 
              lineWidth: 0.5 
            }
          }
        }
      }
    });
  }

  // Shotgun Mini Chart
  const shotgunCtx = document.getElementById('shotgunChart');
  if (shotgunCtx) {
    shotgunChart = new Chart(shotgunCtx, {
      type: 'bar',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
          data: [15, 18, 12, 20],
          backgroundColor: colors.secondary,
          borderColor: colors.secondary,
          borderWidth: 1,
          borderRadius: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5
          }
        },
        plugins: { 
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: { 
            display: true,
            ticks: { 
              color: colors.accent, 
              font: { size: 9 }
            },
            grid: { display: false }
          },
          y: { 
            display: true,
            beginAtZero: true,
            ticks: { 
              color: colors.accent, 
              font: { size: 9 },
              maxTicksLimit: 4
            },
            grid: { 
              color: colors.border, 
              lineWidth: 0.5 
            }
          }
        }
      }
    });
  }

  // Sniper Mini Chart
  const sniperCtx = document.getElementById('sniperChart');
  if (sniperCtx) {
    sniperChart = new Chart(sniperCtx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [70, 30],
          backgroundColor: [colors.primary, colors.border],
          borderWidth: 0,
          hoverOffset: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
          }
        },
        plugins: { 
          legend: { display: false },
          tooltip: { enabled: false }
        },
        cutout: '65%'
      }
    });
  }
}

// Filter functionality
function setupFilters() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      // If this is a weapon type checkbox, show that weapon immediately
      if (['pistol', 'rifle', 'shotgun', 'sniper'].includes(this.id)) {
        showSpecificWeapon(this.id);
      }
      applyFilters();
    });
  });
}

function showSpecificWeapon(weaponTypeId) {
  const weaponTypeMap = {
    'pistol': 'Pistol',
    'rifle': 'Rifle', 
    'shotgun': 'Shotgun',
    'sniper': 'Sniper'
  };
  
  const weaponType = weaponTypeMap[weaponTypeId];
  if (!weaponType) return;
  
  // Find a weapon of this type
  const weaponOfType = weaponData.find(weapon => weapon.type === weaponType);
  if (weaponOfType) {
    updateWeaponDisplay([weaponOfType]);
  }
}

function applyFilters() {
  // Get selected filters
  const selectedWeaponTypes = [];
  const selectedBrands = [];

  // Weapon types
  if (document.getElementById('pistol').checked) selectedWeaponTypes.push('Pistol');
  if (document.getElementById('rifle').checked) selectedWeaponTypes.push('Rifle');
  if (document.getElementById('shotgun').checked) selectedWeaponTypes.push('Shotgun');
  if (document.getElementById('sniper').checked) selectedWeaponTypes.push('Sniper');

  // Brands
  if (document.getElementById('gng').checked) selectedBrands.push('G&G');
  if (document.getElementById('tokyo').checked) selectedBrands.push('Tokyo Marui');
  if (document.getElementById('cyma').checked) selectedBrands.push('CYMA');
  if (document.getElementById('novritsch').checked) selectedBrands.push('Novritsch');
  if (document.getElementById('vfc').checked) selectedBrands.push('VFC');
  if (document.getElementById('lancer').checked) selectedBrands.push('Lancer Tactical');
  if (document.getElementById('umarex').checked) selectedBrands.push('Umarex');

  // Filter data and update charts
  const filteredData = weaponData.filter(weapon => {
    const typeMatch = selectedWeaponTypes.length === 0 || selectedWeaponTypes.includes(weapon.type);
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(weapon.brand);
    return typeMatch && brandMatch;
  });

  updateChartsWithFilteredData(filteredData);
}

function updateChartsWithFilteredData(filteredData) {
  // Update weapon type counts
  const typeCounts = { 'Pistol': 0, 'Rifle': 0, 'Shotgun': 0, 'Sniper': 0 };
  filteredData.forEach(weapon => {
    if (typeCounts[weapon.type] !== undefined) {
      typeCounts[weapon.type]++;
    }
  });

  if (weaponTypeChart) {
    weaponTypeChart.data.datasets[0].data = [
      typeCounts['Pistol'],
      typeCounts['Rifle'],
      typeCounts['Shotgun'],
      typeCounts['Sniper']
    ];
    weaponTypeChart.update();
  }

  // Update scatter chart
  if (scatterChart && filteredData.length > 0) {
    const scatterData = filteredData.map(weapon => ({
      x: weapon.rating,
      y: weapon.cost / 1000
    }));
    scatterChart.data.datasets[0].data = scatterData;
    scatterChart.update();
  }

  // Update weapon display based on selected filters
  updateWeaponDisplay(filteredData);
}

function updateWeaponDisplay(filteredData) {
  const weaponImage = document.querySelector('.weapon-image');
  const weaponTitle = document.querySelector('.weapon-title');
  const weaponCost = document.querySelector('.weapon-cost');
  const weaponRating = document.querySelector('.weapon-rating');
  const weaponAvailability = document.querySelector('.weapon-availability');
  
  if (filteredData.length === 0) {
    // No weapons match filters
    if (weaponTitle) weaponTitle.textContent = 'No Weapon Selected';
    if (weaponCost) weaponCost.textContent = 'Cost: ₹0L';
    if (weaponRating) weaponRating.textContent = 'Rating: ★ 0';
    if (weaponAvailability) weaponAvailability.textContent = 'Availability: None';
    return;
  }

  // Get the first weapon from filtered data
  const selectedWeapon = filteredData[0];
  console.log('Updating display for weapon:', selectedWeapon);
  
  // Update weapon image with smart loading
  if (weaponImage && selectedWeapon.type) {
    const localImagePath = getWeaponImageSync(selectedWeapon.type);
    const fallbackImagePath = FALLBACK_IMAGES[selectedWeapon.type];
    
    // Try to load local image first
    const testImg = new Image();
    
    testImg.onload = function() {
      console.log('✅ Your custom image loaded:', localImagePath);
      weaponImage.src = localImagePath;
      weaponImage.alt = selectedWeapon.type;
      applyWeaponScaling(weaponImage, selectedWeapon.type);
    };
    
    testImg.onerror = function() {
      console.log('⚠️ Custom image not found, using placeholder:', fallbackImagePath);
      weaponImage.src = fallbackImagePath;
      weaponImage.alt = selectedWeapon.type;
      applyWeaponScaling(weaponImage, selectedWeapon.type);
    };
    
    testImg.src = localImagePath;
  }
  
  // Update weapon info in the panel
  if (weaponTitle) {
    weaponTitle.textContent = selectedWeapon.name;
  }
  
  if (weaponCost) {
    weaponCost.textContent = `Cost: ₹${(selectedWeapon.cost / 100000).toFixed(1)}L`;
  }
  
  if (weaponRating) {
    weaponRating.textContent = `Rating: ★ ${selectedWeapon.rating}`;
  }
  
  if (weaponAvailability) {
    weaponAvailability.textContent = `Availability: ${selectedWeapon.stock}`;
  }
}

function applyWeaponScaling(imageElement, weaponType) {
  // Remove any existing scaling classes
  imageElement.className = imageElement.className.replace(/weapon-scale-\w+/g, '');
  
  // Apply specific scaling for each weapon type
  switch(weaponType) {
    case 'Shotgun':
      imageElement.style.transform = 'scale(0.9)';
      break;
    case 'Pistol':
      imageElement.style.transform = 'scale(0.8)';
      break;
    case 'Sniper':
      imageElement.style.transform = 'scale(0.85)';
      break;
    case 'Rifle':
      imageElement.style.transform = 'scale(0.9)';
      break;
    default:
      imageElement.style.transform = 'scale(1)';
  }
}

function getSelectedWeaponType() {
  // Get the first selected weapon type for image display
  if (document.getElementById('pistol').checked) return 'Pistol';
  if (document.getElementById('rifle').checked) return 'Rifle';
  if (document.getElementById('shotgun').checked) return 'Shotgun';
  if (document.getElementById('sniper').checked) return 'Sniper';
  return null;
}

// Weapon rotation and type cycling
function setupWeaponRotation() {
  const weaponImage = document.querySelector('.weapon-image');
  if (weaponImage) {
    let rotation = 0;
    let currentTypeIndex = 0;
    const weaponTypes = ['Rifle', 'Pistol', 'Shotgun', 'Sniper'];
    
    weaponImage.addEventListener('click', function() {
      // Rotate the image
      rotation += 90;
      this.style.transform = `rotate(${rotation}deg)`;
      
      // Cycle through weapon types
      currentTypeIndex = (currentTypeIndex + 1) % weaponTypes.length;
      const nextWeaponType = weaponTypes[currentTypeIndex];
      
      // Find and display weapon of next type
      const weaponOfType = weaponData.find(weapon => weapon.type === nextWeaponType);
      if (weaponOfType) {
        updateWeaponDisplay([weaponOfType]);
      }
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Republic Dashboard...');
  
  // Test image loading first
  console.log('Testing image loading...');
  testImageLoad('Shotgun');
  testImageLoad('Pistol');
  testImageLoad('Rifle');
  testImageLoad('Sniper');
  
  // Initialize charts
  initCharts();
  
  // Setup filters
  setupFilters();
  
  // Setup weapon rotation
  setupWeaponRotation();
  
  // Apply initial filters - show shotgun by default
  setTimeout(() => {
    // Force show shotgun first
    const shotgunWeapon = weaponData.find(weapon => weapon.type === 'Shotgun');
    if (shotgunWeapon) {
      console.log('Showing default shotgun weapon:', shotgunWeapon);
      updateWeaponDisplay([shotgunWeapon]);
    }
    applyFilters();
  }, 500);
  
  console.log('Republic Dashboard initialized successfully!');
});

// Add some animation effects
window.addEventListener('load', function() {
  // Animate elements on load
  const elements = document.querySelectorAll('.stat-card, .chart-section, .filter-section, .weapon-display');
  elements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      element.style.transition = 'all 0.6s ease-out';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 100);
  });
});
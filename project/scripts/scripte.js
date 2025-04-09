document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Welcome Message Logic
// ----------------------
function showWelcomeMessage() {
    const welcome = document.createElement('div');
    welcome.textContent = getGreeting();
    welcome.className = 'welcome-banner';
    document.body.prepend(welcome);
  }
  
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      return '🌅 Good morning and welcome to your solution of cleaning🫧';
    } else if (hour < 18) {
      return '🌞 Good afternoon! Hope you’re having a great day!';
    } else {
      return '🌙 Good evening and thanks for visiting!';
    }
  }
  
  // ----------------------
  // Card Data Display
  // ----------------------
  const cardData = [
    { title: 'Office cleaning', desc: 'Satisfied customer ✅', img: 'image/experience2.png' },
    { title: 'Garbage collection', desc: 'Satisfied customer ✅', img: 'image/experience1.png' },
    { title: 'Recycling', desc: 'Satisfied customer ✅', img: 'image/experience3.png' }
  ];
  
  function populateCards() {
    const cardSection = document.querySelector('.cards-grid');
    if (!cardSection) return;
  
    cardSection.innerHTML = ''; // Clear content before injecting
  
    cardData.forEach(card => {
      const cardHTML = `
        <div class="card">
          <img src="${card.img}" alt="${card.title}" loading="lazy" />
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </div>
      `;
      cardSection.innerHTML += cardHTML;
    });
  }
  
  
  // ----------------------
  // Event Listeners
  // ----------------------
  document.addEventListener('DOMContentLoaded', () => {
    showWelcomeMessage();
    populateCards();
    loadTheme();
  
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('click', toggleTheme);
    }

    
  });
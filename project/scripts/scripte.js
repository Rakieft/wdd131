document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;
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
    { title: 'Card 1', desc: 'This is the first card', img: 'image/experience 2.png' },
    { title: 'Card 2', desc: 'This is the second card', img: 'image/experience 1.png' },
    { title: 'Card 3', desc: 'This is the third card', img: 'image/experience 3.png' }
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
  // Theme Toggle (stored in localStorage)
  // ----------------------
  function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    
    if (currentTheme === 'dark') {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
  
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
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
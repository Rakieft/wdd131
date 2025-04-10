// Set the current year and last modified date in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Show a welcome message at the top of the page
function showWelcomeMessage() {
  const welcome = document.createElement('div');
  welcome.textContent = getGreeting();
  welcome.className = 'welcome-banner';
  document.body.prepend(welcome);
}

// Return a greeting message based on the time of day
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return '🌅 Good morning and welcome to your solution of cleaning🫧';
  if (hour < 18) return '🌞 Good afternoon! Hope you’re having a great day!';
  return '🌙 Good evening and thanks for visiting!';
}

// Dummy card data (used only if you have a section to display services)
const cardData = [
  { title: 'Office cleaning', desc: 'Satisfied customer ✅', img: 'image/experience2.png' },
  { title: 'Garbage collection', desc: 'Satisfied customer ✅', img: 'image/experience1.png' },
  { title: 'Recycling', desc: 'Satisfied customer ✅', img: 'image/experience3.png' }
];

// Dynamically populate service cards (if .cards-grid section exists)
function populateCards() {
  const cardSection = document.querySelector('.cards-grid');
  if (!cardSection) return;

  cardSection.innerHTML = '';
  cardData.forEach(card => {
    cardSection.innerHTML += `
      <div class="card">
        <img src="${card.img}" alt="${card.title}" loading="lazy" />
        <h3>${card.title}</h3>
        <p>${card.desc}</p>
      </div>
    `;
  });
}

// Run this code when the page has fully loaded
document.addEventListener('DOMContentLoaded', () => {
  showWelcomeMessage();
  populateCards();

  // Initialize EmailJS with your public key
  emailjs.init("LPlQ6mTEaqauPp-P9");

  // Handle form submission
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs.sendForm("service_ye8qwrk", "template_ksgadah", this)
      .then(() => {
        document.getElementById("form-status").innerText = "✅ Message sent successfully!";
        this.reset(); // Clear form after success
      }, (error) => {
        document.getElementById("form-status").innerText = "❌ Failed to send message.";
        console.error("EmailJS Error:", error);
      });
  });
});
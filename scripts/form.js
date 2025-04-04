document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;



// Product Array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// Function to populate the select element with product options
function populateProductOptions() {
  const select = document.getElementById('product-name');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
}

// Call the function to populate the select element when the DOM is loaded
document.addEventListener('DOMContentLoaded', populateProductOptions);

// Function to increment the review counter
function incrementReviewCounter() {
  const reviewCount = localStorage.getItem('reviewCount');
  if (reviewCount) {
    localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
  } else {
    localStorage.setItem('reviewCount', 1);
  }
}

// Increment the counter when the review.html page loads
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.endsWith('review.html')) {
    incrementReviewCounter();
  }
});











  




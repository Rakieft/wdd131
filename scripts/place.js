    // Set the current year and last modified date in the footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

  // Function to fetch weather data from OpenWeatherMap API
  function fetchWeather() {
    const apiKey = '9f26309485957c2bd9641a631b5817c8'; 
    const city = 'Haiti'; // Replace with your desired city name
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather Data:', data);

            // Update HTML elements with weather information
            let temperatureElement = document.getElementById('temperature');
            let conditionsElement = document.getElementById('conditions');
            let windSpeedElement = document.getElementById('wind-speed');
            let windChillElement = document.getElementById('wind-chill');

            temperatureElement.textContent = `${data.main.temp} °C`;
            conditionsElement.textContent = data.weather[0].description;
            windSpeedElement.textContent = `${data.wind.speed} m/s`;

            // Calculate and display wind chill (example calculation)
            let windChill = calculateWindChill(data.main.temp, data.wind.speed);
            windChillElement.textContent = `${windChill.toFixed(2)} °C`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            let weatherDataElements = document.querySelectorAll('.weather p span');
            weatherDataElements.forEach(element => {
                element.textContent = 'N/A';
            });
        });
}

// Function to calculate wind chill (example calculation)
function calculateWindChill(temperature, windSpeed) {
    return temperature - windSpeed;
}

// Call fetchWeather function when the page loads
document.addEventListener('DOMContentLoaded', fetchWeather);
    
    
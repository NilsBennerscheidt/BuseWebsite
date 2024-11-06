function menuToggle() {

    const menuContainer = document.getElementById('menu-container');

    if (menuContainer.style.maxHeight) {
        menuContainer.style.maxHeight = null;
        menuContainer.style.height = null;
    } else {
        menuContainer.style.maxHeight = '100vh';
        menuContainer.style.height = '100vh';
    }
}

function onClickContact() {
    const menuContainer = document.getElementById('menu-container');

    menuContainer.style.maxHeight = null;
    menuContainer.style.height = null;

}

document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.accordion-icon');

        // Toggle content visibility
        if (content.style.maxHeight) {
            // Collapse the content
            content.style.maxHeight = null;
            icon.classList.remove('rotate-180'); // Rotate chevron back
        } else {
            // Expand the content
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.classList.add('rotate-180'); // Rotate chevron 180 degrees
        }
    });
});

const images = document.querySelectorAll('#gallaryImages img');
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    console.log("currentIndex", currentIndex)
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentIndex].src;
    document.getElementById('imageModal').classList.remove('md:hidden');
}

function closeModal() {
    document.getElementById('imageModal').classList.add('md:hidden');
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }

    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentIndex].src;
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0
    }

    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentIndex].src;
}

const API_KEY = 'ca45f192bcb043d1be7182315240710'; // Replace with your WeatherAPI key
const LATITUDE = 51.6595;  // Latitude for Berlin
const LONGITUDE = 7.3465; // Longitude for Berlin

async function getWeatherData(apiKey) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${LATITUDE},${LONGITUDE}&days=10&alerts=yes&lang=de`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function checkStorms(weatherData) {
    const stormResult = document.getElementById("storm-result");
    const forecastDays = weatherData.forecast.forecastday;
    let stormFound = false;

    forecastDays.forEach(day => {
        if (day.day.condition.text.includes('Thunderstorm')) {
            const date = new Date(day.date).toLocaleDateString('de-DE');
            stormFound = true;
            stormResult.textContent = `Ein Sturm wurde für den ${date} gefunden!`;
            stormResult.classList.toggle('hidden');
        }
    });

}

async function runStormCheck() {
    const weatherData = await getWeatherData(API_KEY);
    if (weatherData) {
        checkStorms(weatherData);
    }
}

runStormCheck();
nextImage();


const iconElement = document.querySelector('.weather.icon');
const tempElement = document.querySelector('.temperature p');
const unitElement = document.querySelector('.unit');
const descElement = document.querySelector('.temperature-description');
const locationElement = document.querySelector('.location p');
const notificationElement = document.querySelector('.notification');
const weather = {};
weather.temperature = {
    unit: 'Celsius'

};

const kelvin = 273;
const key = '82005d27a116c2880c8f0fcb866998a0'

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
function showPosition(position) {
    const lati = + position.coords.latitude;
    const longi = + position.coords.longitude;
    console.log("Latitude: " + lati + ' ' + "Longitude: " + longi);
    

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=82005d27a116c2880c8f0fcb866998a0`)
        .then((data) => {
            return data.json();
        })
        then((data)=>{
            temperature.value=Math.floor(data.main.temp-kelvin);
            temperature

        })
    }


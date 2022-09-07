if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
}
const KELVIN = 273;
function showPosition(position) {
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    console.log("Latitude: " + lati + ' ' + "Longitude: " + longi);

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=82005d27a116c2880c8f0fcb866998a0`)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            temperature = document.getElementById('temperature-value').innerHTML = data.main.temp;
            celsius = temperature - KELVIN;
            decimal = Math.floor(celsius);
            document.getElementById('temperature-value').innerHTML = decimal;
            document.getElementById('location').innerHTML = data.name;
            document.getElementById('img').src = `icons/${data.weather[0].icon}.png`;
            document.getElementById('temperature-description').innerHTML = data.weather[0].description;
        })
}

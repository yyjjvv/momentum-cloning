const API_KEY = "07b6d248398c4f58d89b673d050dcf1a";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const status = document.querySelector("#weather .status");
        const temp = document.querySelector("#weather .temp");
        const city = document.querySelector("#weather .city");
        status.innerText = data.weather[0].main;
        temp.innerText = `${Math.round(data.main.temp)}°C`;
        city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Not Able To Locate You.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
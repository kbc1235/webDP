const weather = document.querySelector('.js-weather')

const AIP_KEY ="ef2a47599f8b53b45ad51ded6d40419b";
const COORDS = 'coords';


function getWeather(lat, log){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${AIP_KEY}&units=metric`).then(function(response){
        return response.json()
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place =json.name;
        weather.innerText = `${temperature}˚ / ${place}`;
    });
    
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
    
}


function handleGeoError(){
    console.log('위치 정보를 읽을 수 없습니다.')
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}




function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
       const parseCoords = JSON.parse(loadedCoords)
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
function init(){
    loadCoords();
}

init();
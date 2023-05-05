
var button = document.getElementById("search-btn");

button.addEventListener("click", function(){
    //fetching the cat fact and image
        //factList.innerHTML = "button"; 
        button.setAttribute("style","display:inline");
        var WEATHER_API =  'https://api.openweathermap.org/data/2.5/forecast?lat=&lon=&appid=b6019b035ab8d12ac52ad34c0fbedcaf';
        fetch(WEATHER_API)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            search = 'data', data;
            fetch(WEATHER_API)
                .then(function (response) {
                return response.json();
            })
            });
        });
// set a value to local storage
//localStorage.setItem('key', 'value');

// get a value from local storage
//const value = localStorage.getItem('key');

// remove a value from local storage
//localStorage.removeItem('key');
function generateWeatherDashboard(lattidu, longitude) {
    console.log(lattidu);
    console.log(longitude)
    //Weather Forecast API
    var WEATHER_API = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lattidu + '&lon=' + longitude + '&appid=b6019b035ab8d12ac52ad34c0fbedcaf';
    //console.log("This si weather API: ", WEATHER_API)
    fetch(WEATHER_API)
        //res is a parameter but when this function gets called later and you pass it (x) this is an argument. 
        .then(function (res) {
            if (!res.ok) throw new Error('oops!');
            return res.json();
        })
        .then(function (data) {
            console.log('data :>> ', data);
            localStorage.setItem('data', 'json');

        })
        .catch(function (error) {
            console.error(error);
        });
}



function geoLocation(cityName) {
    console.log(cityName);
    var GEO_API = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=b6019b035ab8d12ac52ad34c0fbedcaf';
    //console.log(GEO_API);
    fetch(GEO_API)
        //res is a parameter but when this function gets called later and you pass it (x) this is an argument. 
        .then(function (res) {
            if (!res.ok) throw new Error('could not find the location for that city');
            return res.json();
        })
        .then(function (data) {
            console.log('data :>> ', data);
            console.log(" getting lat ; ", data[0].lat)
            console.log(" getting lat ; ", data[0].lon)
            generateWeatherDashboard(data[0].lat, data[0].lon)

            // localStorage.setItem('data', 'json');

        })
        .catch(function (error) {
            console.error(error);
        });
}
geoLocation("Miami")
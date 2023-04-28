//Weather Forecast API
console.log('Hello');

var WEATHER_API = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a7fc7c3921309a588e45475792082481';
//var city = document.querySelector('input').value;


add(5, 10) //5 and 10 are arguments. 
fetch(WEATHER_API)
//res is a parameter but when this function gets called later and you pass it (x) this is an argument. 
    $.then(function(res) {
        if(!res.ok) throw new Error('oops!');
        return res.json();
    })
    .then(function (data) {
        console.log('data :>> ', data);
    })
    .catch(function (error) {
        console.error(error);
    });

    var prom = new Promise((resolve, reject) => {
        resolve('x')
    });

function getWEATHERAPI(){
    return new Promise((resolve, reject) => {
        console.log();
    })
};


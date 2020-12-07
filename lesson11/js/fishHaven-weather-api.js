const curApi = "http://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&appid=18130f0909763c6386c6e30fc397af59&units=imperial";


fetch(curApi)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
    document.getElementById('currently').textContent = jsObject.weather[0].main;
  });

  const forApi ="http://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&appid=18130f0909763c6386c6e30fc397af59&units=imperial";

  fetch(forApi)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var x = 1;
    var weekDay = new Array(7);
    weekDay[0] = "SUN";
    weekDay[1] = "MON";
    weekDay[2] = "TUE";
    weekDay[3] = "WED";
    weekDay[4] = "THU";
    weekDay[5] = "FRI";
    weekDay[6] = "SAT";
    for (var i = 0; i < jsObject.list.length; i++ ) {
        var myTime = jsObject.list[i].dt_txt.substring(11);
        var myDate = new Date(jsObject.list[i].dt * 1000);
        var Day = weekDay[myDate.getDay()];
        if (myTime == '18:00:00' && x <= 5) {
            document.getElementById('Day' + x).textContent = Day;
            document.getElementById('Temp' + x).textContent = jsObject.list[i].main.temp;

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            const desc = jsObject.list[i].weather[0].description;
            document.getElementById('icon' + x).setAttribute('src', imagesrc);
            document.getElementById('icon' + x).setAttribute('alt', desc);

            x++
        }
    }
  });
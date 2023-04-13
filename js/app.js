const tide = {
	"async": true,
	"crossDomain": true,
	"url": "https://noaa-tides.p.rapidapi.com/stations/1612340/tides?date=20221206",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "58f612420emsh5158710b0705dafp112d0bjsnd5f3c7aefbfa",
		"X-RapidAPI-Host": "noaa-tides.p.rapidapi.com"
	}
};

$.ajax(tide).done(function (response) {
	console.log(response);
  addTide(response)
});

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://stormglass.p.rapidapi.com/forecast?lng=-158.13186&lat=21.359376",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "58f612420emsh5158710b0705dafp112d0bjsnd5f3c7aefbfa",
		"X-RapidAPI-Host": "stormglass.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response)
  addSwell(response)
});

const weatherdescript = {
	"async": true,
	"crossDomain": true,
	"url": "https://open-weather13.p.rapidapi.com/city/latlon/21.359376/-158.13186",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "58f612420emsh5158710b0705dafp112d0bjsnd5f3c7aefbfa",
		"X-RapidAPI-Host": "open-weather13.p.rapidapi.com"
	}
};

$.ajax(weatherdescript).done(function (response) {
	console.log(response);
  addWeather(response)
});

$.ajax("https://api.openweathermap.org/data/2.5/weather?lat=21.359376&lon=&appid=6df5495108db5b6fe6bbc209490b4707")
.then((data) => {
  console.log(data)
  addWeather(data)
})

const addWeather = (data) => {
    const { description } = data.weather[0];
    console.log(description);
    document.querySelector(".WeatherDescription").innerText = description;
    // document.querySelector(".Temperature").innerText = temp + " °C";
    // document.querySelector(".Wind").innerText = "Wind Speed: " + speed + " km/h";
}

const addSwell = (response) => {
  const waveHeight  = response.hours[0].waveHeight[0].value;
  const windSpeed = response.hours[0].windSpeed[0].value;
  const airTemperature = response.hours[0].airTemperature[0].value;
  console.log(waveHeight,windSpeed.airTemperature);
  document.querySelector(".Swell").innerText = "Wave Height:" + waveHeight + " m";
  document.querySelector(".Wind").innerText = "Wind:" + windSpeed + " m/s";
  document.querySelector(".Temperature").innerText = "Temp:" + airTemperature + " °C";
}

const addTide = (response) => {
  const tideType = response.tides[3].type;
  const tideHeight = response.tides[3].height;
  console.log(tideType,tideHeight);
  document.querySelector(".Tide").innerText = tideType + " Tide" + tideHeight + " Ft";
}









     
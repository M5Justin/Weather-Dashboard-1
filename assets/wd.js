

var textSearch = document.querySelector('#textSearch');
var searchBtn = document.querySelector('#search-button');
var APIKey = "04d1478f23980571496a41cab11aac4b";
var city;


function fetchResults(place) {
  var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + APIKey;
   
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var { temp } = data.main;
    var { description, icon } = data.weather[0];
    var fahrenheit = (temp / 9) / 5 + 32;
    var place = data.name;
    localStorage.setItem(place, fahrenheit);
    displayWeather(data);
  })
  .catch(function (error) {
    console.log(error);
  });
}


function displayWeather(data) {
  var { temp } = data.main;
  var { description, icon } = data.weather[0];
  var fahrenheit = (temp / 9) / 5 + 32;
  var weather1Div = document.getElementById("weather1");    
  //creates city heading
  var heading = document.createElement("h1");
  heading.innerHTML = data.name;
  weather1Div.appendChild(heading);
  //creates temp of city
  var searchTemp = document.createElement('h2');
  searchTemp.innerHTML = fahrenheit + ' degrees';
  weather1Div.appendChild(searchTemp);
  //creates temp description
  var cityDesription = document.createElement('h2');
  cityDesription.innerHTML = description;
  weather1Div.appendChild(cityDesription);
}

  var handleSearch = function (event) {
    event.preventDefault();
    var search = textSearch.value.trim();
    fetchResults(search);
    
  }
  
  searchBtn.addEventListener('click', handleSearch);
  
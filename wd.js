
var APIKey = "04d1478f23980571496a41cab11aac4b";
var city = "";


var getCity = function () {
  var city = $('#cityInput').val();
  localStorage.setItem("city", city);
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + APIKey + "&units=imperial";
  fetch(apiUrl)
  .then(function (response) {
      if (response.ok) {
          response.json().then(function (data) {
              displayCity(data);
          });
      } else {
          alert('Error: ' + response.statusText);
      }
      })
      .catch(function (error) {
          alert('Unable to connect');
      });
};

var displayCity = function (data) {
  $('#cityTemp').text(data.main.temp);
  $('#cityWind').text(data.wind.speed);
  $('#cityHumidity').text(data.main.humidity);


};

$("#init").click(function(event){
  event.preventDefault();
  getCity();
})
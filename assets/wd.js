
var responseText = document.getElementById('response-text');
var APIKey = "04d1478f23980571496a41cab11aac4b";
var city;

var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + "london" + "&appid=" + APIKey;

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const { temp } = data.main;
    const place = data.name;
    const { description, icon } = data.weather[0];
    const fahrenheit = (temp * 9) / 5 + 32;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  })
  .catch(function (error) {
    console.log(error);
  });

  
  iconImg.src = iconUrl;
  loc.textContent = `${place}`;
  desc.textContent = `${description}`;
  tempC.textContent = `${temp.toFixed(2)} °C`;
  tempF.textContent = `${fahrenheit.toFixed(2)} °F`;

  
  document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
    }
});
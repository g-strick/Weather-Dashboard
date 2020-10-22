$(document).ready(function () {
  console.log("ready!");

var fiveDayForecastEl = $('#fiveDayForecast')


  $("#submit").on("click", function () {
    var userCity = $("#city").val();
    console.log("userCity:", userCity);
    $("#city").val("");
    weatherCall(userCity);
    fiveDayWeatherCall(userCity);
  });

  // Weather Variables
  var APIKey = "304328a5715add3e4e98ab718222d70d";

  // Here we are building the URL we need to query the database

  // Weather Call
  function weatherCall(userCity) {
    var queryURL =
     
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      userCity +
      "&appid=" +
      APIKey;
      console.log('queryURL:', queryURL)
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // console.log("queryURL:", queryURL);
      // var weatherTitle = $("<li>").text(response.name)
      // var weatherInfo = $("#weatherInfo");
      // weatherInfo.append(weatherTitle)

      $("#temp").html("Temperature: " + response.main.temp);
      $("#humidity").html("Humidity: " + response.main.humidity);
      $("#windSpeed").html("Wind Speed: " + response.wind.speed);
      $("#uvi").html("not the UV Index: so its now the ID " + response.sys.id);
      console.log("weather response:", response);
    });
  }

  //   makes search history buttons clickable
  $("#searchHistory").on("click", "li", function () {
    weatherCall($(this).text());
    fiveDayWeatherCall($(this).text());
    console.log("this:", this);
  });

  // Five day Weather Call
  // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
  function fiveDayWeatherCall(userCity) {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      userCity +
      "&appid=" +
      APIKey;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      //Log the queryURL
      console.log("queryURL:", queryURL);
      // var weatherTitle = $("<li>").text(response.name);
      // var weatherInfo = $("#weatherInfo");
      // weatherInfo.append(weatherTitle);
      $("#weatherDay1").html(response.list[0].dt_txt + "<br>" + response.list[0].weather[0].main + "<br>"
      )


      console.log("5 day weather response:", response);
    });
  }


});

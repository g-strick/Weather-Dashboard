$(document).ready(function () {
  console.log("ready!");

  var fiveDayForecastEl = $("#fiveDayForecast");

  $("#submit").on("click", function () {
    var userCity = $("#city").val();
    console.log("userCity:", userCity);
    $("#city").val("");
    weatherCall(userCity);
    fiveDayWeatherCall(userCity);

    var node = document.createElement("li");                 // Create a <li> node
    var textnode = document.createTextNode(userCity); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("searchHistory").appendChild(node); // Append <li> to <ul> with id="myList"
  });

  // Weather Variables
  var APIKey = "304328a5715add3e4e98ab718222d70d";
  // Weather Call
  function weatherCall(userCity) {
    let queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      userCity +
      "&appid=" +
      APIKey;
    console.log("queryURL:", queryURL);
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

      console.log("weather response:", response);
       let lat = response.coord.lat;
       console.log('lat:', lat)
       let lon = response.coord.lon;
       console.log('lon:', lon);
       UVICall(lat,lon);
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
      
      $("#weatherDay1").html(
        response.list[1].dt_txt +
          "<br>" +
          response.list[1].weather[0].main +
          "<br>Temp: " +
          response.list[1].main.temp +
          "<br>Humidity: " +
          response.list[1].main.humidity +
          "%"
      );
      $("#weatherDay2").html(
        response.list[2].dt_txt +
          "<br>" +
          response.list[2].weather[0].main +
          "<br>Temp: " +
          response.list[2].main.temp +
          "<br>Humidity: " +
          response.list[2].main.humidity +
          "%"
      );
      $("#weatherDay3").html(
        response.list[3].dt_txt +
          "<br>" +
          response.list[3].weather[0].main +
          "<br>Temp: " +
          response.list[3].main.temp +
          "<br>Humidity: " +
          response.list[3].main.humidity +
          "%"
      );

      $("#weatherDay4").html(
        response.list[4].dt_txt +
          "<br>" +
          response.list[4].weather[0].main +
          "<br>Temp: " +
          response.list[4].main.temp +
          "<br>Humidity: " +
          response.list[4].main.humidity +
          "%"
      );
      $("#weatherDay5").html(
        response.list[5].dt_txt +
          "<br>" +
          response.list[5].weather[0].main +
          "<br>Temp: " +
          response.list[5].main.temp +
          "<br>Humidity: " +
          response.list[5].main.humidity +
          "%"
      );




      console.log("5 day weather response:", response);
    });
  }
    // UVI Call
  function UVICall(lat, lon) {
    let queryURL =
      "https://api.openweathermap.org/data/2.5/uvi?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      APIKey;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      //Log the queryURL
      console.log("queryURL:", queryURL);
      $("#uvi").html("UV Index: " + response.value);



    });
  }
});

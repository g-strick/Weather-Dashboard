  // Weather Variables
  var APIKey = "304328a5715add3e4e98ab718222d70d";
  var cityName = "Charlotte";
  var country = "US"
  // Here we are building the URL we need to query the database
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "," + country + "&appid=" + APIKey;
  // Weather Call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    //Log the queryURL
    console.log('queryURL:', queryURL)
    $('.city').html('<h1>'+ response.name + ' Weather Details</h1>')
    //log the resulting object
    console.log('weather response:', response)

  });
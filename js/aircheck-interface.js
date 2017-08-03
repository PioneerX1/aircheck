var AirCheck = require('./../js/aircheck.js').airCheckModule;

var getStats = function(response) {
  $('#output-city').text(response.data.city);
  $('#output-state').text(response.data.state);
  $('#aqius').text(response.data.current.pollution.aqius);

  var aqius = parseInt(response.data.current.pollution.aqius);
  var rating = getRating(aqius);
  $('#rating').text(rating);

};

var getRating = function(aqius) {
  if (aqius < 51) {
    return "Good";
  } else if (aqius < 101) {
    return "Moderate";
  } else if (aqius < 151) {
    return "Unhealthy for Sensitive Groups";
  } else if (aqius < 201) {
    return "Unhealthy";
  } else if (aqius < 301) {
    return "Very Unhealthy";
  } else {
    return "Hazardous";
  }
};

$(document).ready(function() {
  var newAirCheck = new AirCheck();

  $('#location-form').submit(function(event) {
    event.preventDefault();
    var city = $('#input-city').val();
    var state = $('#input-state').val();
    var country = $('#input-country').val();
    $('#input-city').empty();
    $('#input-state').empty();
    // $('#input-country').empty();
    newAirCheck.getAirQuality(city, state, country, getStats);
  });
});

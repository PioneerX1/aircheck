var apiKey = require('./../.env').apiKey;

function AirCheck() {

}

AirCheck.prototype.getAirQuality = function(city, state, country, getStats) {
  $.get('http://api.airvisual.com//v2/city?country='+country+'&state='+state+'&city='+city+'&key='+apiKey).then(function(response) {
    getStats(response);
    console.log(JSON.stringify(response));
  }).fail(function(error) {
    $('#results').text(error.responseJSON.message);
  });
};

exports.airCheckModule = AirCheck;

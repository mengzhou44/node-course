const request = require("request");

const geocode = (address, callback) => {
  const access_token =
    "sk.eyJ1IjoibWVuZ3pob3U0NCIsImEiOiJjanN4YTZsaHIwcTVpNDlvNXFhejR1YWdoIn0.IPDob9iRlfXrbg-dbKFxKw";
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}
    .json?access_token=${access_token}&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    let result = {};
    if (error) {
      result = {
        success: false,
        message: "Unable to connect to location services!"
      };
    } else if (body.features.length === 0) {
      result = {
        success: false,
        message: "Unable to find location. Try another search."
      };
    } else {
      result = {
        success: true,
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      };
    }

    callback(result);
  });
};

module.exports = geocode;

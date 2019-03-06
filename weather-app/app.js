const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

geocode(address, res => {
  if (res.success === true) {
    const { latitude, longitude } = res;
    forecast({ latitude, longitude }, response => {
      if (response.success === true) {
        console.log(`${response.summary}
                       It is currently ${response.temperature}  degress out. 
                       There is a  ${
                         response.precipProbability
                       }% chance of rain.`);
      } else {
        console.log(`error: ${response.message}`);
      }
    });
  } else {
    console.log(`error: ${res.message}`);
  }
});

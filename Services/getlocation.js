const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your own Google Maps API key
};

const geocoder = NodeGeocoder(options);

async function getCoordinates(address) {
  try {
    const res = await geocoder.geocode(address);
    return {
      latitude: res[0].latitude,
      longitude: res[0].longitude,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = getCoordinates;
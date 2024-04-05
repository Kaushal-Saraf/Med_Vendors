export default function getLocation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ Latitude: latitude, Longitude: longitude });
        },
        function(error) {
          reject({ error: error });
        }
      );
    } else {
      reject({ error: "Geolocation is not supported" });
    }
  });
}

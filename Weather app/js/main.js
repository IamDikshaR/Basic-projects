import { 
    addSpinner, displayError
} from "./domFunctions.js";
import {
    setLocationObject
} from "./dataFunctions.js"
import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurrentLocation();

const initApp = () => {
    //add listeners
    const geoButton = document.getElementById("getLocation");
    geoButton.addEventListener("click", getGeoWeather);

    //set up
    //load weather
}

document.addEventListener("DOMContentLoaded", initApp)

const getGeoWeather = (event) => {
    if (event && event.type === "click") {
      const mapIcon = document.querySelector(".mapMarker");
      addSpinner(mapIcon);
    }
    if (!navigator.geolocation) return geoError();
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  };
  
  const geoError = (errObj) => {
    const errMsg = errObj ? errObj.message : "Geolocation not supported";
    displayError(errMsg, errMsg);
  };
  
  const geoSuccess = (position) => {
    const myCoordsObj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      name: `Lat:${position.coords.latitude} Long:${position.coords.longitude}`
    };
    setLocationObject(currentLoc, myCoordsObj);
    updateDataAndDisplay(currentLoc);
  };
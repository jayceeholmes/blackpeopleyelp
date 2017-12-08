var x = document.getElementById("demo");

// GET LOCATION
// -----------------------------------------------------------------------------

function getLocation() {

    if (!Date.now) {
      Date.now = function now() {
        return new Date().getTime();
      };
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getData, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// SHOW POSITION
// -----------------------------------------------------------------------------

function getData(position) {

    // PUSH DATA
    pushData(position.coords.latitude, position.coords.longitude, position.timestamp);
    console.log(position.coords.latitude, position.coords.longitude, position.timestamp);
    document.getElementById("thank-you").innerHTML= "Thank you. The GPS location where this racist bullshit happened has been recorded.";

    // SHOW DATA

}

// SHOW ERROR
// -----------------------------------------------------------------------------

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

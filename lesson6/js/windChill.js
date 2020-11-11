function windChill() {
    var temp = document.getElementById("currentTemp");
    var speed =document.getElementById("windSpeed");

    var windChillFactor = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

    // Round
    var digits = 1;
    var multiplier = Math.pow(10, digits);
    var windChillRounded = Math.round(windChillFactor * multiplier ) / multiplier;

    document.getElementById("windChill").innerHTML = windChillFactor;
}
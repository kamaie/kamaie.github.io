function windChill() {
    var temp = parseFloat(document.getElementById("currentTemp").innerText);
    var speed = parseFloat(document.getElementById("windSpeed").innerText);

    // Calculate the Wind Chill Factor
    var windChillFactor = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

    // Round windChillFactor
    var digits = 1;
    var multiplier = Math.pow(10, digits);
    var windChillFactorRounded = Math.round(windChillFactor * multiplier ) / multiplier;

    document.getElementById("windChill").innerHTML = windChillFactorRounded;
}
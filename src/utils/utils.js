function fahrenheit2Celsius(temp) {
  return ((temp - 32) * 5) / 9;
}

function celsius2Fahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}

function kelvin2Celsius(temp) {
  return temp - 273.15;
}

function kelvin2Fahrenheit(temp) {
  return celsius2Fahrenheit(kelvin2Celsius(temp));
}

function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default {
  kelvin2Celsius,
  kelvin2Fahrenheit,
  celsius2Fahrenheit,
  fahrenheit2Celsius,
  capitalize,
};

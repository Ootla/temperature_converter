
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function celToFar() {
  let c = celsius.value;
  let f = (c * 9 / 5) + 32;
  let k = c * 1 + 273.15;
  fahrenheit.value = f.toFixed(2);
  kelvin.value = k.toFixed(2);
}

function farToCel() {
  let f = fahrenheit.value;
  let c = (f - 32) * 5 / 9;
  let k = (f - 32) * 5 / 9 + 273.15;
  celsius.value = c.toFixed(2);
  kelvin.value = k.toFixed(2);
}

function kelToCel() {
  let k = kelvin.value;
  let c = k - 273.15;
  let f = (k - 273.15) * 9 / 5 + 32;
  celsius.value = c.toFixed(2);
  fahrenheit.value = f.toFixed(2);
}
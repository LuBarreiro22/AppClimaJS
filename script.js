let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "33a753ee50c4c60c0c3bba15f5d7a636";
let gradosKelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
  let ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

let fetchDatosClima = (ciudad) => {
  fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then((data) => data.json())
    .then((data) => datosClima(data));
};

let datosClima = (data) => {
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const humedad = data.main.humidity;
  const icono = data.weather[0].icon;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const iconoInfo = document.createElement("img");
  iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `La temperatura es ${Math.floor(
    temperatura - gradosKelvin
  )}°C`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `La humedad es del ${humedad}%`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(iconoInfo);
};

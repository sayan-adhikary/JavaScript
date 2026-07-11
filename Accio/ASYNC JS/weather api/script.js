const button = document.getElementById("btn");

button.addEventListener("click", get);


async function get() {
    const city = document.getElementById("city").value;
    const apiKey = "6b0d9c7049c409d993a2b515c9d83f48";

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=6b0d9c7049c409d993a2b515c9d83f48`;
    const geoResponse = await fetch(url);
    const geoData = await geoResponse.json();

    console.log(geoData);
}
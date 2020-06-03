function weather() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(givePosition);
    }

    function givePosition(position) {
        fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=afe224adeda3126a4470bdcc75a93e2f`
            )
            .then(Response => Response.json())
            .then(data => {

                document.querySelector('.city-name').textContent = data.name;
                document.querySelector('#main-temp').textContent = `${parseInt(data.main.temp)}`;
                document.querySelector('.data-main').textContent = `${data.weather[0].main}`;
                document.querySelector('.data-description').textContent = `${data.weather[0].description}`;
                document.querySelector('#pressure').textContent = `${data.main.pressure}`;
                document.querySelector('#min-temp').textContent = `${data.main.temp_min}`;
                document.querySelector('#max-temp').textContent = `${data.main.temp_max}`;
                document.querySelector('#wind-speed').textContent = `${data.wind.speed}`;
                document.querySelector('#humidity').textContent = `${data.main.humidity}`;

            });
    }

}
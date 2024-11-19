function getData() {
    const apiKey = 'ddd50a1012c40b3cb736bde5c4c5e613';
    const city = document.getElementById('search').value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {

                const temp = data.main.temp;
                const windSpeed = data.wind.speed;
                const humidity = data.main.humidity;

                document.getElementById('temp').innerHTML = `${temp}<sup>o</sup>C`;
                document.getElementById('ws').textContent = windSpeed + ' m/s';
                document.getElementById('hmdty').textContent = humidity + '%';
            } else {
                console.error('City not found:', data.message);
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching weather data.');
        });
}

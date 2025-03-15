async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "d01f1e6539bb4daa0b7061cc152a0085";  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Condition: ${data.weather[0].description}</p>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            `;
        } else {
            document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${data.message}</p>`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherResult").innerHTML = `<p style="color:red;">Failed to fetch weather data. Try again.</p>`;
    }
}

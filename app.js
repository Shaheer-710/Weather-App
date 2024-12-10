const input = document.getElementById('inputField');  
const showWeather = document.getElementById('showWeather');  
const weatherResult = document.getElementById('weatherResult');  

const searchData = async () => {
    const userInput = input.value.trim();  

    const url = `https://open-weather13.p.rapidapi.com/city/${userInput}/EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '69cfb409cdmsh9feafe02a8f711ep191a4cjsn7fe278866f7a',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();  
        
        if (result && result.main && result.weather) {
            const temp = result.main.temp;  
            const description = result.weather[0].description;  

            weatherResult.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Weather for ${userInput}</h5>
                        <p class="card-text">${temp}°C</p>
                        <p class="card-text">${description}</p>    
                    </div>
                </div>
            `;
        } else {
            weatherResult.innerHTML = 'Weather data not found';
        }
    } catch (error) {
        console.log('Error:', error);
        weatherResult.innerHTML = 'An error occurred ';
    }
};

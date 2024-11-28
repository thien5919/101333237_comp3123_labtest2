import React, { useState, useEffect } from 'react';
import { fetchWeather } from './services/WeatherService';
import './WeatherApp.css'; //

const WeatherApp = () => {
    const [city, setCity] = useState('Toronto');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetchWeather(city)
            .then((response) => setWeather(response.data))
            .catch((error) => console.error('Error fetching weather:', error));
    }, [city]);

    const handleSearch = (e) => {
        e.preventDefault();
        const inputCity = e.target.elements.city.value;
        setCity(inputCity);
    };

    const getDay = (timestamp) => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date(timestamp * 1000); // Convert Unix timestamp to JavaScript date
        return daysOfWeek[date.getDay()]; // Get day of the week from array
    };
    const getDate = (timestamp) => {
        let date = new Date();
        let day = String(date.getUTCDate()).padStart(2, "0");
        let month = date.toLocaleString("default", { month: "long" }); 
        let year = date.getUTCFullYear();
        return `${day} ${month} ${year}`; // Format: "DD Month YYYY"
    };
    
   
    
    

    return (
        <div className="weather-app">  

        <h1>Weather App</h1>         
            {weather && (              
                <div class= "weather-box">
                    <div class="weather-info-box">
                        <div className="weather-info">
                            <h4>{getDay(weather.dt)}</h4>
                            <p>{getDate(weather.dt)}</p>
                            <p>{weather.name}, {weather.sys.country}</p>

                            <img
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                            />     
                            <h1>{Math.round(weather.main.temp)}°C</h1>              
                            <p>{weather.weather[0].description}</p>                       
                        </div>                      
                    </div>

                    <div class="weather-additional-info-box">
                        <div class="weather-additional-info">
                                <form onSubmit={handleSearch}>
                                    <input type="text" name="city" placeholder="Enter city (e.g Toronto)"  />
                                    <button type="submit">Search</button>
                                </form>
                                <div>
                                    <h4>
                                        <span>HUMIDITY</span>   
                                        <span style={{marginLeft:'150px'}}>{weather.main.humidity} %</span>
                                    </h4>
                                    <h4>
                                        <span>WIND</span>  
                                        <span style={{marginLeft:'150px'}}>{weather.wind.speed} km/h</span>
                                    </h4>
                                    <h4>
                                        <span>AIR PRESSURE</span>  
                                        <span style={{marginLeft:'70px'}}>{weather.main.pressure} mb</span>
                                    </h4>
                                    <h4>
                                        <span>MAX TEMP</span> 
                                        <span style={{marginLeft:'120px'}}>{weather.main.temp_max} °C</span>
                                    </h4>
                                    <h4>
                                        <span>MIN TEMP </span>
                                        <span style={{marginLeft:'120px'}}></span>{weather.main.temp_min} °C
                                    </h4>
                                    
                                </div>

                        </div>           
                    </div>                   
                </div>
                    
            )}            
        </div>
    );
};

export default WeatherApp;

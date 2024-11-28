import axios from 'axios';

const API_KEY = 'b0d99b3c9468d1c03068c78e38aab11c';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = (city) => {
    return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
};

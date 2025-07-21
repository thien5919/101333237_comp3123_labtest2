# 🌦️ Weather App

A simple React weather application that fetches and displays current weather data using the OpenWeatherMap API.

---

## 🔍 Features

- 🌍 View current weather by city (default is **Toronto**)
- 📆 Display the day of the week and full date
- 🌤️ Show weather condition with icon, temperature, and description
- 💧 Additional weather info: humidity, wind speed, air pressure, max/min temperature
- 🔎 Search weather by city name using a search form

---

## 🧰 Technologies Used

- React (with Hooks: `useState`, `useEffect`)
- JavaScript ES6+
- CSS for styling
- OpenWeatherMap API

---

## 📁 Project Structure

```
/src
│
├── WeatherApp.js        # Main weather component
├── WeatherApp.css       # Styling for the app
└── services/
    └── WeatherService.js  # Function to fetch weather data from API
```

---

## ⚙️ How to Run Locally

```bash
# 1. Clone this repository
git clone https://github.com/thien5919/101333237_comp3123_labtest2

# 2. Navigate to the project directory
cd 101333237_comp3123_labtest2

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

Then open your browser at:  
`http://localhost:3000`

---

## 🔑 API Key Required

To use this app, you must sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api) and insert it into `WeatherService.js`:

```js
const API_KEY = 'YOUR_API_KEY_HERE';
```

---

## 📸 Screenshot

![Weather App Screenshot](./screenshot.png)

---

## 👨‍🎓 Author

- **Name:** Duc Thien Tran  
- **Student ID:** 101333237  
- **Course:** COMP3123 – Web Frameworks  

---



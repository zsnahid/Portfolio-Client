# Weather Widget Setup

## Current State

The weather widget is currently using mock data for demonstration purposes. It displays:

- Random weather conditions
- Animated weather icons
- Friendly messages based on weather
- Temperature, humidity, and wind speed data
- Auto-refresh every 10 minutes

## To Enable Real Weather Data

### 1. Get an API Key

Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api):

1. Create an account at openweathermap.org
2. Go to API Keys section
3. Generate a new API key (free tier allows 60 calls/minute)

### 2. Environment Variables

Create a `.env` file in your project root:

```
VITE_WEATHER_API_KEY=your_api_key_here
VITE_WEATHER_CITY=Dhaka
VITE_WEATHER_COUNTRY=BD
```

### 3. Update WeatherWidget.tsx

In the `fetchWeather` function, uncomment the real API code and comment out the mock data:

```typescript
// Real API call (uncomment this)
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${
    import.meta.env.VITE_WEATHER_CITY
  },${import.meta.env.VITE_WEATHER_COUNTRY}&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }&units=metric`
);
const data = await response.json();
const realWeatherData: WeatherData = {
  temperature: Math.round(data.main.temp),
  condition: data.weather[0].description,
  description: data.weather[0].main,
  humidity: data.main.humidity,
  windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
  location: data.name,
  icon: data.weather[0].icon,
};
setWeather(realWeatherData);

// Comment out or remove the mock data section
```

### 4. Geolocation (Optional)

To automatically detect user location, you can add geolocation support:

```typescript
const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation not supported");
    }
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// Use coordinates in API call
const position = await getUserLocation();
const { latitude, longitude } = position.coords;
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
);
```

## Features

- 🌤️ Real-time weather data
- 🎨 Weather-based animations and colors
- 💬 Friendly, context-aware messages
- 🔄 Auto-refresh every 10 minutes
- 🎯 Responsive design
- 🌍 Geolocation support (optional)
- 🎨 Weather-themed background gradients

## Weather Conditions Supported

- Clear sky / Sunny
- Clouds (few, scattered, broken, overcast)
- Rain (light, shower, heavy)
- Thunderstorm
- Snow
- Mist / Fog / Haze

Each condition has its own:

- Unique animation (pulse, sway, bounce, breathe)
- Emoji icon
- Friendly message
- Color scheme

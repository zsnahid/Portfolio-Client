import { useEffect, useState } from 'react';

interface WeatherData {
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  location: string;
  icon: string;
}

interface WeatherCondition {
  animation: string;
  message: string;
  bgGradient: string;
  iconColor: string;
  emoji: string;
}

const weatherConditions: Record<string, WeatherCondition> = {
  'clear sky': {
    animation: 'animate-pulse',
    message: "What a beautiful day! ☀️ Perfect for coding and creating amazing things!",
    bgGradient: 'from-yellow-400 to-orange-400',
    iconColor: 'text-yellow-400',
    emoji: '☀️'
  },
  'sunny': {
    animation: 'animate-pulse',
    message: "Sunny and bright! ☀️ Your code is shining just like the sun today!",
    bgGradient: 'from-yellow-400 to-orange-400',
    iconColor: 'text-yellow-400',
    emoji: '☀️'
  },
  'few clouds': {
    animation: 'animate-sway',
    message: "Partly cloudy but still lovely! ⛅ Great weather for productivity!",
    bgGradient: 'from-blue-400 to-gray-300',
    iconColor: 'text-blue-400',
    emoji: '⛅'
  },
  'scattered clouds': {
    animation: 'animate-sway',
    message: "Cloudy vibes! ☁️ Perfect atmosphere for deep focus and creativity!",
    bgGradient: 'from-gray-400 to-gray-500',
    iconColor: 'text-gray-400',
    emoji: '☁️'
  },
  'broken clouds': {
    animation: 'animate-sway',
    message: "Cloudy but cozy! ☁️ Great weather for indoor coding sessions!",
    bgGradient: 'from-gray-400 to-gray-600',
    iconColor: 'text-gray-500',
    emoji: '☁️'
  },
  'overcast clouds': {
    animation: 'animate-sway',
    message: "Overcast skies! ☁️ Time to brighten up your code instead!",
    bgGradient: 'from-gray-500 to-gray-600',
    iconColor: 'text-gray-500',
    emoji: '☁️'
  },
  'shower rain': {
    animation: 'animate-bounce',
    message: "Light rain drops! 🌦️ Stay cozy and keep building awesome projects!",
    bgGradient: 'from-blue-500 to-gray-600',
    iconColor: 'text-blue-500',
    emoji: '🌦️'
  },
  'rain': {
    animation: 'animate-bounce',
    message: "Rainy day vibes! 🌧️ Perfect weather for hot coffee and coding!",
    bgGradient: 'from-blue-600 to-gray-700',
    iconColor: 'text-blue-600',
    emoji: '🌧️'
  },
  'light rain': {
    animation: 'animate-bounce',
    message: "Gentle rain! 🌧️ Let creativity flow like these raindrops!",
    bgGradient: 'from-blue-500 to-gray-600',
    iconColor: 'text-blue-500',
    emoji: '🌧️'
  },
  'thunderstorm': {
    animation: 'animate-pulse',
    message: "Thunderstorm energy! ⛈️ Harness that power for your next breakthrough!",
    bgGradient: 'from-purple-600 to-gray-800',
    iconColor: 'text-purple-600',
    emoji: '⛈️'
  },
  'snow': {
    animation: 'animate-sway',
    message: "Winter wonderland! ❄️ Time for warm drinks and cool code!",
    bgGradient: 'from-blue-200 to-white',
    iconColor: 'text-blue-200',
    emoji: '❄️'
  },
  'mist': {
    animation: 'animate-breathe',
    message: "Misty morning! 🌫️ Mysterious weather for mysterious coding problems!",
    bgGradient: 'from-gray-300 to-gray-400',
    iconColor: 'text-gray-300',
    emoji: '🌫️'
  },
  'fog': {
    animation: 'animate-breathe',
    message: "Foggy day! 🌫️ But your vision for great code is crystal clear!",
    bgGradient: 'from-gray-300 to-gray-400',
    iconColor: 'text-gray-300',
    emoji: '🌫️'
  },
  'haze': {
    animation: 'animate-breathe',
    message: "Hazy but not lazy! 🌫️ Perfect day for focused development!",
    bgGradient: 'from-gray-300 to-yellow-200',
    iconColor: 'text-yellow-300',
    emoji: '🌫️'
  }
};



export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // ...existing code...
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        
        // Option 1: Use real weather API (uncomment and add your API key)
        // const response = await fetch(
        //   `https://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&appid=YOUR_API_KEY&units=metric`
        // );
        // const data = await response.json();
        // const realWeatherData: WeatherData = {
        //   temperature: Math.round(data.main.temp),
        //   condition: data.weather[0].description,
        //   description: data.weather[0].main,
        //   humidity: data.main.humidity,
        //   windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
        //   location: data.name,
        //   icon: data.weather[0].icon
        // };
        
        // Option 2: Mock data for demonstration
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const conditions = Object.keys(weatherConditions);
        const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
        
        const mockWeatherData: WeatherData = {
          temperature: Math.floor(Math.random() * 30) + 5, // Random temp between 5-35°C
          condition: randomCondition,
          description: "Demo weather data - replace with real API",
          humidity: Math.floor(Math.random() * 100),
          windSpeed: Math.floor(Math.random() * 20),
          location: "Demo Location",
          icon: "01d"
        };
        
        setWeather(mockWeatherData);
        setError(null);
      } catch (err) {
        console.error('Weather fetch error:', err);
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Refresh weather data every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-pine-dark/60 backdrop-blur-sm border border-forest-mid/30 rounded-md p-2 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="animate-spin text-sm">🌍</div>
          <p className="text-mist font-body text-xs">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="bg-pine-dark/60 backdrop-blur-sm border border-forest-mid/30 rounded-md p-2 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="text-sm">🌡️</div>
          <div>
            <p className="text-snow font-body text-xs">Offline</p>
          </div>
        </div>
      </div>
    );
  }

  const conditionData = weatherConditions[weather.condition.toLowerCase()] || weatherConditions['clear sky'];

  return (
    <div 
      className="bg-pine-dark/70 backdrop-blur-sm border border-forest-mid/30 rounded-md shadow-sm transition-all duration-300 hover:shadow-md hover:border-spring/20 hover:bg-pine-dark/80 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Compact View */}
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <div className={`text-sm ${conditionData.animation}`}>
              {conditionData.emoji}
            </div>
            <div>
              <p className="text-snow font-title text-xs font-medium">{weather.temperature}°C</p>
              <p className="text-mist/80 font-body text-xs capitalize leading-tight">{weather.condition}</p>
            </div>
          </div>
          <div className="text-mist/60 text-xs">
            {isExpanded ? '−' : '+'}
          </div>
        </div>
      </div>

      {/* Expanded View */}
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-28 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pb-2">
          <div className="border-t border-forest-mid/30 pt-1.5 mb-1.5">
            <div className="flex justify-between text-xs text-mist/80 font-body">
              <span>💨 {weather.windSpeed}</span>
              <span>💧 {weather.humidity}%</span>
            </div>
          </div>
          
          <div className="bg-forest-mid/20 rounded p-1.5 mb-1.5">
            <p className="text-xs text-snow/90 font-body leading-relaxed">
              {conditionData.message.split('!')[0]}! 
            </p>
          </div>
          
          <div className="flex justify-between items-center text-xs text-mist/60 font-body">
            <span className="truncate">{weather.location}</span>
            <span className="animate-pulse ml-1">🔄</span>
          </div>
        </div>
      </div>
      
      {/* Subtle background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${conditionData.bgGradient} opacity-3 pointer-events-none rounded-md`} />
    </div>
  );
}

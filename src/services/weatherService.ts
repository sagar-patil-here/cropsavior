import axios from 'axios';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1';

interface WeatherApiResponse {
  location: {
    name: string;
    region: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
      text: string;
      icon: string;
    };
    feelslike_c: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
    }>;
  };
}

export interface WeatherData {
  location: string;
  state: string;
  current: {
    temp: number;
    humidity: number;
    wind_speed: number;
    weather: string;
    feels_like: number;
    icon: string;
  };
  forecast: Array<{
    day: string;
    temp_max: number;
    temp_min: number;
    weather: string;
    icon: string;
  }>;
  advice: string;
}

export const fetchWeatherData = async (pincode: string): Promise<WeatherData> => {
  if (!WEATHER_API_KEY) {
    throw new Error('Weather API key not configured');
  }

  const response = await axios.get(
    `${BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${pincode}&days=5&aqi=no&alerts=no`
  );
  
  return response.data;
};

export const getFarmingAdvice = (weatherData: WeatherData): string => {
  const { current } = weatherData;
  const conditions = current.condition.text.toLowerCase();

  if (conditions.includes('rain')) {
    return "Rain expected - delay spraying operations and ensure proper drainage.";
  } else if (current.temp_c > 30) {
    return "High temperatures - increase irrigation frequency and consider adding mulch.";
  } else if (conditions.includes('sunny') || conditions.includes('clear')) {
    return "Clear weather - ideal for spraying and harvesting operations.";
  } else {
    return "Normal weather conditions - continue regular farming activities.";
  }
};

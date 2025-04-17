import React, { useState } from 'react';
import { Search, Cloud, CloudRain, CloudLightning, CloudSnow, Sun, Wind, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

interface WeatherData {
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

const WeatherPage = () => {
  const [pincode, setPincode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const { toast } = useToast();

  const API_KEY = 'a85e6093d97afb5c6b670c4025c4e6b4';

  const getWeatherIcon = (weather: string | undefined) => {
    if (!weather) return <Cloud className="h-12 w-12 text-gray-500" />;
    switch (weather.toLowerCase()) {
      case 'rain': case 'drizzle':
        return <CloudRain className="h-12 w-12 text-blue-500" />;
      case 'thunderstorm':
        return <CloudLightning className="h-12 w-12 text-purple-500" />;
      case 'snow':
        return <CloudSnow className="h-12 w-12 text-blue-200" />;
      case 'clear':
        return <Sun className="h-12 w-12 text-yellow-500" />;
      case 'clouds': case 'cloudy':
        return <Cloud className="h-12 w-12 text-gray-500" />;
      default:
        return <Cloud className="h-12 w-12 text-gray-500" />;
    }
  };

  const handleFetchWeather = async () => {
    if (!pincode || pincode.length !== 6 || !/^\d+$/.test(pincode)) {
      toast({ title: 'Invalid Pincode', description: 'Please enter a valid 6-digit pincode', variant: 'destructive' });
      return;
    }

    setIsLoading(true);

    try {
      // Fetch current and forecast data
      const [currentRes, forecastRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${pincode},in&units=metric&appid=${API_KEY}`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${pincode},in&units=metric&appid=${API_KEY}`)
      ]);
      const current = await currentRes.json();
      const forecastData = await forecastRes.json();

      if (current.cod === 200 && forecastData.cod === '200') {
        // Reverse geocoding for state
        const { lat, lon } = current.coord;
        const geoRes = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
        );
        const geoData = await geoRes.json();
        const state = geoData[0]?.state || 'Unknown State';

        // Prepare forecast for next 4 days
        const daily = forecastData.list.filter((_, idx) => idx % 8 === 0).slice(0, 4);
        const forecast = daily.map((item: any) => {
          const date = new Date(item.dt_txt);
          return {
            day: date.toLocaleDateString('en-IN', { weekday: 'short' }),
            temp_max: item.main.temp_max,
            temp_min: item.main.temp_min,
            weather: item.weather?.[0]?.main || 'Unknown',
            icon: item.weather?.[0]?.icon || ''
          };
        });

        const advice = forecast.some(d => d.weather.toLowerCase().includes('rain'))
          ? 'Rain expected. Consider irrigation management and protect your crops.'
          : 'Weather looks good for outdoor farming activities. Maintain regular watering.';

        setWeatherData({
          location: current.name,
          state,
          current: {
            temp: current.main.temp,
            humidity: current.main.humidity,
            wind_speed: current.wind.speed,
            weather: current.weather?.[0]?.main || 'Unknown',
            feels_like: current.main.feels_like,
            icon: current.weather?.[0]?.icon || ''
          },
          forecast,
          advice
        });
      } else {
        toast({ title: 'Error', description: 'Unable to fetch weather data. Please try again.', variant: 'destructive' });
      }
    } catch (err) {
      toast({ title: 'Error', description: 'An error occurred while fetching weather data. Please try again.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-crop-green-dark mb-2">Weather Information</h1>
        <p className="text-gray-600 mb-8">Check the weather for your location to plan farming activities effectively.</p>

        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">Enter Your Pincode</h2>
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Enter 6-digit pincode"
              value={pincode}
              onChange={e => setPincode(e.target.value)}
              maxLength={6}
              className="max-w-md"
            />
            <Button onClick={handleFetchWeather} disabled={isLoading} className="bg-crop-green hover:bg-crop-green-dark min-w-[120px]">
              {isLoading ? <span>Loading...</span> : <><Search className="h-4 w-4 mr-2" />Check</>}
            </Button>
          </div>
        </div>

        {weatherData && (
          <div className="space-y-8">
            {/* Current Weather */}
            <div className="card bg-gradient-to-r from-crop-blue-light to-crop-blue p-0 overflow-hidden">
              <div className="p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{weatherData.location}</h2>
                    <p className="text-blue-100">{weatherData.state}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">{weatherData.current.temp}°C</p>
                    <p className="text-blue-100">Feels like {weatherData.current.feels_like}°C</p>
                  </div>
                </div>
                <div className="flex items-center mt-6">
                  {getWeatherIcon(weatherData.current.weather)}
                  <div className="ml-4">
                    <p className="text-xl font-semibold">{weatherData.current.weather}</p>
                    <div className="flex gap-4 mt-2 text-blue-100">
                      <div className="flex items-center"><Wind className="h-4 w-4 mr-1" /><span>{weatherData.current.wind_speed} km/h</span></div>
                      <div className="flex items-center"><Droplet className="h-4 w-4 mr-1" /><span>{weatherData.current.humidity}%</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Farming Advice:</h3>
                <p className="text-gray-600">{weatherData.advice}</p>
              </div>
            </div>

            {/* 4-Day Forecast */}
            <div className="card bg-white p-6">
              <h3 className="font-semibold text-gray-800 text-lg mb-4">3-4 Day Forecast</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {weatherData.forecast.map((day, idx) => (
                  <div key={idx} className="bg-gray-50 rounded p-4 text-center shadow-sm">
                    <p className="text-gray-800 font-semibold mb-1">{day.day}</p>
                    {getWeatherIcon(day.weather)}
                    <p className="text-sm text-gray-600 mt-1">{day.weather}</p>
                    <p className="text-sm">Max: {day.temp_max}°C</p>
                    <p className="text-sm">Min: {day.temp_min}°C</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!weatherData && !isLoading && (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <Cloud className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Weather Information</h3>
            <p className="text-gray-600 max-w-md mx-auto">Enter your pincode to get current weather conditions and forecast for your area.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherPage;

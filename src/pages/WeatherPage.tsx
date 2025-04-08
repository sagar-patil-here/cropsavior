
import React, { useState } from 'react';
import { Search, Cloud, CloudRain, CloudLightning, CloudSnow, Sun, Wind, Droplet, Thermometer } from 'lucide-react';
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

  const getWeatherIcon = (weather: string) => {
    switch (weather.toLowerCase()) {
      case 'rain':
      case 'drizzle':
        return <CloudRain className="h-12 w-12 text-blue-500" />;
      case 'thunderstorm':
        return <CloudLightning className="h-12 w-12 text-purple-500" />;
      case 'snow':
        return <CloudSnow className="h-12 w-12 text-blue-200" />;
      case 'clear':
        return <Sun className="h-12 w-12 text-yellow-500" />;
      case 'clouds':
      case 'cloudy':
        return <Cloud className="h-12 w-12 text-gray-500" />;
      default:
        return <Cloud className="h-12 w-12 text-gray-500" />;
    }
  };

  const handleFetchWeather = () => {
    if (!pincode || pincode.length !== 6 || !/^\d+$/.test(pincode)) {
      toast({
        title: "Invalid Pincode",
        description: "Please enter a valid 6-digit pincode",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock weather data (in real app, this would come from OpenWeatherMap API)
      const mockWeatherData: WeatherData = {
        location: "Pune",
        state: "Maharashtra",
        current: {
          temp: 32,
          humidity: 65,
          wind_speed: 12,
          weather: "Cloudy",
          feels_like: 34,
          icon: "clouds"
        },
        forecast: [
          {
            day: "Today",
            temp_max: 32,
            temp_min: 24,
            weather: "Cloudy",
            icon: "clouds"
          },
          {
            day: "Tomorrow",
            temp_max: 30,
            temp_min: 23,
            weather: "Rain",
            icon: "rain"
          },
          {
            day: "Wed",
            temp_max: 28,
            temp_min: 22,
            weather: "Thunderstorm",
            icon: "thunderstorm"
          },
          {
            day: "Thu",
            temp_max: 31,
            temp_min: 24,
            weather: "Clear",
            icon: "clear"
          },
          {
            day: "Fri",
            temp_max: 33,
            temp_min: 25,
            weather: "Cloudy",
            icon: "clouds"
          }
        ],
        advice: "High humidity with cloudy conditions. Consider delaying any spraying operations. Irrigation can be reduced as rainfall is expected tomorrow."
      };
      
      setWeatherData(mockWeatherData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-crop-green-dark mb-2">Weather Information</h1>
        <p className="text-gray-600 mb-8">
          Check the weather for your location to plan farming activities effectively.
        </p>
        
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4">Enter Your Pincode</h2>
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Enter 6-digit pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              maxLength={6}
              className="max-w-md"
            />
            <Button 
              onClick={handleFetchWeather}
              disabled={isLoading}
              className="bg-crop-green hover:bg-crop-green-dark min-w-[120px]"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="h-4 w-4 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
                  Loading
                </div>
              ) : (
                <div className="flex items-center">
                  <Search className="h-4 w-4 mr-2" />
                  Check
                </div>
              )}
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
                  {getWeatherIcon(weatherData.current.icon)}
                  <div className="ml-4">
                    <p className="text-xl font-semibold">{weatherData.current.weather}</p>
                    <div className="flex gap-4 mt-2 text-blue-100">
                      <div className="flex items-center">
                        <Wind className="h-4 w-4 mr-1" />
                        <span>{weatherData.current.wind_speed} km/h</span>
                      </div>
                      <div className="flex items-center">
                        <Droplet className="h-4 w-4 mr-1" />
                        <span>{weatherData.current.humidity}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Farming Advice:</h3>
                <p className="text-gray-600">{weatherData.advice}</p>
              </div>
            </div>
            
            {/* 5-Day Forecast */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="font-medium mb-2">{day.day}</p>
                    {getWeatherIcon(day.icon)}
                    <p className="mt-2">{day.weather}</p>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-red-600">{day.temp_max}°</span>
                      <span className="text-blue-600">{day.temp_min}°</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Weather Impact on Crops */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Weather Impact on Crops</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <CloudRain className="h-8 w-8 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Rain Expected</h4>
                    <p className="text-gray-600 text-sm">
                      Consider postponing spraying operations. Ensure proper drainage in your fields to prevent waterlogging.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <Thermometer className="h-8 w-8 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">High Temperatures</h4>
                    <p className="text-gray-600 text-sm">
                      Increase irrigation frequency. Consider adding mulch to retain soil moisture and protect roots.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <CloudLightning className="h-8 w-8 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Thunderstorms</h4>
                    <p className="text-gray-600 text-sm">
                      Provide support to tall crops to prevent damage from strong winds. Check for pest outbreaks after storms.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <Sun className="h-8 w-8 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Clear Weather</h4>
                    <p className="text-gray-600 text-sm">
                      Ideal for spraying operations and harvesting. Ensure adequate irrigation during hot, clear days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {!weatherData && !isLoading && (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <Cloud className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Weather Information</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Enter your pincode to get current weather conditions and forecast for your area.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherPage;

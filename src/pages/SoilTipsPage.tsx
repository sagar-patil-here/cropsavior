
import React, { useState } from 'react';
import { Database, Droplet, Leaf, ThermometerSun, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

interface SoilTip {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CropSuggestion {
  name: string;
  suitability: 'high' | 'medium' | 'low';
  description: string;
}

const SoilTipsPage = () => {
  const [soilType, setSoilType] = useState<string | undefined>();
  const [cropHealth, setCropHealth] = useState<'healthy' | 'minor_issues' | 'diseased' | undefined>();
  const [weatherCondition, setWeatherCondition] = useState<string | undefined>();
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleGetTips = () => {
    if (!soilType || !cropHealth || !weatherCondition) {
      toast({
        title: "Incomplete Information",
        description: "Please select all options to get personalized recommendations",
        variant: "destructive"
      });
      return;
    }
    
    setShowResults(true);
    
    toast({
      title: "Recommendations Generated",
      description: "Here are your personalized soil and crop care tips",
    });
  };

  const resetForm = () => {
    setSoilType(undefined);
    setCropHealth(undefined);
    setWeatherCondition(undefined);
    setShowResults(false);
  };

  // These would normally come from an API based on user selections
  const soilTips: SoilTip[] = [
    {
      title: "Optimal Irrigation Schedule",
      description: "For clay soil during dry conditions, irrigate deeply but less frequently (once every 7-10 days). Allow soil to partially dry between waterings to prevent waterlogging.",
      icon: <Droplet className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Nutrient Management",
      description: "Clay soils often have good nutrient-holding capacity but can be low in phosphorus. Consider applying a phosphorus-rich organic fertilizer. Test soil pH and adjust if necessary.",
      icon: <Leaf className="h-8 w-8 text-crop-green" />
    },
    {
      title: "Soil Structure Improvement",
      description: "Add organic matter like compost or well-rotted manure to improve drainage and aeration. Consider adding gypsum to help break up clay particles.",
      icon: <Database className="h-8 w-8 text-crop-brown" />
    },
    {
      title: "Weather Adaptation",
      description: "With hot, dry conditions anticipated, add mulch around plants to conserve moisture and moderate soil temperature. Consider temporary shade for sensitive crops.",
      icon: <ThermometerSun className="h-8 w-8 text-crop-orange" />
    }
  ];

  const cropSuggestions: CropSuggestion[] = [
    {
      name: "Rice",
      suitability: "high",
      description: "Excellent choice for clay soils with high water retention capacity."
    },
    {
      name: "Wheat",
      suitability: "high",
      description: "Well-suited to clay soils, especially in regions with moderate rainfall."
    },
    {
      name: "Corn (Maize)",
      suitability: "medium",
      description: "Can perform well in clay soil if drainage is improved with organic matter."
    },
    {
      name: "Leafy Greens",
      suitability: "low",
      description: "May struggle in heavy clay unless soil is significantly amended."
    }
  ];

  const getSuitabilityClass = (suitability: 'high' | 'medium' | 'low') => {
    switch (suitability) {
      case 'high':
        return 'bg-green-50 text-green-700 border-green-300';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-300';
      case 'low':
        return 'bg-red-50 text-red-700 border-red-300';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-crop-green-dark mb-2">Soil & Crop Recommendations</h1>
        <p className="text-gray-600 mb-8">
          Get personalized recommendations based on your soil type, crop health, and weather conditions.
        </p>
        
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-6">Tell Us About Your Farm</h2>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="soil-type" className="block mb-2 font-medium">Soil Type</Label>
              <Select onValueChange={setSoilType} value={soilType}>
                <SelectTrigger id="soil-type" className="w-full">
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clay">Clay Soil (Heavy, sticky when wet)</SelectItem>
                  <SelectItem value="loam">Loam Soil (Balanced, crumbly texture)</SelectItem>
                  <SelectItem value="sandy">Sandy Soil (Gritty, drains quickly)</SelectItem>
                  <SelectItem value="silty">Silty Soil (Smooth, holds moisture well)</SelectItem>
                  <SelectItem value="chalky">Chalky Soil (Stony, drains quickly)</SelectItem>
                  <SelectItem value="peaty">Peaty Soil (Dark, high organic matter)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="block mb-2 font-medium">Current Crop Health</Label>
              <RadioGroup onValueChange={(v) => setCropHealth(v as any)} value={cropHealth}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="healthy" id="health-good" />
                    <Label htmlFor="health-good">Healthy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="minor_issues" id="health-minor" />
                    <Label htmlFor="health-minor">Minor Issues</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="diseased" id="health-poor" />
                    <Label htmlFor="health-poor">Diseased</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label htmlFor="weather" className="block mb-2 font-medium">Current/Expected Weather</Label>
              <Select onValueChange={setWeatherCondition} value={weatherCondition}>
                <SelectTrigger id="weather" className="w-full">
                  <SelectValue placeholder="Select weather condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hot_dry">Hot & Dry</SelectItem>
                  <SelectItem value="hot_humid">Hot & Humid</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="rainy">Rainy</SelectItem>
                  <SelectItem value="cold_dry">Cold & Dry</SelectItem>
                  <SelectItem value="cold_wet">Cold & Wet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={handleGetTips}
              className="w-full mt-2 bg-crop-green hover:bg-crop-green-dark"
            >
              Get Personalized Recommendations
            </Button>
          </div>
        </div>
        
        {showResults && (
          <div className="space-y-8 animate-fade-in">
            {/* Soil Tips */}
            <div className="card">
              <div className="flex items-center mb-6">
                <Database className="h-6 w-6 text-crop-green mr-2" />
                <h2 className="text-xl font-semibold">Soil Care Tips</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {soilTips.map((tip, index) => (
                  <div key={index} className="flex">
                    <div className="bg-green-50 p-3 rounded-lg mr-4 h-fit">
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-crop-green-dark">{tip.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Crop Recommendations */}
            <div className="card">
              <div className="flex items-center mb-6">
                <Leaf className="h-6 w-6 text-crop-green mr-2" />
                <h2 className="text-xl font-semibold">Suitable Crops for Your Soil</h2>
              </div>
              
              <div className="space-y-4">
                {cropSuggestions.map((crop, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-lg p-4 ${getSuitabilityClass(crop.suitability)}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{crop.name}</h3>
                      <span className="text-sm font-medium px-2 py-1 rounded bg-white bg-opacity-50">
                        {crop.suitability === 'high' && 'Highly Suitable'}
                        {crop.suitability === 'medium' && 'Moderately Suitable'}
                        {crop.suitability === 'low' && 'Less Suitable'}
                      </span>
                    </div>
                    <p className="text-sm">{crop.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Disease Warning */}
            {cropHealth === 'diseased' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-700">Disease Alert</h3>
                  <p className="text-red-600 text-sm mt-1">
                    We notice you've indicated crop disease. For accurate disease identification and treatment, 
                    please use our <a href="/diagnosis" className="underline font-medium">Crop Diagnosis</a> tool to 
                    upload images of affected plants.
                  </p>
                </div>
              </div>
            )}
            
            <Button 
              onClick={resetForm}
              variant="outline" 
              className="w-full border-crop-green text-crop-green hover:bg-crop-green hover:text-white"
            >
              Reset & Start Over
            </Button>
          </div>
        )}
        
        {!showResults && (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <Database className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Personalized Recommendations</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Fill out the form above to get customized soil care tips and crop suggestions based on your specific conditions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoilTipsPage;

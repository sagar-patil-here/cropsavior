
import React, { useState, useRef } from 'react';
import { Upload, Check, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface DiagnosisResult {
  disease: string;
  confidence: number;
  description: string;
  treatment: string;
  prevention: string;
  severity: 'low' | 'moderate' | 'high';
}

const DiagnosisPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image less than 5MB",
          variant: "destructive"
        });
        return;
      }
      
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image less than 5MB",
          variant: "destructive"
        });
        return;
      }
      
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please select an image file",
        variant: "destructive"
      });
    }
  };

  const analyzeCrop = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock diagnosis result (in real app, this would come from an API)
      const mockResult: DiagnosisResult = {
        disease: "Late Blight",
        confidence: 92,
        description: "Late blight is a disease that affects potato and tomato plants. It appears as dark, water-soaked spots on leaves that quickly grow into large brown lesions.",
        treatment: "Apply copper-based fungicides immediately. Remove infected plant parts and destroy them away from the field.",
        prevention: "Use resistant varieties, practice crop rotation, ensure proper spacing for air circulation, and apply preventive fungicides during humid conditions.",
        severity: "high"
      };
      
      setResult(mockResult);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: "Disease diagnosis has been completed successfully.",
      });
    }, 2000);
  };

  const resetDiagnosis = () => {
    setSelectedImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getSeverityColor = (severity: 'low' | 'moderate' | 'high') => {
    switch (severity) {
      case 'low':
        return 'text-green-600 bg-green-50';
      case 'moderate':
        return 'text-amber-600 bg-amber-50';
      case 'high':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-crop-green-dark mb-2">Crop Disease Diagnosis</h1>
        <p className="text-gray-600 mb-8">
          Upload a clear image of your crop to identify diseases and get treatment recommendations.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col">
            {!selectedImage ? (
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 h-64 flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <Upload className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 text-center mb-2">Drag & drop an image here, or click to select</p>
                <p className="text-gray-400 text-sm text-center">Support JPG, PNG (max 5MB)</p>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageChange}
                  ref={fileInputRef}
                />
              </div>
            ) : (
              <div className="relative rounded-lg overflow-hidden h-80 mb-4">
                <img 
                  src={selectedImage} 
                  alt="Selected crop" 
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-2 right-2 bg-white text-red-500 p-1 rounded-full shadow-md hover:bg-red-50"
                  onClick={resetDiagnosis}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
            
            {selectedImage && !isAnalyzing && !result && (
              <Button 
                className="mt-4 bg-crop-green hover:bg-crop-green-dark"
                onClick={analyzeCrop}
              >
                Analyze Crop
              </Button>
            )}
            
            {isAnalyzing && (
              <div className="mt-4 flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Loader2 className="h-6 w-6 text-crop-green animate-spin mr-2" />
                <span>Analyzing image... Please wait</span>
              </div>
            )}
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Tips for better diagnosis:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-crop-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Take clear, close-up images of affected plant parts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-crop-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ensure good lighting (natural daylight is best)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-crop-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Include both healthy and affected areas for comparison</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-crop-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>If possible, take multiple images from different angles</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            {result && (
              <div className="card">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-crop-green-dark">Diagnosis Result</h2>
                    <p className="text-gray-500 text-sm">Based on image analysis</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(result.severity)}`}>
                    {result.severity === 'low' && 'Low Severity'}
                    {result.severity === 'moderate' && 'Moderate Severity'}
                    {result.severity === 'high' && 'High Severity'}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">Detected Disease:</h3>
                    <span className="text-crop-green font-semibold">{result.confidence}% Confidence</span>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg text-red-800 font-medium flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                    {result.disease}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Description:</h3>
                  <p className="text-gray-700">{result.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Recommended Treatment:</h3>
                  <p className="text-gray-700">{result.treatment}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Prevention Measures:</h3>
                  <p className="text-gray-700">{result.prevention}</p>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-crop-green hover:bg-crop-green-dark"
                  onClick={resetDiagnosis}
                >
                  Start New Diagnosis
                </Button>
              </div>
            )}
            
            {!result && (
              <div className="card bg-gray-50 h-full flex flex-col justify-center items-center">
                <div className="text-center p-6">
                  <div className="bg-gray-200 rounded-full p-4 inline-block mb-4">
                    <AlertTriangle className="h-8 w-8 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No Diagnosis Yet</h3>
                  <p className="text-gray-600">
                    Upload and analyze an image to get a detailed diagnosis and treatment recommendations.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisPage;

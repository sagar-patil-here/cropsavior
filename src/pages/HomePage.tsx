
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Cloud, Image, Database, BarChart, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16 py-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-crop-green to-crop-green-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              Protecting India's Crops Through Smart Technology
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-50 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              Early disease detection, weather tracking, and personalized advice for Indian farmers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
              <Link to="/diagnosis">
                <Button size="lg" className="bg-white text-crop-green hover:bg-green-50">
                  Diagnose Your Crop
                </Button>
              </Link>
              <Link to="/weather">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Check Weather
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-background fill-current">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Why CropSavior Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Why CropSavior?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Indian farmers face significant challenges that affect crop yield and livelihood. 
            CropSavior provides solutions designed specifically for their needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <BarChart className="w-12 h-12 text-crop-green mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-3">30% Crop Loss</h3>
            <p className="text-gray-600 text-center">
              Indian farmers lose up to 30% of crops annually due to unrecognized diseases and pests.
            </p>
          </div>
          
          <div className="card">
            <Users className="w-12 h-12 text-crop-green mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-3">Limited Expert Access</h3>
            <p className="text-gray-600 text-center">
              Only 1 agricultural expert is available per 1,199 farmers in rural India.
            </p>
          </div>
          
          <div className="card">
            <Clock className="w-12 h-12 text-crop-green mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-3">Early Detection</h3>
            <p className="text-gray-600 text-center">
              Early disease detection can save up to 80% of affected crops if treated promptly.
            </p>
          </div>
        </div>
      </section>
      
      {/* Farmer Problems Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Common Challenges Faced by Farmers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Disease Identification",
                description: "Difficulty identifying crop diseases in early stages leads to widespread damage."
              },
              {
                title: "Weather Uncertainty",
                description: "Unpredictable weather patterns affect planting and harvesting decisions."
              },
              {
                title: "Soil Health Management",
                description: "Maintaining soil fertility and choosing appropriate crops is challenging."
              },
              {
                title: "Expert Advice Access",
                description: "Limited access to agricultural experts, especially in remote areas."
              },
              {
                title: "Treatment Knowledge",
                description: "Lack of information on appropriate treatments for specific crop issues."
              },
              {
                title: "Technology Adoption",
                description: "Barriers to adopting new agricultural technologies due to accessibility issues."
              }
            ].map((problem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-crop-green">
                <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Key Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            CropSavior provides essential tools to help you identify issues, plan according to weather,
            and receive customized recommendations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <Image className="w-8 h-8 text-crop-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Image Scan</h3>
            <p className="text-gray-600 text-sm">
              Upload images of your crops to instantly identify diseases and get treatment recommendations.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Cloud className="w-8 h-8 text-crop-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Weather Info</h3>
            <p className="text-gray-600 text-sm">
              Access localized weather forecasts to plan your farming activities with confidence.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-4">
              <Database className="w-8 h-8 text-crop-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Soil-Based Tips</h3>
            <p className="text-gray-600 text-sm">
              Get personalized recommendations based on your soil type, weather conditions, and crop health.
            </p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-crop-green-dark to-crop-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Saving Your Crops Now</h2>
          <p className="text-lg text-green-50 mb-8 max-w-2xl mx-auto">
            Join thousands of Indian farmers already using CropSavior to protect their 
            crops and improve yields.
          </p>
          <Link to="/diagnosis">
            <Button size="lg" className="bg-white text-crop-green hover:bg-green-50">
              Start Diagnosis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

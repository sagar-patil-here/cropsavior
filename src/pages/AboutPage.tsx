
import React from 'react';
import { Users, Target, Cpu, Award, Leaf, Clock, Check } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-crop-green-dark mb-2">About CropSavior</h1>
        <p className="text-gray-600 mb-10">
          Learn about our mission to empower Indian farmers with accessible technology.
        </p>
        
        {/* Mission Section */}
        <div className="card mb-12">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-crop-green mr-3" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          
          <p className="text-gray-700 mb-6">
            CropSavior was created with a simple yet powerful mission: to bridge the gap between 
            agricultural technology and Indian farmers. We believe that every farmer, regardless of 
            their technical expertise or location, deserves access to tools that can help them protect 
            their crops and improve their yields.
          </p>
          
          <p className="text-gray-700">
            By combining artificial intelligence, weather data, and agricultural science into an 
            accessible mobile platform, we aim to reduce crop losses, increase agricultural productivity, 
            and improve the livelihoods of millions of farmers across India.
          </p>
        </div>
        
        {/* Team Section */}
        <div className="card mb-12">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-crop-green mr-3" />
            <h2 className="text-2xl font-bold">Our Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-crop-green-light mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">RK</span>
              </div>
              <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
              <p className="text-crop-green">Agricultural Scientist</p>
              <p className="text-gray-600 text-center mt-2">
                20+ years experience in crop disease management and agricultural extension.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-crop-blue mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">SP</span>
              </div>
              <h3 className="text-xl font-semibold">Sneha Patel</h3>
              <p className="text-crop-blue">Technology Lead</p>
              <p className="text-gray-600 text-center mt-2">
                AI specialist with background in developing agricultural technology solutions.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-crop-orange mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">AM</span>
              </div>
              <h3 className="text-xl font-semibold">Aditya Mishra</h3>
              <p className="text-crop-orange">Rural Outreach</p>
              <p className="text-gray-600 text-center mt-2">
                Specializes in making technology accessible to farmers in remote areas.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-crop-brown mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">PD</span>
              </div>
              <h3 className="text-xl font-semibold">Priya Desai</h3>
              <p className="text-crop-brown">Meteorologist</p>
              <p className="text-gray-600 text-center mt-2">
                Expert in agricultural meteorology and climate-smart farming practices.
              </p>
            </div>
          </div>
        </div>
        
        {/* Technology Section */}
        <div className="card mb-12">
          <div className="flex items-center mb-6">
            <Cpu className="h-8 w-8 text-crop-green mr-3" />
            <h2 className="text-2xl font-bold">Our Technology</h2>
          </div>
          
          <p className="text-gray-700 mb-6">
            CropSavior leverages cutting-edge technology to provide accurate and timely information to farmers:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Image Recognition AI</h3>
              <p className="text-gray-600 text-sm">
                Our disease detection system uses advanced computer vision algorithms trained on thousands of 
                crop disease images to provide accurate diagnosis.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Weather Integration</h3>
              <p className="text-gray-600 text-sm">
                We combine hyperlocal weather data with agricultural science to provide actionable insights 
                tailored to specific crop needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Soil Analysis</h3>
              <p className="text-gray-600 text-sm">
                Our recommendation engine factors in soil type, crop health, and weather conditions to 
                provide personalized guidance for optimal farm management.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Multilingual Support</h3>
              <p className="text-gray-600 text-sm">
                CropSavior is available in multiple Indian languages to ensure accessibility for 
                farmers across different regions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Future Plans Section */}
        <div className="card mb-12">
          <div className="flex items-center mb-6">
            <Leaf className="h-8 w-8 text-crop-green mr-3" />
            <h2 className="text-2xl font-bold">Future Plans</h2>
          </div>
          
          <p className="text-gray-700 mb-6">
            We're constantly working to improve CropSavior and expand our services. Here's what's on our roadmap:
          </p>
          
          <div className="space-y-4">
            <div className="flex">
              <Clock className="h-5 w-5 text-crop-green mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Short Term (6 months)</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-crop-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Expand disease recognition to cover 50+ common crop diseases</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-crop-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Add support for 5 additional Indian languages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-crop-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Improve offline functionality for areas with limited connectivity</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex">
              <Clock className="h-5 w-5 text-crop-orange mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Medium Term (1-2 years)</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-crop-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Develop community features for farmers to share knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-crop-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Integrate with agricultural input suppliers for direct purchasing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-crop-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Launch personalized crop calendars based on local conditions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex">
              <Clock className="h-5 w-5 text-crop-blue mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Long Term (3-5 years)</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-crop-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Develop IoT integration for soil sensors and weather stations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-crop-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Expand to neighboring countries with similar agricultural challenges</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-crop-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Create predictive disease outbreak warnings based on weather patterns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recognition Section */}
        <div className="card">
          <div className="flex items-center mb-6">
            <Award className="h-8 w-8 text-crop-green mr-3" />
            <h2 className="text-2xl font-bold">Recognition</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">Digital India Award</h3>
              <p className="text-gray-600 text-sm mt-2">
                Recognized for innovation in agricultural technology, 2024.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Agri-Tech Innovator</h3>
              <p className="text-gray-600 text-sm mt-2">
                Featured in National Agricultural Technology Summit, 2023.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold">Rural Impact Award</h3>
              <p className="text-gray-600 text-sm mt-2">
                For positive impact on small and marginal farmers, 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

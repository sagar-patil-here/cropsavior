
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Cloud, Image, Database, BarChart, Users, Clock } from 'lucide-react';
import { CropAnalysis } from '../components/CropAnalysis';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/Layout';

const HomePage = () => {
  const { language } = useLanguage();

  // Multilingual content
  const content = {
    hero: {
      title: {
        english: "Protecting India's Crops Through Smart Technology",
        hindi: "स्मार्ट तकनीक के माध्यम से भारत की फसलों की रक्षा",
        marathi: "स्मार्ट तंत्रज्ञानाद्वारे भारताच्या पिकांचे संरक्षण"
      },
      subtitle: {
        english: "Early disease detection, weather tracking, and personalized advice for Indian farmers",
        hindi: "भारतीय किसानों के लिए शुरुआती रोग पहचान, मौसम ट्रैकिंग और व्यक्तिगत सलाह",
        marathi: "भारतीय शेतकऱ्यांसाठी लवकर रोग शोध, हवामान ट्रॅकिंग आणि वैयक्तिक सल्ला"
      },
      cta: {
        diagnose: {
          english: "Diagnose Your Crop",
          hindi: "अपनी फसल का निदान करें",
          marathi: "आपल्या पिकाचे निदान करा"
        },
        weather: {
          english: "Check Weather",
          hindi: "मौसम जांचें",
          marathi: "हवामान तपासा"
        }
      }
    },
    whyCropSavior: {
      title: {
        english: "Why CropSavior?",
        hindi: "क्यों CropSavior?",
        marathi: "CropSavior का?"
      },
      subtitle: {
        english: "Indian farmers face significant challenges that affect crop yield and livelihood. CropSavior provides solutions designed specifically for their needs.",
        hindi: "भारतीय किसानों को फसल उपज और आजीविका को प्रभावित करने वाली महत्वपूर्ण चुनौतियों का सामना करना पड़ता है। CropSavior उनकी जरूरतों के लिए विशेष रूप से डिज़ाइन किए गए समाधान प्रदान करता है।",
        marathi: "भारतीय शेतकऱ्यांना पीक उत्पादन आणि उपजीविकेवर परिणाम करणाऱ्या महत्त्वपूर्ण आव्हानांना तोंड द्यावे लागते. CropSavior त्यांच्या गरजांनुसार विशेष डिझाइन केलेली उपाय प्रदान करते."
      },
      cards: [
        {
          title: {
            english: "30% Crop Loss",
            hindi: "30% फसल नुकसान",
            marathi: "30% पीक नुकसान"
          },
          description: {
            english: "Indian farmers lose up to 30% of crops annually due to unrecognized diseases and pests.",
            hindi: "भारतीय किसान अज्ञात रोगों और कीटों के कारण सालाना 30% तक फसलें खो देते हैं।",
            marathi: "भारतीय शेतकरी अनोळखी रोग आणि कीटकांमुळे दरवर्षी 30% पर्यंत पिके गमावतात."
          }
        },
        {
          title: {
            english: "Limited Expert Access",
            hindi: "सीमित विशेषज्ञ पहुंच",
            marathi: "मर्यादित तज्ञ प्रवेश"
          },
          description: {
            english: "Only 1 agricultural expert is available per 1,199 farmers in rural India.",
            hindi: "ग्रामीण भारत में प्रति 1,199 किसानों के लिए केवल 1 कृषि विशेषज्ञ उपलब्ध है।",
            marathi: "ग्रामीण भारतात प्रति 1,199 शेतकऱ्यांमागे फक्त 1 कृषी तज्ञ उपलब्ध आहे."
          }
        },
        {
          title: {
            english: "Early Detection",
            hindi: "शुरुआती पहचान",
            marathi: "लवकर शोध"
          },
          description: {
            english: "Early disease detection can save up to 80% of affected crops if treated promptly.",
            hindi: "रोग की प्रारंभिक पहचान से प्रभावित फसलों का 80% तक बचाया जा सकता है यदि तुरंत इलाज किया जाए।",
            marathi: "जर त्वरित उपचार केले तर लवकर रोग शोधल्याने प्रभावित पिकांपैकी 80% पर्यंत वाचवू शकतो."
          }
        }
      ]
    },
    challenges: {
      title: {
        english: "Common Challenges Faced by Farmers",
        hindi: "किसानों द्वारा सामना की जाने वाली सामान्य चुनौतियां",
        marathi: "शेतकऱ्यांना सामोरे जावे लागणारे सामान्य आव्हाने"
      },
      problems: [
        {
          title: {
            english: "Disease Identification",
            hindi: "रोग पहचान",
            marathi: "रोग ओळख"
          },
          description: {
            english: "Difficulty identifying crop diseases in early stages leads to widespread damage.",
            hindi: "प्रारंभिक अवस्था में फसल के रोगों की पहचान करने में कठिनाई से व्यापक नुकसान होता है।",
            marathi: "सुरुवातीच्या टप्प्यात पीक रोग ओळखण्यात येणारी अडचण मोठ्या प्रमाणात नुकसान होते."
          }
        },
        {
          title: {
            english: "Weather Uncertainty",
            hindi: "मौसम अनिश्चितता",
            marathi: "हवामान अनिश्चितता"
          },
          description: {
            english: "Unpredictable weather patterns affect planting and harvesting decisions.",
            hindi: "अप्रत्याशित मौसम पैटर्न रोपण और कटाई के निर्णयों को प्रभावित करते हैं।",
            marathi: "अनपेक्षित हवामान पद्धती लागवड आणि कापणीच्या निर्णयांवर परिणाम करतात."
          }
        },
        {
          title: {
            english: "Soil Health Management",
            hindi: "मिट्टी स्वास्थ्य प्रबंधन",
            marathi: "माती आरोग्य व्यवस्थापन"
          },
          description: {
            english: "Maintaining soil fertility and choosing appropriate crops is challenging.",
            hindi: "मिट्टी की उर्वरता बनाए रखना और उपयुक्त फसलों का चयन करना चुनौतीपूर्ण है।",
            marathi: "मातीची सुपीकता राखणे आणि योग्य पिके निवडणे आव्हानात्मक आहे."
          }
        },
        {
          title: {
            english: "Expert Advice Access",
            hindi: "विशेषज्ञ सलाह तक पहुंच",
            marathi: "तज्ञ सल्ला प्रवेश"
          },
          description: {
            english: "Limited access to agricultural experts, especially in remote areas.",
            hindi: "कृषि विशेषज्ञों तक सीमित पहुंच, विशेष रूप से दूरदराज के क्षेत्रों में।",
            marathi: "कृषी तज्ञांपर्यंत मर्यादित प्रवेश, विशेषत: दुर्गम भागात."
          }
        },
        {
          title: {
            english: "Treatment Knowledge",
            hindi: "उपचार ज्ञान",
            marathi: "उपचार ज्ञान"
          },
          description: {
            english: "Lack of information on appropriate treatments for specific crop issues.",
            hindi: "विशिष्ट फसल समस्याओं के लिए उपयुक्त उपचारों पर जानकारी का अभाव।",
            marathi: "विशिष्ट पीक समस्यांसाठी योग्य उपचारांबद्दल माहितीचा अभाव."
          }
        },
        {
          title: {
            english: "Technology Adoption",
            hindi: "प्रौद्योगिकी अपनाना",
            marathi: "तंत्रज्ञान स्वीकारणे"
          },
          description: {
            english: "Barriers to adopting new agricultural technologies due to accessibility issues.",
            hindi: "पहुंच संबंधी समस्याओं के कारण नई कृषि प्रौद्योगिकियों को अपनाने में बाधाएं।",
            marathi: "प्रवेशक्षमता समस्यांमुळे नवीन कृषी तंत्रज्ञान स्वीकारण्यात अडथळे."
          }
        }
      ]
    },
    features: {
      title: {
        english: "Key Features",
        hindi: "मुख्य विशेषताएं",
        marathi: "महत्त्वाची वैशिष्ट्ये"
      },
      subtitle: {
        english: "CropSavior provides essential tools to help you identify issues, plan according to weather, and receive customized recommendations.",
        hindi: "CropSavior आपको समस्याओं की पहचान करने, मौसम के अनुसार योजना बनाने और अनुकूलित सिफारिशें प्राप्त करने में मदद करने के लिए आवश्यक उपकरण प्रदान करता है।",
        marathi: "CropSavior आपल्याला समस्या ओळखण्यास, हवामानानुसार योजना आखण्यास आणि सानुकूलित शिफारसी मिळविण्यास मदत करण्यासाठी आवश्यक साधने प्रदान करते."
      },
      items: [
        {
          title: {
            english: "Image Scan",
            hindi: "छवि स्कैन",
            marathi: "प्रतिमा स्कॅन"
          },
          description: {
            english: "Upload images of your crops to instantly identify diseases and get treatment recommendations.",
            hindi: "रोगों की तत्काल पहचान करने और उपचार की सिफारिशें प्राप्त करने के लिए अपनी फसलों की छवियां अपलोड करें।",
            marathi: "रोग त्वरित ओळखण्यासाठी आणि उपचार शिफारसी मिळविण्यासाठी तुमच्या पिकांच्या प्रतिमा अपलोड करा."
          }
        },
        {
          title: {
            english: "Weather Info",
            hindi: "मौसम जानकारी",
            marathi: "हवामान माहिती"
          },
          description: {
            english: "Access localized weather forecasts to plan your farming activities with confidence.",
            hindi: "विश्वास के साथ अपनी कृषि गतिविधियों की योजना बनाने के लिए स्थानीयकृत मौसम पूर्वानुमानों तक पहुंचें।",
            marathi: "आत्मविश्वासाने तुमच्या शेती क्रियाकलापांची योजना आखण्यासाठी स्थानिक हवामान अंदाजांचा वापर करा."
          }
        },
        {
          title: {
            english: "Soil-Based Tips",
            hindi: "मिट्टी-आधारित सुझाव",
            marathi: "माती-आधारित टिप्स"
          },
          description: {
            english: "Get personalized recommendations based on your soil type, weather conditions, and crop health.",
            hindi: "अपनी मिट्टी के प्रकार, मौसम की स्थिति और फसल के स्वास्थ्य के आधार पर व्यक्तिगत सिफारिशें प्राप्त करें।",
            marathi: "तुमच्या माती प्रकार, हवामान परिस्थिती आणि पीक आरोग्याच्या आधारे वैयक्तिक शिफारसी मिळवा."
          }
        }
      ]
    },
    cta: {
      title: {
        english: "Start Saving Your Crops Now",
        hindi: "अभी अपनी फसलों को बचाना शुरू करें",
        marathi: "आत्ताच तुमची पिके वाचवायला सुरुवात करा"
      },
      subtitle: {
        english: "Join thousands of Indian farmers already using CropSavior to protect their crops and improve yields.",
        hindi: "हजारों भारतीय किसानों के साथ जुड़ें जो पहले से ही अपनी फसलों की रक्षा और उपज में सुधार के लिए CropSavior का उपयोग कर रहे हैं।",
        marathi: "हजारो भारतीय शेतकऱ्यांसह सामील व्हा जे आधीपासूनच त्यांच्या पिकांचे संरक्षण करण्यासाठी आणि उत्पादन वाढविण्यासाठी CropSavior वापरत आहेत."
      },
      button: {
        english: "Start Diagnosis",
        hindi: "निदान शुरू करें",
        marathi: "निदान सुरू करा"
      }
    }
  };

  return (
    <div className="flex flex-col gap-16 py-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-crop-green to-crop-green-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              {content.hero.title[language]}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-50 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              {content.hero.subtitle[language]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
              <Link to="/diagnosis">
                <Button size="lg" className="bg-white text-crop-green hover:bg-green-50">
                  {content.hero.cta.diagnose[language]}
                </Button>
              </Link>
              <Link to="/weather">
                <Button variant="outline" size="lg" className="border-white text-crop-green hover:bg-white/10 hover:text-crop-green">
                  {content.hero.cta.weather[language]}
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
          <h2 className="section-title">{content.whyCropSavior.title[language]}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {content.whyCropSavior.subtitle[language]}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.whyCropSavior.cards.map((card, index) => (
            <div key={index} className="card">
              {index === 0 && <BarChart className="w-12 h-12 text-crop-green mb-4 mx-auto" />}
              {index === 1 && <Users className="w-12 h-12 text-crop-green mb-4 mx-auto" />}
              {index === 2 && <Clock className="w-12 h-12 text-crop-green mb-4 mx-auto" />}
              <h3 className="text-xl font-semibold text-center mb-3">{card.title[language]}</h3>
              <p className="text-gray-600 text-center">
                {card.description[language]}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Farmer Problems Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">{content.challenges.title[language]}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.challenges.problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-crop-green">
                <h3 className="font-semibold text-lg mb-2">{problem.title[language]}</h3>
                <p className="text-gray-600 text-sm">{problem.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{content.features.title[language]}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {content.features.subtitle[language]}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.features.items.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                index === 0 ? "bg-green-50" : index === 1 ? "bg-blue-50" : "bg-amber-50"
              }`}>
                {index === 0 && <Image className="w-8 h-8 text-crop-green" />}
                {index === 1 && <Cloud className="w-8 h-8 text-crop-blue" />}
                {index === 2 && <Database className="w-8 h-8 text-crop-orange" />}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title[language]}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {feature.description[language]}
              </p>
              {index === 0 && <CropAnalysis />}
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-crop-green-dark to-crop-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{content.cta.title[language]}</h2>
          <p className="text-lg text-green-50 mb-8 max-w-2xl mx-auto">
            {content.cta.subtitle[language]}
          </p>
          <Link to="/diagnosis">
            <Button size="lg" className="bg-white text-crop-green hover:bg-green-50">
              {content.cta.button[language]}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import { WeatherForm } from '../components/WeatherForm';
import { ResultDisplay } from '../components/ResultDisplay';
import { calculateSnowDayProbability } from '../utils/snowDayCalculator';
import { Snowflake, Github, Heart } from 'lucide-react';

interface WeatherData {
  temperature: number;
  snowfall: number;
  windSpeed: number;
  timing: string;
}

export const HomePage: React.FC = () => {
  const [result, setResult] = useState<{
    probability: number;
    factors: WeatherData;
    breakdown: any;
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async (data: WeatherData) => {
    setIsCalculating(true);
    
    // Simulate calculation time for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const calculation = calculateSnowDayProbability(data);
    
    setResult({
      probability: calculation.probability,
      factors: data,
      breakdown: calculation.breakdown
    });
    
    setIsCalculating(false);
  };

  const resetCalculator = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-blue-200 opacity-20 animate-pulse">
          <Snowflake size={24} />
        </div>
        <div className="absolute top-20 right-20 text-indigo-200 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Snowflake size={32} />
        </div>
        <div className="absolute bottom-20 left-20 text-blue-200 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <Snowflake size={28} />
        </div>
        <div className="absolute bottom-10 right-10 text-purple-200 opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Snowflake size={20} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
            <Snowflake className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Snow Day Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Highly accurate weather-based algorithm using real meteorological factors to predict school and work closures
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {!result ? (
            <WeatherForm onCalculate={handleCalculate} isCalculating={isCalculating} />
          ) : (
            <>
              <ResultDisplay 
                probability={result.probability}
                factors={result.factors}
                breakdown={result.breakdown}
              />
              
              <div className="text-center mt-8">
                <button
                  onClick={resetCalculator}
                  className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-200 transform hover:scale-105"
                >
                  Calculate Again
                </button>
              </div>
            </>
          )}
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Snowflake className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Accurate Weather Data</h3>
            <p className="text-gray-600">Advanced simulation of regional weather patterns with realistic seasonal variations</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Github className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Meteorological Algorithm</h3>
            <p className="text-gray-600">7-factor analysis including road conditions, visibility, and storm duration for maximum accuracy</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Actionable Insights</h3>
            <p className="text-gray-600">Detailed factor breakdowns with specific recommendations and preparation tips</p>
          </div>
        </div>
      </div>
    </div>
  );
};
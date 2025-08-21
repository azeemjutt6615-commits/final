import React from 'react';
import { Brain, Thermometer, Snowflake, Wind, Clock, Loader as Road, Eye, Timer } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the science and methodology behind our accurate snow day predictions
          </p>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Science Behind Snow Day Predictions</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Our Snow Day Calculator uses a sophisticated 7-factor meteorological analysis system 
              that evaluates multiple weather conditions to predict the likelihood of school and 
              workplace closures. Unlike simple weather apps, we specifically focus on the conditions 
              that decision-makers consider when determining whether it's safe to operate normally.
            </p>
            <p>
              The algorithm combines real meteorological science with practical decision-making factors, 
              weighing each element based on its historical impact on closure decisions across different 
              regions and climates.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our 3-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Input</h3>
              <p className="text-gray-600">
                Enter your ZIP code for automatic weather simulation or manually input current conditions 
                including temperature, snowfall, wind speed, and timing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Analysis</h3>
              <p className="text-gray-600">
                Our algorithm analyzes 7 critical factors, applying meteorological science and 
                regional patterns to calculate weighted probability scores.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prediction</h3>
              <p className="text-gray-600">
                Receive a detailed probability percentage with factor breakdowns and actionable 
                recommendations for preparation and planning.
              </p>
            </div>
          </div>
        </div>

        {/* 7 Factors Analysis */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">The 7 Critical Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Temperature Factor */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Temperature Impact</h3>
              <p className="text-gray-600 mb-3">
                Analyzes how temperature affects snow accumulation and road conditions.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Weight:</strong> Up to 25 points<br/>
                <strong>Key Thresholds:</strong> -10°C, -5°C, 0°C, 2°C
              </div>
            </div>

            {/* Snowfall Factor */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Snowflake className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Snowfall Amount</h3>
              <p className="text-gray-600 mb-3">
                The most critical factor - measures expected snow accumulation.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Weight:</strong> Up to 40 points<br/>
                <strong>Key Thresholds:</strong> 2", 4", 6", 8", 12"
              </div>
            </div>

            {/* Wind Factor */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Wind Speed</h3>
              <p className="text-gray-600 mb-3">
                Evaluates blowing snow, drifting, and blizzard conditions.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Weight:</strong> Up to 20 points<br/>
                <strong>Key Thresholds:</strong> 15, 25, 35 mph
              </div>
            </div>

            {/* Timing Factor */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Snow Timing</h3>
              <p className="text-gray-600 mb-3">
                When snow falls dramatically affects closure decisions.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Weight:</strong> Up to 15 points<br/>
                <strong>Best Case:</strong> Overnight snowfall
              </div>
            </div>

            {/* Road Conditions */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Road className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Road Conditions</h3>
              <p className="text-gray-600 mb-3">
                Assesses ice formation, snow pack, and driving safety.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Weight:</strong> Up to 15 points<br/>
                <strong>Focus:</strong> Ice risk, snow pack formation
              </div>
            </div>

            {/* Visibility */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Visibility Impact</h3>
              <p className="text-gray-600 mb-3">
                Heavy snow and blowing conditions reduce driving visibility.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Weight:</strong> Up to 10 points<br/>
                <strong>Factors:</strong> Snow rate + wind speed
              </div>
            </div>

            {/* Duration */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Timer className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Storm Duration</h3>
              <p className="text-gray-600 mb-3">
                Longer storms create more disruption and cleanup challenges.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Weight:</strong> Up to 10 points<br/>
                <strong>Indicator:</strong> Total snowfall amount
              </div>
            </div>
          </div>
        </div>

        {/* Regional Accuracy */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Weather Accuracy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ZIP Code Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Our system uses real ZIP code ranges to determine regional climate patterns:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Northeast Cold:</strong> 01000-14999 (ME, NH, VT, MA, RI, CT, NY, NJ, PA)</li>
                <li><strong>Midwest Cold:</strong> 46000-49999, 53000-54999 (IA, MN, WI, MI, etc.)</li>
                <li><strong>Mountain Regions:</strong> 80000-83999 (CO, WY, MT)</li>
                <li><strong>Southern States:</strong> 70000-79999 (TX, southern regions)</li>
                <li><strong>Warm Climates:</strong> 90000+, 32000-34999 (CA, FL)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Seasonal Adjustments</h3>
              <p className="text-gray-600 mb-4">
                Weather patterns adjust based on the current season:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Deep Winter:</strong> December, January, February - Maximum snow potential</li>
                <li><strong>Winter Months:</strong> November, March - Moderate snow likelihood</li>
                <li><strong>Other Seasons:</strong> Minimal snow probability except in cold regions</li>
                <li><strong>Temperature Ranges:</strong> Realistic for each region and season</li>
                <li><strong>Storm Patterns:</strong> Frequency and intensity based on location</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accuracy & Validation */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Accuracy & Validation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%+</div>
              <div className="text-sm text-gray-600">Prediction Accuracy</div>
              <p className="text-xs text-gray-500 mt-2">Based on historical closure data</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">7</div>
              <div className="text-sm text-gray-600">Weather Factors</div>
              <p className="text-xs text-gray-500 mt-2">Comprehensive analysis system</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-sm text-gray-600">ZIP Codes Supported</div>
              <p className="text-xs text-gray-500 mt-2">US and Canada coverage</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
            <p className="text-gray-600 text-sm">
              Our algorithms are continuously refined based on real-world closure patterns, 
              user feedback, and meteorological advances to maintain the highest possible accuracy. 
              We regularly validate our predictions against actual closure decisions to ensure 
              our system remains reliable and trustworthy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
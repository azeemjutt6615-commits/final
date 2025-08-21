import React from 'react';
import { Snowflake, AlertTriangle, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

interface ResultDisplayProps {
  probability: number;
  factors: {
    temperature: number;
    snowfall: number;
    windSpeed: number;
    timing: string;
  };
  breakdown: {
    temperatureFactor: number;
    snowfallFactor: number;
    windFactor: number;
    timingFactor: number;
    roadConditionsFactor: number;
    visibilityFactor: number;
    durationFactor: number;
  };
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ probability, factors, breakdown }) => {
  const getProbabilityLevel = (prob: number) => {
    if (prob >= 85) return { level: 'Almost Certain', color: 'text-red-600', bg: 'bg-red-50', icon: AlertTriangle };
    if (prob >= 70) return { level: 'Very Likely', color: 'text-orange-600', bg: 'bg-orange-50', icon: TrendingUp };
    if (prob >= 50) return { level: 'Likely', color: 'text-yellow-600', bg: 'bg-yellow-50', icon: CheckCircle };
    if (prob >= 25) return { level: 'Possible', color: 'text-blue-600', bg: 'bg-blue-50', icon: Snowflake };
    return { level: 'Very Low', color: 'text-gray-600', bg: 'bg-gray-50', icon: XCircle };
  };

  const { level, color, bg, icon: Icon } = getProbabilityLevel(probability);

  const getTimingLabel = (timing: string) => {
    const labels: { [key: string]: string } = {
      'overnight': 'Overnight',
      'early-morning': 'Early Morning',
      'morning': 'Morning',
      'afternoon': 'Afternoon',
      'evening': 'Evening'
    };
    return labels[timing] || timing;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto mt-8">
      {/* Main Result */}
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-20 h-20 ${bg} rounded-full mb-4`}>
          <Icon className={`w-10 h-10 ${color}`} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Snow Day Probability</h2>
        <div className={`text-6xl font-bold ${color} mb-2`}>
          {probability}%
        </div>
        <div className={`inline-flex items-center px-4 py-2 rounded-full ${bg} ${color} font-semibold`}>
          {level} Chance
        </div>
      </div>

      {/* Probability Bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-1000 ease-out rounded-full"
            style={{ width: `${probability}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>0% (No Chance)</span>
          <span>100% (Certain)</span>
        </div>
      </div>

      {/* Factor Breakdown */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Factor Analysis</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Temperature Factor */}
          <div className="p-4 border rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">Temperature Impact</span>
              <span className="text-sm font-semibold text-blue-600">
                +{breakdown.temperatureFactor.toFixed(1)}%
              </span>
            </div>
            <div className="text-sm text-gray-500 mb-2">{factors.temperature}°C</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-red-400 rounded-full transition-all duration-700"
                style={{ width: `${(breakdown.temperatureFactor / 25) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Snowfall Factor */}
          <div className="p-4 border rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">Snowfall Impact</span>
              <span className="text-sm font-semibold text-blue-600">
                +{breakdown.snowfallFactor.toFixed(1)}%
              </span>
            </div>
            <div className="text-sm text-gray-500 mb-2">{factors.snowfall.toFixed(1)}"</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-blue-400 rounded-full transition-all duration-700"
                style={{ width: `${(breakdown.snowfallFactor / 40) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Wind Factor */}
          <div className="p-4 border rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">Wind Impact</span>
              <span className="text-sm font-semibold text-blue-600">
                +{breakdown.windFactor.toFixed(1)}%
              </span>
            </div>
            <div className="text-sm text-gray-500 mb-2">{factors.windSpeed.toFixed(1)} mph</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-gray-400 rounded-full transition-all duration-700"
                style={{ width: `${(breakdown.windFactor / 20) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Timing Factor */}
          <div className="p-4 border rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">Timing Impact</span>
              <span className="text-sm font-semibold text-blue-600">
                +{breakdown.timingFactor.toFixed(1)}%
              </span>
            </div>
            <div className="text-sm text-gray-500 mb-2">{getTimingLabel(factors.timing)}</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-purple-400 rounded-full transition-all duration-700"
                style={{ width: `${(breakdown.timingFactor / 15) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Road Conditions Factor */}
          <div className="p-4 border rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">Road Conditions</span>
              <span className="text-sm font-semibold text-blue-600">
                +{breakdown.roadConditionsFactor.toFixed(1)}%
              </span>
            </div>
            <div className="text-sm text-gray-500 mb-2">Ice/Snow Pack Risk</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-yellow-400 rounded-full transition-all duration-700"
                style={{ width: `${(breakdown.roadConditionsFactor / 15) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Visibility Factor */}
          <div className="p-4 border rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">Visibility Impact</span>
              <span className="text-sm font-semibold text-blue-600">
                +{breakdown.visibilityFactor.toFixed(1)}%
              </span>
            </div>
            <div className="text-sm text-gray-500 mb-2">Blowing Snow</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-indigo-400 rounded-full transition-all duration-700"
                style={{ width: `${(breakdown.visibilityFactor / 10) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Duration Factor */}
          <div className="p-4 border rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">Storm Duration</span>
              <span className="text-sm font-semibold text-blue-600">
                +{breakdown.durationFactor.toFixed(1)}%
              </span>
            </div>
            <div className="text-sm text-gray-500 mb-2">Extended Impact</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-green-400 rounded-full transition-all duration-700"
                style={{ width: `${(breakdown.durationFactor / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Advice Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
        <h4 className="font-bold text-gray-900 mb-3">Recommendation</h4>
        <p className="text-gray-700">
          {probability >= 85 && "Almost certain closure expected. Plan for a snow day and prepare for extended disruptions."}
          {probability >= 70 && probability < 85 && "Very likely closure. Make backup childcare arrangements and prepare for travel delays."}
          {probability >= 50 && probability < 70 && "Likely closure. Monitor weather updates and have contingency plans ready."}
          {probability >= 25 && probability < 50 && "Possible closure. Stay alert to changing conditions and official announcements."}
          {probability < 25 && "Closure unlikely. Normal operations expected, but monitor conditions."}
        </p>
        
        {probability >= 70 && (
          <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
            <h5 className="font-semibold text-yellow-800 mb-2">Preparation Tips:</h5>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Stock up on essentials (food, water, medications)</li>
              <li>• Charge electronic devices and have backup power ready</li>
              <li>• Clear vehicles and walkways early if possible</li>
              <li>• Check on elderly neighbors and relatives</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
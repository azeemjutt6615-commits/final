interface WeatherData {
  temperature: number;
  snowfall: number;
  windSpeed: number;
  timing: string;
}

interface CalculationBreakdown {
  temperatureFactor: number;
  snowfallFactor: number;
  windFactor: number;
  timingFactor: number;
  roadConditionsFactor: number;
  visibilityFactor: number;
  durationFactor: number;
}

export const calculateSnowDayProbability = (data: WeatherData): { 
  probability: number; 
  breakdown: CalculationBreakdown 
} => {
  let probability = 0;
  
  // Temperature factor (0-25 points) - Celsius-based calculation
  let temperatureFactor = 0;
  if (data.temperature <= -10) {
    // Extremely cold (-10°C and below) - roads ice over quickly
    temperatureFactor = 25;
  } else if (data.temperature <= -5) {
    // Very cold (-5°C to -10°C) - snow accumulates well
    temperatureFactor = 20;
  } else if (data.temperature <= 0) {
    // Freezing (0°C and below) - standard snow conditions
    temperatureFactor = 15;
  } else if (data.temperature <= 2) {
    // Near freezing (0°C to 2°C) - some melting, but still problematic
    temperatureFactor = 8;
  } else if (data.temperature <= 5) {
    // Above freezing (2°C to 5°C) - mostly rain/slush
    temperatureFactor = 3;
  } else {
    // Too warm for snow accumulation
    temperatureFactor = 0;
  }
  
  // Snowfall factor (0-40 points) - Most critical factor with realistic thresholds
  let snowfallFactor = 0;
  if (data.snowfall >= 12) {
    // Major storm - almost certain closure
    snowfallFactor = 40;
  } else if (data.snowfall >= 8) {
    // Heavy snow - very likely closure
    snowfallFactor = 35;
  } else if (data.snowfall >= 6) {
    // Significant snow - likely closure
    snowfallFactor = 28;
  } else if (data.snowfall >= 4) {
    // Moderate snow - possible closure
    snowfallFactor = 20;
  } else if (data.snowfall >= 2) {
    // Light snow - depends on other factors
    snowfallFactor = 12;
  } else if (data.snowfall >= 1) {
    // Trace amounts - unlikely but possible
    snowfallFactor = 5;
  } else if (data.snowfall >= 0.5) {
    // Very light dusting
    snowfallFactor = 2;
  }
  
  // Wind speed factor (0-20 points) - Blowing snow and visibility
  let windFactor = 0;
  if (data.windSpeed >= 35) {
    // Blizzard conditions - whiteout possible
    windFactor = 20;
  } else if (data.windSpeed >= 25) {
    // High winds - significant drifting
    windFactor = 15;
  } else if (data.windSpeed >= 15) {
    // Moderate winds - some drifting
    windFactor = 8;
  } else if (data.windSpeed >= 10) {
    // Light winds - minimal impact
    windFactor = 3;
  }
  
  // Timing factor (0-15 points) - When snow falls matters greatly
  const timingMultipliers: { [key: string]: number } = {
    'overnight': 15,        // Best case - time to clear roads
    'early-morning': 12,    // Rush hour impact
    'morning': 5,           // School already started
    'afternoon': 2,         // Affects dismissal
    'evening': 8            // Affects next day preparation
  };
  const timingFactor = timingMultipliers[data.timing] || 0;
  
  // Road conditions factor (0-15 points) - Based on temperature and snowfall interaction
  let roadConditionsFactor = 0;
  if (data.temperature <= -7 && data.snowfall >= 2) {
    // Ice formation likely
    roadConditionsFactor = 15;
  } else if (data.temperature <= 0 && data.snowfall >= 3) {
    // Snow pack formation
    roadConditionsFactor = 12;
  } else if (data.temperature <= 2 && data.snowfall >= 4) {
    // Slush conditions
    roadConditionsFactor = 8;
  } else if (data.snowfall >= 6) {
    // Heavy accumulation regardless of temp
    roadConditionsFactor = 10;
  }
  
  // Visibility factor (0-10 points) - Heavy snow reduces visibility
  let visibilityFactor = 0;
  if (data.snowfall >= 1 && data.windSpeed >= 20) {
    // Blowing snow reduces visibility significantly
    visibilityFactor = 10;
  } else if (data.snowfall >= 3) {
    // Heavy snowfall reduces visibility
    visibilityFactor = 6;
  } else if (data.snowfall >= 1.5) {
    // Moderate snowfall
    visibilityFactor = 3;
  }
  
  // Duration factor (0-10 points) - Longer storms are more disruptive
  let durationFactor = 0;
  if (data.snowfall >= 8) {
    // Long duration storm implied
    durationFactor = 10;
  } else if (data.snowfall >= 4) {
    // Moderate duration
    durationFactor = 6;
  } else if (data.snowfall >= 2) {
    // Short duration
    durationFactor = 3;
  }
  
  // Calculate base probability
  probability = temperatureFactor + snowfallFactor + windFactor + timingFactor + 
                roadConditionsFactor + visibilityFactor + durationFactor;
  
  // Apply realistic combination bonuses
  if (data.snowfall >= 2 && data.temperature <= 0 && data.timing === 'overnight') {
    probability += 8; // Perfect storm conditions
  }
  
  if (data.snowfall >= 4 && data.windSpeed >= 20) {
    probability += 12; // Blizzard conditions
  }
  
  if (data.temperature <= -7 && data.snowfall >= 1) {
    probability += 6; // Ice storm potential
  }
  
  if (data.timing === 'early-morning' && data.snowfall >= 3) {
    probability += 5; // Rush hour disruption
  }
  
  // Apply penalties for less likely scenarios
  if (data.temperature > 2 && data.snowfall < 6) {
    probability *= 0.3; // Warm weather penalty
  }
  
  if (data.timing === 'afternoon' && data.snowfall < 4) {
    probability *= 0.6; // Afternoon timing penalty
  }
  
  // Regional adjustment - simulate different closure thresholds
  const regionalFactor = 1.0; // Could be adjusted based on location
  probability *= regionalFactor;
  
  // Cap probability at 100% and apply minimum thresholds
  probability = Math.min(100, Math.max(0, probability));
  
  // Apply realistic minimum thresholds
  if (data.snowfall < 0.5 && data.temperature > 0) {
    probability = Math.min(probability, 5);
  }
  
  if (data.snowfall < 1 && data.temperature > 2) {
    probability = 0;
  }
  
  // Ensure very heavy snow always has high probability
  if (data.snowfall >= 10) {
    probability = Math.max(probability, 85);
  }
  
  if (data.snowfall >= 15) {
    probability = Math.max(probability, 95);
  }
  
  return {
    probability: Math.round(probability * 10) / 10, // Round to 1 decimal place
    breakdown: {
      temperatureFactor: Math.round(temperatureFactor * 10) / 10,
      snowfallFactor: Math.round(snowfallFactor * 10) / 10,
      windFactor: Math.round(windFactor * 10) / 10,
      timingFactor: Math.round(timingFactor * 10) / 10,
      roadConditionsFactor: Math.round(roadConditionsFactor * 10) / 10,
      visibilityFactor: Math.round(visibilityFactor * 10) / 10,
      durationFactor: Math.round(durationFactor * 10) / 10
    }
  };
};
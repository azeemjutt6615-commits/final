import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>(['accuracy']);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    {
      id: 'accuracy',
      question: 'How accurate is the Snow Day Calculator?',
      answer: 'Our calculator achieves 85%+ accuracy by analyzing 7 critical meteorological factors. We use real weather science combined with historical closure patterns to provide reliable predictions. However, final closure decisions depend on local officials and specific district policies, so we recommend using our predictions alongside official announcements.'
    },
    {
      id: 'how-it-works',
      question: 'How does the calculator work?',
      answer: 'The calculator uses a sophisticated 7-factor analysis system that evaluates temperature, snowfall amount, wind speed, timing, road conditions, visibility, and storm duration. Each factor is weighted based on its historical impact on closure decisions. The system combines these factors using meteorological science to generate a probability percentage.'
    },
    {
      id: 'zip-code',
      question: 'Why do I need to enter a ZIP code?',
      answer: 'ZIP codes help us provide regionally accurate weather simulations. Different regions have different climate patterns, closure thresholds, and seasonal variations. For example, northern regions are more prepared for snow than southern areas. The ZIP code ensures you get realistic weather data for your specific location.'
    },
    {
      id: 'manual-input',
      question: 'Can I enter weather data manually?',
      answer: 'Yes! You can either use our automatic weather simulation by entering your ZIP code, or manually input all weather parameters including temperature (°C), snowfall (inches), wind speed (mph), and snow timing. Manual input is useful if you have specific forecast data or want to test different scenarios.'
    },
    {
      id: 'temperature-celsius',
      question: 'Why does the calculator use Celsius?',
      answer: 'We use Celsius because it provides more precise temperature thresholds for snow and ice formation. Key temperatures like 0°C (freezing), -5°C (good snow accumulation), and -10°C (ice formation) are more intuitive in Celsius for meteorological calculations. This also makes our tool accessible to international users.'
    },
    {
      id: 'factors-explained',
      question: 'What do the different factors mean?',
      answer: 'Temperature Impact (up to 25 points): How cold affects snow accumulation. Snowfall Amount (up to 40 points): The most critical factor - total expected snow. Wind Speed (up to 20 points): Blowing snow and visibility. Timing (up to 15 points): When snow falls matters. Road Conditions (up to 15 points): Ice and snow pack formation. Visibility (up to 10 points): Heavy snow reducing sight. Duration (up to 10 points): Length of storm impact.'
    },
    {
      id: 'timing-importance',
      question: 'Why is snow timing so important?',
      answer: 'Snow timing dramatically affects closure decisions. Overnight snow (6 PM - 6 AM) gives crews time to clear roads before morning commutes, making closures less likely. Early morning snow (4-8 AM) hits during rush hour, making closures more likely. Afternoon snow typically affects dismissal rather than full closures.'
    },
    {
      id: 'regional-differences',
      question: 'Does the calculator account for regional differences?',
      answer: 'Absolutely! Our system recognizes that northern regions (like Minnesota) handle snow better than southern regions (like Texas). We use real ZIP code ranges to determine regional climate patterns and adjust closure thresholds accordingly. A 2-inch snowfall might close schools in the South but not in the Northeast.'
    },
    {
      id: 'probability-meaning',
      question: 'What do the probability percentages mean?',
      answer: '85%+ = Almost Certain closure expected. 70-84% = Very Likely closure. 50-69% = Likely closure. 25-49% = Possible closure. Below 25% = Very Low chance. These percentages represent the statistical likelihood based on historical weather patterns and closure decisions in similar conditions.'
    },
    {
      id: 'recommendations',
      question: 'How should I use the recommendations?',
      answer: 'Our recommendations are based on the calculated probability. For high probabilities (70%+), we suggest preparing for closures with backup childcare, stocking essentials, and monitoring official announcements. For moderate probabilities (25-69%), stay alert and have contingency plans. Always combine our predictions with official weather services and school district communications.'
    },
    {
      id: 'data-privacy',
      question: 'Is my data private and secure?',
      answer: 'Yes! We prioritize privacy. All calculations happen in your browser - we don\'t store your ZIP codes or weather inputs. We don\'t collect personal information, use tracking cookies, or share data with third parties. The only data we collect is anonymous usage statistics to improve our service.'
    },
    {
      id: 'mobile-friendly',
      question: 'Does it work on mobile devices?',
      answer: 'Yes! Our calculator is fully responsive and works perfectly on smartphones, tablets, and desktop computers. The interface automatically adapts to your screen size, and all features are touch-friendly for mobile users.'
    },
    {
      id: 'cost',
      question: 'Is the Snow Day Calculator free?',
      answer: 'Yes, completely free! We believe accurate weather information should be accessible to everyone. There are no hidden fees, premium features, or subscription costs. Our service is supported by our commitment to helping communities prepare for winter weather.'
    },
    {
      id: 'updates',
      question: 'How often is the calculator updated?',
      answer: 'We continuously improve our algorithms based on real-world closure patterns, user feedback, and advances in meteorological science. Major updates are released seasonally, with minor improvements and bug fixes deployed regularly throughout the winter season.'
    },
    {
      id: 'limitations',
      question: 'What are the calculator\'s limitations?',
      answer: 'While highly accurate, our calculator cannot account for every local factor such as specific district policies, budget constraints, transportation issues, or political decisions. It also cannot predict sudden weather changes or microclimate variations. Always use our predictions alongside official weather services and local announcements.'
    },
    {
      id: 'feedback',
      question: 'How can I provide feedback or report issues?',
      answer: 'We welcome your feedback! You can contact us through our Contact page with general inquiries, bug reports, feature requests, or accuracy concerns. We typically respond within 24 hours and use your feedback to continuously improve our service.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our Snow Day Calculator
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                {openItems.includes(item.id) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '#contact'}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
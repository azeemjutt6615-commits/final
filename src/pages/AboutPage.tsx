import React from 'react';
import { Users, Target, Award, Snowflake } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn about our mission to provide accurate snow day predictions using advanced meteorological science
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              The Snow Day Calculator was born from a simple need: helping families, students, and professionals 
              make informed decisions about weather-related closures. What started as a basic weather analysis 
              tool has evolved into a sophisticated prediction system used by thousands of people across North America.
            </p>
            
            <p>
              Our team combines expertise in meteorology, data science, and software engineering to deliver 
              the most accurate snow day predictions available. We analyze multiple weather factors including 
              temperature, snowfall amounts, wind speed, timing, road conditions, visibility, and storm duration 
              to provide comprehensive closure probability assessments.
            </p>

            <p>
              We believe that accurate weather information should be accessible to everyone. That's why our 
              calculator is completely free to use and designed to work seamlessly across all devices, from 
              smartphones to desktop computers.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide accurate, reliable, and easy-to-understand snow day predictions that help communities 
              prepare for winter weather events and make informed decisions about safety and planning.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Accuracy, accessibility, and transparency guide everything we do. We're committed to using 
              scientific methods and real meteorological data to provide predictions you can trust.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Snowflake className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Commitment</h3>
            <p className="text-gray-600">
              We continuously improve our algorithms based on real-world weather patterns and user feedback 
              to ensure our predictions remain as accurate and helpful as possible.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Meteorological Science</h3>
              <p className="text-gray-600">
                Our algorithms are based on established meteorological principles and real-world weather 
                data analysis, ensuring scientific accuracy in our predictions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology Innovation</h3>
              <p className="text-gray-600">
                We leverage modern web technologies and data processing techniques to deliver fast, 
                reliable predictions through an intuitive user interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Shield, Eye, Lock, Database } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
        </div>

        {/* Privacy Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">No Personal Data</h3>
            <p className="text-sm text-gray-600">We don't collect or store personal information</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Secure Processing</h3>
            <p className="text-sm text-gray-600">All calculations happen in your browser</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">No Data Storage</h3>
            <p className="text-sm text-gray-600">Weather data is not saved or tracked</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <div className="prose text-gray-700 space-y-4">
              <p>
                The Snow Day Calculator is designed with privacy in mind. We collect minimal information 
                necessary to provide our service:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>ZIP Codes:</strong> Used only for weather simulation and not stored</li>
                <li><strong>Weather Parameters:</strong> Processed locally in your browser</li>
                <li><strong>Usage Analytics:</strong> Anonymous data about page visits (no personal identification)</li>
                <li><strong>Technical Data:</strong> Browser type and device information for optimization</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
            <div className="prose text-gray-700 space-y-4">
              <p>The limited information we collect is used exclusively to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Generate accurate weather simulations for your location</li>
                <li>Improve the accuracy of our prediction algorithms</li>
                <li>Optimize website performance and user experience</li>
                <li>Understand usage patterns to enhance our service</li>
              </ul>
              <p>
                <strong>We never:</strong> Sell your data, share personal information with third parties, 
                or use your information for advertising purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <div className="prose text-gray-700 space-y-4">
              <p>We implement several security measures to protect your privacy:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Client-Side Processing:</strong> All calculations happen in your browser</li>
                <li><strong>No Data Storage:</strong> Weather inputs are not saved to our servers</li>
                <li><strong>Secure Connections:</strong> All communications use HTTPS encryption</li>
                <li><strong>Anonymous Analytics:</strong> Usage data cannot be traced to individuals</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <div className="prose text-gray-700 space-y-4">
              <p>Our use of cookies and tracking technologies is minimal:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Anonymous usage statistics (can be disabled)</li>
                <li><strong>No Advertising Cookies:</strong> We don't use cookies for advertising</li>
                <li><strong>No Cross-Site Tracking:</strong> We don't track you across other websites</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <div className="prose text-gray-700 space-y-4">
              <p>We use minimal third-party services, all with strong privacy practices:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Hosting Provider:</strong> Secure cloud hosting with data protection</li>
                <li><strong>Analytics Service:</strong> Anonymous usage analytics only</li>
                <li><strong>No Social Media Tracking:</strong> No Facebook, Google, or other social pixels</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <div className="prose text-gray-700 space-y-4">
              <p>Since we collect minimal data, your rights are automatically protected:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Right to Privacy:</strong> No personal data collection by design</li>
                <li><strong>Right to Deletion:</strong> No stored data to delete</li>
                <li><strong>Right to Access:</strong> No personal data to access</li>
                <li><strong>Right to Opt-Out:</strong> Disable analytics in your browser settings</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <div className="prose text-gray-700 space-y-4">
              <p>
                Our service is safe for all ages. We don't knowingly collect personal information from 
                children under 13, and our privacy-first design ensures that no personal data is 
                collected from users of any age.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <div className="prose text-gray-700 space-y-4">
              <p>
                We may update this privacy policy occasionally to reflect changes in our practices or 
                legal requirements. Any changes will be posted on this page with an updated date. 
                Continued use of our service after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="prose text-gray-700 space-y-4">
              <p>
                If you have questions about this privacy policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Use our contact form for privacy inquiries</p>
                <p className="text-sm text-gray-600 mt-2">
                  We typically respond to privacy inquiries within 48 hours.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
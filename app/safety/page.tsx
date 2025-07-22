import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Shield, 
  Users, 
  MapPin, 
  MessageCircle,
  Eye,
  AlertTriangle,
  CheckCircle,
  Phone,
  Lock,
  UserCheck
} from 'lucide-react';

export default function Safety() {
  const safetyTips = [
    {
      icon: Users,
      title: 'Meet in Public Places',
      description: 'Always arrange to meet in well-lit, public locations like coffee shops, libraries, or community centers.',
      tips: [
        'Choose busy locations with good visibility',
        'Avoid meeting at private residences initially',
        'Consider meeting during daylight hours',
        'Bring a friend if you feel more comfortable'
      ]
    },
    {
      icon: UserCheck,
      title: 'Verify Identity',
      description: 'Take steps to confirm you\'re dealing with legitimate community members.',
      tips: [
        'Check user profiles and ratings before meeting',
        'Look for verified badges and positive reviews',
        'Ask for additional identification if needed',
        'Trust your instincts about people'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Communicate Clearly',
      description: 'Use our platform\'s messaging system to keep records of all communications.',
      tips: [
        'Keep all arrangements documented in messages',
        'Be specific about pickup/return times and locations',
        'Discuss item condition and expectations upfront',
        'Don\'t share personal contact info too quickly'
      ]
    },
    {
      icon: Eye,
      title: 'Inspect Items Carefully',
      description: 'Always examine borrowed items before taking them and document their condition.',
      tips: [
        'Take photos of items before borrowing',
        'Note any existing damage or wear',
        'Test functionality if applicable',
        'Agree on return condition expectations'
      ]
    }
  ];

  const redFlags = [
    'Requests to meet in isolated or private locations',
    'Pressure to complete transactions quickly',
    'Reluctance to provide identification or verification',
    'Requests for payment outside the platform',
    'Poor communication or evasive responses',
    'No profile information or reviews',
    'Items that seem too good to be true',
    'Requests for personal financial information'
  ];

  const emergencyContacts = [
    {
      title: 'Emergency Services',
      number: '911',
      description: 'For immediate danger or criminal activity'
    },
    {
      title: 'Non-Emergency Police',
      number: '(555) 123-4567',
      description: 'For suspicious activity or minor incidents'
    },
    {
      title: 'Lend-a-Hand Safety Team',
      number: '(555) 987-6543',
      description: 'For platform-related safety concerns'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">
              <Shield className="w-3 h-3 mr-1" />
              Safety First
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Community Safety
              <span className="text-green-600"> Guidelines</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your safety is our top priority. Follow these guidelines to ensure positive, 
              secure experiences when sharing resources with your neighbors.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Safety Tips</h2>
            <p className="text-xl text-gray-600">
              Follow these best practices for safe community sharing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyTips.map((tip, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{tip.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {tip.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tip.tips.map((tipItem, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{tipItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warning Signs to Watch For</h2>
            <p className="text-xl text-gray-600">
              Be cautious if you encounter any of these red flags
            </p>
          </div>

          <Card className="border-red-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="w-5 h-5" />
                Red Flags
              </CardTitle>
              <CardDescription>
                Trust your instincts. If something feels wrong, it probably is.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {redFlags.map((flag, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{flag}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Platform Safety Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Safety Features</h2>
            <p className="text-xl text-gray-600">
              We've built safety into every aspect of our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Verified Profiles</h3>
                <p className="text-gray-600">
                  All users go through identity verification to ensure authentic community members.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Messaging</h3>
                <p className="text-gray-600">
                  All communications are logged and monitored to maintain a safe environment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rating System</h3>
                <p className="text-gray-600">
                  Community ratings help identify trustworthy members and maintain quality standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Contacts</h2>
            <p className="text-xl text-gray-600">
              Important numbers to keep handy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <h3 className="font-semibold text-gray-900">{contact.title}</h3>
                  </div>
                  <div className="text-2xl font-bold text-red-600 mb-2">{contact.number}</div>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Report Safety Concerns
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            If you encounter any safety issues or suspicious behavior, please report it immediately. 
            We take all reports seriously and investigate promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Report an Issue
            </a>
            <a
              href="mailto:safety@lendahand.community"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Safety Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
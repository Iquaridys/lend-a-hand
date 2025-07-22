import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  FileText, 
  Users, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Scale,
  Globe,
  Calendar,
  Gavel,
  UserX,
  MessageCircle
} from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      icon: Users,
      title: 'Community Guidelines',
      content: [
        {
          subtitle: 'Respectful Behavior',
          items: [
            'Treat all community members with respect and kindness',
            'Use appropriate language in all communications',
            'Respect cultural differences and diverse perspectives',
            'No harassment, discrimination, or hate speech',
            'Resolve conflicts peacefully and constructively'
          ]
        },
        {
          subtitle: 'Honest Interactions',
          items: [
            'Provide accurate descriptions of items and services',
            'Be truthful about your skills and experience',
            'Honor your commitments and agreements',
            'Report any issues or problems promptly',
            'Give fair and honest reviews'
          ]
        },
        {
          subtitle: 'Safety First',
          items: [
            'Meet in public places for exchanges',
            'Verify identity before sharing personal information',
            'Report suspicious or unsafe behavior immediately',
            'Follow all local laws and regulations',
            'Use common sense and trust your instincts'
          ]
        }
      ]
    },
    {
      icon: FileText,
      title: 'Platform Usage',
      content: [
        {
          subtitle: 'Account Responsibilities',
          items: [
            'Provide accurate registration information',
            'Keep your account credentials secure',
            'You are responsible for all activity on your account',
            'Notify us immediately of any unauthorized access',
            'Maintain only one account per person'
          ]
        },
        {
          subtitle: 'Content Guidelines',
          items: [
            'Only post content you own or have permission to share',
            'No illegal, harmful, or inappropriate content',
            'Respect intellectual property rights',
            'Keep listings current and accurate',
            'Remove listings when items are no longer available'
          ]
        },
        {
          subtitle: 'Prohibited Activities',
          items: [
            'Commercial selling or business transactions',
            'Spam, scams, or fraudulent activities',
            'Sharing illegal items or services',
            'Attempting to bypass platform safety features',
            'Creating fake accounts or impersonating others'
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: 'Liability & Responsibility',
      content: [
        {
          subtitle: 'User Responsibility',
          items: [
            'You are responsible for your interactions with other users',
            'Inspect items carefully before borrowing',
            'Return items in the same condition you received them',
            'Resolve disputes directly with other community members',
            'Follow all applicable laws and regulations'
          ]
        },
        {
          subtitle: 'Platform Limitations',
          items: [
            'We facilitate connections but don\'t guarantee outcomes',
            'We are not responsible for the quality or safety of shared items',
            'Users interact at their own risk and discretion',
            'We don\'t mediate disputes between community members',
            'Service availability may vary and is not guaranteed'
          ]
        },
        {
          subtitle: 'Insurance & Damages',
          items: [
            'Users are responsible for their own insurance coverage',
            'We recommend checking your homeowner\'s or renter\'s insurance',
            'Report any damages or losses to the appropriate parties',
            'Consider the value and risk before sharing expensive items',
            'Document item condition before and after exchanges'
          ]
        }
      ]
    },
    {
      icon: Gavel,
      title: 'Enforcement & Violations',
      content: [
        {
          subtitle: 'Violation Consequences',
          items: [
            'Warning and education for minor violations',
            'Temporary suspension for repeated violations',
            'Permanent account termination for serious violations',
            'Removal of content that violates guidelines',
            'Reporting to authorities when legally required'
          ]
        },
        {
          subtitle: 'Appeal Process',
          items: [
            'You may appeal enforcement actions within 30 days',
            'Provide evidence and explanation for your appeal',
            'We will review appeals fairly and promptly',
            'Decisions are final after the appeal process',
            'Serious violations may not be eligible for appeal'
          ]
        }
      ]
    }
  ];

  const prohibitedItems = [
    'Weapons, firearms, or dangerous items',
    'Illegal drugs or controlled substances',
    'Stolen or counterfeit goods',
    'Items requiring special licenses or permits',
    'Hazardous materials or chemicals',
    'Personal identification documents',
    'Medical devices or prescription medications',
    'Items that violate intellectual property rights'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              <Scale className="w-3 h-3 mr-1" />
              Terms of Service
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Community
              <span className="text-purple-600"> Guidelines & Terms</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These terms help ensure our community remains safe, respectful, and beneficial 
              for all members. By using Lend-a-Hand, you agree to follow these guidelines.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Last updated: January 15, 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>Effective globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agreement Notice */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-blue-200 bg-blue-50">
            <CheckCircle className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>By using Lend-a-Hand, you agree to these terms.</strong> Please read them carefully. 
              If you don't agree with any part of these terms, please don\'t use our platform.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {section.content.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h4 className="font-semibold text-gray-900 mb-3">{subsection.subtitle}</h4>
                        <ul className="space-y-2">
                          {subsection.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Items */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prohibited Items</h2>
            <p className="text-xl text-gray-600">
              These items cannot be shared on our platform for safety and legal reasons
            </p>
          </div>

          <Card className="border-red-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="w-5 h-5" />
                Items Not Allowed
              </CardTitle>
              <CardDescription>
                Sharing these items may result in account suspension or termination.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prohibitedItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <UserX className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-gray-600" />
                Legal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Governing Law</h4>
                <p className="text-gray-700">
                  These terms are governed by the laws of the jurisdiction where Lend-a-Hand operates. 
                  Any disputes will be resolved through binding arbitration.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Changes to Terms</h4>
                <p className="text-gray-700">
                  We may update these terms from time to time. We'll notify users of significant changes 
                  via email or platform notifications. Continued use constitutes acceptance of new terms.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Severability</h4>
                <p className="text-gray-700">
                  If any part of these terms is found to be unenforceable, the remaining provisions 
                  will continue to be valid and enforceable.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                <p className="text-gray-700">
                  For questions about these terms, please contact our legal team at 
                  <a href="mailto:legal@lendahand.community" className="text-blue-600 hover:underline ml-1">
                    legal@lendahand.community
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help clarify any questions you have about our community guidelines 
            and terms of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="mailto:legal@lendahand.community"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Legal Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
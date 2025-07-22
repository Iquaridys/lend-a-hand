import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database,
  Cookie,
  Mail,
  UserCheck,
  Globe,
  Calendar,
  AlertCircle
} from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Account Information',
          items: [
            'Full name and email address',
            'Profile photo (optional)',
            'Location/neighborhood information',
            'Phone number (optional)',
            'Skills and interests you choose to share'
          ]
        },
        {
          subtitle: 'Usage Information',
          items: [
            'Messages sent through our platform',
            'Listings you create or interact with',
            'Reviews and ratings you give or receive',
            'Search queries and browsing activity',
            'Device information and IP address'
          ]
        },
        {
          subtitle: 'Community Activity',
          items: [
            'Items you list for sharing',
            'Borrowing and lending history',
            'Community interactions and feedback',
            'Safety reports and communications'
          ]
        }
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Platform Operations',
          items: [
            'Create and maintain your account',
            'Enable communication between community members',
            'Process and display your listings',
            'Facilitate safe exchanges and transactions',
            'Provide customer support and assistance'
          ]
        },
        {
          subtitle: 'Safety & Trust',
          items: [
            'Verify user identities and prevent fraud',
            'Monitor for suspicious or harmful activity',
            'Investigate safety reports and disputes',
            'Maintain community standards and guidelines'
          ]
        },
        {
          subtitle: 'Improvements',
          items: [
            'Analyze usage patterns to improve our service',
            'Develop new features and functionality',
            'Send important updates and notifications',
            'Conduct research to enhance user experience'
          ]
        }
      ]
    },
    {
      icon: UserCheck,
      title: 'Information Sharing',
      content: [
        {
          subtitle: 'Public Information',
          items: [
            'Your name, profile photo, and general location are visible to other users',
            'Listings you create are publicly viewable',
            'Reviews and ratings you receive are displayed on your profile',
            'Community activity may be visible to other members'
          ]
        },
        {
          subtitle: 'We Never Share',
          items: [
            'Your email address or phone number without permission',
            'Private messages between users',
            'Personal information with advertisers',
            'Data with third parties for marketing purposes'
          ]
        },
        {
          subtitle: 'Legal Requirements',
          items: [
            'We may disclose information if required by law',
            'To protect the safety of our users and community',
            'To investigate fraud or security issues',
            'In connection with legal proceedings'
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        {
          subtitle: 'Protection Measures',
          items: [
            'Industry-standard encryption for data transmission',
            'Secure servers with regular security updates',
            'Limited access to personal information by staff',
            'Regular security audits and monitoring',
            'Two-factor authentication options'
          ]
        },
        {
          subtitle: 'Your Responsibilities',
          items: [
            'Keep your password secure and confidential',
            'Log out of shared or public devices',
            'Report suspicious activity immediately',
            'Review your privacy settings regularly'
          ]
        }
      ]
    },
    {
      icon: Cookie,
      title: 'Cookies & Tracking',
      content: [
        {
          subtitle: 'Essential Cookies',
          items: [
            'Authentication and login functionality',
            'Security and fraud prevention',
            'Basic site functionality and navigation',
            'User preferences and settings'
          ]
        },
        {
          subtitle: 'Analytics Cookies',
          items: [
            'Understanding how users interact with our site',
            'Measuring performance and identifying issues',
            'Improving user experience and features',
            'You can opt out of analytics tracking'
          ]
        }
      ]
    }
  ];

  const rights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of all personal information we have about you'
    },
    {
      title: 'Correct Information',
      description: 'Update or correct any inaccurate personal information'
    },
    {
      title: 'Delete Your Account',
      description: 'Request deletion of your account and associated data'
    },
    {
      title: 'Data Portability',
      description: 'Export your data in a commonly used format'
    },
    {
      title: 'Restrict Processing',
      description: 'Limit how we use your personal information'
    },
    {
      title: 'Withdraw Consent',
      description: 'Opt out of optional data processing activities'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              <Shield className="w-3 h-3 mr-1" />
              Privacy Policy
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Your Privacy
              <span className="text-blue-600"> Matters to Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to protecting your privacy and being transparent about how we 
              collect, use, and protect your personal information.
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

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-blue-600" />
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
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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

      {/* Your Rights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-xl text-gray-600">
              You have control over your personal information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{right.title}</h3>
                  <p className="text-gray-600 text-sm">{right.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our privacy team is here to help you understand how we protect your information 
            and exercise your privacy rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Contact Privacy Team
            </a>
            <a
              href="mailto:privacy@lendahand.community"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
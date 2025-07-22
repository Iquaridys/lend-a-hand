import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Mail,
  Phone,
  Book,
  Users,
  Settings,
  Shield,
  Heart,
  ChevronRight,
  Video,
  FileText
} from 'lucide-react';

export default function Help() {
  const faqCategories = [
    {
      icon: Users,
      title: 'Getting Started',
      description: 'Learn the basics of using Lend-a-Hand',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      faqs: [
        {
          question: 'How do I create an account?',
          answer: 'Click "Join Community" in the top navigation, fill out the signup form with your email, password, and neighborhood information. You\'ll receive a verification email to activate your account.'
        },
        {
          question: 'How do I find items to borrow?',
          answer: 'Use the "Browse Listings" page to search for items by category, location, or keywords. You can filter results by distance, availability, and type of listing.'
        },
        {
          question: 'How do I list an item or skill?',
          answer: 'Go to your Dashboard and click "Add New Listing" or use the "+" button. Fill out the form with details about your item or skill, add photos, and set availability.'
        }
      ]
    },
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'How to connect with neighbors',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      faqs: [
        {
          question: 'How do I contact someone about their listing?',
          answer: 'Click "Contact Owner" on any listing to send a message. All communication happens through our secure messaging system to protect your privacy.'
        },
        {
          question: 'Can I call or text other users directly?',
          answer: 'We recommend using our messaging system initially. You can share phone numbers once you\'ve established trust with another community member.'
        },
        {
          question: 'What should I include in my first message?',
          answer: 'Be specific about what you need, when you need it, and how long you\'ll need to borrow the item. Introduce yourself and mention your neighborhood.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Safety & Trust',
      description: 'Staying safe in the community',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      faqs: [
        {
          question: 'How do I know if someone is trustworthy?',
          answer: 'Check their profile for verification badges, read reviews from other community members, and look at their rating. Start with smaller items to build trust.'
        },
        {
          question: 'Where should I meet to exchange items?',
          answer: 'Always meet in public places like coffee shops, libraries, or community centers. Avoid private residences until you\'ve built trust with the person.'
        },
        {
          question: 'What if something goes wrong?',
          answer: 'Contact our safety team immediately through the "Report an Issue" feature. We investigate all reports and take appropriate action to maintain community safety.'
        }
      ]
    },
    {
      icon: Settings,
      title: 'Account & Settings',
      description: 'Managing your profile and preferences',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      faqs: [
        {
          question: 'How do I update my profile information?',
          answer: 'Go to your Profile page and click "Edit Profile". You can update your name, bio, location, skills, and profile photo.'
        },
        {
          question: 'How do I change my notification settings?',
          answer: 'Visit your Profile page, go to the Settings tab, and configure your notification preferences for messages, requests, and community updates.'
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes, you can delete your account from the Settings page. Note that this action is permanent and will remove all your listings and message history.'
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: 'Mon-Fri, 9AM-6PM',
      action: 'Start Chat',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      color: 'bg-green-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with a team member',
      availability: 'Mon-Fri, 10AM-5PM',
      action: 'Call Now',
      color: 'bg-purple-500'
    }
  ];

  const resources = [
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step guides for common tasks',
      items: ['Creating your first listing', 'Safe meeting practices', 'Using the messaging system']
    },
    {
      icon: FileText,
      title: 'User Guides',
      description: 'Detailed documentation and best practices',
      items: ['Complete user manual', 'Safety guidelines', 'Community standards']
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and share tips',
      items: ['Ask questions', 'Share experiences', 'Get peer support']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              <HelpCircle className="w-3 h-3 mr-1" />
              Help Center
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How Can We
              <span className="text-purple-600"> Help You?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Find answers to common questions, learn how to use the platform, 
              and get support from our community team.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-purple-500"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Support</h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach our support team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{option.availability}</p>
                  <Button className="w-full">{option.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to the most common questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-lg">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-600">
              Explore more ways to learn and get help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Explore {resource.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our friendly support team is here to help you 
            make the most of your community sharing experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="mailto:help@lendahand.community"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
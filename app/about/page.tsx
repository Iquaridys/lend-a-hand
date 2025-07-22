import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  Target, 
  Award,
  Globe,
  Lightbulb,
  Shield,
  Handshake
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in the power of neighbors helping neighbors and building stronger local communities.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Handshake,
      title: 'Trust & Safety',
      description: 'Creating a secure environment where community members can share resources with confidence.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Reducing waste and environmental impact by promoting sharing over buying new items.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Using technology to make community sharing simple, accessible, and rewarding for everyone.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];

  const stats = [
    { value: '2,500+', label: 'Active Members' },
    { value: '15,000+', label: 'Items Shared' },
    { value: '50+', label: 'Neighborhoods' },
    { value: '4.9/5', label: 'Community Rating' },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Former community organizer passionate about building stronger neighborhoods through technology.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
    },
    {
      name: 'Mike Rodriguez',
      role: 'Head of Community',
      bio: 'Dedicated to creating safe, inclusive spaces where neighbors can connect and support each other.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
    },
    {
      name: 'Emma Johnson',
      role: 'Product Manager',
      bio: 'Focused on making the platform intuitive and accessible for community members of all ages.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              <Heart className="w-3 h-3 mr-1" />
              Our Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Building Stronger Communities,
              <span className="text-blue-600"> One Share at a Time</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lend-a-Hand was born from a simple belief: neighbors helping neighbors creates 
              stronger, more resilient communities. We're here to make sharing resources and 
              skills as easy as asking a friend.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're on a mission to revitalize the spirit of community by making it simple 
                for neighbors to share resources, exchange skills, and build meaningful connections. 
                In a world that often feels disconnected, we believe that local communities hold 
                the key to creating positive change.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our platform, we're not just facilitating transactions – we're fostering 
                relationships, reducing waste, and proving that when neighbors support each other, 
                everyone benefits.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="Community members helping each other"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we build our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 ${value.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Together, we're building something amazing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate people working to strengthen communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start building connections with your neighbors today. It's free, easy, and makes a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/auth/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Join the Community
            </a>
            <a
              href="/listings"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Listings
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
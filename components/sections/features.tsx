import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PenTool as Tools, Users, MessageCircle, Shield, MapPin, Star } from 'lucide-react';

const features = [
  {
    icon: Tools,
    title: 'Borrow & Lend Items',
    description: 'Access tools, equipment, and household items from neighbors instead of buying new ones.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Skill Sharing',
    description: 'Find local experts for repairs, lessons, and project help. Share your own expertise too.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: MessageCircle,
    title: 'Easy Communication',
    description: 'Built-in messaging system to coordinate pickups, ask questions, and build relationships.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Shield,
    title: 'Trusted Community',
    description: 'Verified profiles, ratings, and reviews ensure safe and reliable exchanges.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: MapPin,
    title: 'Hyperlocal Focus',
    description: 'Connect with neighbors within walking distance for convenience and community building.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Star,
    title: 'Reputation System',
    description: 'Build trust through ratings and reviews. Good neighbors are recognized and rewarded.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need for community sharing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform makes it easy to connect with neighbors, share resources, and build a stronger community together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, MessageCircle, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '2,500+',
    label: 'Active Members',
    color: 'text-blue-600',
  },
  {
    icon: Heart,
    value: '15,000+',
    label: 'Items Shared',
    color: 'text-red-600',
  },
  {
    icon: MessageCircle,
    value: '8.5k',
    label: 'Connections Made',
    color: 'text-green-600',
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Average Rating',
    color: 'text-yellow-600',
  },
];

export function CommunityStats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Growing stronger together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our community continues to grow, creating more opportunities for neighbors to connect and share resources.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('600', '100')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
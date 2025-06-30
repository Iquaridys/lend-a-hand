import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Star, TrendingUp } from 'lucide-react';

export function DashboardOverview() {
  const stats = [
    {
      title: 'Active Listings',
      value: '3',
      change: '+1 this week',
      icon: Heart,
      color: 'text-blue-600',
    },
    {
      title: 'Messages',
      value: '12',
      change: '4 unread',
      icon: MessageCircle,
      color: 'text-green-600',
    },
    {
      title: 'Rating',
      value: '4.9',
      change: 'From 23 reviews',
      icon: Star,
      color: 'text-yellow-600',
    },
    {
      title: 'Helped Neighbors',
      value: '47',
      change: '+3 this month',
      icon: TrendingUp,
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Community Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-gray-500 mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Active Listings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Electric Drill', status: 'Available', requests: 2 },
              { name: 'Ladder', status: 'Borrowed', requests: 0 },
              { name: 'Plumbing Help', status: 'Available', requests: 5 },
            ].map((listing, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{listing.name}</h4>
                  <Badge variant={listing.status === 'Available' ? 'default' : 'secondary'}>
                    {listing.status}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600">
                  {listing.requests > 0 ? `${listing.requests} requests` : 'No requests'}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
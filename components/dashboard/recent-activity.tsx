import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      type: 'request',
      user: 'Mike Johnson',
      userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      action: 'requested your',
      item: 'Electric Drill',
      time: '2 hours ago',
      status: 'pending',
    },
    {
      type: 'review',
      user: 'Emma Davis',
      userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      action: 'left a 5-star review for',
      item: 'Ladder',
      time: '1 day ago',
      status: 'completed',
    },
    {
      type: 'message',
      user: 'David Wilson',
      userAvatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      action: 'sent you a message about',
      item: 'Plumbing Help',
      time: '2 days ago',
      status: 'new',
    },
    {
      type: 'return',
      user: 'Lisa Chen',
      userAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      action: 'returned your',
      item: 'Garden Tools',
      time: '3 days ago',
      status: 'completed',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <Avatar className="h-10 w-10">
                <AvatarImage src={activity.userAvatar} alt={activity.user} />
                <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900">{activity.user}</span>
                  <Badge 
                    variant={
                      activity.status === 'pending' ? 'destructive' :
                      activity.status === 'new' ? 'default' : 'secondary'
                    }
                    className="text-xs"
                  >
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  {activity.action} <span className="font-medium">{activity.item}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
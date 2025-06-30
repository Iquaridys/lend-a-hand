import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star, Calendar, Edit, Shield } from 'lucide-react';

export function ProfileHeader() {
  return (
    <Card className="mb-8">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <Avatar className="h-32 w-32">
              <AvatarImage 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" 
                alt="Sarah Johnson" 
              />
              <AvatarFallback className="text-2xl">SJ</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">Sarah Johnson</h1>
                  <Badge className="bg-green-100 text-green-800">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Maple Street, Downtown</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Member since Jan 2023</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">4.9</span>
                    <span className="text-gray-600">(23 reviews)</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold text-gray-900">47</span> neighbors helped
                  </div>
                </div>

                <p className="text-gray-700 max-w-2xl">
                  Community-minded neighbor who loves sharing tools and helping with home projects. 
                  Professional carpenter with 10+ years experience. Always happy to lend a hand!
                </p>
              </div>

              <Button variant="outline" className="flex-shrink-0">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-6 border-t">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">15</div>
            <div className="text-sm text-gray-600">Active Listings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">32</div>
            <div className="text-sm text-gray-600">Items Borrowed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">89%</div>
            <div className="text-sm text-gray-600">Response Rate</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, Clock, MessageCircle, Edit, Trash2 } from 'lucide-react';

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('listings');

  const listings = [
    {
      id: 1,
      title: 'Professional Power Drill',
      category: 'Tools & Equipment',
      status: 'available',
      requests: 2,
      views: 45,
      image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1',
    },
    {
      id: 2,
      title: 'Extension Ladder',
      category: 'Tools & Equipment',
      status: 'borrowed',
      returnDate: 'March 15',
      views: 32,
      image: 'https://images.pexels.com/photos/5691623/pexels-photo-5691623.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1',
    },
    {
      id: 3,
      title: 'Carpentry Services',
      category: 'Skills & Services',
      status: 'available',
      requests: 5,
      views: 78,
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1',
    },
  ];

  const reviews = [
    {
      id: 1,
      reviewer: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 5,
      comment: 'Sarah was incredibly helpful! The drill was in perfect condition and she was very flexible with pickup times.',
      item: 'Professional Power Drill',
      date: '2 days ago',
    },
    {
      id: 2,
      reviewer: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 5,
      comment: 'Amazing carpentry work! Sarah helped me build custom shelves and the quality is outstanding.',
      item: 'Carpentry Services',
      date: '1 week ago',
    },
    {
      id: 3,
      reviewer: 'David Wilson',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 4,
      comment: 'Great communication and the ladder was exactly what I needed for my project.',
      item: 'Extension Ladder',
      date: '2 weeks ago',
    },
  ];

  const borrowHistory = [
    {
      id: 1,
      item: 'Circular Saw',
      owner: 'Tom Rodriguez',
      ownerAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      status: 'returned',
      borrowDate: 'Feb 28, 2024',
      returnDate: 'Mar 2, 2024',
      rating: 5,
    },
    {
      id: 2,
      item: 'Paint Sprayer',
      owner: 'Lisa Chen',
      ownerAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      status: 'active',
      borrowDate: 'Mar 10, 2024',
      returnDate: 'Mar 15, 2024',
    },
  ];

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="listings">My Listings</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="history">Borrow History</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="listings" className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">My Listings</h2>
          <Button>Add New Listing</Button>
        </div>

        <div className="grid gap-6">
          {listings.map((listing) => (
            <Card key={listing.id}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-24 h-18 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{listing.title}</h3>
                        <p className="text-gray-600">{listing.category}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span>{listing.views} views</span>
                          {listing.status === 'available' && listing.requests && (
                            <span>{listing.requests} requests</span>
                          )}
                          {listing.status === 'borrowed' && listing.returnDate && (
                            <span>Return by {listing.returnDate}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={listing.status === 'available' ? 'default' : 'secondary'}>
                          {listing.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="reviews" className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Reviews & Ratings</h2>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.9 average</span>
            <span className="text-gray-600">({reviews.length} reviews)</span>
          </div>
        </div>

        <div className="space-y-4">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src={review.avatar} alt={review.reviewer} />
                    <AvatarFallback>{review.reviewer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{review.reviewer}</h4>
                        <p className="text-sm text-gray-600">{review.item}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="history" className="space-y-6">
        <h2 className="text-2xl font-semibold">Borrowing History</h2>

        <div className="space-y-4">
          {borrowHistory.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={item.ownerAvatar} alt={item.owner} />
                      <AvatarFallback>{item.owner.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{item.item}</h4>
                      <p className="text-sm text-gray-600">from {item.owner}</p>
                      <p className="text-xs text-gray-500">
                        {item.borrowDate} - {item.returnDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={item.status === 'returned' ? 'secondary' : 'default'}>
                      {item.status}
                    </Badge>
                    {item.status === 'returned' && item.rating && (
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < item.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                    {item.status === 'active' && (
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="settings" className="space-y-6">
        <h2 className="text-2xl font-semibold">Account Settings</h2>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>New listing requests</span>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Message notifications</span>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Community updates</span>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Profile visibility</span>
                <Button variant="outline" size="sm">Public</Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Location sharing</span>
                <Button variant="outline" size="sm">Neighborhood only</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, MapPin, Clock, MessageCircle } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'Professional Power Drill',
    description: 'High-quality cordless drill perfect for home projects. Includes various bits and carrying case.',
    category: 'Tools & Equipment',
    type: 'item',
    available: true,
    distance: '0.2 miles',
    owner: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.9,
      reviews: 23,
    },
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    timeAgo: '2 hours ago',
  },
  {
    id: 2,
    title: 'Plumbing Repair Service',
    description: '15+ years experience in residential plumbing. Available for small repairs and installations.',
    category: 'Skills & Services',
    type: 'skill',
    available: true,
    distance: '0.5 miles',
    owner: {
      name: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 5.0,
      reviews: 41,
    },
    image: 'https://images.pexels.com/photos/8031923/pexels-photo-8031923.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    timeAgo: '5 hours ago',
  },
  {
    id: 3,
    title: 'Extension Ladder',
    description: '20ft aluminum extension ladder. Great for painting, cleaning gutters, or tree trimming.',
    category: 'Tools & Equipment',
    type: 'item',
    available: false,
    distance: '0.3 miles',
    returnDate: 'Available March 15',
    owner: {
      name: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.8,
      reviews: 15,
    },
    image: 'https://images.pexels.com/photos/5691623/pexels-photo-5691623.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    timeAgo: '1 day ago',
  },
  {
    id: 4,
    title: 'Garden Tool Set',
    description: 'Complete set of gardening tools including spades, rake, pruning shears, and watering can.',
    category: 'Home & Garden',
    type: 'item',
    available: true,
    distance: '0.7 miles',
    owner: {
      name: 'David Wilson',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.7,
      reviews: 12,
    },
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    timeAgo: '3 days ago',
  },
  {
    id: 5,
    title: 'Photography Lessons',
    description: 'Professional photographer offering beginner to intermediate photography lessons. Digital and film.',
    category: 'Skills & Services',
    type: 'skill',
    available: true,
    distance: '1.2 miles',
    owner: {
      name: 'Lisa Chen',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.9,
      reviews: 34,
    },
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    timeAgo: '1 week ago',
  },
  {
    id: 6,
    title: 'Pressure Washer',
    description: 'Electric pressure washer perfect for cleaning driveways, decks, and outdoor furniture.',
    category: 'Tools & Equipment',
    type: 'item',
    available: true,
    distance: '0.9 miles',
    owner: {
      name: 'Tom Rodriguez',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 4.6,
      reviews: 8,
    },
    image: 'https://images.pexels.com/photos/6419122/pexels-photo-6419122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    timeAgo: '4 days ago',
  },
];

export function ListingsGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {listings.length} results
        </p>
        <div className="text-sm text-gray-500">
          Last updated: 2 minutes ago
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listings.map((listing) => (
          <Card key={listing.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge 
                  variant={listing.available ? 'default' : 'secondary'}
                  className={listing.available ? 'bg-green-500' : ''}
                >
                  {listing.available ? 'Available' : 'Borrowed'}
                </Badge>
              </div>
              <div className="absolute top-3 left-3">
                <Badge variant="outline" className="bg-white/90">
                  {listing.category}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg text-gray-900 leading-tight">
                  {listing.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">
                {listing.description}
              </p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={listing.owner.avatar} alt={listing.owner.name} />
                    <AvatarFallback>{listing.owner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{listing.owner.name}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-600">
                        {listing.owner.rating} ({listing.owner.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{listing.distance}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{listing.timeAgo}</span>
                </div>
              </div>

              {!listing.available && listing.returnDate && (
                <div className="mb-4 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                  {listing.returnDate}
                </div>
              )}

              <Button 
                className="w-full" 
                disabled={!listing.available}
                variant={listing.available ? 'default' : 'secondary'}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {listing.available ? 'Contact Owner' : 'Not Available'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
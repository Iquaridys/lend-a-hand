import { MessageCircle, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function EmptyState() {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageCircle className="w-12 h-12 text-blue-600" />
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Start a conversation
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Connect with neighbors to borrow items, share skills, or just say hello. 
          Building community starts with a simple message.
        </p>

        <div className="space-y-4">
          <Link href="/listings">
            <Button className="w-full">
              <Users className="w-4 h-4 mr-2" />
              Browse Listings
            </Button>
          </Link>
          
          <Link href="/dashboard">
            <Button variant="outline" className="w-full">
              <Heart className="w-4 h-4 mr-2" />
              Share Something
            </Button>
          </Link>
        </div>

        <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2 text-green-800 mb-2">
            <Heart className="w-4 h-4" />
            <span className="font-medium text-sm">Community Tip</span>
          </div>
          <p className="text-sm text-green-700">
            Be friendly and specific when reaching out. Mention what you're looking for 
            and when you need it to get faster responses!
          </p>
        </div>
      </div>
    </div>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Search, MessageCircle, Users } from 'lucide-react';
import { useState } from 'react';
import { AddListingModal } from '@/components/listings/add-listing-modal';

export function QuickActions() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const actions = [
    {
      title: 'Add New Listing',
      description: 'Share an item or skill with your community',
      icon: Plus,
      color: 'bg-blue-500 hover:bg-blue-600',
      onClick: () => setIsAddModalOpen(true),
    },
    {
      title: 'Browse Listings',
      description: 'Find items and skills from neighbors',
      icon: Search,
      color: 'bg-green-500 hover:bg-green-600',
      onClick: () => window.location.href = '/listings',
    },
    {
      title: 'Check Messages',
      description: 'View conversations with neighbors',
      icon: MessageCircle,
      color: 'bg-purple-500 hover:bg-purple-600',
      onClick: () => window.location.href = '/messages',
    },
    {
      title: 'Community Events',
      description: 'Join local meetups and activities',
      icon: Users,
      color: 'bg-orange-500 hover:bg-orange-600',
      onClick: () => console.log('Community events coming soon!'),
    },
  ];

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start h-auto p-4 hover:shadow-md transition-shadow"
                onClick={action.onClick}
              >
                <div className={`p-2 rounded-lg ${action.color} mr-3`}>
                  <action.icon className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{action.title}</div>
                  <div className="text-sm text-gray-600">{action.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <AddListingModal 
        open={isAddModalOpen} 
        onOpenChange={setIsAddModalOpen} 
      />
    </>
  );
'use client';
}
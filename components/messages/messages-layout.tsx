'use client';

import { useState } from 'react';
import { ConversationList } from './conversation-list';
import { ChatWindow } from './chat-window';
import { EmptyState } from './empty-state';

export interface Conversation {
  id: string;
  participant: {
    id: string;
    name: string;
    avatar: string;
    online: boolean;
  };
  listing?: {
    id: string;
    title: string;
    image: string;
  };
  lastMessage: {
    content: string;
    timestamp: string;
    sender: string;
  };
  unreadCount: number;
}

export function MessagesLayout() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Mock conversations data
  const conversations: Conversation[] = [
    {
      id: '1',
      participant: {
        id: 'user1',
        name: 'Mike Johnson',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        online: true,
      },
      listing: {
        id: 'listing1',
        title: 'Professional Power Drill',
        image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      },
      lastMessage: {
        content: 'Hi! Is the drill still available for this weekend?',
        timestamp: '2 minutes ago',
        sender: 'user1',
      },
      unreadCount: 2,
    },
    {
      id: '2',
      participant: {
        id: 'user2',
        name: 'Emma Davis',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        online: false,
      },
      listing: {
        id: 'listing2',
        title: 'Carpentry Services',
        image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      },
      lastMessage: {
        content: 'Thank you so much for your help with the shelves!',
        timestamp: '1 hour ago',
        sender: 'user2',
      },
      unreadCount: 0,
    },
    {
      id: '3',
      participant: {
        id: 'user3',
        name: 'David Wilson',
        avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        online: true,
      },
      listing: {
        id: 'listing3',
        title: 'Extension Ladder',
        image: 'https://images.pexels.com/photos/5691623/pexels-photo-5691623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      },
      lastMessage: {
        content: 'Perfect! I can drop it off tomorrow morning.',
        timestamp: '3 hours ago',
        sender: 'current_user',
      },
      unreadCount: 0,
    },
    {
      id: '4',
      participant: {
        id: 'user4',
        name: 'Lisa Chen',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        online: false,
      },
      lastMessage: {
        content: 'Would you be interested in a skill exchange?',
        timestamp: '1 day ago',
        sender: 'user4',
      },
      unreadCount: 1,
    },
    {
      id: '5',
      participant: {
        id: 'user5',
        name: 'Tom Rodriguez',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        online: true,
      },
      listing: {
        id: 'listing4',
        title: 'Pressure Washer',
        image: 'https://images.pexels.com/photos/6419122/pexels-photo-6419122.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      },
      lastMessage: {
        content: 'The pressure washer worked great! Thanks again.',
        timestamp: '2 days ago',
        sender: 'user5',
      },
      unreadCount: 0,
    },
  ];

  const selectedConversationData = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
        <p className="mt-2 text-gray-600">Connect with your neighbors</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="flex h-full">
          {/* Conversation List */}
          <div className={`${selectedConversation && isMobileView ? 'hidden' : 'block'} w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 flex flex-col`}>
            <ConversationList
              conversations={conversations}
              selectedConversation={selectedConversation}
              onSelectConversation={(id) => {
                setSelectedConversation(id);
                setIsMobileView(true);
              }}
            />
          </div>

          {/* Chat Window */}
          <div className={`${!selectedConversation && isMobileView ? 'hidden' : 'block'} flex-1 flex flex-col`}>
            {selectedConversationData ? (
              <ChatWindow
                conversation={selectedConversationData}
                onBack={() => {
                  setSelectedConversation(null);
                  setIsMobileView(false);
                }}
              />
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
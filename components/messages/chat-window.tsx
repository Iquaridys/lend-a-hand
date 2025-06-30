'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Send, 
  Phone, 
  Video, 
  MoreVertical, 
  Paperclip,
  Smile,
  Info
} from 'lucide-react';
import { Conversation } from './messages-layout';

interface Message {
  id: string;
  content: string;
  sender: 'current_user' | 'other';
  timestamp: string;
  type: 'text' | 'image' | 'system';
}

interface ChatWindowProps {
  conversation: Conversation;
  onBack: () => void;
}

export function ChatWindow({ conversation, onBack }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock messages data
  const [messages] = useState<Message[]>([
    {
      id: '1',
      content: `Hi Sarah! I'm interested in borrowing your ${conversation.listing?.title || 'item'}. Is it still available?`,
      sender: 'other',
      timestamp: '10:30 AM',
      type: 'text',
    },
    {
      id: '2',
      content: 'Hi Mike! Yes, it\'s available. When would you need it?',
      sender: 'current_user',
      timestamp: '10:32 AM',
      type: 'text',
    },
    {
      id: '3',
      content: 'I was hoping to use it this weekend for a home project. Would Saturday work?',
      sender: 'other',
      timestamp: '10:35 AM',
      type: 'text',
    },
    {
      id: '4',
      content: 'Saturday works perfectly! You can pick it up anytime after 9 AM. I\'ll be home all day.',
      sender: 'current_user',
      timestamp: '10:37 AM',
      type: 'text',
    },
    {
      id: '5',
      content: 'Great! I\'ll come by around 10 AM if that\'s okay. Should I bring anything specific?',
      sender: 'other',
      timestamp: '10:40 AM',
      type: 'text',
    },
    {
      id: '6',
      content: 'Just bring your ID for verification. The drill comes with a full set of bits and the charger.',
      sender: 'current_user',
      timestamp: '10:42 AM',
      type: 'text',
    },
    {
      id: '7',
      content: 'Perfect! Thanks so much. I really appreciate neighbors like you who make the community stronger! 🙏',
      sender: 'other',
      timestamp: '2 minutes ago',
      type: 'text',
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="md:hidden"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={conversation.participant.avatar} alt={conversation.participant.name} />
                <AvatarFallback>
                  {conversation.participant.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {conversation.participant.online && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">{conversation.participant.name}</h2>
              <div className="flex items-center gap-2">
                <span className={`text-xs ${conversation.participant.online ? 'text-green-600' : 'text-gray-500'}`}>
                  {conversation.participant.online ? 'Online' : 'Last seen 2 hours ago'}
                </span>
                {isTyping && (
                  <span className="text-xs text-blue-600">typing...</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Info className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Listing Info */}
        {conversation.listing && (
          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3">
              <img
                src={conversation.listing.image}
                alt={conversation.listing.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">{conversation.listing.title}</h3>
                <p className="text-sm text-blue-600">View listing details</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'current_user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md ${message.sender === 'current_user' ? 'order-2' : 'order-1'}`}>
              <div
                className={`px-4 py-2 rounded-2xl ${
                  message.sender === 'current_user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-900 border border-gray-200'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              <p className={`text-xs text-gray-500 mt-1 ${
                message.sender === 'current_user' ? 'text-right' : 'text-left'
              }`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-end gap-2">
          <Button variant="ghost" size="sm">
            <Paperclip className="h-4 w-4" />
          </Button>
          
          <div className="flex-1 relative">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pr-10 resize-none"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Smile className="h-4 w-4" />
            </Button>
          </div>

          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <span>Press Enter to send, Shift + Enter for new line</span>
          <span>{newMessage.length}/1000</span>
        </div>
      </div>
    </div>
  );
}
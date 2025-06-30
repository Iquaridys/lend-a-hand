import { MessagesLayout } from '@/components/messages/messages-layout';
import { Navigation } from '@/components/navigation';

export default function Messages() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <MessagesLayout />
    </div>
  );
}
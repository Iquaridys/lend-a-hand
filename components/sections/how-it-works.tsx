import { Badge } from '@/components/ui/badge';
import { Search, MessageCircle, Handshake, Star } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse & Search',
    description: 'Find items to borrow or skills you need in your neighborhood',
    step: '01',
  },
  {
    icon: MessageCircle,
    title: 'Connect & Chat',
    description: 'Message neighbors to discuss details and arrange meetups',
    step: '02',
  },
  {
    icon: Handshake,
    title: 'Meet & Exchange',
    description: 'Meet your neighbor safely and complete the exchange',
    step: '03',
  },
  {
    icon: Star,
    title: 'Rate & Review',
    description: 'Leave feedback to help build trust in the community',
    step: '04',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">How it works</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple steps to start sharing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is easy. Follow these simple steps to begin building connections in your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full">
                  <div className="w-full h-0.5 bg-gray-200 transform translate-x-8">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-green-500"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
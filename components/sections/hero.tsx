'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Heart, Shield } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Heart className="w-3 h-3 mr-1" />
              Building stronger communities
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Share Skills,
                <span className="text-blue-600"> Borrow Tools</span>,
                <span className="text-green-600"> Build Community</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Connect with neighbors to share resources, exchange skills, and build meaningful relationships in your community. From power tools to plumbing help, find what you need right next door.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/listings">
                <Button size="lg" className="group">
                  Browse Listings
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg">
                  Share Something
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                <span>2,500+ active members</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Verified community</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-lg transform rotate-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Power Drill Available</h3>
                      <p className="text-sm text-gray-600">Sarah, 0.2 miles away</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">Professional grade drill, perfect for home projects</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-lg transform -rotate-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Plumbing Help</h3>
                      <p className="text-sm text-gray-600">Mike, 0.5 miles away</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">15 years experience, happy to help with repairs</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-lg transform rotate-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Ladder Rental</h3>
                      <p className="text-sm text-gray-600">Emma, 0.3 miles away</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">Extension ladder, great for outdoor projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
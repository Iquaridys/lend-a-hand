'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, MapPin, Filter } from 'lucide-react';
import { AddListingModal } from './add-listing-modal';

export function ListingsHeader() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Community Listings</h1>
            <p className="mt-2 text-gray-600 flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Showing results within 2 miles of your location
            </p>
          </div>
          <Button onClick={() => setIsAddModalOpen(true)} className="group">
            <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-200" />
            Add Listing
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search for items, skills, or services..."
              className="pl-10 h-12 text-lg"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 h-12">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Advanced Filters</span>
            <span className="sm:hidden">Filters</span>
          </Button>
        </div>
      </div>

      <AddListingModal 
        open={isAddModalOpen} 
        onOpenChange={setIsAddModalOpen} 
      />
    </>
  );
}
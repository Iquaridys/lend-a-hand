import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, MapPin } from 'lucide-react';

export function ListingsHeader() {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Community Listings</h1>
          <p className="mt-2 text-gray-600 flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Showing results within 2 miles of your location
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Listing
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search for items, skills, or services..."
          className="pl-10 h-12 text-lg"
        />
      </div>
    </div>
  );
}
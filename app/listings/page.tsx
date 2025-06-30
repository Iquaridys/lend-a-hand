import { ListingsHeader } from '@/components/listings/listings-header';
import { ListingsFilter } from '@/components/listings/listings-filter';
import { ListingsGrid } from '@/components/listings/listings-grid';
import { Navigation } from '@/components/navigation';

export default function Listings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ListingsHeader />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ListingsFilter />
          </div>
          <div className="lg:col-span-3">
            <ListingsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
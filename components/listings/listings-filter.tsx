import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { MapPin, Filter } from 'lucide-react';

export function ListingsFilter() {
  const categories = [
    { id: 'tools', label: 'Tools & Equipment', count: 45 },
    { id: 'home', label: 'Home & Garden', count: 32 },
    { id: 'skills', label: 'Skills & Services', count: 28 },
    { id: 'electronics', label: 'Electronics', count: 19 },
    { id: 'sports', label: 'Sports & Recreation', count: 15 },
    { id: 'automotive', label: 'Automotive', count: 12 },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-sm font-medium mb-3 block">Categories</Label>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={category.id} />
                    <Label htmlFor={category.id} className="text-sm">
                      {category.label}
                    </Label>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Distance (miles)
            </Label>
            <div className="px-2">
              <Slider
                defaultValue={[2]}
                max={10}
                min={0.5}
                step={0.5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0.5</span>
                <span>2 miles</span>
                <span>10</span>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block">Availability</Label>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="available" defaultChecked />
                <Label htmlFor="available" className="text-sm">Available now</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="upcoming" />
                <Label htmlFor="upcoming" className="text-sm">Available soon</Label>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block">Type</Label>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="items" defaultChecked />
                <Label htmlFor="items" className="text-sm">Items to borrow</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="skills" defaultChecked />
                <Label htmlFor="skills" className="text-sm">Skills & services</Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
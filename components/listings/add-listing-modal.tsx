'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, 
  X, 
  MapPin, 
  Calendar,
  DollarSign,
  Tag,
  Camera,
  FileText,
  Wrench,
  User
} from 'lucide-react';
import { toast } from 'sonner';

const listingSchema = z.object({
  type: z.enum(['item', 'skill']),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.string().min(1, 'Please select a category'),
  location: z.string().min(3, 'Location is required'),
  price: z.string().optional(),
  currency: z.string().default('USD'),
  availabilityStart: z.string().optional(),
  availabilityEnd: z.string().optional(),
  tags: z.array(z.string()).default([]),
  images: z.array(z.string()).default([]),
});

type ListingFormData = z.infer<typeof listingSchema>;

interface AddListingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories = [
  { id: 'tools', name: 'Tools & Equipment', icon: '🔧' },
  { id: 'home', name: 'Home & Garden', icon: '🏠' },
  { id: 'skills', name: 'Skills & Services', icon: '👨‍💼' },
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'sports', name: 'Sports & Recreation', icon: '⚽' },
  { id: 'automotive', name: 'Automotive', icon: '🚗' },
  { id: 'books', name: 'Books & Media', icon: '📚' },
  { id: 'children', name: 'Children & Baby', icon: '👶' },
];

export function AddListingModal({ open, onOpenChange }: AddListingModalProps) {
  const [currentTag, setCurrentTag] = useState('');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ListingFormData>({
    resolver: zodResolver(listingSchema),
    defaultValues: {
      type: 'item',
      title: '',
      description: '',
      category: '',
      location: '',
      price: '',
      currency: 'USD',
      availabilityStart: '',
      availabilityEnd: '',
      tags: [],
      images: [],
    },
  });

  const watchedType = form.watch('type');
  const watchedTags = form.watch('tags');

  const addTag = () => {
    if (currentTag.trim() && !watchedTags.includes(currentTag.trim())) {
      const newTags = [...watchedTags, currentTag.trim()];
      form.setValue('tags', newTags);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    const newTags = watchedTags.filter(tag => tag !== tagToRemove);
    form.setValue('tags', newTags);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // In a real app, you'd upload to a service like Uploadthing or Supabase Storage
      // For now, we'll simulate with placeholder URLs
      const newImages = Array.from(files).map((file, index) => 
        `https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1`
      );
      const updatedImages = [...uploadedImages, ...newImages].slice(0, 5); // Max 5 images
      setUploadedImages(updatedImages);
      form.setValue('images', updatedImages);
    }
  };

  const removeImage = (indexToRemove: number) => {
    const newImages = uploadedImages.filter((_, index) => index !== indexToRemove);
    setUploadedImages(newImages);
    form.setValue('images', newImages);
  };

  const onSubmit = async (data: ListingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend/Supabase
      console.log('Submitting listing:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success(`${data.type === 'item' ? 'Item' : 'Skill'} listing created successfully!`);
      onOpenChange(false);
      form.reset();
      setUploadedImages([]);
      
    } catch (error) {
      toast.error('Failed to create listing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              {watchedType === 'item' ? <Wrench className="w-4 h-4 text-blue-600" /> : <User className="w-4 h-4 text-blue-600" />}
            </div>
            Share with Your Community
          </DialogTitle>
          <DialogDescription>
            Add an item to lend or a skill to share with your neighbors. Building community starts with sharing!
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Type Selection */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are you sharing?</FormLabel>
                  <Tabs value={field.value} onValueChange={field.onChange} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="item" className="flex items-center gap-2">
                        <Wrench className="w-4 h-4" />
                        Item to Lend
                      </TabsTrigger>
                      <TabsTrigger value="skill" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Skill to Share
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {watchedType === 'item' ? 'Item Name' : 'Service Title'}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={watchedType === 'item' ? 'e.g., Professional Power Drill' : 'e.g., Plumbing Repair Services'} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            <div className="flex items-center gap-2">
                              <span>{category.icon}</span>
                              <span>{category.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={
                        watchedType === 'item' 
                          ? 'Describe the item, its condition, and any special instructions...'
                          : 'Describe your skills, experience, and what services you offer...'
                      }
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Be detailed and honest. This helps neighbors understand what you're offering.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Images */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Photos</label>
                <p className="text-sm text-gray-600">Add up to 5 photos to showcase your {watchedType}</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg border"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                
                {uploadedImages.length < 5 && (
                  <label className="w-full h-24 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-colors">
                    <Camera className="w-6 h-6 text-gray-400 mb-1" />
                    <span className="text-xs text-gray-500">Add Photo</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Location
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Downtown, Maple Street area" {...field} />
                    </FormControl>
                    <FormDescription>
                      General area or neighborhood (don't include exact address)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price (Optional) */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Price (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={watchedType === 'item' ? 'Free or daily rate' : 'Hourly rate or free'} 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Leave empty for free sharing, or set a fair price
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Availability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="availabilityStart"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Available From
                    </FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="availabilityEnd"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Until (Optional)</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Tags */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Tags
                </label>
                <p className="text-sm text-gray-600">Add keywords to help neighbors find your listing</p>
              </div>
              
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <Button type="button" onClick={addTag} variant="outline">
                  Add
                </Button>
              </div>

              {watchedTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {watchedTags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Community Guidelines */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h4 className="font-medium text-blue-900 mb-2">Community Guidelines</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Be honest about condition and availability</li>
                  <li>• Respond promptly to neighbor requests</li>
                  <li>• Meet in safe, public locations when possible</li>
                  <li>• Treat borrowed items with care and respect</li>
                </ul>
              </CardContent>
            </Card>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Creating...
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 mr-2" />
                    Create Listing
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
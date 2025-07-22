'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { 
  MessageSquare, 
  Send, 
  Star,
  Lightbulb,
  Bug,
  Heart,
  Zap,
  Users,
  ThumbsUp,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

const feedbackSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  email: z.string().email('Please enter a valid email address').optional(),
  type: z.enum(['feature', 'bug', 'improvement', 'compliment', 'other']),
  category: z.string().min(1, 'Please select a category'),
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

export default function Feedback() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: '',
      email: '',
      type: 'improvement',
      category: '',
      title: '',
      description: '',
      priority: 'medium',
    },
  });

  const feedbackTypes = [
    {
      value: 'feature',
      label: 'Feature Request',
      icon: Lightbulb,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      description: 'Suggest new features or functionality'
    },
    {
      value: 'bug',
      label: 'Bug Report',
      icon: Bug,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      description: 'Report issues or problems you\'ve encountered'
    },
    {
      value: 'improvement',
      label: 'Improvement',
      icon: Zap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Suggest ways to improve existing features'
    },
    {
      value: 'compliment',
      label: 'Compliment',
      icon: Heart,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Share what you love about the platform'
    },
    {
      value: 'other',
      label: 'Other',
      icon: MessageSquare,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'General feedback or suggestions'
    }
  ];

  const categories = [
    'User Interface/Design',
    'Messaging System',
    'Listings & Search',
    'Profile & Account',
    'Safety & Security',
    'Mobile Experience',
    'Community Features',
    'Performance',
    'Documentation',
    'Other'
  ];

  const recentFeedback = [
    {
      type: 'feature',
      title: 'Add calendar integration for scheduling',
      status: 'In Progress',
      votes: 23
    },
    {
      type: 'improvement',
      title: 'Better search filters for location',
      status: 'Completed',
      votes: 18
    },
    {
      type: 'bug',
      title: 'Fix notification timing issues',
      status: 'Fixed',
      votes: 12
    }
  ];

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      console.log('Feedback submission:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Thank you for your feedback! We\'ll review it and get back to you soon.');
      form.reset();
      
    } catch (error) {
      toast.error('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedType = feedbackTypes.find(type => type.value === form.watch('type'));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">
              <MessageSquare className="w-3 h-3 mr-1" />
              Community Feedback
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Help Us
              <span className="text-green-600"> Improve Together</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your feedback shapes our community platform. Share your ideas, report issues, 
              or tell us what you love about Lend-a-Hand.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className={`w-8 h-8 ${selectedType?.bgColor || 'bg-gray-100'} rounded-lg flex items-center justify-center`}>
                    {selectedType?.icon ? (
                      <selectedType.icon className={`w-4 h-4 ${selectedType.color}`} />
                    ) : (
                      <MessageSquare className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  Share Your Feedback
                </CardTitle>
                <CardDescription>
                  Help us build a better community platform for everyone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Anonymous Toggle */}
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <input
                        type="checkbox"
                        id="anonymous"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="anonymous" className="text-sm text-blue-800">
                        Submit feedback anonymously (we won't be able to follow up with you)
                      </label>
                    </div>

                    {/* Contact Information */}
                    {!isAnonymous && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormDescription>
                                We'll only use this to follow up on your feedback
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {/* Feedback Type */}
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feedback Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select feedback type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {feedbackTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  <div className="flex items-center gap-2">
                                    <type.icon className={`w-4 h-4 ${type.color}`} />
                                    <span>{type.label}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {selectedType && (
                            <FormDescription>
                              {selectedType.description}
                            </FormDescription>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Priority */}
                      <FormField
                        control={form.control}
                        name="priority"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Priority</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select priority" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="low">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    Low Priority
                                  </div>
                                </SelectItem>
                                <SelectItem value="medium">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    Medium Priority
                                  </div>
                                </SelectItem>
                                <SelectItem value="high">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    High Priority
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Title */}
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Brief summary of your feedback" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Description */}
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide detailed information about your feedback..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            The more details you provide, the better we can understand and address your feedback.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Submitting Feedback...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit Feedback
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Feedback Types */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  Feedback Types
                </CardTitle>
                <CardDescription>
                  Choose the type that best describes your feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feedbackTypes.map((type) => (
                    <div key={type.value} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`w-8 h-8 ${type.bgColor} rounded-lg flex items-center justify-center`}>
                        <type.icon className={`w-4 h-4 ${type.color}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{type.label}</h4>
                        <p className="text-xs text-gray-600">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Feedback */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Recent Community Feedback
                </CardTitle>
                <CardDescription>
                  See what others are suggesting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedback.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm leading-tight">{item.title}</h4>
                        <Badge 
                          variant={item.status === 'Completed' || item.status === 'Fixed' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{item.votes} votes</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Guidelines */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="h-5 w-5" />
                  Feedback Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    Be specific and detailed in your descriptions
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    Include steps to reproduce bugs
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    Suggest solutions when possible
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    Keep feedback constructive and respectful
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
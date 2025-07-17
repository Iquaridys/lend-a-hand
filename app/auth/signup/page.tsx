'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { 
  Heart, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  User,
  MapPin,
  Shield,
  Users,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';
import { signUp, signInWithProvider } from '@/lib/auth';

const signUpSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  confirmPassword: z.string(),
  location: z.string().min(3, 'Please enter your neighborhood or area'),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms and conditions'),
  agreeToPrivacy: z.boolean().refine(val => val === true, 'You must agree to the privacy policy'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      location: '',
      agreeToTerms: false,
      agreeToPrivacy: false,
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    
    try {
      await signUp(data.email, data.password, data.fullName, data.location);
      
      toast.success('Account created successfully! Please check your email to verify your account.');
      router.push('/auth/signin?message=Please check your email to verify your account');
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignUp = async (provider: string) => {
    setSocialLoading(provider);
    
    try {
      await signInWithProvider(provider as 'google' | 'facebook');
      
      toast.success(`Creating account with ${provider}...`);
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : `Failed to sign up with ${provider}. Please try again.`);
    } finally {
      setSocialLoading(null);
    }
  };

  const benefits = [
    'Access to 15,000+ shared items',
    'Connect with verified neighbors',
    'Save money on purchases',
    'Build community relationships',
    'Earn through skill sharing',
    'Secure & trusted platform'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Lend-a-Hand</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Already have an account?</span>
              <Link href="/auth/signin">
                <Button variant="outline">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left Side - Benefits */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-600 to-blue-600 p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 flex flex-col justify-center max-w-lg">
            <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 w-fit">
              <Users className="w-3 h-3 mr-1" />
              Join 2,500+ Community Members
            </Badge>
            
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Start building connections in your neighborhood
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Join a community where neighbors help neighbors. Share resources, exchange skills, and build lasting relationships.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-green-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Free to Join</div>
                  <div className="text-green-100">No membership fees, ever</div>
                </div>
              </div>
              <p className="text-green-100 text-sm">
                Start sharing and borrowing immediately after verification. Build your reputation and help strengthen your community.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Join Your Community
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Create your account and start connecting with neighbors
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Social Sign Up */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full h-12 text-gray-700 border-gray-300 hover:bg-gray-50"
                    onClick={() => handleSocialSignUp('Google')}
                    disabled={socialLoading === 'Google'}
                  >
                    {socialLoading === 'Google' ? (
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    )}
                    Continue with Google
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-12 text-gray-700 border-gray-300 hover:bg-gray-50"
                    onClick={() => handleSocialSignUp('Facebook')}
                    disabled={socialLoading === 'Facebook'}
                  >
                    {socialLoading === 'Facebook' ? (
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    Continue with Facebook
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or create account with email</span>
                  </div>
                </div>

                {/* Email Sign Up Form */}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                              <Input
                                placeholder="Enter your full name"
                                className="pl-10 h-12"
                                {...field}
                              />
                            </div>
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
                          <FormLabel className="text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                              <Input
                                placeholder="Enter your email"
                                className="pl-10 h-12"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Neighborhood</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                              <Input
                                placeholder="e.g., Downtown, Maple Street area"
                                className="pl-10 h-12"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                              <Input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Create a strong password"
                                className="pl-10 pr-10 h-12"
                                {...field}
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Confirm Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                              <Input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Confirm your password"
                                className="pl-10 pr-10 h-12"
                                {...field}
                              />
                              <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              >
                                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-3">
                      <FormField
                        control={form.control}
                        name="agreeToTerms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm text-gray-700">
                                I agree to the{' '}
                                <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                                  Terms of Service
                                </Link>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="agreeToPrivacy"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm text-gray-700">
                                I agree to the{' '}
                                <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                                  Privacy Policy
                                </Link>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-green-600 hover:bg-green-700"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Creating Account...
                        </>
                      ) : (
                        <>
                          Create Account
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/auth/signin" className="text-blue-600 hover:text-blue-500 font-medium">
                      Sign in here
                    </Link>
                  </p>
                </div>

                {/* Security Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-blue-800">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">Secure & Private</span>
                  </div>
                  <p className="text-xs text-blue-700 mt-1">
                    Your information is encrypted and never shared with third parties
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
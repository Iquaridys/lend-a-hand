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
  Shield,
  Users,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';
import { signIn, signInWithProvider } from '@/lib/auth';

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().default(false),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    
    try {
      await signIn(data.email, data.password);
      
      toast.success('Welcome back! Redirecting to your dashboard...');
      router.push('/dashboard');
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: string) => {
    setSocialLoading(provider);
    
    try {
      await signInWithProvider(provider as 'google' | 'facebook');
      
      toast.success(`Signing in with ${provider}...`);
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : `Failed to sign in with ${provider}. Please try again.`);
    } finally {
      setSocialLoading(null);
    }
  };

  const communityFeatures = [
    {
      icon: Users,
      title: 'Connect with 2,500+ neighbors',
      description: 'Join a thriving community of helpful neighbors'
    },
    {
      icon: Shield,
      title: 'Verified & trusted members',
      description: 'All members are verified for your safety'
    },
    {
      icon: Heart,
      title: 'Share & borrow with ease',
      description: 'Access thousands of items and skills nearby'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Lend-a-Hand</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Don't have an account?</span>
              <Link href="/auth/signup">
                <Button variant="outline">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left Side - Community Features */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-green-600 p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 flex flex-col justify-center max-w-lg">
            <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 w-fit">
              <CheckCircle className="w-3 h-3 mr-1" />
              Trusted Community Platform
            </Badge>
            
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Welcome back to your neighborhood community
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Continue building connections, sharing resources, and strengthening your local community.
            </p>

            <div className="space-y-6">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/10 rounded-xl border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-yellow-900 font-bold text-sm">★</span>
                </div>
                <div>
                  <div className="font-semibold">4.9/5 Community Rating</div>
                  <div className="text-blue-100 text-sm">From 1,200+ reviews</div>
                </div>
              </div>
              <p className="text-blue-100 text-sm italic">
                "This platform has transformed how our neighborhood helps each other. It's amazing!"
              </p>
              <p className="text-blue-200 text-xs mt-2">- Sarah M., Community Member</p>
            </div>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Welcome Back
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Sign in to continue helping your community
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Social Sign In */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full h-12 text-gray-700 border-gray-300 hover:bg-gray-50"
                    onClick={() => handleSocialSignIn('Google')}
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
                    onClick={() => handleSocialSignIn('Facebook')}
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
                    <span className="bg-white px-2 text-gray-500">Or continue with email</span>
                  </div>
                </div>

                {/* Email Sign In Form */}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                              <Input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
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

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="rememberMe"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          {...form.register('rememberMe')}
                        />
                        <label htmlFor="rememberMe" className="text-sm text-gray-600">
                          Remember me
                        </label>
                      </div>
                      <Link
                        href="/auth/forgot-password"
                        className="text-sm text-blue-600 hover:text-blue-500"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Signing In...
                        </>
                      ) : (
                        <>
                          Sign In
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/auth/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                      Sign up for free
                    </Link>
                  </p>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-green-800">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">Secure Sign In</span>
                  </div>
                  <p className="text-xs text-green-700 mt-1">
                    Your data is protected with enterprise-grade security
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Community Features */}
            <div className="lg:hidden mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                Join Our Community
              </h3>
              <div className="grid gap-4">
                {communityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-gray-600 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
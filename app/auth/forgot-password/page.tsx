'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  ArrowLeft,
  CheckCircle,
  Shield
} from 'lucide-react';
import { toast } from 'sonner';
import { resetPassword } from '@/lib/auth';

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    
    try {
      await resetPassword(data.email);
      
      setEmailSent(true);
      toast.success('Password reset email sent! Check your inbox.');
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Check Your Email
            </CardTitle>
            <CardDescription className="text-gray-600">
              We've sent password reset instructions to your email address
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  If you don't see the email in your inbox, please check your spam folder.
                  The reset link will expire in 24 hours.
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => setEmailSent(false)}
                  variant="outline"
                  className="w-full"
                >
                  Try Different Email
                </Button>
                
                <Link href="/auth/signin">
                  <Button className="w-full">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Sign In
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Need help?{' '}
                <Link href="/contact" className="text-blue-600 hover:text-blue-500">
                  Contact support
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            
            <Link href="/auth/signin">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Reset Your Password
            </CardTitle>
            <CardDescription className="text-gray-600">
              Enter your email address and we'll send you a link to reset your password
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
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
                            placeholder="Enter your email address"
                            className="pl-10 h-12"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending Reset Link...
                    </>
                  ) : (
                    <>
                      Send Reset Link
                      <Mail className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{' '}
                <Link href="/auth/signin" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-center gap-2 text-blue-800">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Security Notice</span>
              </div>
              <p className="text-xs text-blue-700 mt-1">
                For your security, password reset links expire after 24 hours
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
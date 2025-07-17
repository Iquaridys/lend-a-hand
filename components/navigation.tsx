'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu';
import { Menu, Heart, Search, MessageCircle, User, LogOut, Settings } from 'lucide-react';
import { useAuthContext } from '@/components/auth/auth-provider';
import { signOut } from '@/lib/auth';
import { toast } from 'sonner';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, profile, isAuthenticated, loading } = useAuthContext();
  const router = useRouter();

  const navItems = [
    { href: '/listings', label: 'Browse', icon: Search },
    { href: '/dashboard', label: 'Dashboard', icon: Heart },
    { href: '/messages', label: 'Messages', icon: MessageCircle },
    { href: '/profile', label: 'Profile', icon: User },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
      router.push('/');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Lend-a-Hand</span>
          </Link>

          {/* Desktop Navigation */}
          {isAuthenticated && <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>}

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage 
                        src={profile?.avatar_url || user?.user_metadata?.avatar_url} 
                        alt={profile?.full_name || user?.user_metadata?.full_name || 'Profile'} 
                      />
                      <AvatarFallback>
                        {(profile?.full_name || user?.user_metadata?.full_name || user?.email || 'U')
                          .split(' ')
                          .map(n => n[0])
                          .join('')
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{profile?.full_name || user?.user_metadata?.full_name}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/auth/signin">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link href="/auth/signup">
                  <Button>Join Community</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {isAuthenticated && navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors p-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  {isAuthenticated ? (
                    <>
                      <div className="flex items-center gap-3 p-2 mb-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage 
                            src={profile?.avatar_url || user?.user_metadata?.avatar_url} 
                            alt={profile?.full_name || user?.user_metadata?.full_name || 'Profile'} 
                          />
                          <AvatarFallback>
                            {(profile?.full_name || user?.user_metadata?.full_name || user?.email || 'U')
                              .split(' ')
                              .map(n => n[0])
                              .join('')
                              .toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{profile?.full_name || user?.user_metadata?.full_name}</p>
                          <p className="text-sm text-gray-600">{user?.email}</p>
                        </div>
                      </div>
                      <Button onClick={handleSignOut} variant="ghost" className="w-full justify-start">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/auth/signin">
                        <Button variant="ghost" className="w-full justify-start">
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/auth/signup">
                        <Button className="w-full justify-start mt-2">
                          Join Community
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
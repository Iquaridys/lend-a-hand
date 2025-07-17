import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';


// Database types
export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  location: string;
  bio?: string;
  skills: string[];
  rating: number;
  reviews_count: number;
  created_at: string;
  updated_at: string;
}

export interface Listing {
  id: string;
  user_id: string;
  title: string;
  description: string;
  category: string;
  type: 'item' | 'skill';
  status: 'available' | 'borrowed' | 'inactive';
  images: string[];
  location: string;
  price?: number;
  availability_start?: string;
  availability_end?: string;
  created_at: string;
  updated_at: string;
  user?: User;
}

export interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  read: boolean;
  created_at: string;
  sender?: User;
  receiver?: User;
}

export interface Review {
  id: string;
  reviewer_id: string;
  reviewee_id: string;
  listing_id: string;
  rating: number;
  comment: string;
  created_at: string;
  reviewer?: User;
  listing?: Listing;
}

export interface Transaction {
  id: string;
  listing_id: string;
  borrower_id: string;
  lender_id: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  start_date: string;
  end_date: string;
  actual_return_date?: string;
  created_at: string;
  updated_at: string;
  listing?: Listing;
  borrower?: User;
  lender?: User;
}
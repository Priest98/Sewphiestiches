-- SECURITY SETUP SCRIPT FOR SEWPHIE STITCHES
-- Run this in the Supabase SQL Editor (https://app.supabase.com)

-- 1. Create Tables

-- contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT,
  status TEXT DEFAULT 'new'
);

-- orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  customer_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  total_amount NUMERIC NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'pending'
);

-- order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  custom_measurements JSONB
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- 3. Create Policies for 'contact_inquiries'
CREATE POLICY "Allow anonymous inquiry insertion" 
ON contact_inquiries FOR INSERT 
WITH CHECK (true);

-- 4. Create Policies for 'orders'
-- Allow anyone to insert (anonymous checkout)
CREATE POLICY "Allow anonymous order insertion" 
ON orders FOR INSERT 
WITH CHECK (true);

-- 5. Create Policies for 'order_items'
CREATE POLICY "Allow anonymous order item insertion" 
ON order_items FOR INSERT 
WITH CHECK (true);

-- 6. Read Access (For Admins)
-- Note: Service role (used in Edge Functions) bypasses RLS automatically.
-- To view data in the Dashboard, you may need a SELECT policy for your authenticated user.
CREATE POLICY "Allow authenticated users to read inquiries" 
ON contact_inquiries FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated users to read orders" 
ON orders FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated users to read order items" 
ON order_items FOR SELECT 
TO authenticated 
USING (true);

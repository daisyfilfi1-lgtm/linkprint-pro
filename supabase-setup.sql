-- ============================================================
-- LinkPrint Pro — Supabase Database Setup
-- Run this SQL in Supabase Dashboard → SQL Editor
-- ============================================================

-- Table 1: Sample Kit Requests
CREATE TABLE IF NOT EXISTS sample_requests (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  country TEXT NOT NULL,
  address TEXT NOT NULL,
  scene TEXT[] DEFAULT '{}',
  volume TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table 2: Quote Requests
CREATE TABLE IF NOT EXISTS quote_requests (
  id BIGSERIAL PRIMARY KEY,
  scene TEXT NOT NULL,
  product_type TEXT NOT NULL,
  specs JSONB DEFAULT '{}',
  file_url TEXT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  country TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (recommended)
ALTER TABLE sample_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow insert for authenticated and anonymous users
CREATE POLICY "Allow inserts for sample_requests" 
  ON sample_requests 
  FOR INSERT 
  TO authenticated, anon
  WITH CHECK (true);

CREATE POLICY "Allow inserts for quote_requests" 
  ON quote_requests 
  FOR INSERT 
  TO authenticated, anon
  WITH CHECK (true);

-- Allow select for authenticated users only (admin dashboard)
CREATE POLICY "Allow select for authenticated users on sample_requests" 
  ON sample_requests 
  FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow select for authenticated users on quote_requests" 
  ON quote_requests 
  FOR SELECT 
  TO authenticated
  USING (true);

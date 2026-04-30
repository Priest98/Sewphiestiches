# Sewphie Stitches — Project Context & Architecture

This document serves as the "source of truth" for the current state of the Sewphie Stitches codebase, including architecture, security implementations, and pending tasks.

## 🏗️ Technical Stack
- **Frontend**: React + Vite + TypeScript + Tailwind CSS
- **Animations**: Framer Motion + Lenis (Smooth Scroll)
- **State Management**: Zustand (`src/store/useShopStore.ts`)
- **Backend**: Supabase (Database + Auth ready)
- **Payments**: Paystack (`react-paystack`)

## 🛠️ Recent Implementations

### 1. Catalog Consolidation
- Streamlined `MOCK_PRODUCTS` in `src/types/shop.ts` by merging redundant entries into unified, multi-view galleries for categories like Pre-Wedding, Reception, and Wedding Looks.

### 2. Security Remediation
- **Environment Variables**: Moved all sensitive keys (Supabase, Paystack) to `.env`.
- **Dependency Audit**: Corrected hallucinated package versions and resolved 16+ high-severity vulnerabilities.
- **Access Control**: Implemented Row Level Security (RLS) script `supabase_security_setup.sql`.

### 3. Contact Inquiry System
- **Database**: Form submissions from the Contact Page are stored in the `contact_inquiries` table in Supabase.
- **Security**: RLS policies ensure public insertion but restrict access to authenticated admins.

## 📂 Project Structure
- `src/lib/supabase.ts`: Supabase client initialization.
- `src/pages/Contact.tsx`: Interactive contact form using Supabase.
- `supabase_security_setup.sql`: SQL script for database schema and security policies.

## 🚀 Deployment Instructions
1. **Environment**: Ensure `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, and `VITE_PAYSTACK_PUBLIC_KEY` are set in your production environment.
2. **Database**: Run `supabase_security_setup.sql` in the Supabase SQL Editor.

## 📝 Pending Tasks
- [ ] Implement Supabase Auth if user accounts are required for the Lookbook.
- [ ] Connect "Enroll Now" buttons in `AcademyPage.tsx` to the inquiry system.

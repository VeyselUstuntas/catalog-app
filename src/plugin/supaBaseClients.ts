import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(import.meta.env.VITE_SUPA_BASE_URI, import.meta.env.VITE_SUPA_BASE_KEY!)

export default supabase;

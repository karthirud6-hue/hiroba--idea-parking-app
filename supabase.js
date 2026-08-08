import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://ulwudwmpaaweorowxeze.supabase.co"
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsd3Vkd21wYWF3ZW9yb3d4ZXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MjI4OTQsImV4cCI6MjA5Mzk5ODg5NH0.RsI4UIII-BpFkCzCqhY3Yxlml169bp4Z_54mFKIhWro"

export const supabase = createClient(supabaseUrl, supabaseKey)
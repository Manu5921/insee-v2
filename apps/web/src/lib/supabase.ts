import { createClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://supabasekong-zcc4coo08kkk0ok88o0840k0.89.117.61.193.sslip.io:8000'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

// Client pour le côté client (browser)
export const supabase = process.env.NEXT_PUBLIC_SUPABASE_URL 
  ? createBrowserClient(supabaseUrl, supabaseAnonKey)
  : null

// Client pour le côté serveur
export const createServerSupabaseClient = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return null
  }
  
  return createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  )
}
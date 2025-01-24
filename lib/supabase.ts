// File: lib/supabase.ts

import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';  // This imports our generated types

// Ensure environment variables are available
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL');
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

// Initialize the Supabase client with our generated types
export const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Optionally, create helper functions that use the typed client
// export async function getUser(userId: string) {
//     const { data, error } = await supabase
//         .from('users')
//         .select('*')
//         .eq('id', userId)
//         .single();
        
//     return { data, error };
// }
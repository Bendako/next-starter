import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL');
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Helper function to get user by clerkId
export async function getUserByClerkId(clerkId: string) {
    const { data, error } = await supabase
        .from('users')
        .select()
        .eq('clerkId', clerkId)
        .single();
        
    return { data, error };
}

// Helper function to create user
export async function createUser(
    userData: Pick<Database['public']['Tables']['users']['Insert'], 'clerkId' | 'email' | 'name'>
) {
    const { data, error } = await supabase
        .from('users')
        .insert(userData)
        .select()
        .single();

    return { data, error };
}

// Helper function to update user
export async function updateUser(
    clerkId: string,
    userData: Partial<Database['public']['Tables']['users']['Update']>
) {
    const { data, error } = await supabase
        .from('users')
        .update(userData)
        .eq('clerkId', clerkId)
        .select()
        .single();

    return { data, error };
}

// Helper function to delete user
export async function deleteUser(clerkId: string) {
    return await supabase
        .from('users')
        .delete()
        .eq('clerkId', clerkId);
}
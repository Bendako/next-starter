import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const { userId } = await auth();
  
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const  { data, error } = await supabase
    .from('users') // Specify the table name here
    .select('*');  // Select all columns from this table

    if (error) throw error;
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
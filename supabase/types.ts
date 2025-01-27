export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          clerkId: string
          name: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          clerkId: string
          name?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          clerkId?: string
          name?: string | null
        }
      }
    }
    Views: Record<string, unknown>
    Functions: Record<string, unknown>
    Enums: Record<string, unknown>
  }
}
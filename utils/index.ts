export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
  
  export function handleApiError(error: unknown): string {
    if (error instanceof Error) return error.message;
    return 'An unexpected error occurred';
  }
  
  export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
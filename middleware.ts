// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
// import { publicRoutes } from './publicRoutes';

// const isPublicRoute = createRouteMatcher(publicRoutes);

// export default clerkMiddleware((auth, req) => {
//   if (!isPublicRoute(req)) {
//     auth.protect();
//   }
// });

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define which routes are public
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/public(.*)'
])

export default clerkMiddleware(async (auth, request) => {
  // Protect all routes except public ones
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
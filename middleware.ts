import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { publicRoutes } from './publicRoutes';

const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth.protect();
  }
});
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webshook/clerk',
    '/api/webshook/stripe',
    '/api/uploadthing',
  ],
  ignoredRoutes: [
    '/api/webshook/clerk',
    '/api/webshook/stripe',
    '/api/uploadthing',
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 
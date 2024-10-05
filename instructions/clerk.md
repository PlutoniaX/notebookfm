Install @clerk/nextjs
The package to use with Clerk and NextJS.

npm
yarn
pnpm
terminal

npm install @clerk/nextjs
2
Set your environment variables
Add these keys to your .env.local or create the file if it doesn't exist. Retrieve these keys anytime from the API keys page.

.env.local


NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_xxxxxxxxxx
CLERK_SECRET_KEY=••••••••••••••••••••••••••••••••••••••••••••••••••
3
Update middleware.ts

Update your middleware file or create one at the root of your project or src/ directory if you're using a src/ directory structure.

The clerkMiddleware helper enables authentication and is where you'll configure your protected routes.

middleware.ts

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
4
Add ClerkProvider to your app

All Clerk hooks and components must be children of the ClerkProvider component.

You can control which content signed in and signed out users can see with Clerk's prebuilt components.

App Router
Pages Router
/src/app/layout.tsx

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
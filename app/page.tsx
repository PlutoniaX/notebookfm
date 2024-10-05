import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button'
import { Sidebar } from '@/components/Sidebar'
import dynamic from 'next/dynamic'

const PlaylistManager = dynamic(() => import('@/components/PlaylistManager').then(mod => mod.PlaylistManager), {
  ssr: false
})

export default function HomePage() {
  return (
    <>
      <SignedOut>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1 className="text-4xl font-bold mb-8">Welcome to NotebookFM</h1>
          <div className="space-x-4">
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="outline">Sign Up</Button>
            </SignUpButton>
          </div>
        </main>
      </SignedOut>
      
      <SignedIn>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 p-8">
            <PlaylistManager />
          </main>
        </div>
      </SignedIn>
    </>
  )
}

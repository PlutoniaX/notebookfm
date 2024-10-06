import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button'
import { Sidebar } from '@/components/Sidebar'

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
            <h1 className="text-3xl font-bold mb-6">Welcome to NotebookFM</h1>
            <p className="text-lg mb-4">
              Simplify your YouTube experience with NotebookFM - your personal video summarizer and podcast creator.
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>Save your favorite YouTube playlists</li>
              <li>Get AI-generated summaries for each video</li>
              <li>Receive daily briefings of new content</li>
              <li>Listen to personalized daily podcasts</li>
            </ul>
            <p className="text-sm text-gray-600">
              Start by adding a playlist or exploring your summaries in the sidebar.
            </p>
          </main>
        </div>
      </SignedIn>
    </>
  )
}

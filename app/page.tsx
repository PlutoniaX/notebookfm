import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button'

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to NotebookFM</h1>
      <div className="space-x-4">
        <SignInButton mode="modal" afterSignInUrl="/home">
          <Button>Sign In</Button>
        </SignInButton>
        <SignUpButton mode="modal" afterSignUpUrl="/home">
          <Button variant="outline">Sign Up</Button>
        </SignUpButton>
      </div>
    </main>
  )
}

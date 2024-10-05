import { UserButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const PlaylistManager = dynamic(() => import('@/components/PlaylistManager').then(mod => mod.PlaylistManager), {
  ssr: false
})

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">NotebookFM Dashboard</h1>
      <p className="mb-4">Welcome to your dashboard!</p>
      <PlaylistManager />
      <div className="flex items-center space-x-4 mt-8">
        <UserButton afterSignOutUrl="/" />
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </main>
  )
}
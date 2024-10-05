import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-6">
      <nav className="space-y-4">
        <Link href="/home" className="block font-semibold">Home</Link>
        <Link href="/summaries" className="block">Summaries</Link>
        <Link href="/briefings" className="block">Briefings</Link>
        <Link href="/playlists" className="block">Playlists</Link>
      </nav>
      <div className="mt-auto pt-6">
        <UserButton afterSignOutUrl="/" />
      </div>
    </aside>
  )
}
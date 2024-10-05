import dynamic from 'next/dynamic'
import { Sidebar } from '@/components/Sidebar'

const PlaylistManager = dynamic(() => import('@/components/PlaylistManager').then(mod => mod.PlaylistManager), {
  ssr: false
})

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <PlaylistManager />
      </main>
    </div>
  )
}
'use client';

import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        className={`block hover:bg-gray-200 p-2 rounded ${isActive ? 'font-bold' : ''}`}
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="bg-gray-100 w-64 p-4 h-screen flex flex-col">
      <Link href="/" className="text-2xl font-bold mb-4 hover:text-gray-700">
        NotebookFM
      </Link>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <NavLink href="/playlists">Playlists</NavLink>
          </li>
          <li>
            <NavLink href="/summaries">Summaries</NavLink>
          </li>
          <li>
            <NavLink href="/briefings">Briefings</NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
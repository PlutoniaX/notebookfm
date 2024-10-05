'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function PlaylistManager() {
  const [playlistUrl, setPlaylistUrl] = useState('');

  const handleAddPlaylist = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/playlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: playlistUrl }),
      });
      if (!response.ok) {
        throw new Error('Failed to add playlist');
      }
      const data = await response.json();
      console.log('Playlist added:', data);
      setPlaylistUrl('');
    } catch (error) {
      console.error('Error adding playlist:', error);
    }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Manage Playlists</h2>
      <form onSubmit={handleAddPlaylist} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter YouTube playlist URL"
          value={playlistUrl}
          onChange={(e) => setPlaylistUrl(e.target.value)}
        />
        <Button type="submit">Add Playlist</Button>
      </form>
      {/* TODO: Add list of current playlists */}
    </div>
  );
}
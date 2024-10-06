import React from 'react';
import { Sidebar } from '@/components/Sidebar'

const BriefingsPage = () => {
  return (
    <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-8">
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Briefings</h1>
                <div className="grid gap-4">
                    <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold">Briefing 1</h2>
                    <p>This is a placeholder for the first briefing.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold">Briefing 2</h2>
                    <p>This is a placeholder for the second briefing.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold">Briefing 3</h2>
                    <p>This is a placeholder for the third briefing.</p>
                    </div>
                </div>
            </div>
    </main>
    </div>
  );
};

export default BriefingsPage;
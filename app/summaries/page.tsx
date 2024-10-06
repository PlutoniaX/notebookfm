import React from 'react';
import { Sidebar } from '@/components/Sidebar'

const SummariesPage = () => {
  return (
    <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-8">
            <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Summaries</h1>
            <div className="grid gap-4">
                <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold">Summary 1</h2>
                <p>This is a placeholder for the first summary.</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold">Summary 2</h2>
                <p>This is a placeholder for the second summary.</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold">Summary 3</h2>
                <p>This is a placeholder for the third summary.</p>
                </div>
            </div>
            </div>
        </main>
    </div>
  );
};

export default SummariesPage;
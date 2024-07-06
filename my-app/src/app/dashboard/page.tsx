// src/app/dashboard/page.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // next/navigation is used instead of next/router in app directory
import { generateSlug } from '@/utils/generateSlug';
import { v4 as uuidv4 } from 'uuid';

export default function Dashboard() {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleCreateBoard = async () => {
    const slug = generateSlug(title);
    const newBoard = { id: uuidv4(), title, slug };

    // Save the new board to your database here

    router.push(`/${slug}`);
  };

  return (
    <>
<html data-theme="halloween">
<main>
    <section className="max-w-6xl mx-auto p-6 pb-0">
    <header className="flex justify-between gap-4 mb-8 md:mb-16"><a className="flex items-center gap-2" href="/"><p className="font-semibold text-2xl">Indie Page</p></a><div className="hidden md:inline-flex items-center gap-12 flex-1 px-16"><a className="link link-hover" href="/#pricing">Priser</a><a className="link link-hover" href="/#signup">FAQ</a></div><Link href="/logind"><button className="btn btn-m">Log ind</button></Link></header>
    <div>
      <h1>Create a new Board</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Board Title"
      />
      <button onClick={handleCreateBoard}>Create Board</button>
    </div>
    </section>
    </main>
    </html>
    </>
  );
}

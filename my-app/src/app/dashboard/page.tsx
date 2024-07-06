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
  );
}
